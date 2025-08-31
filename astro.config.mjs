// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
  output: "server",
  build: {
    // Ensure consistent asset handling
    assets: "_astro",
    inlineStylesheets: "auto",
  },
  vite: {
    // Ensure consistent build behavior
    build: {
      cssCodeSplit: false, // Keep CSS in single file for consistency
      rollupOptions: {
        output: {
          manualChunks: undefined, // Prevent chunk splitting issues
        },
      },
    },
    css: {
      // Ensure consistent CSS processing
      postcss: true,
    },
  },
});
