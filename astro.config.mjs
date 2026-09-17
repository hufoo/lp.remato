// @ts-check
import { defineConfig } from 'astro/config';

// Published at https://lp.remato.ivelico.com (GitHub Pages).
// Override with SITE_URL at build time when deploying elsewhere.
export default defineConfig({
  site: process.env.SITE_URL || 'https://lp.remato.ivelico.com',
  compressHTML: true,
  markdown: {
    // Legal texts must render exactly as written: no quote/dash substitution.
    smartypants: false,
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
