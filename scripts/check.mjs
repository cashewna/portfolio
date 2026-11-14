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
  'static/theme.js',
  'static/favicon.svg',
  'static/resume.pdf',
  'static/og-image.png',
  'static/images/relay-desk.webp',
  'static/images/epi-trainer.webp',
  'static/images/infra-light.svg',
  'static/images/infra-dark.svg',
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
  [home.includes('A true master'), 'home: hero headline preserved (line 1)'],
  [home.includes('is an eternal'), 'home: hero headline preserved (line 2)'],
  [home.includes('student.'), 'home: hero headline preserved (line 3)'],
  [home.includes('Bachelor of Computer Science'), 'home: education'],
  [home.includes('Shahi Investments'), 'home: experience (Sales Associate)'],
  [home.includes('TFS Timeframe Systems'), 'home: experience (Junior Software Developer)'],
  [home.includes('Each-A-Cup'), 'home: experience (Service Crew)'],
  [home.includes('/static/resume.pdf'), 'home: resume PDF link'],
  [home.includes('/static/og-image.png'), 'home: og:image metadata'],
  [home.includes('data-copy-email="krishna@khong.dev"'), 'home: copy email button'],
  [home.includes('Infrastructure &amp; operations'), 'home: infrastructure section'],
  [home.includes('/static/images/infra-light.svg'), 'home: light D2 diagram'],
  [home.includes('/static/images/infra-dark.svg'), 'home: dark D2 diagram'],
  [home.includes('/static/images/relay-desk.webp'), 'home: Relay Desk screenshot'],
  [home.includes('/static/images/epi-trainer.webp'), 'home: EPI Trainer screenshot'],
  [home.includes('https://github.com/cashewna/ticket-queue'), 'home: ticket-queue link'],
  [home.includes('https://github.com/cashewna/ai-eval-checker'), 'home: ai-eval-checker link'],
  [home.includes('https://github.com/cashewna/netregister'), 'home: netregister link'],
  [home.includes('https://github.com/cashewna/bee-gitops'), 'home: bee-gitops link'],
  [home.includes('https://demo.ticket-queue.khong.dev'), 'home: ticket-queue live URL'],
  [home.includes('https://epi-trainer.khong.dev'), 'home: epi-trainer demo URL'],
  [home.includes('https://epi-trainer-auth.khong.dev'), 'home: epi-trainer full-access URL'],
  [home.includes('Read-only public demo'), 'home: epi-trainer access note'],
  [home.includes('demo-pass-123'), 'home: demo password'],
  [home.includes('requester@example.com'), 'home: demo requester'],
  [home.includes('Public demo'), 'home: demo warning'],
  [tosPage.includes('Not affiliated with Discord'), 'tos: Discord disclaimer'],
  [tosPage.includes('Acceptable use'), 'tos: acceptable use section'],
  [privacyPage.includes('Retention'), 'privacy: retention section'],
  [privacyPage.includes('What the Bot collects'), 'privacy: data section'],
  [privacyPage.includes('krishna@khong.dev'), 'privacy: contact'],
];

for (const svgName of ['static/images/infra-light.svg', 'static/images/infra-dark.svg']) {
  const svg = await readFile(join(dist, svgName), 'utf8');
  if (/10\.0\.0\.|100\.64\.|137\.23\.|192\.168\./.test(svg)) {
    failures.push(`${svgName}: private or host IP found in diagram`);
  }
}

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
