# Godly K Mathews — Portfolio

A multipage portfolio and blog built with plain HTML and CSS. No JavaScript, package dependencies, or build step is required.

## Preview

Open `index.html` in a browser, or serve the repository locally:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Then visit `http://127.0.0.1:8080`.

## Pages and styling

- `index.html` — a short introduction, selected work, and latest writing.
- `about.html`, `experience.html`, `projects.html`, `skills.html` — background and work.
- `open-source.html`, `achievements.html`, `education.html`, `contact.html` — contributions, awards, learning, and contact details.
- `blog/index.html` — dated post archive; each post has its own HTML file.
- `blog/feed.xml` — RSS feed, using the résumé's website address, `https://godly.is-a.dev`.
- `resume/index.html` — PDF viewer and download page. Open the PDF to print it.
- `src/assets/Godly_K_Mathews_Resume.pdf` — original résumé, unchanged.
- `styles.css` — shared typography, navigation, and layout.
- `css/blog.css`, `css/resume.css` — page-specific styling.
- `css/responsive.css` — tablet, mobile, and print media queries; loaded last.

Every page contains its own navigation and marks the selected link with `aria-current="page"` (or `"location"` for the Blog section on individual posts). All local HTML links name a file explicitly, so they also work when opening files directly. Keep the navigation consistent across pages when adding a new section.

## Updating the blog

See [docs/BLOGGING.md](docs/BLOGGING.md) for the current no-build workflow and FOSS editor options. The included first post is a starter introduction to this redesign; edit it before publishing if you prefer different wording.

## Publish

Use a static host with the build command disabled and the output directory set to the repository root (`.`). No package installation or SPA fallback is needed. The HTML files, `styles.css`, `css/`, `blog/`, `resume/`, résumé PDF, and `robots.txt` are the public site; `README.md` and `docs/` are maintainer documentation.

If publishing under a different domain or a subdirectory, update the absolute URLs in `blog/feed.xml`. Preview the site locally before uploading. No deployment configuration or live site was changed by this redesign.
