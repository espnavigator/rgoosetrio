import { site } from '@/content/site';

/**
 * Generates robots.txt at build time.
 *
 * Everything is open to every crawler on purpose. The old .com was answering
 * automated requests with an HTTP 503 and a Retry-After header — that is a
 * Cloudflare or security-plugin behaviour, and to a search engine it reads as
 * "the site is down, come back later", which is why it was not being indexed
 * properly. GitHub Pages does no bot filtering at all, so simply moving hosts
 * removes that problem. Do not put a challenge or a firewall rule in front of
 * this site.
 */
// Required so the file is written out once at build time rather than served by
// a running server, which a static export does not have.
export const dynamic = 'force-static';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
