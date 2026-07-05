import { createContext, useContext } from 'react';
import type { Copy } from './types';
import en from './en';
import pt from './pt';
import es from './es';
import fr from './fr';
import it from './it';
import de from './de';

export type LocaleCode = 'en' | 'pt' | 'es' | 'fr' | 'it' | 'de';

/** English lives at the root; every other locale under its prefix. */
export const DEFAULT_LOCALE: LocaleCode = 'en';
export const LOCALES: LocaleCode[] = ['en', 'pt', 'es', 'fr', 'it', 'de'];

export const COPY: Record<LocaleCode, Copy> = { en, pt, es, fr, it, de };

/** localStorage key remembering an explicit language choice. Shared with the
 *  inline redirect script in index.html — keep the two in sync. */
export const LANG_STORAGE_KEY = 'condoclar-lang';

/** Prefix a site-relative path ('/features/') for a locale. */
export function localePath(locale: LocaleCode, path: string): string {
  return locale === DEFAULT_LOCALE ? path : `/${locale}${path}`;
}

/** Split a pathname into its locale and the locale-less site path. */
export function parsePath(pathname: string): { locale: LocaleCode; path: string } {
  const match = pathname.match(/^\/(pt|es|fr|it|de)(\/.*)?$/);
  if (match) {
    return { locale: match[1] as LocaleCode, path: match[2] || '/' };
  }
  return { locale: DEFAULT_LOCALE, path: pathname || '/' };
}

export const LocaleContext = createContext<LocaleCode>(DEFAULT_LOCALE);

export function useLocale(): LocaleCode {
  return useContext(LocaleContext);
}

export function useCopy(): Copy {
  return COPY[useContext(LocaleContext)];
}

export type { Copy };
