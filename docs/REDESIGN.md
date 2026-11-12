# Minimal portfolio — November 2026

## Design

A narrow reading column, warm off-white background, muted green accent, self-hosted DM Sans, and fine separators. Navigation is limited to Work, Writing, and About. The home page introduces the work, highlights three projects, and links to a technical note. All six existing projects remain accessible, with optional contribution details.

No photographs, project screenshots, decorative image panels, contact pitches, résumé pages, or long biographical sections. Project roles remain accurately attributed in contribution descriptions.

## Privacy scope

Removed personal images, direct contact information, location references, education and employment history, awards, and the public résumé download. The former personal article is replaced with a technical project note. Public image and PDF files are removed from source rather than merely unlinked. Metadata, RSS, and sitemap generation use the reduced route registry.

The portfolio retains the display name, professional project descriptions, and public GitHub links. It does not anonymize the owner or alter external profiles. Git history is not rewritten.

## Verification

Run `npm test`, `npm run build`, and `npm run check:build`. The build check validates generated routes and metadata, scans every text artifact for removed personal details, and rejects retired downloads and route documents.

Keyboard focus, skip navigation, native disclosure controls, and reduced-motion preferences are supported. Check desktop and narrow viewport layouts before release.

Local validation: all 11 existing tests, the production build, and the build verification pass. Eight entry documents, five sitemap URLs, RSS, and all bundled text artifacts were checked. Desktop home and project views were visually inspected. Browser tooling stalled when switching to responsive emulation, so mobile visual checks and a full interaction audit remain unverified.

## Release

These are local repository changes. Deploy the complete new output to the existing host, removing previous artifacts and invalidating cached copies of retired files. Updating source alone does not remove previously deployed files, search-engine copies, or Git history.
