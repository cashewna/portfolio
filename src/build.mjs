import { mkdir, cp, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { homePage, legalPage, notFoundPage, tos, privacy } from './render.mjs';
import { site } from './data.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const staticDir = join(root, 'static');

const pages = [
  { path: 'index.html', html: homePage() },
  { path: 'discord/tos/index.html', html: legalPage(tos) },
  { path: 'discord/privacy/index.html', html: legalPage(privacy) },
  { path: '404.html', html: notFoundPage() },
];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const page of pages) {
  const target = join(dist, page.path);
  await mkdir(join(target, '..'), { recursive: true });
  await writeFile(target, page.html, 'utf8');
}

await cp(staticDir, join(dist, 'static'), { recursive: true });

const urls = ['/', '/discord/tos', '/discord/privacy'];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${site.url}${path}</loc>
    <lastmod>2026-11-14</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await writeFile(
  join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`,
  'utf8',
);

await writeFile(join(dist, 'sitemap.xml'), sitemap, 'utf8');

console.log(`Built ${pages.length} pages into ${dist}`);
for (const page of pages) console.log(`  /${page.path.replace(/index\.html$/, '')}`);
