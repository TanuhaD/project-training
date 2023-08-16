// vite.config.js
import { defineConfig } from 'vite';
// import htmlPlugin from "vite-plugin-html";
import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import postcssNesting from 'postcss-nesting';
import path from 'path';

export default defineConfig({
  base: 'https://demchenko.online/barbershop',
  plugins: [
    // htmlPlugin({
    //   // Add your configuration options here (see options below).
    // }),
    handlebars({
      partialDirectory: resolve(__dirname, 'src', 'partials'),
    }),
  ],
  css: {
    postcss: {
      plugins: [postcssNesting],
    },
  },
});
