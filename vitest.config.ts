import { defineConfig } from 'vitest/config';

/** Node tests for the content compiler (no DOM). */
export default defineConfig({
  test: {
    environment: 'node',
    include: ['__tests__/**/*.{test,spec}.ts'],
  },
});
