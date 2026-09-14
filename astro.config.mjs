import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ml.martin-trajkovski.it',
  integrations: [sitemap()],
});
