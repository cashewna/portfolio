import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = join(root, 'dist');
const failures = [];

const mustExist = [
  'index.html',
  'discord/tos/index.html',
  'discord/privacy/index.html',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'static/styles.css',
  'static/favicon.svg',
];

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
};

const exists = async (path) => {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

for (const file of mustExist) {
  if (!(await exists(join(dist, file)))) failures.push(`missing build output: ${file}`);
}

const htmlFiles = (await exists(dist))
  ? (await walk(dist)).filter((file) => file.endsWith('.html'))
  : [];

const internalHrefs = new Set();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const name = relative(dist, file);

  if (!/<title>[^<]+<\/title>/.test(html)) failures.push(`${name}: missing <title>`);
  if (!/<meta name="description" content="[^"]+"/.test(html)) {
    failures.push(`${name}: missing meta description`);
  }
  if (!/<link rel="canonical" href="https:\/\/portfolio\.khong\.dev/.test(html)) {
    failures.push(`${name}: missing canonical URL`);
  }
  if (/TODO|FIXME|lorem ipsum/i.test(html)) failures.push(`${name}: placeholder text found`);
  if (/0403\s*358\s*628|\+61\s*403|358\s*628/.test(html)) {
    failures.push(`${name}: private phone number found`);
  }
  if (!html.includes('krishna@khong.dev')) failures.push(`${name}: missing contact email`);

  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (href.startsWith('/') && !href.startsWith('//')) {
      const clean = href.split('#')[0].split('?')[0];
      internalHrefs.add(clean);
    }
  }
}

for (const href of internalHrefs) {
  if (href === '') continue;
  const candidates = [
    join(dist, href),
    join(dist, href, 'index.html'),
    join(dist, `${href}.html`),
  ];
  let found = false;
  for (const candidate of candidates) {
    if (await exists(candidate)) {
      found = true;
      break;
    }
  }
  if (!found) failures.push(`broken internal link: ${href}`);
}

const home = await readFile(join(dist, 'index.html'), 'utf8');
const tosPage = await readFile(join(dist, 'discord/tos/index.html'), 'utf8');
const privacyPage = await readFile(join(dist, 'discord/privacy/index.html'), 'utf8');

const contentChecks = [
  [home.includes('Krishna Khong'), 'home: name'],
  [home.includes('Bachelor of Computer Science'), 'home: education'],
  [home.includes('Shahi Investments'), 'home: experience'],
  [home.includes('https://github.com/cashewna/ticket-queue'), 'home: ticket-queue link'],
  [home.includes('https://github.com/cashewna/ai-eval-checker'), 'home: ai-eval-checker link'],
  [home.includes('https://github.com/cashewna/netregister'), 'home: netregister link'],
  [home.includes('https://apps.khong.dev'), 'home: ticket-queue live URL'],
  [home.includes('https://epi-trainer.khong.dev'), 'home: epi-trainer live URL'],
  [home.includes('Password-gated live demo'), 'home: epi-trainer access note'],
  [home.includes('demo-pass-123'), 'home: demo password'],
  [home.includes('requester@example.com'), 'home: demo requester'],
  [home.includes('Public demo'), 'home: demo warning'],
  [tosPage.includes('Not affiliated with Discord'), 'tos: Discord disclaimer'],
  [tosPage.includes('Acceptable use'), 'tos: acceptable use section'],
  [privacyPage.includes('Retention'), 'privacy: retention section'],
  [privacyPage.includes('What the Bot collects'), 'privacy: data section'],
  [privacyPage.includes('krishna@khong.dev'), 'privacy: contact'],
];

for (const [ok, label] of contentChecks) {
  if (!ok) failures.push(`content check failed: ${label}`);
}

if (failures.length) {
  console.error(`Build check failed with ${failures.length} problem(s):`);
  for (const failure of failures) console.error(`  - ${failure}`);
  process.exit(1);
}

console.log(
  `Build check passed: ${htmlFiles.length} HTML files, ${internalHrefs.size} internal links, ${contentChecks.length} content checks.`,
);
