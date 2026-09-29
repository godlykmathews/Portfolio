---
title: Writing in Markdown
date: 2026-09-29
summary: A sample post showing the Markdown supported by this blog.
tags: [markdown, website]
---

This is a **sample post**. It shows how to write a blog entry using ordinary
Markdown. You can replace this file with your own writing or use it as a template.

## Publication details

The block between `---` at the top contains the post's metadata:

- `title` is the title displayed on the page and in the archive.
- `date` is the published date in `YYYY-MM-DD` format. Posts appear newest first.
- `summary` is an optional short description for the archive and RSS feed.
- `tags` is an optional list of labels.

The filename becomes the URL: `writing-in-markdown.md` is available at
`/blog/writing-in-markdown`. Put new `.md` files directly in the `blog` folder;
there is no post list to update. Rebuild and deploy the site to publish them.

## Normal Markdown

Use **bold**, *italics*, ~~strikethrough~~, and `inline code`. Links work too:
[browse my projects](/projects) or [visit GitHub](https://github.com/godlykmathews).

### Lists

1. Create a new Markdown file.
2. Fill in the title and published date.
3. Write the post below the metadata.

- [x] Ordinary Markdown syntax
- [x] Automatic date ordering
- [ ] Replace this sample with a new post

### Code

```javascript
const message = 'Hello from the blog';
console.log(message);
```

> Blockquotes work without any special tags.

### Tables

| Syntax | Result |
| --- | --- |
| `## Heading` | A section heading |
| `**text**` | Bold text |
| `[text](url)` | A link |

### Images and HTML

For images, place a file in `public/assets/` and use normal Markdown:

```markdown
![A description of the image](/assets/example.jpg)
```

Basic HTML such as `<details>`, `<summary>`, and `<br>` also works:

<details>
<summary>A small extra note</summary>

Keep using standard Markdown for the rest of the post. No custom tags are needed.

</details>

---

`#` remains normal Markdown heading syntax. Publication dates belong in the
metadata block, rather than a custom `#date` line.
