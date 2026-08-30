import Link from 'next/link';
import { nav, site } from '@/content/site';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <h2 className="display">Ramón Goose</h2>
            <p style={{ color: 'rgba(243,232,213,0.72)', fontSize: '0.95rem' }}>
              {site.description}
            </p>
          </div>

          <div>
            <h2 className="display">Pages</h2>
            <ul className="footer__list">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display">Elsewhere</h2>
            <ul className="footer__list">
              {site.social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="display">Contact</h2>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${site.email.booking}`}>Bookings</a>
              </li>
              <li>
                <a href={`mailto:${site.email.press}`}>Press</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__legal">
          <p>
            &copy; {year} {site.artist}. All rights reserved.
          </p>
          <p>Recorded at EGREM Studios, Santiago de Cuba.</p>
        </div>
      </div>
    </footer>
  );
}
