/**
 * Static-export config for GitHub Pages.
 *
 * GitHub Pages serves a project repo from https://<user>.github.io/<repo>/, so every
 * link and image needs that "/<repo>" prefix. A user/org page (<user>.github.io) or a
 * custom domain (ramongoose.com) serves from the root and needs no prefix at all.
 *
 * The deploy workflow sets NEXT_PUBLIC_BASE_PATH automatically, so you normally never
 * touch this file. Locally it stays empty and the site runs at http://localhost:3000.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a plain folder of HTML/CSS/JS — no server needed, which is what Pages hosts.
  output: 'export',

  // Pages has no image-optimisation backend, so images are served as-is.
  images: { unoptimized: true },

  // Write /music/index.html rather than /music.html so Pages resolves clean URLs.
  trailingSlash: true,

  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
