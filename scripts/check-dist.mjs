// Kontrollerar det byggda dist/ mot adresslistan i routes.js:
// att varje sida finns, att interna länkar går till riktiga adresser och inte
// till gamla omdirigerade adresser, att sitemapen bara innehåller ROUTES och
// att det delade Lördagsgolf-caset pekar sin canonical mot utvecklarspåret.
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { ROUTES, SITE_URL, redirectTarget } from "../src/routes.js";

const DIST = "dist";
const errors = [];

function htmlFileFor(route) {
  return route === "/" ? join(DIST, "index.html") : join(DIST, route, "index.html");
}

function isFileInDist(path) {
  const file = join(DIST, decodeURIComponent(path));
  return existsSync(file) && statSync(file).isFile();
}

// Tar bort avslutande snedstreck, men lämnar "/" orörd.
function normalize(path) {
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

// 1. Varje adress i ROUTES har en egen HTML-fil.
const pages = [];
for (const route of ROUTES) {
  const file = htmlFileFor(route);
  if (existsSync(file)) pages.push([route, readFileSync(file, "utf8")]);
  else errors.push(`saknar sida: ${route} (${file})`);
}

// 2 och 3. Interna länkar går till ROUTES, en fil i dist/ eller /exempel/,
// och aldrig till en adress som omdirigeras.
for (const [route, html] of pages) {
  for (const [, raw] of html.matchAll(/href="(\/[^"]*)"/g)) {
    if (raw.startsWith("//")) continue;
    const path = raw.replace(/[?#].*$/, "");
    if (path === "") continue;
    if (redirectTarget(path)) {
      errors.push(`länk till omdirigerad adress på ${route}: ${raw}`);
      continue;
    }
    if (ROUTES.includes(normalize(path)) || path.startsWith("/exempel/") || isFileInDist(path)) continue;
    errors.push(`okänd intern länk på ${route}: ${raw}`);
  }
}

// 4. Sitemapen innehåller bara adresser från ROUTES.
const sitemapFile = join(DIST, "sitemap.xml");
if (existsSync(sitemapFile)) {
  const sitemap = readFileSync(sitemapFile, "utf8");
  for (const [, loc] of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const path = normalize(loc.replace(SITE_URL, "") || "/");
    if (!ROUTES.includes(path)) errors.push(`okänd adress i sitemap: ${loc}`);
  }
} else {
  errors.push("saknar dist/sitemap.xml");
}

// 5. Lördagsgolf under /hemsidor pekar sin canonical mot utvecklarcaset.
// Helmet lägger till data-rh="true" i taggen, så attributen matchas var för sig.
const golfFile = join(DIST, "hemsidor", "exempel", "lordagsgolf", "index.html");
const golfCanonical = `${SITE_URL}/systemutveckling/projekt/lordagsgolf`;
const golfHtml = existsSync(golfFile) ? readFileSync(golfFile, "utf8") : "";
const canonical = golfHtml.match(/<link[^>]*\brel="canonical"[^>]*\bhref="([^"]*)"/)?.[1];
if (canonical !== golfCanonical) {
  errors.push(`fel canonical på /hemsidor/exempel/lordagsgolf: ${canonical ?? "saknas"}, väntade: ${golfCanonical}`);
}

if (errors.length) {
  console.error(`dist FEL (${errors.length}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`dist OK: ${pages.length} sidor`);
