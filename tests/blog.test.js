import assert from 'node:assert/strict';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { parsePost, readPosts } from '../scripts/blog.js';

const markdown = (metadata = 'title: Example post\ndate: 2026-09-29', body = 'A short post.') => `---\n${metadata}\n---\n\n${body}\n`;

async function temporaryDirectory(t) {
  const directory = await mkdtemp(join(tmpdir(), 'portfolio-blog-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  return directory;
}

test('reads YAML metadata, trims labels, and keeps publication dates as strings', () => {
  const post = parsePost('example-post.md', markdown(`title: "  A post: with punctuation  "
date: 2026-09-29
summary: "  A short description.  "
tags: [" FOSS ", writing, FOSS]`));

  assert.equal(post.slug, 'example-post');
  assert.equal(post.title, 'A post: with punctuation');
  assert.equal(post.date, '2026-09-29');
  assert.equal(post.summary, 'A short description.');
  assert.deepEqual(post.tags, ['FOSS', 'writing']);
  assert.match(post.html, /<p>A short post\.<\/p>/);
});

test('summary and tags are optional; block-style YAML lists work', () => {
  const minimal = parsePost('minimal.md', markdown());
  assert.equal(minimal.summary, '');
  assert.deepEqual(minimal.tags, []);

  const tagged = parsePost('tagged.md', markdown('title: Tagged\ndate: "2026-09-29"\ntags:\n  - FOSS\n  - web'));
  assert.deepEqual(tagged.tags, ['FOSS', 'web']);
});

test('rejects invalid metadata with the source filename in the error', () => {
  const invalid = [
    ['# A heading without metadata', /metadata block/],
    [markdown('title: [broken\ndate: 2026-09-29'), /invalid metadata/],
    [markdown('- title\n- date'), /mapping/],
    [markdown('date: 2026-09-29'), /title/],
    [markdown('title: " "\ndate: 2026-09-29'), /title/],
    [markdown('title: Example'), /date/],
    [markdown('title: Example\ndate: 2026-09-29\nsummary: 42'), /summary/],
    [markdown('title: Example\ndate: 2026-09-29\ntags: FOSS'), /tags/],
    [markdown('title: Example\ndate: 2026-09-29\ntags: [FOSS, " "]'), /tags/],
    [markdown('title: Example\ndate: 2026-09-29\ntags: [42]'), /tags/],
    [markdown(undefined, '   '), /Markdown/],
  ];
  for (const [source, reason] of invalid) {
    assert.throws(() => parsePost('broken-post.md', source), (error) => {
      assert.match(error.message, /^broken-post\.md:/);
      assert.match(error.message, reason);
      return true;
    });
  }
});

test('accepts leap days and rejects malformed or nonexistent calendar dates', () => {
  assert.equal(parsePost('leap-day.md', markdown('title: Leap day\ndate: 2024-02-29')).date, '2024-02-29');
  for (const date of ['2026-02-29', '2026-02-30', '2026-04-31', '2026-00-12', '2026-13-01', '2026-09-00', '2026-9-2', '29-09-2026', '2026-09-29T12:00:00Z']) {
    assert.throws(() => parsePost('invalid-date.md', markdown(`title: Invalid date\ndate: "${date}"`)), /invalid-date\.md: date/);
  }
});

test('requires stable lowercase filenames and reserves the blog index', () => {
  for (const filename of ['index.md', 'My Post.md', 'Uppercase.md', 'under_score.md', 'two--hyphens.md']) {
    assert.throws(() => parsePost(filename, markdown()), /lowercase, hyphen-separated filename/);
  }
});

test('normal Markdown and GitHub-style tables, task lists, and details render', () => {
  const source = markdown(undefined, `# A heading

## A section

Some **bold**, *italic*, ~~deleted~~, and \`inline code\` with a [link](https://example.com).

- First item
- Second item

1. First step
2. Second step

> A quotation.

\`\`\`js
const answer = 42;
\`\`\`

| Name | Value |
| --- | --- |
| Answer | 42 |

- [x] Finished
- [ ] Next

<details>
<summary>More information</summary>
An explanation.
</details>`);
  const { html } = parsePost('markdown-example.md', source);
  for (const pattern of [
    /<h1>A heading<\/h1>/, /<h2>A section<\/h2>/,
    /<strong>bold<\/strong>/, /<em>italic<\/em>/, /<del>deleted<\/del>/,
    /<code>inline code<\/code>/, /<a href="https:\/\/example\.com">link<\/a>/,
    /<ul>/, /<ol>/, /<blockquote>/,
    /<pre><code class="language-js">const answer = 42;/,
    /<table>/, /<th>Name<\/th>/, /<td>42<\/td>/,
    /<details>/, /<summary>More information<\/summary>/,
  ]) assert.match(html, pattern);

  const inputs = html.match(/<input\b[^>]*>/g);
  assert.equal(inputs.length, 2);
  assert.ok(inputs.every((input) => input.includes('type="checkbox"') && input.includes('disabled')));
  assert.ok(inputs[0].includes('checked'));
  assert.ok(!inputs[1].includes('checked'));
});

test('BOM and Windows line endings do not change parsing or consume body content', () => {
  const body = '# Date examples\n\n```text\n#date: 2025-01-01\n---\n```\n\nThe body remains Markdown.';
  const normal = parsePost('line-endings.md', markdown(undefined, body));
  const windows = parsePost('line-endings.md', `\uFEFF${markdown(undefined, body).replace(/\n/g, '\r\n')}`);
  assert.deepEqual(windows, normal);
  assert.match(windows.html, /#date: 2025-01-01/);
  assert.match(windows.html, /---/);
});

test('sanitizes scripts, event handlers, unsafe URLs, and active HTML controls', () => {
  const { html } = parsePost('html-example.md', markdown(undefined, `<script>alert('script')</script>

<img src="https://example.com/photo.png" alt="A photo" onerror="alert('event')">

<a href="javascript:alert(1)" onclick="alert('event')">Unsafe</a>

[Also unsafe](javascript:alert%281%29)

<a href="https://example.com">Safe link</a>

<iframe src="https://example.com"></iframe>

<input type="text" value="editable" onfocus="alert('event')">

<details open><summary>Safe details</summary>Still readable.</details>`));
  assert.doesNotMatch(html, /<script|alert\('script'\)|onerror|onclick|onfocus|javascript:|<iframe|type="text"|value="editable"/i);
  assert.match(html, /<img src="https:\/\/example\.com\/photo\.png" alt="A photo"/);
  assert.match(html, /<a href="https:\/\/example\.com">Safe link<\/a>/);
  assert.match(html, /<details open/);
  assert.match(html, /<summary>Safe details<\/summary>/);
  assert.match(html, /<input type="checkbox" disabled/);
});

test('discovers only root Markdown files and sorts newest first with slug tie-breaks', async (t) => {
  const directory = await temporaryDirectory(t);
  await Promise.all([
    writeFile(join(directory, 'oldest.md'), markdown('title: Oldest\ndate: 2024-01-01')),
    writeFile(join(directory, 'zebra.md'), markdown('title: Zebra\ndate: 2026-09-29')),
    writeFile(join(directory, 'alpha.md'), markdown('title: Alpha\ndate: 2026-09-29')),
    writeFile(join(directory, 'notes.txt'), 'Not a post'),
    mkdir(join(directory, 'nested')),
  ]);
  await writeFile(join(directory, 'nested', 'ignored.md'), 'Not a root post');
  const posts = await readPosts(directory);
  assert.deepEqual(posts.map(({ slug }) => slug), ['alpha', 'zebra', 'oldest']);
});

test('empty or missing blog folders produce an empty archive', async (t) => {
  const directory = await temporaryDirectory(t);
  assert.deepEqual(await readPosts(directory), []);
  assert.deepEqual(await readPosts(join(directory, 'missing')), []);
});

test('an invalid file stops discovery with a useful filename error', async (t) => {
  const directory = await temporaryDirectory(t);
  await writeFile(join(directory, 'unfinished.md'), '# Missing metadata');
  await assert.rejects(readPosts(directory), /unfinished\.md: start with a YAML metadata block/);
});
