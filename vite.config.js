import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { resolve } from "node:path";
import { ROUTES, REDIRECTS, SITE_URL } from "./src/routes.js";

// sitemap.xml skrivs vid varje bygge från samma adresslista som förrenderas,
// så att den aldrig hamnar ur fas med sajten. Omdirigeringar tas inte med.
function sitemapPlugin() {
  return {
    name: "sitemap",
    apply: "build",
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10);
      const urls = ROUTES.map(
        (path) => `  <url><loc>${SITE_URL}${path === "/" ? "/" : path}</loc><lastmod>${lastmod}</lastmod></url>`,
      ).join("\n");
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: resolve(__dirname, "src/prerender.jsx"),
      additionalPrerenderRoutes: [...ROUTES, ...Object.keys(REDIRECTS)],
    }),
    sitemapPlugin(),
  ],
});
