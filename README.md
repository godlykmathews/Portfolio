# Godly K Mathews

A minimal portfolio focused on software projects and technical notes.

[Portfolio](https://godlykmathews.tech) · [GitHub](https://github.com/godlykmathews)

## Run locally

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm test
npm run build
npm run check:build
```

Deploy `dist/` as a replacement for the previous static output. Remove stale files on the host so retired downloads and pages do not remain accessible. The build generates page entry documents, supported legacy `.html` entry points, metadata, RSS, and a sitemap.

## Content

- `src/projects.js`: six confirmed projects, with Karyadhyaksha first.
- `src/pages/Profile.jsx`: home, work, and a short professional introduction.
- `blog/*.md`: technical notes with YAML metadata, sanitized at build time.
- `src/site.js`: domain and active routes.

Keep personal images, direct contact information, location, education and employment history, and résumé downloads out of the public site. The build verification scans generated pages, bundles, and feeds for previously removed content and checks that retired assets and routes are absent.

## Stack

React, React Router, Vite, plain CSS, and self-hosted DM Sans. The blog uses Marked, YAML, and sanitize-html. No analytics, external font requests, or image services.

See [redesign notes](docs/REDESIGN.md) for the design and privacy scope.
