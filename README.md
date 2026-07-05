# Condoclar Landing

The Condoclar marketing site — React 18 + Ant Design 5 (the same stack as the app), **prerendered to static HTML** so GitHub Pages serves real, crawlable pages for SEO and AI scrapers, which then hydrate into a normal React SPA.

## Pages

| Route | Purpose |
|---|---|
| `/` | The Why — Sinek-style golden circle, emotional core, FAQ (with FAQPage JSON-LD) |
| `/features/` | The What — every feature framed by the benefit it gives the community |
| `/neighbours/` | The shared vendor directory story — neighbours helping neighbours |
| `/manifesto/` | Seven beliefs behind the product |

## How prerendering works

`npm run build` runs three steps:

1. `vite build` — normal client bundle into `dist/`
2. `vite build --ssr src/entry-server.tsx` — a server render function into `dist-ssr/`
3. `node scripts/prerender.mjs` — renders every route in `src/siteMeta.ts` to
   `dist/<route>/index.html` with per-page meta, OpenGraph, JSON-LD and the
   antd styles extracted via `@ant-design/cssinjs` (`extractStyle`), plus
   `sitemap.xml` and a GitHub-Pages `404.html`.

Per-page metadata lives in **`src/siteMeta.ts`** — the single source of truth used by both the prerenderer and the client-side `HeadSync` component.

## Develop

```bash
npm install
npm run dev        # Vite dev server (CSR only — prerendering happens at build)
npm run build      # full static build into dist/
npm run preview    # serve the built site locally
```

## Deploy

Push to `main` — `.github/workflows/deploy.yml` builds and publishes `dist/` to GitHub Pages. In the repo settings, set **Pages → Source → GitHub Actions**.

For a custom domain, add a `public/CNAME` file and update `SITE_URL` in `src/siteMeta.ts` (also referenced in `public/robots.txt`). If instead the site is served from `https://<user>.github.io/<repo>/`, set `base: '/<repo>/'` in `vite.config.ts`.

## Media

Images in `public/media/` were generated with fal.ai (Nano Banana Pro), then resized to 1920px progressive JPEG via `sharp-cli`. Keep the visual language consistent when adding more: warm golden-hour documentary style, Mediterranean condominium life, muted palette with deep navy and amber accents, no text in image.
