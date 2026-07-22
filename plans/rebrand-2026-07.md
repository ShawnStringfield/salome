# shawnstringfield.com — Rebrand (July 2026)

Date: 2026-07-22
Owner: Keys
Status: in progress

## Goal

Replace the live Next.js "Frontend Engineer" portfolio with a redesigned one-page Astro site that matches who Shawn is now: author of The AI Survival Kit, builder of quiet systems, selling The Setup by hand.

## Decisions (Shawn, in session 2026-07-22)

- Full redesign, not just content pass
- Direction: dark editorial `#0a0b12`, powder blue `#89b4d4` = Shawn's accent, gold `#e8a838` reserved for the Kit/Wellrooted CTA
- Setup contact: `mailto:hello@wellrooted.io` (already the public contact on wellrooted.io)
- The offer is named **The Setup** (decided 2026-07-22, Vision.md register)

## Content rules applied

- NEVER mention kids/daughter/fatherhood/family (cuts the March build's custody + daughter lines)
- No résumé numbers (cuts "Fortune 500s / millions")
- No tool recitals (cuts "OpenClaw + Claude", "Obsidian + pgvector")
- One hammer line per page
- Everyday-people framing; zero engineer posturing
- Soft "work with me" only — NO Setup funnel page, no price on site (sell-by-hand doctrine until first 3 paid)
- Kit CTA → https://wellrooted.io (gold)

## Page structure

Hero (avatar, name, tagline) → Story → Pull quote (hammer) → The Kit (gold card) → The Setup (blue card, mailto CTA) → Connect → Footer.
"Now" section dropped — it's what rotted last time; less to maintain.

## Design system compliance

Playfair 700 headlines / Inter body, 700px column, 11px letterspaced section labels,
32px powder-blue accent rule, top-line callout pattern on cards (no left borders),
flat (no gradients/shadows), radius ≤6px, no scroll animations (system rule: none unless interaction demands it).

## Deploy

1. git init (no repo existed), initial commit of March state on main, work on `feat/rebrand`
2. GitHub repo `ShawnStringfield/shawnstringfield-site` (same pattern as wellrooted-site)
3. Netlify: repoint the existing shawnstringfield.com site from the old Next.js repo to this repo
   (build `npm run build`, publish `dist`), netlify.toml added
4. Draft deploy preview → Shawn's nod → production
