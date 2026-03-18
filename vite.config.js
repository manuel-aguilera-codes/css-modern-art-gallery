import { defineConfig } from "vite";

import { resolve } from "path";

export default defineConfig({
  base: "./", //Usa rutas relativas en los enlaces generados en el HTML
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        location: resolve(__dirname, "location.html"),
      },
    },
  },
});
