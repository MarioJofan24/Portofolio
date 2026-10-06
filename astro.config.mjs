// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import homeData from './src/data/home.json';


const siteUrl = process.env.SITE_URL || homeData.siteUrl || undefined;
// Sub-path for project sites (e.g. GitHub Pages: /Portofolio). Unset = root.
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  // `site` must be the origin only; the sub-path goes in `base`.
  site: siteUrl ? new URL(siteUrl).origin : undefined,
  base,
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), sitemap()]
});
