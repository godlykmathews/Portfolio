import { readdir, readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';
import { marked } from 'marked';
import { parse as parseYaml } from 'yaml';
import sanitizeHtml from 'sanitize-html';

// Markdown is compiled and sanitized only in Node, never in the browser.
export function parsePost(filename, source) {
  const fail = (message) => { throw new Error(`${filename}: ${message}`); };
  const slug = basename(filename, '.md');
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug === 'index') {
    fail('use a lowercase, hyphen-separated filename other than index.md');
  }
  const normalized = source.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  const header = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!header) fail('start with a YAML metadata block containing title and date');
  let metadata;
  try { metadata = parseYaml(header[1]); } catch (error) { fail(`invalid metadata: ${error.message}`); }
  if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) fail('metadata must be a mapping');
  const { title, date, summary = '', tags = [] } = metadata;
  if (typeof title !== 'string' || !title.trim()) fail('title must be non-empty text');
  if (typeof date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(date)) fail('date must use YYYY-MM-DD');
  const timestamp = new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(timestamp.getTime()) || timestamp.toISOString().slice(0, 10) !== date) fail('date is not a valid calendar date');
  if (typeof summary !== 'string') fail('summary must be text');
  if (!Array.isArray(tags) || tags.some((tag) => typeof tag !== 'string' || !tag.trim())) fail('tags must be a list of non-empty text labels');
  const body = normalized.slice(header[0].length).trim();
  if (!body) fail('add some Markdown after the metadata block');

  const html = sanitizeHtml(marked.parse(body, { gfm: true }), {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, 'del', 'img', 'details', 'summary', 'input'],
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      '*': ['id'],
      code: ['class'],
      img: ['src', 'alt', 'title', 'width', 'height'],
      details: ['open'],
      input: ['type', 'checked', 'disabled'],
      th: ['align'],
      td: ['align'],
    },
    transformTags: {
      input: (_tag, attributes) => ({ tagName: 'input', attribs: { ...attributes, type: 'checkbox', disabled: '' } }),
    },
  });
  return { slug, title: title.trim(), date, summary: summary.trim(), tags: [...new Set(tags.map((tag) => tag.trim()))], html };
}

export async function readPosts(directory) {
  let entries;
  try { entries = await readdir(directory, { withFileTypes: true }); }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  const filenames = entries.filter((entry) => entry.isFile() && entry.name.endsWith('.md')).map((entry) => entry.name);
  const posts = await Promise.all(filenames.map(async (filename) => parsePost(filename, await readFile(join(directory, filename), 'utf8'))));
  return posts.sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug, 'en'));
}

const catalogId = 'virtual:blog-posts';
const postPrefix = 'virtual:blog-post/';

export function markdownBlog(directory) {
  return {
    name: 'markdown-blog',
    resolveId(id) {
      if (id === catalogId || id.startsWith(postPrefix)) return `\0${id}`;
    },
    async load(id) {
      if (id !== `\0${catalogId}` && !id.startsWith(`\0${postPrefix}`)) return;
      const posts = await readPosts(directory);
      for (const post of posts) this.addWatchFile(join(directory, `${post.slug}.md`));
      if (id === `\0${catalogId}`) {
        // Only metadata is in the main bundle; each body is fetched on demand.
        const entries = posts.map(({ html, ...post }) => `{...${JSON.stringify(post)},load:()=>import(${JSON.stringify(`${postPrefix}${post.slug}`)}).then(module=>module.default)}`);
        return `export const posts = [${entries.join(',')}];`;
      }
      const slug = id.slice(`\0${postPrefix}`.length);
      const post = posts.find((item) => item.slug === slug);
      if (!post) throw new Error(`Blog post not found: ${slug}`);
      return `export default ${JSON.stringify(post.html)};`;
    },
    configureServer(server) {
      server.watcher.add(directory);
      const refresh = (_event, file) => {
        if (!file.startsWith(`${directory}/`) || !file.endsWith('.md')) return;
        for (const module of server.moduleGraph.idToModuleMap.values()) {
          if (module.id?.startsWith('\0virtual:blog-')) server.moduleGraph.invalidateModule(module);
        }
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('all', refresh);
      server.httpServer?.once('close', () => server.watcher.off('all', refresh));
    },
  };
}
