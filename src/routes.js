// Alla publika adresser på sajten, byggda från paths.js. Används av
// vite.config.js (vilka sidor som förrenderas), prerender.jsx (länkar att följa)
// och sitemapen som skrivs vid bygget. Nya sidor läggs till i paths.js, annars
// får de ingen egen HTML-fil och ger 404 vid direktbesök.

import { PAGES, DEV_CASES, HEMSIDOR_CASES, devCasePath, hemsidorCasePath } from "./paths.js";

export const SITE_URL = "https://alexahman.se";

export const ROUTES = [
  ...Object.values(PAGES).flatMap((page) => (page.en ? [page.sv, page.en] : [page.sv])),
  ...DEV_CASES.flatMap((slug) => [devCasePath(slug), devCasePath(slug, "en")]),
  ...HEMSIDOR_CASES.map(hemsidorCasePath),
];

// Alla nio gamla case-slugs. brod-och-deli och ankarsrums-jsk är hemsidecase,
// resten är utvecklarcase.
const OLD_CASES = ["venueflow", "fx-monitor", "lordagsgolf", "fairway", "kommunfotboll", "kvitt", "flagforge", "brod-och-deli", "ankarsrums-jsk"];
const OLD_HEMSIDOR_CASES = ["brod-och-deli", "ankarsrums-jsk"];

// Gamla adresser som slagits ihop. 301:an sätts i Render (Redirects/Rewrites)
// och fungerar bara om ingen fil finns på adressen, så de förrenderas inte.
// I appen omdirigerar React Router dit (App.jsx). Alla mål är slutmål, inga kedjor.
export const REDIRECTS = {
  "/hemsida-vastervik": "/hemsidor",
  "/priser": "/hemsidor/priser",
  "/guide/hemsida-for-lokala-foretag": "/hemsidor/guide",
  "/services": "/systemutveckling",
  "/about": "/systemutveckling/om",
  "/contact": "/systemutveckling/kontakt",
  "/projects": "/systemutveckling/projekt",
  "/fullstackutvecklare-vastervik": "/systemutveckling",
  "/webbutvecklare-vastervik": "/hemsidor",
  "/en/services": "/en/software-development",
  "/en/about": "/en/software-development/about",
  "/en/contact": "/en/software-development/contact",
  "/en/projects": "/en/software-development/projects",
  "/en/fullstack-developer-vastervik": "/en/software-development",
  "/react-utvecklare-vastervik": "/systemutveckling",
  "/react-laravel-utvecklare": "/systemutveckling",
  "/laravel-utvecklare": "/systemutveckling",
  "/konsult-systemutvecklare": "/systemutveckling",
};

for (const slug of OLD_CASES) {
  const isHemsida = OLD_HEMSIDOR_CASES.includes(slug);
  REDIRECTS[`/projects/${slug}`] = isHemsida ? hemsidorCasePath(slug) : devCasePath(slug);
  REDIRECTS[`/en/projects/${slug}`] = isHemsida ? hemsidorCasePath(slug) : devCasePath(slug, "en");
}

// Slår upp en adress i REDIRECTS. Ett avslutande snedstreck ignoreras, men "/" lämnas orörd.
export function redirectTarget(pathname) {
  const path = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return REDIRECTS[path] ?? null;
}
