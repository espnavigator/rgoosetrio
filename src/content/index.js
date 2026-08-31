/**
 * Picks the right language for a page.
 *
 * English lives at the root (/music/), Spanish under /es/ (/es/music/). Every
 * page component takes a `locale` and asks for its content here, so there is
 * one set of page code rather than two that can drift apart.
 */
import * as en from './site';
import * as es from './site.es';

export const LOCALES = ['en', 'es'];
export const DEFAULT_LOCALE = 'en';

const content = { en, es };

export function getContent(locale) {
  return content[locale] || content[DEFAULT_LOCALE];
}

/** Turns "/music" into "/es/music" for Spanish, and leaves English alone. */
export function localeHref(href, locale) {
  if (locale !== 'es') return href;
  if (!href || !href.startsWith('/')) return href;
  return href === '/' ? '/es' : `/es${href}`;
}

/** The same page in the other language, for the flag switcher. */
export function otherLocaleHref(pathname, locale) {
  const clean = (pathname || '/').replace(/\/$/, '') || '/';
  if (locale === 'es') {
    const stripped = clean.replace(/^\/es/, '') || '/';
    return stripped;
  }
  return clean === '/' ? '/es' : `/es${clean}`;
}
