import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://jankeli.github.io',
  base: '/v1',
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha'
    }
  },
  integrations: [mdx(), sitemap()]
});
