# Portfolio redesign — November 2026

## Goal

Make Godly's work easy to scan, with a distinct, restrained visual identity and accurate project attribution. Keep the existing React/Vite architecture, blog pipeline, résumé, and direct/legacy links.

## Research and decisions

Reviewed on 10 November 2026:

- [Brittany Chiang](https://brittanychiang.com/): clear role, experience, and selected-project descriptions. Adopt the emphasis on evidence and readable hierarchy, with an original layout and palette.
- [Emil Kowalski](https://emilkowal.ski/): focused project and writing indexes. Prefer concise navigation and purposeful interactions.
- [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/): keyboard access, focus visibility, contrast, reflow, and target size informed implementation. This is not a claim of complete WCAG conformance.

The visual system uses warm paper, dark ink, rust accents, Instrument Serif display type, and DM Sans body text. Numbered project entries, fine rules, real screenshots, and generous space establish hierarchy. Motion is limited to short hover transitions and smooth anchor scrolling; reduced-motion preferences disable both. No animation framework or third-party tracking was added.

## Content boundaries

The owner confirmed all six existing projects and requested Karyadhyaksha first. No project from unrelated chat history was added. Haajar is excluded. `we-care-pets-website` was reviewed as an optional candidate and is not included pending explicit confirmation.

Karyadhyaksha is identified as an internship prototype, with its remaining evaluation and production work stated. Team-project roles remain explicit. The old delivery impact numbers were omitted from the redesign because this review did not independently verify them. Other existing education, award, and employment information was retained; it was not independently fact-checked during this design task.

## Assets

- Portrait: the owner's public GitHub avatar, retrieved from `https://avatars.githubusercontent.com/u/97968185?v=4`.
- Karyadhyaksha screenshots: `screenshots/voice-assistant.png` and `screenshots/chat-interface.png` from [the project repository](https://github.com/godlykmathews/karyadhyaksha-rag-assistant), commit `01e781412bca11a562505e0198f2515e28c6e6c3`. Original bytes are retained; these are repository screenshots, not generated product mockups.
- Fonts: Fontsource Instrument Serif and DM Sans, OFL-1.1, installed at exact package versions.
- The existing résumé PDF is unchanged. It still contains the earlier `godly.is-a.dev` address; updating that document is outside this visual redesign.

## Validation

- `npm test`: 11 existing blog parsing/sanitization tests pass.
- `npm run build`: production build passes.
- `npm run check:build`: verifies all 21 generated entry documents, 12 sitemap URLs, canonical and Open Graph URLs, RSS, résumé, and local images.
- Browser checks cover navigation, route headings and metadata, project order, legacy URL query/hash preservation, lazy-loaded blog content, expandable screenshot evidence, résumé rendering, and copy-email success feedback.
- Responsive checks use a same-origin local iframe at 320px, 390px, and 768px. This tests layout reflow, not a physical phone or mobile browser engine. Home, about, and project screens fit without horizontal overflow. Menu opening, Escape dismissal, and closing after route changes work.
- The responsive test harness is local and excluded from Git; it is not part of the production build.

## Limits and next improvements

- No Lighthouse score, field Core Web Vitals, full assistive-technology audit, Safari/iOS run, or real-device performance result is claimed.
- Other projects would benefit from owner-approved screenshots and fuller case studies. Only Karyadhyaksha has visual evidence in this iteration.
- No PR, merge, or production deployment is performed before design approval. The feature branch is the review candidate.
