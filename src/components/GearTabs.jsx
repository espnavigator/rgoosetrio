/**
 * The two halves of the gear section: Ramon's guitars, Joe's basses.
 *
 * This is a plain pair of links rather than a drop-down menu. A menu that
 * opens on hover is unusable on a phone, and one that opens on tap needs
 * JavaScript to close again — whereas two tabs are obvious, work with no
 * script at all, and show you where you are without having to open anything.
 */
import Link from 'next/link';
import { localeHref } from '@/content';

export default function GearTabs({ locale = 'en', current, labels }) {
  const tabs = [
    { key: 'guitar', href: '/gear', label: labels.guitar },
    { key: 'bass', href: '/gear/bass', label: labels.bass },
    { key: 'sale', href: '/gear/for-sale', label: labels.sale },
  ];

  return (
    <nav className="geartabs" aria-label={labels.aria}>
      {tabs.map((t) => (
        <Link
          key={t.key}
          href={localeHref(t.href, locale)}
          className="geartabs__tab"
          aria-current={t.key === current ? 'page' : undefined}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
