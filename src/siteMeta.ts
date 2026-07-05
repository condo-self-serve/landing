// Single source of truth for site-wide and per-page metadata.
// Used by the React app (document titles on client navigation) and by
// scripts/prerender.mjs (static <head>, sitemap.xml, JSON-LD, hreflang).
import { COPY, DEFAULT_LOCALE, LOCALES, localePath, parsePath, type LocaleCode } from './i18n';

export const SITE_URL = 'https://condoclar.eu';
export const APP_URL = 'https://app.condoclar.eu';
export const SITE_NAME = 'Condoclar';

export type PageKey = 'home' | 'features' | 'neighbours' | 'manifesto' | 'notFound';

/** Locale-less route for each page; locale prefixes are applied on top. */
export const PAGE_PATHS: Record<PageKey, string> = {
  home: '/',
  features: '/features/',
  neighbours: '/neighbours/',
  manifesto: '/manifesto/',
  notFound: '/404/',
};

const OG_IMAGES: Record<PageKey, string> = {
  home: '/media/hero-courtyard.jpg',
  features: '/media/feature-meeting.jpg',
  neighbours: '/media/neighbours-vendor.jpg',
  manifesto: '/media/manifesto-evening.jpg',
  notFound: '/media/hero-courtyard.jpg',
};

export interface PageMeta {
  key: PageKey;
  locale: LocaleCode;
  /** Locale-less path, e.g. '/features/'. */
  sitePath: string;
  /** Full path including locale prefix, e.g. '/pt/features/'. */
  path: string;
  title: string;
  description: string;
  ogImage: string;
  noindex?: boolean;
}

function buildPage(key: PageKey, locale: LocaleCode): PageMeta {
  const meta = COPY[locale].meta[key];
  return {
    key,
    locale,
    sitePath: PAGE_PATHS[key],
    path: localePath(locale, PAGE_PATHS[key]),
    title: meta.title,
    description: meta.description,
    ogImage: OG_IMAGES[key],
    noindex: key === 'notFound' || undefined,
  };
}

// Every prerendered page: all locales × all pages. The 404 page exists only in
// the default locale — GitHub Pages serves a single /404.html.
export const PAGES: PageMeta[] = LOCALES.flatMap((locale) =>
  (Object.keys(PAGE_PATHS) as PageKey[])
    .filter((key) => key !== 'notFound' || locale === DEFAULT_LOCALE)
    .map((key) => buildPage(key, locale)),
);

export function pageForPath(pathname: string): PageMeta {
  const { locale, path } = parsePath(pathname);
  const normalised = path.endsWith('/') ? path : `${path}/`;
  const key = (Object.keys(PAGE_PATHS) as PageKey[]).find((k) => PAGE_PATHS[k] === normalised);
  return buildPage(key ?? 'notFound', locale);
}
