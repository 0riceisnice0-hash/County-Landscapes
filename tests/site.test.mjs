import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { jobs } from '../job-pages.mjs';
import { towns } from '../town-pages.mjs';

const indexablePages = ['index.html', 'services.html', 'areas.html', 'contact.html', 'landscaping.html', 'fencing.html', 'tree-surgery.html', 'pressure-washing.html', ...jobs.map(job => `${job.slug}.html`), ...towns.map(town => `landscaper-${town.slug}.html`), 'privacy.html'];
const pages = [...indexablePages, 'hedge-trimming.html', '404.html'];
const origin = 'https://countylandscape.co.uk/';
const regexEscape = value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

test('every public page has complete metadata and one primary heading', async () => {
  for (const page of pages) {
    const html = await readFile(page, 'utf8');
    const description = html.match(/<meta name="description" content="([^"]*)">/)?.[1] || '';
    assert.match(html, /<html lang="en-GB">/, `${page} needs a language`);
    assert.match(html, /<meta name="viewport"/, `${page} needs a viewport`);
    assert.match(html, /<meta name="description" content="[^"].+">/, `${page} needs a description`);
    assert.ok(description.length <= 160, `${page} description should fit a search result`);
    assert.match(html, new RegExp(`<link rel="canonical" href="${regexEscape(origin)}`), `${page} needs the live canonical domain`);
    assert.match(html, /<meta property="og:locale" content="en_GB">/, `${page} needs UK social metadata`);
    assert.match(html, /<meta property="og:image" content="https:\/\/countylandscape\.co\.uk\/assets\//, `${page} needs an absolute social image`);
    assert.match(html, /<meta name="twitter:card" content="summary_large_image">/, `${page} needs a large social card`);
    assert.match(html, /<meta name="twitter:image:alt" content="[^"]+">/, `${page} needs social image alt text`);
    assert.match(html, /<link rel="manifest" href="site\.webmanifest">/, `${page} needs the web manifest`);
    assert.match(html, /<link rel="icon" type="image\/png" sizes="96x96" href="favicon-96x96\.png">/, `${page} needs a search-sized favicon`);
    assert.match(html, /<link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon\.png">/, `${page} needs an iOS icon`);
    assert.match(html, /"@type":"WebSite"/, `${page} needs WebSite schema`);
    assert.match(html, /"@type":"BreadcrumbList"/, `${page} needs breadcrumb schema`);
    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)) {
      assert.doesNotThrow(() => JSON.parse(json), `${page} has invalid JSON-LD`);
    }
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${page} needs exactly one h1`);
    assert.doesNotMatch(html, /0riceisnice0-hash\.github\.io/, `${page} still references the old origin`);
  }
});

test('404 page offers recovery routes and stays out of search results', async () => {
  const html = await readFile('404.html', 'utf8');
  assert.match(html, /<meta name="robots" content="noindex,follow">/);
  assert.match(html, /<base href="https:\/\/countylandscape\.co\.uk\/">/, 'nested missing URLs must resolve assets and links from the site root');
  assert.match(html, /class="skip" href="404\.html#main"/, 'skip link should remain on the 404 page');
  assert.match(html, /href="404\.html#main">Back to top/, 'footer anchor should remain on the 404 page');
  assert.match(html, /href="\.\/">Go to the homepage/);
  assert.match(html, /href="contact\.html#contact">Get a free quote/);
  assert.match(html, /href="tel:\+447526024115">Call 07526 024115/);
  for (const route of ['landscaping.html', 'fencing.html', 'tree-surgery.html', 'pressure-washing.html']) {
    assert.match(html, new RegExp(`href="${regexEscape(route)}"`));
  }
});

test('favicon files and manifest contain legible square icon sizes', async () => {
  const manifest = JSON.parse(await readFile('site.webmanifest', 'utf8'));
  assert.equal(manifest.name, 'County Landscapes');
  for (const [file, size] of [['favicon-16x16.png', 16], ['favicon-32x32.png', 32], ['favicon-48x48.png', 48], ['favicon-96x96.png', 96], ['apple-touch-icon.png', 180], ['android-chrome-192x192.png', 192], ['android-chrome-512x512.png', 512]]) {
    const png = await readFile(file);
    assert.equal(png.subarray(0, 8).toString('hex'), '89504e470d0a1a0a', `${file} must be a PNG`);
    assert.equal(png.readUInt32BE(16), size, `${file} width`);
    assert.equal(png.readUInt32BE(20), size, `${file} height`);
  }
  const ico = await readFile('favicon.ico');
  assert.equal(ico.readUInt16LE(2), 1, 'favicon.ico must be an icon');
  assert.ok(ico.readUInt16LE(4) >= 3, 'favicon.ico should include multiple sizes');
  assert.match(await readFile('favicon.svg', 'utf8'), /<svg/);
  assert.deepEqual(manifest.icons.map(icon => icon.sizes), ['192x192', '512x512']);
});

test('indexable pages have unique search titles, descriptions and self canonicals', async () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const page of indexablePages) {
    const html = await readFile(page, 'utf8');
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
    assert.ok(title, `${page} needs a title`);
    assert.ok(!titles.has(title), `${page} duplicates a title`);
    assert.ok(!descriptions.has(description), `${page} duplicates a description`);
    assert.match(html, new RegExp(`<link rel="canonical" href="${regexEscape(origin + (page === 'index.html' ? '' : page))}">`));
    titles.add(title);
    descriptions.add(description);
  }
});

test('legacy hedge URL consolidates into the dedicated hedge service page', async () => {
  const html = await readFile('hedge-trimming.html', 'utf8');
  assert.match(html, /<meta name="robots" content="noindex,follow">/);
  assert.match(html, new RegExp(`<link rel="canonical" href="${regexEscape(origin)}hedge-cutting\\.html">`));
});

test('sitemap and robots file point at the custom domain', async () => {
  const sitemap = await readFile('sitemap.xml', 'utf8');
  const imageSitemap = await readFile('image-sitemap.xml', 'utf8');
  const robots = await readFile('robots.txt', 'utf8');
  for (const page of indexablePages) {
    const path = page === 'index.html' ? '' : page;
    assert.match(sitemap, new RegExp(`<loc>${regexEscape(origin + path)}<\\/loc>`));
  }
  assert.doesNotMatch(sitemap, /404\.html/);
  assert.doesNotMatch(sitemap, /hedge-trimming\.html/);
  assert.match(robots, new RegExp(`Sitemap: ${regexEscape(origin)}sitemap\\.xml`));
  assert.match(robots, new RegExp(`Sitemap: ${regexEscape(origin)}image-sitemap\\.xml`));
  for (const image of ['garden-landscaping.jpg', 'fenced-garden.webp', 'garden-trees.jpg', 'patio-cleaning.jpg']) {
    assert.match(imageSitemap, new RegExp(regexEscape(origin + 'assets/' + image)));
  }
});

test('service pages expose Service and FAQ entities', async () => {
  for (const page of ['landscaping.html', 'fencing.html', 'tree-surgery.html', 'pressure-washing.html', ...jobs.map(job => `${job.slug}.html`)]) {
    const html = await readFile(page, 'utf8');
    assert.match(html, /"@type":"Service"/);
    assert.match(html, /"@type":"FAQPage"/);
  }
});

test('specific services are discoverable and take enquiries with the chosen job', async () => {
  const home = await readFile('index.html', 'utf8');
  const hub = await readFile('services.html', 'utf8');
  for (const job of jobs) {
    const page = `${job.slug}.html`;
    const html = await readFile(page, 'utf8');
    assert.match(home, new RegExp(`href="${regexEscape(page)}"`), `${page} needs a homepage link`);
    assert.match(hub, new RegExp(`href="${regexEscape(page)}"`), `${page} needs a service hub link`);
    assert.match(html, new RegExp(`href="${regexEscape(job.category)}\.html"`), `${page} needs a category route`);
    assert.match(html, new RegExp(`name="requested_service" value="${regexEscape(job.name.replaceAll('&', '&amp;'))}"`), `${page} needs to identify the enquiry`);
    assert.match(html, /action="https:\/\/formspree\.io\/f\/mjgnolow" method="POST"/);
    assert.match(html, /href="tel:\+447526024115"/);
  }
});

test('town pages are reachable and use postcode-based enquiries without inventing an address', async () => {
  const home = await readFile('index.html', 'utf8');
  const areas = await readFile('areas.html', 'utf8');
  for (const town of towns) {
    const page = `landscaper-${town.slug}.html`;
    const html = await readFile(page, 'utf8');
    assert.match(home, new RegExp(`href="${regexEscape(page)}"`));
    assert.match(areas, new RegExp(`href="${regexEscape(page)}"`));
    assert.match(html, /Share your postcode so the job and availability can be confirmed/);
    assert.match(html, new RegExp(`name="enquiry_area" value="${regexEscape(town.name)}"`));
    assert.match(html, /href="#contact">Free quote/);
    assert.doesNotMatch(html, /"streetAddress"/);
  }
});

test('confirmed Google Business Profile facts are represented consistently', async () => {
  const home = await readFile('index.html', 'utf8');
  const areas = await readFile('areas.html', 'utf8');
  assert.match(home, /"areaServed":\{"@type":"AdministrativeArea","name":"Leicestershire"/);
  assert.match(home, /"dayOfWeek":\["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"\]/);
  assert.match(home, /Open 24 hours Monday–Saturday/);
  assert.match(areas, /residential and commercial properties throughout Leicestershire/i);
  assert.match(areas, /"@type":"FAQPage"/);
});
