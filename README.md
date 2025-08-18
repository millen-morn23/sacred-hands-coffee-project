# Sacred Hands Coffee
Coffee with a purpose — from sacred hands to yours.

## Quick Start
```bash
# Option 1: Open the HTML files directly (Tailwind CDN is used)
# Option 2: Use Vite for local dev
npm install
npm run dev
```

## Project Structure
```
/partials           # Reusable header & footer
/scripts            # Small JS utilities (HTML includes, etc.)
products.json       # Store products data
main.js             # Site interactions (menu, animations, products)
styles.css          # Custom styles (on top of Tailwind)
index.html          # Home
about.html          # Our Story
shop.html           # Products
projects.html       # Impact Projects
people.html         # People & Partners
journal.html        # Journal/Blog
contact.html        # Contact
```
## What Changed (Audit → Improvements)
- **Shared layout:** Header and footer moved to `/partials` and injected via `/scripts/include.js`.
- **Accessibility:** Added skip link, semantic landmarks, and `aria-current` on active nav.
- **Performance:** Deferred scripts, kept Tailwind on CDN for now.
- **Maintainability:** Single source of truth for navigation/footer across pages.
- **SEO:** Consistent metadata across pages (titles & descriptions already present).

## Development Notes
- If you later switch to a build pipeline, point Tailwind to scan `*.html`, `/partials/*.html`, and `/scripts/*.js` in the config.
- Keep product images under `/images` and use descriptive `alt` text.
