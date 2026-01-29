import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { metaImagesPlugin } from "./vite-plugin-meta-images";
import mdx from "@mdx-js/rollup";

export default defineConfig({
  base: "/",
  plugins: [
    mdx({
      jsxImportSource: "react",
      providerImportSource: "@mdx-js/react",
    }),
    react(),
    runtimeErrorOverlay(),
    tailwindcss(),
    metaImagesPlugin(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
    },
  },

  root: path.resolve(import.meta.dirname, "client"),

  server: {
    host: "0.0.0.0",
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
  },
});