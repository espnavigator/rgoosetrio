/**
 * Prefixes a file in /public with the site's base path.
 *
 * On GitHub Pages a project site lives at /<repo-name>/, so "/images/x.jpg" has
 * to become "/<repo-name>/images/x.jpg" or the picture silently fails to load.
 * The deploy workflow sets the prefix; locally it is empty. Always wrap image
 * and file paths in this rather than hard-coding them.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path) {
  if (!path) return '';
  // Leave anything already absolute (http, mailto, data) exactly as it is.
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) return path;
  return `${basePath}${path.startsWith('/') ? '' : '/'}${path}`;
}
