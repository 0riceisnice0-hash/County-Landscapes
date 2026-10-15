import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { shareCardFor } from '../presentation.mjs';
const escape = text => text.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const icon=(await readFile('favicon-96x96.png')).toString('base64');
const paths=['index.html','fence-installation.html','landscaper-leicester.html'];
const cards=await Promise.all(paths.map(async path=>{
  const html=await readFile(path,'utf8');
  const title=html.match(/<title>(.*?)<\/title>/)[1];
  const description=html.match(/name="description" content="([^"]+)"/)[1];
  const share=shareCardFor(path==='index.html'?'':path);
  const image=(await readFile(share.image)).toString('base64');
  const route=path==='index.html'?'':path;
  return `<article><h2>${escape(route || 'Homepage')}</h2><div class="search"><div class="identity"><img src="data:image/png;base64,${icon}" alt="County favicon"><div>County Landscapes<small>https://countylandscape.co.uk${route?' › '+escape(route.replace('.html','')):''}</small></div></div><a href="https://countylandscape.co.uk/${route}">${title}</a><p>${description}</p></div><p class="label">Link-share card</p><img class="share" src="data:image/jpeg;base64,${image}" alt="${escape(share.alt)}"></article>`;
}));
const output=resolve(process.argv[2] || '../../outputs/search-appearance.html');
await mkdir(dirname(output),{recursive:true});
await writeFile(output,`<!doctype html><html lang="en-GB"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>County Landscapes — search and share preview</title><style>*{box-sizing:border-box}body{margin:0;background:#f8f7f2;color:#163b2d;font:16px/1.5 'Segoe UI',Arial,sans-serif}.wrap{max-width:1380px;margin:auto;padding:35px}h1{font-size:32px;margin:0 0 8px}.intro{margin:0 0 32px;color:#526250}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}article{min-width:0;background:white;border:1px solid #d7dacf;border-radius:8px;padding:22px}h2{font-size:16px;min-height:48px;margin:0}.search{min-height:230px;color:#202124}.identity{display:flex;align-items:center;gap:11px;font-size:14px}.identity img{width:30px;height:30px;border-radius:50%}small{display:block;font-size:11px;overflow-wrap:anywhere}.search a{display:block;color:#1a0dab;font-size:20px;line-height:1.25;margin:16px 0 8px;text-decoration:none}.search p{font:14px/1.5 Arial,sans-serif;color:#4d5156;margin:0}.share{width:100%;height:auto;border-radius:5px}.label{font-size:12px;color:#526250;border-top:1px solid #d7dacf;padding-top:18px}@media(max-width:900px){.grid{grid-template-columns:1fr}.wrap{padding:20px}.search{min-height:0;margin-bottom:22px}h2{min-height:0;margin-bottom:20px}}</style><main class="wrap"><h1>County Landscapes: search &amp; share appearance</h1><p class="intro">Illustrative previews using the published metadata and assets. Google chooses its final titles, snippets, favicons and thumbnails.</p><div class="grid">${cards.join('')}</div></main></html>`);
console.log(output);
