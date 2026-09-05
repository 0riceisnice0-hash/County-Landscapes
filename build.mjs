import { mkdir, cp, readFile, access } from 'node:fs/promises';
import path from 'node:path';
const pages = ['index.html', 'privacy.html'];
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
}
await mkdir('dist', { recursive: true });
for (const file of [...pages, 'styles.css', 'script.js', '.nojekyll', 'assets']) {
  await cp(file, path.join('dist', file), { recursive: true });
}
console.log('Static site built in dist. Local assets and page anchors verified.');
