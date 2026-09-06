import { mkdir, cp, readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
const css = await readFile('styles.css', 'utf8');
if (/^\s*\+(?=[.@#])/m.test(css)) throw new Error('Invalid CSS: stray patch marker before selector or media rule');
await import('./generate.mjs');
const pages = (await readdir('.')).filter(file => file.endsWith('.html'));
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  if (new Set(ids).size !== ids.length) throw new Error(`Duplicate ID in ${page}`);
  for (const [, target] of html.matchAll(/(?:src|href)="([^"?#]+)(?:[?#][^"]*)?"/g)) {
    if (/^(https?:|tel:|mailto:)/.test(target)) continue;
    await access(path.resolve(target));
  }
  for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) {
    if (!ids.includes(id)) throw new Error(`Broken anchor #${id} in ${page}`);
  }
  for (const [, file, id] of html.matchAll(/href="([^"?#]+\.html)(?:\?[^"#]*)?#([^"]+)"/g)) {
    const destination = await readFile(file, 'utf8');
    if (!destination.includes(`id="${id}"`)) throw new Error(`Broken cross-page link ${file}#${id} in ${page}`);
  }
}
await mkdir('dist', { recursive: true });
for (const file of [...pages, 'styles.css', 'script.js', 'form-prompts.js', 'sitemap.xml', '.nojekyll', 'assets']) {
  await cp(file, path.join('dist', file), { recursive: true });
}
console.log('Static site built in dist. Local assets and page anchors verified.');
