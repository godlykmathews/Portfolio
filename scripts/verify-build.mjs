import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
assert.ok(feed.includes(`${siteUrl}/blog/icfoss-internship`));
assert.ok(!feed.includes("godly.is-a.dev"));
for (const asset of [
  "favicon.svg",
  "assets/Godly_K_Mathews_Resume.pdf",
  "assets/godly-portrait.png",
  "assets/karyadhyaksha-voice.png",
  "assets/karyadhyaksha-chat.png",
]) {
  await access(resolve("dist", asset));
}
console.log(
  `Verified ${checked} static entry documents, ${pages.length} sitemap URLs, RSS, résumé, and local images.`,
);
