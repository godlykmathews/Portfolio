import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { getAllPages, entryPaths, siteUrl } from './src/site.js';
import { markdownBlog, readPosts } from './scripts/blog.js';

const blogDirectory = fileURLToPath(new URL('./blog', import.meta.url));

const escape = (value) => value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]);

function rss(posts) {
  const items = posts.map((post) => {
    const url = `${siteUrl}/blog/${post.slug}`;
    const categories = post.tags.map((tag) => `<category>${escape(tag)}</category>`).join('');
    return `<item><title>${escape(post.title)}</title><link>${url}</link><guid>${url}</guid><pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate><description>${escape(post.summary || post.title)}</description>${categories}</item>`;
  }).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>
<title>Godly K Mathews — Blog</title><link>${siteUrl}/blog</link>
<description>Notes and project updates by Godly K Mathews.</description><language>en</language>
<atom:link href="${siteUrl}/blog/feed.xml" rel="self" type="application/rss+xml" />
${items}
</channel></rss>`;
}

export default defineConfig({
  plugins: [
    react(),
    markdownBlog(blogDirectory),
    {
      name: 'static-pages-and-feed',
      configureServer(server) {
        server.middlewares.use(async (request, response, next) => {
          if (request.url?.split('?')[0] !== '/blog/feed.xml') return next();
          try {
            const posts = await readPosts(blogDirectory);
            response.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
            response.end(rss(posts));
          } catch (error) { next(error); }
        });
      },
      async writeBundle(options) {
        const posts = await readPosts(blogDirectory);
        const allPages = getAllPages(posts);
        const outDir = resolve(options.dir);
        const template = await readFile(resolve(outDir, 'index.html'), 'utf8');
        // Generate entry documents from one template so direct links and reloads
        // work on static hosts, without maintaining duplicate HTML in source.
        for (const page of allPages) {
          const html = template
            .replace(/<title>.*?<\/title>/, () => `<title>${escape(page.title)}</title>`)
            .replace(/(<meta (?:name="description"|property="og:description") content=")[^"]*/g, (_match, prefix) => `${prefix}${escape(page.description)}`)
            .replace(/(<meta property="og:title" content=")[^"]*/, (_match, prefix) => `${prefix}${escape(page.title)}`)
            .replace(/(<link rel="canonical" href=")[^"]*/, (_match, prefix) => `${prefix}${siteUrl}${page.path}`);
          for (const path of entryPaths(page)) {
            const output = resolve(outDir, `.${path}`);
            await mkdir(dirname(output), { recursive: true });
            await writeFile(output, html);
          }
        }
        await writeFile(resolve(outDir, '404.html'), template);
        await writeFile(resolve(outDir, 'blog/feed.xml'), rss(posts));
      },
    },
  ],
});
