import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import { entryPaths, getAllPages, siteUrl } from "../src/site.js";
import { readPosts } from "./blog.js";

// Exercise real generated artifacts, including old bookmarks and social metadata.
const posts = await readPosts(resolve("blog"));
const pages = getAllPages(posts);
let checked = 0;
for (const page of pages) {
  for (const path of entryPaths(page)) {
    const html = await readFile(resolve("dist", `.${path}`), "utf8");
    assert.ok(html.includes(`<title>${page.title}</title>`), `Title: ${path}`);
    const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
    const ogUrl = html.match(/<meta\s+property="og:url"\s+content="([^"]+)"/);
    assert.equal(
      canonical?.[1],
      `${siteUrl}${page.path}`,
      `Canonical: ${path}`,
    );
    assert.equal(
      ogUrl?.[1],
      `${siteUrl}${page.path}`,
      `Open Graph URL: ${path}`,
    );
    checked++;
  }
}
const sitemap = await readFile("dist/sitemap.xml", "utf8");
for (const page of pages)
  assert.ok(sitemap.includes(`<loc>${siteUrl}${page.path}</loc>`));
const feed = await readFile("dist/blog/feed.xml", "utf8");
assert.ok(feed.includes(`${siteUrl}/blog/building-a-document-assistant`));
assert.ok(!feed.includes("godly.is-a.dev"));
await access(resolve("dist", "favicon.svg"));

// Check what is actually shipped, including lazy-loaded articles and metadata.
const privateContent = /mailto:|tel:\+?\d|wa\.me\/|@(gmail|outlook|yahoo)\.com|linkedin\.com|portrait|resume\.pdf|Kottayam|Kerala|Kochi|Kallooppara|Puthuppally|icfoss|Thinkvyne|Coxdo|College of Engineering/i;
const outputFiles = await readdir("dist", { recursive: true, withFileTypes: true });
for (const file of outputFiles.filter((entry) => entry.isFile())) {
  const path = resolve(file.parentPath, file.name);
  assert.ok(!/\.(pdf|png|jpe?g|webp)$/i.test(file.name), `Removed download: ${path}`);
  assert.notEqual(file.name, ".DS_Store", `Private filesystem metadata: ${path}`);
  if (/\.(html|js|css|xml|txt)$/i.test(file.name)) {
    const content = await readFile(path, "utf8");
    assert.ok(!privateContent.test(content), `Private content in ${path}`);
  }
}
for (const route of ["resume", "contact", "education", "experience", "achievements", "skills", "open-source", "blog/icfoss-internship"]) {
  assert.ok(!sitemap.includes(`<loc>${siteUrl}/${route}</loc>`), `Retired sitemap URL: ${route}`);
  for (const suffix of [".html", "/index.html"]) {
    await assert.rejects(access(resolve("dist", `${route}${suffix}`)), { code: "ENOENT" });
  }
}
const notFound = await readFile("dist/404.html", "utf8");
assert.match(notFound, /name="robots" content="noindex"/);
console.log(
  `Verified ${checked} static entry documents, ${pages.length} sitemap URLs, RSS, and privacy checks across all build artifacts.`,
);
