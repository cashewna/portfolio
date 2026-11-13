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
            <svg class="theme-icon theme-icon-day" viewBox="1 0 22 17" width="18" height="14" fill="currentColor">
              <circle cx="15.5" cy="7" r="3.4" fill="none" stroke="currentColor" stroke-width="1.5"/>
              <path d="M15.5 1.2v1.3M15.5 11.5v1.3M9.7 7H11M20 7h1.3M11.4 2.9l.9.9M18.7 10.2l.9.9M19.6 2.9l-.9.9" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
              <path d="M5.5 15.5h8.2a2.8 2.8 0 0 0 .3-5.6 4.1 4.1 0 0 0-7.8-1A3.1 3.1 0 0 0 5.5 15.5Z"/>
            </svg>
            <svg class="theme-icon theme-icon-night" viewBox="5 1 18 16" width="18" height="14" fill="currentColor">
              <path d="M13.8 3.2a5.8 5.8 0 1 0 5.6 9.8 4.6 4.6 0 0 1-5.6-9.8Z"/>
              <path d="M18.2 3.2l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4ZM19.5 10.2l.3.9.9.3-.9.3-.3.9-.3-.9-.9-.3.9-.3.3-.9ZM10 2.5l.3.8.8.3-.8.3-.3.8-.3-.8-.8-.3.8-.3.3-.8Z"/>
            </svg>
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
          <p class="section-intro">Software and systems projects with automated tests, explicit state machines, and clear boundaries. Each card links to a public repository or live deployment.</p>
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
          <h2 id="contact-title">Get in touch about graduate software or systems roles.</h2>
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
    title: `${doc.title} | ${site.name}`,
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
    title: `Page not found | ${site.name}`,
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
