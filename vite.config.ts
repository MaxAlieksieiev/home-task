import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: 'core', replacement: path.resolve(__dirname, './src/core') },
      { find: 'pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: 'components', replacement: path.resolve(__dirname, './src/components') },
      { find: 'utils', replacement: path.resolve(__dirname, './src/utils') },
      { find: 'layouts', replacement: path.resolve(__dirname, './src/layouts') },
      { find: 'context', replacement: path.resolve(__dirname, './src/context') },
      { find: 'hooks', replacement: path.resolve(__dirname, './src/hooks') },
    ],
  },
});
