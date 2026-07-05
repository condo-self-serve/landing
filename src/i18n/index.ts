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

/** Cookie shared across *.condoclar.eu so the app (app.condoclar.eu) opens in
 *  the same language the visitor used on the landing site — and vice versa
 *  (the app's language detector reads and caches the same cookie). */
export const LANG_COOKIE = 'condoclar-lang';

export function readLangCookie(): LocaleCode | null {
  const match = document.cookie.match(/(?:^|;\s*)condoclar-lang=([a-z]{2})/);
  return match && (LOCALES as string[]).includes(match[1]) ? (match[1] as LocaleCode) : null;
}

/**
 * Persist the visitor's language where both sites can see it.
 * - explicit (switcher click): store in localStorage (stops auto-redirects)
 *   and always (re)write the domain cookie — latest choice wins everywhere.
 * - implicit (page view): only seed the cookie if none exists yet, so the
 *   detected first-visit language reaches the app, but following a shared
 *   /pt/ link later never silently flips an existing preference.
 */
export function persistLocale(code: LocaleCode, opts: { explicit?: boolean } = {}): void {
  try {
    if (opts.explicit) {
      localStorage.setItem(LANG_STORAGE_KEY, code);
    } else if (readLangCookie()) {
      return;
    }
    const domain = location.hostname.endsWith('condoclar.eu') ? '; domain=.condoclar.eu' : '';
    const secure = location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${LANG_COOKIE}=${code}; path=/; max-age=31536000; SameSite=Lax${domain}${secure}`;
  } catch {
    /* storage unavailable — the choice just won't persist */
  }
}

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
