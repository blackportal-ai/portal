// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';
import expressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import rehypeMermaid from 'rehype-mermaid';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    rehypePlugins: [rehypeMermaid],
  },

  integrations: [react(), expressiveCode(), mdx()],
});
