import { site } from '@/content/site';

/**
 * Generates sitemap.xml at build time. Add a page to this list whenever you add
 * a page to the site, then submit https://ramongoose.co.uk/sitemap.xml once in
 * Google Search Console — after that Google re-reads it on its own.
 */
const routes = [
  { path: '/', priority: 1.0 },
  { path: '/music/', priority: 0.9 },
  { path: '/band/', priority: 0.8 },
  { path: '/tour/', priority: 0.8 },
  { path: '/cuba/', priority: 0.8 },
  { path: '/bio/', priority: 0.8 },
  { path: '/gear/', priority: 0.7 },
  { path: '/goose-pedal/', priority: 0.6 },
  { path: '/gallery/', priority: 0.6 },
  { path: '/video/', priority: 0.6 },
  { path: '/shop/', priority: 0.5 },
  { path: '/contact/', priority: 0.5 },
];

// Written out once at build time — a static export has no server to generate it
// on the fly.
export const dynamic = 'force-static';

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified,
    changeFrequency: r.path === '/' ? 'weekly' : 'monthly',
    priority: r.priority,
  }));
}
