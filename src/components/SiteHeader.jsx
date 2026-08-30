'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/content/site';

export default function SiteHeader() {
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Pages are exported with a trailing slash, so /music/ has to match /music.
  const isCurrent = (href) => pathname === href || pathname === `${href}/`;

  const closeMenu = useCallback(() => {
    if (menuRef.current) menuRef.current.open = false;
  }, []);

  // Next.js changes pages without reloading the browser, so the <details> menu
  // would otherwise stay open over the top of the page you just navigated to.
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  // Escape, and clicking anywhere off the menu, both shut it — what anyone
  // expects from a dropdown.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenu();
    };
    const onPointerDown = (event) => {
      const el = menuRef.current;
      // A click on the button itself is inside the element, so it still toggles.
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
        <Link href="/" className="wordmark" onClick={closeMenu}>
          Ramón Goose <span>&amp; The Compadres</span>
        </Link>

        <nav className="nav" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* A disclosure menu for narrow screens. It still opens and closes with
            no JavaScript at all; the script only adds the closing behaviour. */}
        <details className="menu-toggle" ref={menuRef}>
          <summary aria-label="Menu">Menu</summary>
          <div className="menu-panel">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
    </header>
  );
}
