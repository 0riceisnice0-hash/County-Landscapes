# County Landscapes

A responsive static website for GitHub Pages. Plain HTML, CSS and JavaScript; no runtime dependencies.

## Publish

The workflow in `.github/workflows/pages.yml` builds and deploys pushes to `main`. In repository **Settings → Pages**, select **GitHub Actions** as the source if Pages has not already been enabled. The expected address is https://0riceisnice0-hash.github.io/County-Landscapes/.

Run `npm run check` to check JavaScript syntax, local links, assets and anchors, and build `dist/`. Preview with `python -m http.server 4173 --directory dist`.

## Connect the enquiry form

1. Create the business's Formspree form and verify its recipient.
2. Replace `https://formspree.io/f/YOUR_FORM_ID` in `index.html` with that form's endpoint.
3. Review and update `privacy.html` to describe the enabled form and the business's actual data handling.
4. Test receipt of an enquiry before relying on the form.

The form is intentionally disabled until a real endpoint is configured. It never claims a placeholder submission succeeded. Telephone links already work. JavaScript automatically enables the form when the endpoint is replaced, handles loading, success and failure states, and preserves entries after a failed send.

## Content to confirm

- Service area: currently location-neutral; confirm towns/postcodes before adding local copy.
- Phone: 07526 024115, transcribed from the supplied van photograph.
- TikTok: @countylandscapes, transcribed from the van.
- Services: landscaping, tree surgery & felling, fencing, hedge trimming, pressure washing.
- No invented reviews, accreditations, trading history, insurance statements or job totals.

## Images

`assets/logo.png` is the logo supplied by the user, copied unchanged.

Temporary inspiration photographs are copied unchanged from the user's `0riceisnice0-hash/DeezGarden` repository:

| Local file | Original under `public/assets/images/projects-2026/` |
| --- | --- |
| garden.webp | landscaping-turf-paving-after.webp |
| patio.webp | porcelain-patio-path-after.webp |
| makeover.webp | small-garden-makeover-after.webp |

They are labelled as inspiration, not County Landscapes completed work. Replace with approved County photos and update alt text/captions when available. Do not copy Dee'z Gardens reviews or credentials into this site.
