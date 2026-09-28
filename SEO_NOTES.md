# Search visibility and lead tracking

## Baseline: 8–21 September 2026

The Search Console export supplied on 23 September 2026 reports **7 clicks and 85 impressions** across all search queries, with an average position of 7.6. Every reported click landed on the homepage. Five clicks came from the business-name query, `county landscapes` (12 impressions). The non-brand query with the most impressions was `driveway concrete market harborough` (18 impressions, no clicks), but County Landscapes only confirmed driveway pressure washing, so the site does **not** claim concrete driveway installation. These are only two weeks of data from a new site; small position and CTR changes are not reliable trends yet.

## Changes in this release

- Nine pages for confirmed individual services, each with useful scope and quote details, direct phone and quote links, a specific form field, a canonical URL, structured Service data and sitemap entry.
- Twelve town pages for the main Leicestershire areas, with distinct service examples, nearby settlement context, postcode-based enquiries, canonical URLs and sitemap entries. There are no invented addresses or project claims.
- Crawlable links from the homepage, service hub, category pages, area hub and navigation. Existing `hedge-trimming.html` now points visitors and search engines to the dedicated hedge page.
- Mobile quote links stay on service and town pages so the selected job or town travels with the enquiry.

## Update: export supplied 28 September 2026

The newer export contains data through **25 September**, not 28 September. Its reporting period overlaps the earlier export.

| Metric | 8–21 September | 8–25 September | Added 22–25 September |
| --- | ---: | ---: | ---: |
| Clicks | 7 | 12 | 5 |
| Impressions | 85 | 124 | 39 |

Four of the five added clicks occurred on 22 September, before the service/town expansion was published on 23 September. The increase therefore cannot be attributed to that release. The new export still reports the homepage as the only page receiving impressions; the Performance report alone does not establish whether the new URLs are indexed. Use the Page indexing report or URL Inspection to check that separately.

The business-name query now has 7 clicks from 20 impressions. `driveway concrete market harborough` has 27 impressions and no clicks, but remains outside the confirmed installation services. A new relevant query, `lawn care services near me`, has one impression. That is too little evidence to justify changing the service offering or adding another page; the garden maintenance and turf pages already cover the confirmed lawn work.

The favicon/metadata audit deployed successfully on 27 September: a clear County monogram now has SVG, multi-size ICO and PNG variants including 96×96 for search, plus iOS/Android icons. Every indexable page has a unique title and description, a self-canonical URL and social image metadata. The branded 404 has root-based resources so nested missing URLs still render correctly. Live checks on 28 September found all 30 sitemap URLs returning 200 and the nested missing URL returning a styled, noindex 404.

## Monitor after publishing

1. In Google Search Console, check that `https://countylandscape.co.uk/sitemap.xml` is submitted, then inspect a new service URL and a town URL. Indexing and search appearance can take time and are controlled by Google.
2. Compare **non-brand clicks**, impressions and enquiries over full 28-day periods, not a few days. Keep calls and Formspree leads in the same simple log with the requested service and postcode.
3. Watch for queries that reflect work County actually offers. Do not add services solely because an unrelated query appears in impressions.
4. Replace the consented reference images with County's own job photos when available, with accurate descriptions and the client's permission. Genuine project photos and customer reviews will give the site stronger local evidence than another batch of near-identical pages.
5. Revisit the town list against the owner's actual working radius and remove or rewrite any page that does not reflect real coverage.

This site does not promise a particular ranking, number of calls or lead volume.
