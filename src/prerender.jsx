import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

// Ändra om du vill
const SITE_URL = "https://alexahman.se";

const SEO = {
  sv: {
    "/": {
      title: "Systemutvecklare i Västervik | Alex Åhman",
      description:
        "Systemutvecklare i Västervik med bred fullstackkompetens. Jag bygger snabba, hållbara webblösningar med tydlig struktur och stabil leverans.",
    },
    "/services": {
      title: "Tjänster | Alex Åhman",
      description:
        "Fullstacktjänster: frontend, backend, API:er, databaser, CMS och teknisk SEO. Fokus på prestanda, kvalitet och förvaltbar kod.",
    },
    "/about": {
      title: "Om | Alex Åhman",
      description:
        "Teknisk profil: helhetsperspektiv, strukturerat arbetssätt och stabil leverans. Jag trivs mellan front-end och back-end.",
    },
    "/contact": {
      title: "Kontakt | Alex Åhman",
      description:
        "Kontakta mig för uppdrag eller jobb inom systemutveckling. Baserad i Västervik.",
    },
    "/terms": {
      title: "Villkor | Alex Åhman",
      description: "Användarvillkor för webbplatsen.",
    },
    "/privacy": {
      title: "Integritet | Alex Åhman",
      description: "Integritetspolicy och information om datalagring.",
    },
  },
  en: {
    "/en": {
      title: "Software Developer in Västervik | Alex Åhman",
      description:
        "Software developer in Västervik with broad full-stack skills. I build fast, maintainable web solutions with clear structure and reliable delivery.",
    },
    "/en/services": {
      title: "Services | Alex Åhman",
      description:
        "Full-stack services: front end, back end, APIs, databases, CMS, and technical SEO—built for performance and maintainability.",
    },
    "/en/about": {
      title: "About | Alex Åhman",
      description:
        "Technical profile: end-to-end perspective, structured execution, and stable delivery across modern web development.",
    },
    "/en/contact": {
      title: "Contact | Alex Åhman",
      description:
        "Get in touch about work or projects. Based in Västervik, Sweden.",
    },
    "/en/terms": {
      title: "Terms | Alex Åhman",
      description: "Terms of use for this website.",
    },
    "/en/privacy": {
      title: "Privacy | Alex Åhman",
      description: "Privacy policy and data retention information.",
    },
  },
};

function normalizeUrl(url) {
  // Plugin skickar ofta med url som "/about" osv.
  if (!url) return "/";
  return url.startsWith("/") ? url : `/${url}`;
}

function isEnglish(url) {
  return url === "/en" || url.startsWith("/en/");
}

function canonicalFor(url) {
  return `${SITE_URL}${url === "/" ? "" : url}`;
}

function alternatesFor(url) {
  // / <-> /en
  const enUrl =
    url === "/" ? "/en" : url.startsWith("/en") ? url : `/en${url}`;
  const svUrl = url === "/en" ? "/" : url.startsWith("/en/") ? url.replace(/^\/en/, "") : url;

  return { svUrl: svUrl || "/", enUrl };
}

export async function prerender({ url }) {
  const path = normalizeUrl(url);
  const lang = isEnglish(path) ? "en" : "sv";

  const seo =
    (SEO[lang] && SEO[lang][path]) ||
    (lang === "en" ? SEO.en["/en"] : SEO.sv["/"]);

  // Om du använder Helmet inne i dina komponenter senare, plockar vi upp det här:
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { svUrl, enUrl } = alternatesFor(path);
  const canonical = canonicalFor(path);

  // Helmet (om du lägger till det i sidor senare)
  const helmet = helmetContext.helmet;
  const helmetTitle = helmet?.title?.toString?.() || "";
  const helmetMeta = helmet?.meta?.toString?.() || "";
  const helmetLinks = helmet?.link?.toString?.() || "";

  // Pluginets "head.elements" tar objekt (type/props) – bra för meta/links.
  const headElements = new Set([
    { type: "meta", props: { name: "description", content: seo.description } },

    // Open Graph
    { type: "meta", props: { property: "og:title", content: seo.title } },
    { type: "meta", props: { property: "og:description", content: seo.description } },
    { type: "meta", props: { property: "og:url", content: canonical } },
    { type: "meta", props: { property: "og:type", content: "website" } },

    // Canonical + hreflang
    { type: "link", props: { rel: "canonical", href: canonical } },
    { type: "link", props: { rel: "alternate", hrefLang: "sv", href: `${SITE_URL}${svUrl === "/" ? "" : svUrl}` } },
    { type: "link", props: { rel: "alternate", hrefLang: "en", href: `${SITE_URL}${enUrl}` } },
    { type: "link", props: { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}` } },
  ]);

  // Viktigt: returnera också länkar så pluginet kan crawla vidare (valfritt när du redan listar routes i vite.config)
  const links = new Set([
    "/",
    "/services",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
    "/en",
    "/en/services",
    "/en/about",
    "/en/contact",
    "/en/terms",
    "/en/privacy",
  ]);

  return {
    html,

    // Sätt språk + title i <head>
    head: {
      lang,
      title: seo.title,
      elements: headElements,
    },

    // Om du börjar använda Helmet i dina sidor kan du även injicera strängarna:
    // (pluginet stödjer elements bäst, men detta ger dig Helmet-output i html om du vill)
    // Vi lägger in Helmet-taggarna i html för säkerhets skull:
    // OBS: håller det enkelt – du kan ta bort detta om du bara kör head.elements.
    // (Lämnar kvar som kommentar för att inte dubbla meta)
    // html: `${helmetTitle}${helmetMeta}${helmetLinks}${html}`,

    links,
  };
}
