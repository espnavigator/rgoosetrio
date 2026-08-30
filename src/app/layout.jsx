import { Archivo, Source_Serif_4 } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import { site } from '@/content/site';
import './globals.css';

// Archivo is the closest widely-available face to the letterspaced Helvetica
// Bold Oblique on the sleeve. The fonts are downloaded at build time and served
// from the site itself, so there is no call out to Google when a visitor loads.
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-archivo',
  display: 'swap',
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    // Both the home title and every sub-page title carry "Cuban Electric
    // Guitar" — it is the phrase the whole site is trying to own.
    default: `${site.artist} — ${site.tagline} | Official Site`,
    template: `%s — ${site.artist} | ${site.tagline}`,
  },
  description: site.description,
  keywords: [
    'Ramon Goose',
    'Cuban electric guitar',
    'Cuban guitarist',
    'son cubano guitar',
    'Ramon Goose and The Compadres',
    'EGREM Santiago de Cuba',
    'English guitarist Cuban music',
  ],
  authors: [{ name: site.artist, url: site.url }],
  creator: site.artist,
  // Tells Google that this address is the real one, so the .com and the old
  // WordPress page cannot compete with it as duplicates.
  alternates: { canonical: '/' },
  openGraph: {
    title: `${site.artist} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.artist,
    type: 'profile',
    locale: 'en_GB',
    images: [
      {
        url: '/og-image.png',
        width: 512,
        height: 512,
        alt: `${site.band} — I Left My Blues In Cuba`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.artist} — ${site.tagline}`,
    description: site.description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport = {
  themeColor: '#d02e1a',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${serif.variable}`}>
      <body>
        <JsonLd />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
