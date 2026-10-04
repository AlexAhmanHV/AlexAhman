// Alla publika adresser på sajten. Används av vite.config.js (vilka sidor som
// förrenderas), prerender.jsx (länkar att följa) och sitemapen som skrivs vid
// bygget. Lägg till nya sidor här, annars får de ingen egen HTML-fil och ger
// 404 vid direktbesök.

export const SITE_URL = "https://alexahman.se";

const CASES = ["venueflow", "fx-monitor", "lordagsgolf", "fairway", "kommunfotboll", "kvitt", "flagforge", "brod-och-deli", "ankarsrums-jsk"];

export const ROUTES = [
  "/",
  "/services",
  "/about",
  "/contact",
  "/projects",
  ...CASES.map((slug) => `/projects/${slug}`),
  "/hemsida-vastervik",
  "/guide/hemsida-for-lokala-foretag",
  "/fullstackutvecklare-vastervik",
  "/webbutvecklare-vastervik",
  "/terms",
  "/privacy",
  "/en",
  "/en/services",
  "/en/about",
  "/en/contact",
  "/en/projects",
  ...CASES.map((slug) => `/en/projects/${slug}`),
  "/en/fullstack-developer-vastervik",
  "/en/terms",
  "/en/privacy",
];

// Gamla adresser som slagits ihop. 301:an sätts i Render (Redirects/Rewrites)
// och fungerar bara om ingen fil finns på adressen, så de förrenderas inte.
// I appen omdirigerar React Router dit (App.jsx).
export const REDIRECTS = {
  "/react-utvecklare-vastervik": "/fullstackutvecklare-vastervik",
  "/react-laravel-utvecklare": "/fullstackutvecklare-vastervik",
  "/laravel-utvecklare": "/fullstackutvecklare-vastervik",
  "/konsult-systemutvecklare": "/fullstackutvecklare-vastervik",
};
