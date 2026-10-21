import { fileURLToPath } from "node:url";
import { defineConfig, mergeConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config.js';

export default mergeConfig(
   viteConfig,
   defineConfig({
      test: { 
        environment: 'jsdom',
        include: ['tests/{unit,integration}/**/*.{test,spec}.js'],
        exclude: [...configDefaults.exclude, 'tests/e2e/**'],
        root: fileURLToPath(new URL('./', import.meta.url)),
      },
  }),
);