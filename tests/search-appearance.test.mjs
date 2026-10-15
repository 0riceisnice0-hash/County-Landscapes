import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { shareCards } from '../presentation.mjs';

const read = path => readFile(new URL(`../${path}`, import.meta.url));
const html = async path => (await read(path || 'index.html')).toString();

function jpegSize(bytes) {
  assert.equal(bytes.readUInt16BE(0), 0xffd8);
  let offset=2;
  while (offset < bytes.length) {
    assert.equal(bytes[offset], 0xff);
    const marker=bytes[offset+1], size=bytes.readUInt16BE(offset+2);
    if ([0xc0,0xc1,0xc2].includes(marker)) return [bytes.readUInt16BE(offset+7),bytes.readUInt16BE(offset+5)];
    offset+=size+2;
  }
  throw new Error('JPEG has no size marker');
}

test('every indexed page advertises its own valid 1200×630 share card', async () => {
  const used=new Set();
  for (const card of shareCards) {
    const page=await html(card.path);
    const url=`https://countylandscape.co.uk/${card.image}`;
    assert.ok(page.includes(`<meta property="og:image" content="${url}">`), card.path);
    assert.ok(page.includes(`<meta property="og:image:secure_url" content="${url}">`), card.path);
    assert.ok(page.includes(`<meta name="twitter:image" content="${url}">`), card.path);
    assert.deepEqual(jpegSize(await read(card.image)),[1200,630],card.image);
    assert.ok(!used.has(url),`${card.path} needs its own share card`);
    used.add(url);
    assert.equal((page.match(/<meta property="og:image" /g)||[]).length,1);
    assert.equal((page.match(/<title>/g)||[]).length,1);
    assert.doesNotMatch(page,/content="[^"]*\.\.\."/,'descriptions should be editorially complete');
  }
});

test('search identity and supported snippet exclusions stay consistent', async () => {
  const page=await html('');
  const entities=[...page.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(match=>JSON.parse(match[1]));
  const website=entities.find(entity=>entity['@type']==='WebSite');
  assert.equal(website.name,'County Landscapes');
  assert.equal(website.alternateName,'countylandscape.co.uk');
  assert.equal(website.publisher['@id'],'https://countylandscape.co.uk/#business');
  const business=entities.find(entity=>Array.isArray(entity['@type']));
  assert.equal(business.logo.width,500);
  assert.equal(business.logo.height,500);
  assert.match(page,/<section class="contact section"[^>]+data-nosnippet/);
  assert.match(page,/<div class="wrap footer-top" data-nosnippet>/);
  assert.doesNotMatch(page,/<(?:main|body)[^>]*data-nosnippet/,'primary service copy must remain eligible for snippets');
});

test('device icons are square and the maskable icon is a separate opaque asset', async () => {
  for (const [path,size] of [['android-maskable-512x512.png',512],['mstile-144x144.png',144]]) {
    const bytes=await read(path);
    assert.equal(bytes.readUInt32BE(16),size);
    assert.equal(bytes.readUInt32BE(20),size);
    assert.equal(bytes[25],2,'device icon should have an opaque RGB background');
  }
  const page=await html('');
  assert.match(page,/<link rel="mask-icon" href="safari-pinned-tab.svg"/);
  assert.match(page,/name="apple-mobile-web-app-title" content="County Landscapes"/);
});

test('image preloading matches the preferred picture source and the logo is lightweight', async () => {
  const page=await html('');
  const preload=page.match(/<link rel="preload" as="image"[^>]+>/)[0];
  assert.match(preload,/type="image\/avif"/);
  assert.match(preload,/fetchpriority="high"/);
  const sources=preload.match(/imagesrcset="([^"]+)"/)[1];
  assert.ok(page.includes(`<source type="image/avif" srcset="${sources}"`));
  const logoSize=(await stat(new URL('../assets/logo-296.webp',import.meta.url))).size;
  assert.ok(logoSize<20000,'header logo must stay below 20 kB');
  for (const path of ['services.html','privacy.html','404.html']) assert.doesNotMatch(await html(path),/src="form-prompts.js"/);
});
