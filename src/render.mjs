import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { site, hero, about, experience, education, projects, skills } from './data.mjs';
import { tos, privacy } from './legal.mjs';

const cssHash = createHash('sha256')
  .update(readFileSync(fileURLToPath(new URL('../static/styles.css', import.meta.url))))
  .digest('hex')
  .slice(0, 8);

const escapeHtml = (value) =>
  String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const nav = () => `
      <nav class="site-nav" aria-label="Primary">
        <a href="/#projects">Projects</a>
        <a href="/#about">About</a>
        <a href="/#experience">Experience</a>
        <a href="/#skills">Skills</a>
        <button class="theme-switch" type="button" role="switch" aria-checked="false" aria-label="Switch to dark mode">
          <span class="theme-switch-track" aria-hidden="true">
            <svg class="theme-icon theme-icon-sun" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="3"/><path d="M8 1.5v1.5M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.1 1.1M11.5 11.5l1.1 1.1M12.6 3.4l-1.1 1.1M4.5 11.5l-1.1 1.1"/></svg>
            <svg class="theme-icon theme-icon-moon" viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.2 10.1A5.5 5.5 0 0 1 5.9 2.8a5.5 5.5 0 1 0 7.3 7.3Z"/></svg>
            <span class="theme-switch-thumb"></span>
          </span>
        </button>
        <a class="nav-email" href="mailto:${site.email}">Email me</a>
      </nav>`;

const footer = () => `
      <footer class="site-footer">
        <p class="footer-mark">KK</p>
        <p>${escapeHtml(site.name)} · ${escapeHtml(site.location)}</p>
        <p class="footer-links">
          <a href="mailto:${site.email}">${site.email}</a>
          <a href="${site.github}" rel="me noopener">GitHub</a>
        </p>
        <p class="footer-note">Built as a static site. No trackers, no analytics, no cookies.</p>
      </footer>`;

export const layout = ({ title, description, canonical, body, bodyClass = '' }) => `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${site.url}${canonical}" />
    <meta name="theme-color" content="#101215" media="(prefers-color-scheme: dark)" />
    <meta name="theme-color" content="#f4f1ea" media="(prefers-color-scheme: light)" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${site.url}${canonical}" />
    <meta property="og:site_name" content="${escapeHtml(site.name)}" />
    <meta name="twitter:card" content="summary" />
    <link rel="icon" href="/static/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/static/styles.css?v=${cssHash}" />
    <script src="/static/theme.js" defer></script>
  </head>
  <body class="${bodyClass}">
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="page">
      <header class="site-header">
        <a class="brand" href="/" aria-label="${escapeHtml(site.name)} home">
          <span class="brand-mark">KK</span>
          <span class="brand-name">${escapeHtml(site.name)}</span>
        </a>${nav()}
      </header>
      <main id="main">
${body}
      </main>${footer()}
    </div>
  </body>
</html>
`;

const sectionHead = (number, title, id) => `
        <div class="section-head">
          <p class="section-number">${number}</p>
          <h2${id ? ` id="${escapeHtml(id)}"` : ''}>${escapeHtml(title)}</h2>
        </div>`;

const heroFacts = () => `
          <dl class="facts">
${hero.facts
  .map(
    (fact) => `            <div>
              <dt>${escapeHtml(fact.label)}</dt>
              <dd>${escapeHtml(fact.value)}</dd>
            </div>`,
  )
  .join('\n')}
          </dl>`;

const experienceItem = (job) => `
            <article class="job">
              <div class="job-meta">
                <p class="job-period">${escapeHtml(job.period)}</p>
                <p class="job-place">${escapeHtml(job.place)}</p>
              </div>
              <div class="job-body">
                <h3>${escapeHtml(job.role)}</h3>
                <p class="job-company">${escapeHtml(job.company)}</p>
                <ul>
${job.points.map((point) => `                  <li>${escapeHtml(point)}</li>`).join('\n')}
                </ul>
              </div>
            </article>`;

const projectCard = (project, index) => `
            <article class="project-card">
              <div class="project-top">
                <p class="project-index">${String(index + 1).padStart(2, '0')}</p>
                <p class="project-kicker">${escapeHtml(project.kicker)}</p>
              </div>
              <h3>${escapeHtml(project.name)}</h3>
              <p class="project-description">${escapeHtml(project.description)}</p>
              <p class="project-detail">${escapeHtml(project.detail)}</p>
${project.preview ? `              <div class="project-preview">
                <p class="project-preview-title">${escapeHtml(project.preview.title)}</p>
                <pre><code>${project.preview.lines.map((line) => escapeHtml(line)).join('\n')}</code></pre>
              </div>` : ''}
${project.accessNote ? `              <p class="project-access">${escapeHtml(project.accessNote)}</p>` : ''}
${project.demo ? `              <div class="demo-box">
                <p class="demo-box-title">Try the live demo</p>
                <p>Sign in as <code>${escapeHtml(project.demo.accounts[0].email)}</code> or <code>${escapeHtml(project.demo.accounts[1].email)}</code> with <code>${escapeHtml(project.demo.password)}</code>.</p>
                <p class="demo-box-note">${escapeHtml(project.demo.note)}</p>
              </div>` : ''}
              <ul class="tags" aria-label="Stack">
${project.stack.map((tag) => `                <li>${escapeHtml(tag)}</li>`).join('\n')}
              </ul>
              <p class="project-links">
${project.links
  .map(
    (link) =>
      `                <a href="${link.href}"${link.href.startsWith('http') ? ' rel="noopener"' : ''}>${escapeHtml(link.label)} <span aria-hidden="true">↗</span></a>`,
  )
  .join('\n')}
              </p>
            </article>`;

