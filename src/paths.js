// Central adressmodul för de två spåren (/hemsidor och /systemutveckling).
// Ren data och funktioner, inga React-importer, så att routing, prerender,
// nav och SEO kan dela samma källa.

export const PAGES = {
  home: { sv: "/", en: "/en" },
  hemsidor: { sv: "/hemsidor" },
  hemsidorPriser: { sv: "/hemsidor/priser" },
  hemsidorExempel: { sv: "/hemsidor/exempel" },
  hemsidorGuide: { sv: "/hemsidor/guide" },
  hemsidorGuideKostnad: { sv: "/hemsidor/guide/vad-kostar-en-hemsida" },
  hemsidorGuideWebbutik: { sv: "/hemsidor/guide/webbutik" },
  hemsidorKontakt: { sv: "/hemsidor/kontakt" },
  dev: { sv: "/systemutveckling", en: "/en/software-development" },
  devProjekt: { sv: "/systemutveckling/projekt", en: "/en/software-development/projects" },
  devOm: { sv: "/systemutveckling/om", en: "/en/software-development/about" },
  devKontakt: { sv: "/systemutveckling/kontakt", en: "/en/software-development/contact" },
  privacy: { sv: "/privacy", en: "/en/privacy" },
  terms: { sv: "/terms", en: "/en/terms" },
};

export const DEV_CASES = ["venueflow", "fx-monitor", "fairway", "kommunfotboll", "kvitt", "flagforge", "lordagsgolf"];
export const HEMSIDOR_CASES = ["brod-och-deli", "ankarsrums-jsk", "lordagsgolf"];

export function pagePath(id, lang = "sv") {
  const page = PAGES[id];
  if (!page) throw new Error(`Okänd sida: ${id}`);
  return (lang === "en" && page.en) || page.sv;
}

export function devCasePath(slug, lang = "sv") {
  return `${pagePath("devProjekt", lang)}/${slug}`;
}

export function hemsidorCasePath(slug) {
  return `${pagePath("hemsidorExempel")}/${slug}`;
}

// Adress -> { sv, en }, byggd från sidorna och utvecklarcasen.
const LOOKUP = new Map();
function register(pair) {
  LOOKUP.set(pair.sv, pair);
  if (pair.en) LOOKUP.set(pair.en, pair);
}
for (const page of Object.values(PAGES)) register({ sv: page.sv, en: page.en ?? null });
for (const slug of DEV_CASES) register({ sv: devCasePath(slug), en: devCasePath(slug, "en") });
for (const slug of HEMSIDOR_CASES) register({ sv: hemsidorCasePath(slug), en: null });

// Tar bort avslutande snedstreck, men lämnar "/" orörd.
function normalize(pathname) {
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

export function langAlternates(pathname) {
  const path = normalize(pathname);
  const pair = LOOKUP.get(path);
  return pair ? { sv: pair.sv, en: pair.en } : { sv: path, en: null };
}

export function toggleLangPath(pathname) {
  const path = normalize(pathname);
  const { sv, en } = langAlternates(path);
  if (path === en) return sv;
  if (en) return en;
  // Okänd eller enbart svensk adress: /en för svenska, / för engelska.
  return path === "/en" || path.startsWith("/en/") ? "/" : "/en";
}
