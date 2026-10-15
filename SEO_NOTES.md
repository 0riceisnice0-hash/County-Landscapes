# Search visibility and lead tracking

## Update: 15 October 2026

The 15 October Search Console export covers **8 September–13 October** and reports **38 clicks and 293 impressions**. The homepage received 37 clicks, the Leicester page one, and garden maintenance zero. This is an improvement on the 12 clicks and 139 impressions through 28 September, but it is still mainly branded/homepage traffic. The query `driveway concrete market harborough` has 54 impressions and no clicks; the business confirmed it only pressure-washes existing driveways, so we continue to avoid advertising concrete driveway installation.

On 15 October, Search Console showed **both submitted sitemaps successful** (30 page URLs and 28 image-page entries). The Page indexing report, last updated 12 October, showed **3 indexed pages, 27 “Discovered – currently not indexed” pages and one redirect**. The indexed pages were the homepage, Leicester and garden maintenance. Google's report lists no crawl date for the 27 discovered pages. This is a crawl/indexing bottleneck; it is not evidence that Google has evaluated and rejected their content. The live homepage, sitemap and sampled service pages return HTTP 200; HTTP and `www` redirect to the canonical HTTPS host. Breadcrumbs report: 3 valid, 0 invalid.

This release improves the clarity, linking and delivery of the existing pages. It adds verified Google Business Profile identity signals, expands the service hub with practical job-choice guidance, makes town metadata reflect the actual services linked on each page, introduces responsive WebP images and LCP preloading, and replaces ignored sitemap crawl hints with a significant-update date. It does **not** add speculative towns, services, reviews, addresses, project claims or rating markup. The Google Business Profile URL was resolved from the supplied Google share link.

Check Search Console again after Google has processed this release. Prioritise whether the service hub and the highest-intent service URLs move from “Discovered” to “Crawled” or “Indexed”. Repeated sitemap submissions cannot force indexing. The strongest next inputs from the business are genuine project photos and specific, consented job details; those can make the local pages more distinctive than template expansion alone.

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

## Update: export and Search Console check on 1 October 2026

The export supplied on 1 October contains data through **28 September**. It reports **12 clicks and 139 impressions** for 8–28 September. There were **zero clicks and 27 impressions from 24–28 September**. Compared with the preceding export (through 25 September), 26–28 September added 15 impressions and no clicks. All reported page impressions and clicks are still assigned to the homepage. The largest non-brand query, `driveway concrete market harborough`, has 31 impressions and no clicks; concrete driveway installation is not a confirmed service and should not be claimed. Search Console Web Search data does not measure calls or enquiries from the Google Business Profile or direct visits.

The verified `countylandscape.co.uk` domain property had **no submitted sitemaps** before this check. Its Page indexing summary showed one indexed page and one redirect URL, but the report's last update was **21 September**, before the new service and town pages were published. URL Inspection on 1 October showed the homepage indexed and last crawled on 25 September. Google's saved homepage HTML contained the `garden-maintenance.html` link. The new garden maintenance and Leicester pages were both **unknown to Google** in the indexed view; the maintenance page passed Google's live indexability test. Indexing was requested for both pages, and Search Console confirmed each was added to the priority crawl queue. A later inspection showed Googlebot had fetched the maintenance page on 1 October and changed its status to **“Crawled – currently not indexed”**. That confirms crawling but does not yet mean the page can appear in search. A homepage recrawl was also requested to pick up the later metadata and icon changes.

Both `https://countylandscape.co.uk/sitemap.xml` and `https://countylandscape.co.uk/image-sitemap.xml` were submitted to Search Console on 1 October. Immediately afterwards, the Sitemaps report showed **“Couldn't fetch”** and zero discovered pages for both. This is an unresolved processing status, not evidence of a malformed or blocked file: both URLs returned HTTP 200 with `application/xml`, parsed as valid XML (30 page entries and 28 image-page entries), and Google's live URL test fetched the page sitemap successfully with crawling allowed. Avoid repeatedly resubmitting unchanged files. Recheck the Sitemaps report after Google has processed them; if the failure persists, use the exact URL in URL Inspection and investigate Google's reported fetch details. Then check whether the new service and town pages become indexed and start receiving impressions. A sitemap or indexing request is a discovery aid, not a guarantee of indexing, ranking or leads.

## Monitor after publishing

1. In Google Search Console, recheck whether the submitted sitemaps have been processed, then inspect a new service URL and a town URL again. Indexing and search appearance can take time and are controlled by Google.
2. Compare **non-brand clicks**, impressions and enquiries over full 28-day periods, not a few days. Keep calls and Formspree leads in the same simple log with the requested service and postcode.
3. Watch for queries that reflect work County actually offers. Do not add services solely because an unrelated query appears in impressions.
4. Replace the consented reference images with County's own job photos when available, with accurate descriptions and the client's permission. Genuine project photos and customer reviews will give the site stronger local evidence than another batch of near-identical pages.
5. Revisit the town list against the owner's actual working radius and remove or rewrite any page that does not reflect real coverage.

This site does not promise a particular ranking, number of calls or lead volume.
