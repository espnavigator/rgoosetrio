'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { otherLocaleHref } from '@/content';

/**
 * Flags are drawn as SVG rather than written as emoji. Emoji flags do not
 * render on Windows at all — they come out as the bare letters "GB" and "ES" —
 * and this is the one control on the site that has to be recognisable at a
 * glance to someone who cannot read the language it is currently in.
 */
function UnionFlag() {
  return (
    <svg viewBox="0 0 60 30" className="flag" aria-hidden="true" focusable="false">
      <clipPath id="uk-clip">
        <rect width="60" height="30" />
      </clipPath>
      <g clipPath="url(#uk-clip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 60,30 M60,0 0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 60,30 M60,0 0,30"
          stroke="#C8102E"
          strokeWidth="4"
          clipPath="url(#uk-clip)"
        />
        <path d="M30,0 30,30 M0,15 60,15" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 30,30 M0,15 60,15" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}

function SpanishFlag() {
  return (
    <svg viewBox="0 0 60 30" className="flag" aria-hidden="true" focusable="false">
      <rect width="60" height="30" fill="#AA151B" />
      <rect y="7.5" width="60" height="15" fill="#F1BF00" />
    </svg>
  );
}

export default function LanguageSwitcher({ locale }) {
  const pathname = usePathname();
  const target = otherLocaleHref(pathname, locale);

  // The link always shows the language you would be switching TO.
  const toSpanish = locale !== 'es';

  return (
    <Link
      href={target}
      className="lang-switch"
      hrefLang={toSpanish ? 'es' : 'en'}
      lang={toSpanish ? 'es' : 'en'}
      aria-label={toSpanish ? 'Ver este sitio en español' : 'View this site in English'}
      title={toSpanish ? 'Español' : 'English'}
    >
      {toSpanish ? <SpanishFlag /> : <UnionFlag />}
      <span>{toSpanish ? 'ES' : 'EN'}</span>
    </Link>
  );
}
