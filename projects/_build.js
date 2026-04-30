/**
 * generate-detail.js
 * Build a project detail page from a config object.
 * Run with: node generate-detail.js <project-id>
 *
 * Configs are inline below. Each project page is generated into
 * /home/claude/portfolio/projects/<slug>.html
 */

const fs = require('fs');
const path = require('path');

const OUT_DIR = '/home/claude/portfolio/projects';

/* ---------- helpers ---------- */

function header(chapterLabel) {
  return `
<header class="proj-header">
  <a class="back-link" href="../index.html" aria-label="Back to portfolio">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
    <span>Portfolio</span>
  </a>
  <span class="proj-chapter">( ${chapterLabel} )</span>
  <span class="proj-author">YE LIUTONG</span>
</header>`;
}

function footer() {
  return `
<footer class="proj-footer">
  <span>YE LIUTONG &mdash; IMMERSIVE EXPERIENCE DESIGNER</span>
</footer>`;
}

function hero({meta, title, tagline}) {
  return `
  <section class="proj-hero">
    <div class="proj-meta">${meta}</div>
    <h1 class="proj-title">${title}</h1>
    ${tagline ? `<p class="proj-tagline">${tagline}</p>` : ''}
  </section>`;
}

function p(text) { return `<p>${text}</p>`; }
function lede(text) { return `<p class="lede">${text}</p>`; }
function h2(text) { return `<h2>${text}</h2>`; }
function h3(text) { return `<h3 class="proj-subhead">${text}</h3>`; }
function divider() { return `<hr class="proj-divider" />`; }
function body(content) { return `<section class="proj-body">${content}</section>`; }

/** Build an <img> or <video> based on filename extension */
function media(file, alt = '', poster = '') {
  if (!file) return '';
  if (/\.(mp4|webm|mov)$/i.test(file)) {
    const posterAttr = poster ? ` poster="../images/${poster}"` : '';
    return `<video src="../images/${file}"${posterAttr} controls preload="metadata"></video>`;
  }
  return `<img src="../images/${file}" alt="${alt}" />`;
}

/**
 * Render a figure block.
 * spec: {
 *   layout: 'full'|'pair'|'row'|'grid'|'gallery'|'single'|'portrait'|'vstack'|'jigsaw',
 *   ratio: '16-9'|'4-3'|'3-4'|'9-16'|'1-1'|null,
 *   cols: 2|3|4|5,        // for 'row' layout
 *   scale: 50|60|75|90|120,
 *   tight: true,           // tighter gap between row items
 *   size: 'large',         // for vstack
 *   items: [{file, alt, poster}],
 *   caption: ''
 * }
 */
function figure(spec) {
  const layoutClass = `proj-figure--${spec.layout}`;
  const cols = spec.cols ? `cols-${spec.cols}` : '';
  const ratio = spec.ratio ? `ratio-${spec.ratio}` : '';
  const hasRatio = spec.ratio ? 'has-ratio' : '';
  const scale = spec.scale ? `scale-${spec.scale}` : '';
  const tight = spec.tight ? 'tight' : '';
  const size = spec.size ? `size-${spec.size}` : '';
  const cls = ['proj-figure', layoutClass, cols, ratio, hasRatio, scale, tight, size]
    .filter(Boolean).join(' ');

  // Special case: jigsaw — 5 items, the last 2 wrapped in a sub-grid div.
  if (spec.layout === 'jigsaw' && spec.items && spec.items.length === 5) {
    const items = spec.items;
    const itemHTML = (it) => media(it.file, it.alt || '', it.poster);
    const caption = spec.caption ? `<figcaption>${spec.caption}</figcaption>` : '';
    return `
  <figure class="${cls}">
    ${itemHTML(items[0])}
    ${itemHTML(items[1])}
    ${itemHTML(items[2])}
    <div class="jigsaw-bottom-pair">
      ${itemHTML(items[3])}
      ${itemHTML(items[4])}
    </div>
    ${caption}
  </figure>`;
  }

  const items = (spec.items || []).map(it => media(it.file, it.alt || '', it.poster)).join('\n      ');
  const caption = spec.caption ? `<figcaption>${spec.caption}</figcaption>` : '';
  return `
  <figure class="${cls}">
    ${items}
    ${caption}
  </figure>`;
}

function metaBlock(items) {
  return `
  <aside class="proj-meta-block">
    ${items.map(it => {
      let valHtml;
      if (Array.isArray(it.val)) {
        valHtml = `<ul class="meta-list">${it.val.map(v => `<li>${v}</li>`).join('')}</ul>`;
      } else {
        valHtml = `<div class="meta-val">${it.val}</div>`;
      }
      return `
    <div>
      <div class="meta-key">${it.key}</div>
      ${valHtml}
    </div>`;
    }).join('')}
  </aside>`;
}

function projNav(prev, next) {
  return `
  <nav class="proj-nav" aria-label="Project navigation">
    ${prev ? `
    <a class="nav-prev" href="${prev.href}">
      <span class="nav-label">← Previous</span>
      <span class="nav-title">${prev.title}</span>
    </a>` : '<div></div>'}
    ${next ? `
    <a class="nav-next" href="${next.href}">
      <span class="nav-label">${next.label || 'Next →'}</span>
      <span class="nav-title">${next.title}</span>
    </a>` : '<div></div>'}
  </nav>`;
}

function buildPage(config) {
  const { slug, title, chapter, head, sections, credits, prev, next } = config;
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${title} — Ye Liutong</title>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

<link rel="stylesheet" href="project.css" />
</head>
<body>

<!-- Mobile / tablet lockout: shown only when viewport < 900px -->
<div class="mobile-block">
  <p>For the best experience, please open this portfolio on a desktop browser.</p>
</div>

${header(chapter)}

<main class="proj-main">

${hero(head)}

${sections.join('\n')}

${metaBlock(credits)}

${projNav(prev, next)}

</main>

${footer()}

</body>
</html>
`;
  fs.writeFileSync(path.join(OUT_DIR, slug + '.html'), html, 'utf8');
  console.log('  wrote', slug + '.html');
}

/**
 * Render a numbered module list for text-only project pages.
 * items: [{ title, body }]
 */
function modulesList(items) {
  return `
  <ol class="proj-modules">
    ${items.map((it, i) => `
    <li>
      <div class="proj-module-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="proj-module-body">
        <h3>${it.title}</h3>
        <p>${it.body}</p>
      </div>
    </li>`).join('')}
  </ol>`;
}

/**
 * Render an outlined notice box (e.g. "in development", "unavailable").
 * label: short uppercase label shown above the message
 * text: the italic message body
 */
function notice(label, text) {
  return `
  <aside class="proj-notice">
    ${label ? `<span class="proj-notice-label">${label}</span>` : ''}
    ${text}
  </aside>`;
}

module.exports = { buildPage, hero, p, lede, h2, h3, divider, body, figure, metaBlock, modulesList, notice };
