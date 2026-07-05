// Prerenders every route in src/siteMeta.ts to static HTML in dist/, with
// per-page <head> (meta, OpenGraph, JSON-LD) and extracted antd styles — so
// GitHub Pages serves real, crawlable HTML that then hydrates into React.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');

const { render, PAGES, FAQ, SITE_URL, SITE_NAME, APP_URL } = await import(
  path.join(root, 'dist-ssr', 'entry-server.js')
);

const template = readFileSync(path.join(dist, 'index.html'), 'utf-8');

const abs = (p) => SITE_URL.replace(/\/$/, '') + p;

function jsonLd(page) {
  const graph = [
    {
      '@type': 'WebPage',
      '@id': abs(page.path),
      url: abs(page.path),
      name: page.title,
      description: page.description,
      inLanguage: 'en',
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  ];
  if (page.path === '/') {
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
        mainEntity: FAQ.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    );
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>`;
}

function headFor(page) {
  const canonical = abs(page.path);
  const og = abs(page.ogImage);
  return [
    `<meta name="description" content="${page.description.replace(/"/g, '&quot;')}" />`,
    page.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${page.title.replace(/"/g, '&quot;')}" />`,
    `<meta property="og:description" content="${page.description.replace(/"/g, '&quot;')}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${page.title.replace(/"/g, '&quot;')}" />`,
    `<meta name="twitter:description" content="${page.description.replace(/"/g, '&quot;')}" />`,
    `<meta name="twitter:image" content="${og}" />`,
    jsonLd(page),
  ].join('\n    ');
}

function renderPage(page) {
  const { html, styleText } = render(page.path);
  return template
    .replace('<title>Condoclar</title>', `<title>${page.title}</title>`)
    .replace('<!--app-head-->', `${headFor(page)}\n    ${styleText}`)
    .replace('<!--app-html-->', html);
}

for (const page of PAGES) {
  const out = renderPage(page);
  if (page.path === '/404/') {
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

// sitemap.xml — indexable pages only
const urls = PAGES.filter((p) => !p.noindex)
  .map((p) => `  <url><loc>${abs(p.path)}</loc></url>`)
  .join('\n');
writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log('wrote        /sitemap.xml');
