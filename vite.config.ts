import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { UserConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  base: '/lab1-react-vite-gh-pages',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: '/./src/setupTests.ts',
    css: true,
  } as UserConfig,
});
