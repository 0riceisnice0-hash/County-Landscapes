import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { jobs } from '../job-pages.mjs';
import { towns } from '../town-pages.mjs';

const root = 'https://countylandscape.co.uk/';
const read = path => readFile(new URL(`../${path}`, import.meta.url), 'utf8');
const schema = html => [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(match => JSON.parse(match[1]));

test('the sitemap contains only self-canonical indexable pages with truthful release dates', async () => {
  const sitemap = await read('sitemap.xml');
  const entries = [...sitemap.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod><\/url>/g)];
  assert.equal(entries.length, 30);
  assert.doesNotMatch(sitemap, /<priority>|<changefreq>|404\.html|hedge-trimming\.html/);
  for (const [, loc, date] of entries) {
    assert.equal(date, '2026-10-15');
    const page = loc === root ? 'index.html' : loc.slice(root.length);
    const html = await read(page);
    assert.match(html, new RegExp(`<link rel="canonical" href="${loc.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}">`));
    assert.match(html, /<meta name="robots" content="index,follow,/);
  }
});

test('service and town pages expose a matching primary entity', async () => {
  for (const path of [...jobs.map(job => `${job.slug}.html`), ...towns.map(town => `landscaper-${town.slug}.html`)]) {
    const entities = schema(await read(path));
    const webpage = entities.find(item => item['@type'] === 'WebPage');
    const service = entities.find(item => item['@type'] === 'Service');
    assert.equal(webpage.mainEntity['@id'], service['@id'], path);
    assert.equal(service.url, root + path, path);
  }
});

test('verified profile and responsive images are present without review-star schema', async () => {
  const home = await read('index.html');
  const business = schema(home).find(item => Array.isArray(item['@type']) && item['@type'].includes('LocalBusiness'));
  assert.match(business.hasMap, /google\.com\/maps\/place\/County\+landscapes/);
  assert.ok(business.sameAs.includes(business.hasMap));
  assert.match(home, /Read customer feedback on Google/);
  assert.match(home, /<link rel="preload" as="image" type="image\/webp" imagesrcset=/);
  assert.match(home, /<picture><source type="image\/webp" srcset=/);
  assert.match(home, /fetchpriority="high" loading="eager"/);
  assert.match(home, /decoding="async"[^>]*loading="lazy"/);
  assert.doesNotMatch(home, /aggregateRating|reviewCount|"@type":"Review"/);
});

test('the service and area hubs describe their collections', async () => {
  for (const [path, fragment] of [['services.html', '#service-list'], ['areas.html', '#area-list']]) {
    const entities = schema(await read(path));
    const page = entities.find(item => item['@type'] === 'CollectionPage');
    const list = entities.find(item => item['@type'] === 'ItemList');
    assert.equal(page.mainEntity['@id'], root + path + fragment);
    assert.equal(list['@id'], page.mainEntity['@id']);
    assert.ok(list.itemListElement.length > 3);
  }
});
