# Writing and publishing

The blog currently uses ordinary HTML files, with no CMS, JavaScript, package installation, or build step. The archive is `blog/index.html`, and posts live alongside it. All blog pages use the portfolio's shared navigation and CSS.

## Add a post today

1. Copy `blog/a-smaller-home-on-the-web.html` to a new file, such as `blog/my-next-post.html`. Keep the filename stable once published.
2. Update the document title, description, Open Graph title and description, article heading, visible date, and the `<time datetime="YYYY-MM-DD">` value. Replace the article body with your writing. Keep the blog navigation link marked `aria-current="location"` to identify the current section.
3. Add an entry to `blog/index.html`, newest first. Create a new year heading when needed. Link to the new filename and add its date and a short summary.
4. Update the latest-post entry on the homepage, `index.html`. Homepage post links start with `blog/`; links within the blog use just the post filename.
5. Add an `<item>` to `blog/feed.xml`, newest first, with a title, absolute link, stable `guid`, RFC 822 publication date, and short description. Escape XML characters such as `&` as `&amp;`. Keep the GUID unchanged when correcting a post.
6. Preview with `python3 -m http.server 8080 --bind 127.0.0.1`, check the article and links, then publish the changed static files using your host's normal workflow.

The RSS feed uses `https://godly.is-a.dev`, the website listed on the résumé. Change its channel, self, item, and GUID URLs before the first publication if the blog will live elsewhere. Once published, preserve existing item GUIDs so readers do not receive duplicate entries.

Use `<p>` for paragraphs, `<h2>` for article sections, `<ul>` or `<ol>` for lists, and `<pre><code>` for code. Add descriptive `alt` text to images. The blog stylesheet supports these elements, including narrow screens.

## Recommended FOSS option: Hugo

[Hugo](https://gohugo.io/about/features/) is a good next step if you want to write in Markdown and have the archive, RSS, and shared navigation generated automatically. It is [Apache 2.0 licensed](https://gohugo.io/about/license/).

Hugo runs at publishing time and produces ordinary HTML and CSS. This portfolio can keep its current appearance and avoid visitor JavaScript, React, and npm dependencies. It would add one build tool and a build step to the authoring workflow.

Adopting it would mean moving the current page shell into shared Hugo templates, turning blog posts into Markdown content with front matter, reusing these stylesheets, and publishing Hugo's generated output. With that setup, routine updates become: create a Markdown post, preview locally, then build and publish. Hugo has not been installed or configured here.

## Visual editor alternative: Publii

[Publii](https://getpublii.com/) is a free, GPL-3.0 desktop CMS with block, WYSIWYG, and Markdown editors. It generates static files and can publish them to a host.

This is useful if you prefer writing in a desktop app. It does not directly maintain these hand-written HTML files; preserving this exact design requires a small [custom Handlebars theme](https://getpublii.com/dev/theme-structure/). Exporting static files does not require adding a CMS server to the public site. Publii has not been installed or connected.

Start with the existing HTML workflow for occasional posts. Choose Hugo when Markdown and automatic archives become useful, or Publii if a visual editor is more important.
