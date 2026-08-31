'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getContent, localeHref } from '@/content';
import LanguageSwitcher from './LanguageSwitcher';

export default function SiteHeader() {
  const pathname = usePathname();
  // The URL is the source of truth for language: /es/... is Spanish.
  const locale = pathname && pathname.startsWith('/es') ? 'es' : 'en';
  const menuRef = useRef(null);
  const { nav, site } = getContent(locale);

  // Pages are exported with a trailing slash, so /music/ has to match /music.
  const isCurrent = (href) => {
    const target = localeHref(href, locale);
    return pathname === target || pathname === `${target}/`;
  };

  const closeMenu = useCallback(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, []);

  // Next.js changes pages without reloading the browser, so the <details> menu
  // would otherwise stay open over the top of the page you just navigated to.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Escape, and clicking anywhere off the menu, both shut it.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    const onPointerDown = (event) => {
      const el = menuRef.current;
      if (el && el.open && !el.contains(event.target)) closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [closeMenu]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={localeHref('/', locale)} className="wordmark" onClick={closeMenu}>
          <span className="wordmark__long">Ramón Goose</span>
          <span className="wordmark__short">RG</span>{' '}
          <span className="wordmark__band">&amp; The Compadres</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={localeHref(item.href, locale)}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <LanguageSwitcher locale={locale} />

          {/* A disclosure menu for narrow screens. It still opens and closes
              with no JavaScript at all; the script only adds the closing. */}
          <details className="menu-toggle" ref={menuRef}>
            <summary aria-label="Menu">Menu</summary>
            <div className="menu-panel">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={localeHref(item.href, locale)}
                  onClick={closeMenu}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <a href={`mailto:${site.email.booking}`} onClick={closeMenu}>
                Email
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
