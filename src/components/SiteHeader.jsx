'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { nav, site } from '@/content/site';

export default function SiteHeader() {
  const pathname = usePathname();

  // Pages are exported with a trailing slash, so /music/ has to match /music.
  const isCurrent = (href) => pathname === href || pathname === `${href}/`;

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="wordmark">
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

        {/* No-JavaScript disclosure menu for narrow screens. */}
        <details className="menu-toggle">
          <summary aria-label="Menu">Menu</summary>
          <div className="menu-panel">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isCurrent(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href={`mailto:${site.email.booking}`}>Email</Link>
          </div>
        </details>
      </div>
    </header>
  );
}
