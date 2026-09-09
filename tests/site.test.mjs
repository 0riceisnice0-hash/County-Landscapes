import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const indexablePages = ['index.html', 'services.html', 'contact.html', 'landscaping.html', 'fencing.html', 'tree-surgery.html', 'pressure-washing.html', 'privacy.html'];
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
    assert.match(html, /<meta name="twitter:card" content="summary_large_image">/, `${page} needs a large social card`);
    assert.match(html, /<link rel="manifest" href="site\.webmanifest">/, `${page} needs the web manifest`);
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
  assert.match(html, /href="\.\/">Go to the homepage/);
  assert.match(html, /href="contact\.html#contact">Get a free quote/);
  assert.match(html, /href="tel:\+447526024115">Call 07526 024115/);
  for (const route of ['landscaping.html', 'fencing.html', 'tree-surgery.html', 'pressure-washing.html']) {
    assert.match(html, new RegExp(`href="${regexEscape(route)}"`));
  }
});

test('legacy hedge URL consolidates into the trees and hedges page', async () => {
  const html = await readFile('hedge-trimming.html', 'utf8');
  assert.match(html, /<meta name="robots" content="noindex,follow">/);
  assert.match(html, new RegExp(`<link rel="canonical" href="${regexEscape(origin)}tree-surgery\\.html">`));
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
  for (const page of ['landscaping.html', 'fencing.html', 'tree-surgery.html', 'pressure-washing.html']) {
    const html = await readFile(page, 'utf8');
    assert.match(html, /"@type":"Service"/);
    assert.match(html, /"@type":"FAQPage"/);
    assert.match(html, /"@type":"OfferCatalog"/);
  }
});
