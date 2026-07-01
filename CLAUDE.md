# 2026 UCON BBQ & Chili Cook-Off — Website

## Project overview
Static multi-page website for the 2026 UCON Annual BBQ & Chili Cook-Off (Aug 6, 2026, Alameda County Fairgrounds, Pleasanton CA). Built for ~1,200 attendees. Hosted on GitHub Pages. No build tool — plain HTML/CSS/JS.

## File structure
```
index.html          — Home (full-bleed video hero, countdown, feature cards)
about.html          — About the event (stats, story, agenda, photos)
tickets.html        — Ticket tiers + pricing
chili-cookoff.html  — Chili cook-off rules, teams, 2025 champions
sponsor.html        — Sponsorship tiers + logo wall
photos.html         — Photo gallery with lightbox
faq.html            — FAQ accordion, grouped by category
styles.css          — Shared stylesheet (all pages)
main.js             — Shared JS (countdown, nav scroll, hamburger, FAQ accordion, lightbox)
assets/             — Local assets (bbq-2026-logo.jpg)
```

## Design system
- Theme: "Sunlit Camp" — cream base, campfire red accent, forest green, script headlines
- CSS variables in `:root`: `--ember`, `--emberD`, `--sage`, `--sageD`, `--cream`, `--gold`, etc.
- Fonts: Zilla Slab (headings), Hanken Grotesk (body), Caveat (script accents) — loaded from Google Fonts
- Icons: Tabler Icons webfont (`ti ti-*`)
- Images/video: hosted on Cloudinary (`res.cloudinary.com/dhqtiaubo/`)
- No framework, no bundler — pure HTML/CSS/JS

## Before launch — things still needing replacement
1. **GA4 ID**: search `G-XXXXXXXXXX` → replace with real tracking ID
2. **Domain**: search `EVENT-DOMAIN.org` → replace with the actual domain
3. **Register buttons**: search `data-register` → link to UCON's registration system
4. **Sponsor logos**: `sponsor.html` → fill in `logo-slot` placeholders with real logos

## Deployment target
**GitHub Pages** — the repo root (or `/docs`) will serve the site. No build step needed.

## Pending work (priority order)
1. **GitHub Pages setup** — initialize git repo, push to GitHub, enable Pages
2. **Mobile improvements** — audit on small screens, fix any overflow/layout issues
3. **Registration form** — add a form (or embed) for attendee sign-up
4. **Photo gallery** — improve the photos page (more images, better layout, lightbox polish)
5. **Sponsor section** — add real sponsor logos and tier descriptions

## Coding conventions
- Keep all styles in `styles.css` — no `<style>` blocks in HTML files
- Keep all JS in `main.js` — no inline `<script>` blocks other than GA
- Use CSS variables for all colors — no hardcoded hex in new rules
- Mobile breakpoint: `768px` (hamburger nav, stacked layouts)
- Accessibility: maintain `aria-label`, `alt` text, `.sr-only`, skip link
- Do not add npm/node dependencies — keep it zero-build

## Key URLs
- Event: August 6, 2026, 4:30–8:00 PM PDT
- Venue: Alameda County Fairgrounds, Walnut Grove, Gate 8 — 4501 Pleasanton Ave, Pleasanton CA 94566
- Organizer: United Contractors (UCON) — unitedcontractors.org
- Contact: events@unitedcontractors.org / (925) 855-7900
