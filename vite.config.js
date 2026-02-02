import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { resolve } from "node:path";

const routes = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/hemsida-vastervik",
  "/terms",
  "/privacy",
  "/en",
  "/en/services",
  "/en/about",
  "/en/contact",
  "/en/terms",
  "/en/privacy",
];

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: resolve(__dirname, "src/prerender.jsx"),
      additionalPrerenderRoutes: routes,
    }),
  ],
});
