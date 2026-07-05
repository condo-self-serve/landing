// Prerenders every route (all locales × all pages) to static HTML in dist/,
// with per-page <head> (meta, OpenGraph, hreflang alternates, JSON-LD) and
// extracted antd styles — so GitHub Pages serves real, crawlable HTML in six
// languages that then hydrates into a normal React SPA.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const { render, PAGES, SITE_URL, SITE_NAME, APP_URL, COPY, DEFAULT_LOCALE } = await import(
  path.join(root, 'dist-ssr', 'entry-server.js')
);

const template = readFileSync(path.join(dist, 'index.html'), 'utf-8');

const abs = (p) => SITE_URL.replace(/\/$/, '') + p;

/** All locale variants of the same page (for hreflang alternates). */
function alternatesOf(page) {
  return PAGES.filter((p) => p.sitePath === page.sitePath && !p.noindex);
}

function jsonLd(page) {
  const graph = [
    {
      '@type': 'WebPage',
      '@id': abs(page.path),
      url: abs(page.path),
      name: page.title,
      description: page.description,
      inLanguage: page.locale,
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  ];
  if (page.key === 'home') {
    graph.push(
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { '@id': `${SITE_URL}/#org` },
      },
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#org`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: abs('/favicon.svg'),
      },
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: APP_URL,
        description: page.description,
        inLanguage: ['en', 'pt', 'es', 'fr', 'it', 'de'],
      },
      {
        '@type': 'FAQPage',
        inLanguage: page.locale,
        mainEntity: COPY[page.locale].home.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    );
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

const esc = (s) => s.replace(/"/g, '&quot;');

function headFor(page) {
  const canonical = abs(page.path);
  const og = abs(page.ogImage);
  const lines = [
    `<meta name="description" content="${esc(page.description)}" />`,
    page.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${canonical}" />`,
  ];
  if (!page.noindex) {
    for (const alt of alternatesOf(page)) {
      lines.push(`<link rel="alternate" hreflang="${alt.locale}" href="${abs(alt.path)}" />`);
    }
    const xDefault = alternatesOf(page).find((p) => p.locale === DEFAULT_LOCALE);
    if (xDefault) {
      lines.push(`<link rel="alternate" hreflang="x-default" href="${abs(xDefault.path)}" />`);
    }
  }
  lines.push(
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${esc(page.title)}" />`,
    `<meta property="og:description" content="${esc(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:locale" content="${page.locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(page.title)}" />`,
    `<meta name="twitter:description" content="${esc(page.description)}" />`,
    `<meta name="twitter:image" content="${og}" />`,
    jsonLd(page),
  );
  return lines.join('\n    ');
}

function renderPage(page) {
  const { html, styleText } = render(page.path);
  return template
    .replace('<html lang="en">', `<html lang="${page.locale}">`)
    .replace('<title>Condoclar</title>', `<title>${page.title}</title>`)
    .replace('<!--app-head-->', `${headFor(page)}\n    ${styleText}`)
    .replace('<!--app-html-->', html);
}

for (const page of PAGES) {
  const out = renderPage(page);
  if (page.key === 'notFound') {
    // GitHub Pages serves /404.html for any unknown URL.
    writeFileSync(path.join(dist, '404.html'), out);
    console.log('prerendered  /404.html');
    continue;
  }
  const dir = path.join(dist, page.path === '/' ? '' : page.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, 'index.html'), out);
  console.log(`prerendered  ${page.path}`);
}

// sitemap.xml — indexable pages with their language alternates
const urls = PAGES.filter((p) => !p.noindex)
  .map((p) => {
    const alts = alternatesOf(p)
      .map((a) => `<xhtml:link rel="alternate" hreflang="${a.locale}" href="${abs(a.path)}"/>`)
      .join('');
    return `  <url><loc>${abs(p.path)}</loc>${alts}</url>`;
  })
  .join('\n');
writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
);
console.log('wrote        /sitemap.xml');
