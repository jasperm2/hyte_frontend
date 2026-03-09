import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        bmi: resolve(__dirname, 'bmi.html'),
        viikoteh: resolve(__dirname, 'viikkotehtavat.html'),
        login: resolve(__dirname, 'login.html'),      
        diary: resolve(__dirname, 'paivakirja.html'),
      },
    },
  },
  // Public base path could be set here too:
  //base: '/~jasperm/hyte/',
  base: './',
});
