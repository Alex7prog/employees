import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@common': path.resolve(__dirname, 'src/common'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@features': path.resolve(__dirname, 'src/features'),
    },
  },
});
