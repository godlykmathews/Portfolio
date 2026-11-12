# Godly K Mathews

Personal portfolio of Godly K Mathews, a developer and Computer Science student from Kottayam, Kerala.

[Portfolio](https://godlykmathews.tech) · [GitHub](https://github.com/godlykmathews) · [LinkedIn](https://linkedin.com/in/godly-k-mathews) · [Email](mailto:work.godlykm@gmail.com)

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

Deploy the generated `dist/` directory to the existing static host. The build generates page entry documents, legacy `.html` entry points, route-specific metadata, an RSS feed, and a sitemap.

## Content

- `src/projects.js`: six owner-confirmed projects, with Karyadhyaksha first. Confirm ownership and individual contributions before adding projects.
- `src/pages/Details.jsx`: experience, skills, education, achievements, contact, and résumé.
- `blog/*.md`: blog posts with YAML metadata; HTML is parsed and sanitized at build time.
- `src/site.js`: canonical production domain and route registry.
- `public/assets/Godly_K_Mathews_Resume.pdf`: existing downloadable résumé.

## Stack

React, React Router, Vite, and plain CSS. Instrument Serif and DM Sans are self-hosted through Fontsource; the page does not request fonts from third-party CDNs. The blog uses Marked, YAML, and sanitize-html.

See [redesign notes](docs/REDESIGN.md) for design references, asset provenance, validation, and review limitations.
