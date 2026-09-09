# County Landscapes

A responsive static website for GitHub Pages. Plain HTML, CSS and JavaScript; no runtime dependencies. Includes a homepage and four service category guides.

## Editing

`content.mjs` contains each service's copy, questions, checklist and enquiry guidance. `generate.mjs` holds shared document and contact markup. `lead-pages.mjs` holds the image-led homepage, service cards, service pages and Services dropdown. Dedicated services.html and contact.html pages are generated too. `styles.css` contains the responsive design. `script.js` handles mobile navigation, service selection and Formspree submission.

The build generates every HTML page, including privacy and the branded 404 page, plus `form-prompts.js`, the page and image sitemaps, `robots.txt`, and the installable-site manifest. Edit the source modules, not the generated files, then run `npm run check`.

The shared document generator provides the SEO architecture used across the site: canonical URLs, UK locale and crawl directives, large social cards, LocalBusiness/HomeAndConstructionBusiness identity, WebSite and WebPage entities, breadcrumb data, a service catalogue, per-category Service and FAQ entities, sitemap priorities, and a separate image sitemap. Business location data is deliberately omitted until the service towns or postcodes are confirmed.

## Publish

The workflow in `.github/workflows/pages.yml` builds and deploys pushes to `main`. The live address and canonical origin are https://countylandscape.co.uk/.

Run `npm run check` to check JavaScript syntax, enquiry behaviour, local links, assets and same-page/cross-page anchors, and build `dist/`. Preview with `python -m http.server 4173 --directory dist`.

## Connect the enquiry form

The enquiry form is connected to Formspree form `mjgnolow`. Its endpoint is stored in `generate.mjs`. Confirm the recipient in Formspree and test receipt of an enquiry before relying on the form.

JavaScript handles loading, success and failure states and preserves entries after a failed send. The form also retains a standard HTML action and method so it can submit without JavaScript.

## Content to confirm

- Service area: currently location-neutral; confirm towns/postcodes before adding local copy.
- Phone: 07526 024115, confirmed by the supplied van photograph and leaflet.
- Email: countylandscaping77@gmail.com, transcribed from the supplied leaflet.
- TikTok: @countylandscapes, transcribed from the van.
- Services: grouped into Gardens & landscaping, Fencing & boundaries, Trees & hedges and Outdoor cleaning, based on the supplied leaflet and owner messages. All leaflet services are listed on the category pages.
- No invented reviews, accreditations, trading history, insurance statements or job totals.

## Images

`assets/logo.png` is the logo supplied by the user, copied unchanged.

Photographs are copied from the user's `0riceisnice0-hash/DeezGarden` repository with permission:

| Local file | Original under `public/assets/images/projects-2026/` |
| --- | --- |
| garden.webp | landscaping-turf-paving-after.webp |
| patio.webp | porcelain-patio-path-after.webp |
| makeover.webp | small-garden-makeover-after.webp |

The live people-free selection is: `garden-landscaping.jpg` from `service-garden-renovations.jpg`; `fenced-garden.webp` from `projects-2026/gravel-paving-raised-beds-after.webp`; `garden-trees.jpg` from `contact-us.jpg`; and `patio-cleaning.jpg` from `jet-washing-3.jpg`. All source files are under `DeezGarden/public/assets/images` and were visually inspected before use.