const skillGroup = (group) => `
            <article class="skill-group">
              <h3>${escapeHtml(group.label)}</h3>
              <p class="skill-items">${group.items.map((item) => escapeHtml(item)).join(' · ')}</p>
${group.note ? `              <p class="skill-note">${escapeHtml(group.note)}</p>` : ''}
            </article>`;

export const homePage = () =>
  layout({
    title: site.title,
    description: site.description,
    canonical: '/',
    bodyClass: 'home',
    body: `        <section class="hero" aria-labelledby="hero-title">
          <div class="hero-copy">
            <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
            <h1 id="hero-title">
${hero.headlineLines.map((line) => `              <span>${escapeHtml(line)}</span>`).join('\n')}
            </h1>
            <p class="hero-intro">${escapeHtml(hero.intro)}</p>
            <p class="hero-actions">
              <a class="button button-primary" href="#projects">See the work</a>
              <a class="button button-quiet" href="mailto:${site.email}">${site.email}</a>
            </p>
          </div>
          <aside class="hero-card" aria-label="At a glance">
            <p class="card-label">At a glance</p>${heroFacts()}
            <p class="card-status"><span class="status-dot" aria-hidden="true"></span> Open to graduate SWE roles</p>
          </aside>
        </section>

        <section class="section" id="projects" aria-labelledby="projects-title">${sectionHead('01', 'Selected projects', 'projects-title')}
          <p class="section-intro">Production-shaped systems with automated tests, explicit state machines, and clear boundaries. Each card links to a public repository or live deployment.</p>
          <div class="project-grid">
${projects.map(projectCard).join('\n')}
          </div>
        </section>

        <section class="section" id="about" aria-labelledby="about-title">${sectionHead('02', 'About', 'about-title')}
          <div class="prose">
${about.map((paragraph) => `            <p>${escapeHtml(paragraph)}</p>`).join('\n')}
          </div>
        </section>

        <section class="section" id="experience" aria-labelledby="experience-title">${sectionHead('03', 'Experience', 'experience-title')}
          <div class="timeline">
${experience.map(experienceItem).join('\n')}
          </div>
          <div class="education">
            <p class="education-label">Education</p>
            <div>
              <h3>${escapeHtml(education.degree)}</h3>
              <p>${escapeHtml(education.school)} · ${escapeHtml(education.place)} · ${escapeHtml(education.period)}</p>
            </div>
          </div>
        </section>

        <section class="section" id="skills" aria-labelledby="skills-title">${sectionHead('04', 'Skills', 'skills-title')}
          <div class="skill-grid">
${skills.map(skillGroup).join('\n')}
          </div>
        </section>

        <section class="contact" id="contact" aria-labelledby="contact-title">
          <p class="contact-label">Contact</p>
          <h2 id="contact-title">Let’s talk about work that needs both care and code.</h2>
          <p class="contact-copy">The fastest way to reach me is email. I am based in Sydney and happy to talk about graduate software, support and operations roles.</p>
          <p class="contact-actions">
            <a class="contact-mail" href="mailto:${site.email}">${site.email}</a>
            <a class="button button-quiet" href="${site.github}" rel="me noopener">${site.githubLabel}</a>
          </p>
        </section>`,
  });

const legalBlocks = (blocks) =>
  blocks
    .map((block) => {
      if (block.type === 'p') return `            <p>${escapeHtml(block.text)}</p>`;
      if (block.type === 'ul') {
        return `            <ul>\n${block.items.map((item) => `              <li>${escapeHtml(item)}</li>`).join('\n')}\n            </ul>`;
      }
      throw new Error(`Unknown legal block: ${block.type}`);
    })
    .join('\n');

export const legalPage = (doc) =>
  layout({
    title: `${doc.title} — ${site.name}`,
    description: doc.description,
    canonical: `/${doc.slug}`,
    bodyClass: 'legal',
    body: `        <article class="legal-doc">
          <header class="legal-head">
            <p class="eyebrow">Discord bot</p>
            <h1>${escapeHtml(doc.title)}</h1>
            <p class="legal-meta">Last updated ${escapeHtml(doc.updated)} · Operated by ${escapeHtml(site.name)}</p>
            <p class="legal-intro">${escapeHtml(doc.intro)}</p>
            <p class="legal-nav"><a href="/discord/tos">Terms of Service</a><span aria-hidden="true">·</span><a href="/discord/privacy">Privacy Policy</a><span aria-hidden="true">·</span><a href="/">Portfolio</a></p>
          </header>
          <div class="legal-body">
${doc.sections
  .map(
    (section) => `            <section>
              <h2>${escapeHtml(section.heading)}</h2>
${legalBlocks(section.blocks)}
            </section>`,
  )
  .join('\n')}
          </div>
          <aside class="legal-callout">
            <p><strong>Not affiliated with Discord.</strong> This bot is an independent project operated by ${escapeHtml(site.name)}. Discord’s own Terms of Service and Privacy Policy apply to your use of Discord.</p>
            <p>Questions or deletion requests: <a href="mailto:${site.email}">${site.email}</a>.</p>
          </aside>
        </article>`,
  });

export const notFoundPage = () =>
  layout({
    title: `Page not found — ${site.name}`,
    description: 'The page you asked for does not exist.',
    canonical: '/404.html',
    bodyClass: 'not-found',
    body: `        <section class="not-found-body">
          <p class="eyebrow">404</p>
          <h1>That page is not here.</h1>
          <p>The link may be old, or the page may have moved. The portfolio is a good place to start.</p>
          <p><a class="button button-primary" href="/">Back to the portfolio</a></p>
        </section>`,
  });

export { tos, privacy, escapeHtml };
