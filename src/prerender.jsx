import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const SITE_URL = "https://alexahman.se";

const SEO = {
  sv: {
    "/": {
      title: "Systemutvecklare i Västervik | Alex Åhman",
      description:
        "Systemutvecklare i Västervik med bred fullstackkompetens. Jag bygger snabba och lättförvaltade webblösningar – från UI till API, databas och CMS.",
    },
    "/services": {
      title: "Tjänster | Fullstackutveckling & hemsidor i Västervik | Alex Åhman",
      description:
        "Fullstacktjänster i Västervik: webbappar, API:er, databaser, CMS och teknisk SEO. Struktur som skalar, prestanda som håller och kod som är lätt att förvalta.",
    },
    "/about": {
      title: "Om | Systemutvecklare i Västervik | Alex Åhman",
      description:
        "Teknisk profil med helhetsperspektiv mellan front-end och back-end. Strukturerat arbetssätt, snabb onboarding och stabil leverans. Baserad i Västervik.",
    },
    "/contact": {
      title: "Kontakt | Alex Åhman – systemutvecklare i Västervik",
      description:
        "Kontakta mig om jobb eller uppdrag inom systemutveckling. Jag finns i Västervik och svarar så snart jag kan.",
    },
    "/terms": {
      title: "Användarvillkor | Alex Åhman",
      description:
        "Användarvillkor för alexahman.se: användning av innehåll, ansvar och hur du begär tillstånd att återanvända material.",
    },
    "/privacy": {
      title: "Integritetspolicy | Alex Åhman",
      description:
        "Integritetspolicy för alexahman.se. Sidan samlar endast in uppgifter du skickar via kontaktformuläret och sparar dem bara så länge det behövs.",
    },
  },

  en: {
    "/en": {
      title: "Software Developer in Västervik | Alex Åhman",
      description:
        "Software developer in Västervik with a broad full-stack profile. I build fast, maintainable web solutions—from UI to APIs, databases, and CMS.",
    },
    "/en/services": {
      title: "Services | Full-Stack Development | Alex Åhman",
      description:
        "Full-stack services: web apps, APIs, databases, CMS, and technical SEO—built for performance, clarity, and long-term maintainability.",
    },
    "/en/about": {
      title: "About | Alex Åhman",
      description:
        "Technical profile with an end-to-end perspective across front end and back end. I build reliable solutions that are easy to maintain and evolve.",
    },
    "/en/contact": {
      title: "Contact | Alex Åhman",
      description:
        "Get in touch about roles or projects in software development. Based in Västervik, Sweden.",
    },
    "/en/terms": {
      title: "Terms of Use | Alex Åhman",
      description:
        "Terms of use for alexahman.se: content usage, liability, and how to request permission to reuse material.",
    },
    "/en/privacy": {
      title: "Privacy Policy | Alex Åhman",
      description:
        "Privacy policy for alexahman.se. This site only collects information you submit through the contact form and keeps it only as needed.",
    },
  },
};

function normalizeUrl(url) {
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
  const enUrl = url === "/" ? "/en" : url.startsWith("/en") ? url : `/en${url}`;
  const svUrl =
    url === "/en" ? "/" : url.startsWith("/en/") ? url.replace(/^\/en/, "") : url;

  return { svUrl: svUrl || "/", enUrl };
}

export async function prerender({ url }) {
  const path = normalizeUrl(url);
  const lang = isEnglish(path) ? "en" : "sv";

  const seo =
    (SEO[lang] && SEO[lang][path]) ||
    (lang === "en" ? SEO.en["/en"] : SEO.sv["/"]);

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

  const headElements = new Set([
    { type: "meta", props: { name: "description", content: seo.description } },

    // Open Graph
    { type: "meta", props: { property: "og:title", content: seo.title } },
    { type: "meta", props: { property: "og:description", content: seo.description } },
    { type: "meta", props: { property: "og:url", content: canonical } },
    { type: "meta", props: { property: "og:type", content: "website" } },

    // Canonical + hreflang
    { type: "link", props: { rel: "canonical", href: canonical } },
    {
      type: "link",
      props: {
        rel: "alternate",
        hrefLang: "sv",
        href: `${SITE_URL}${svUrl === "/" ? "" : svUrl}`,
      },
    },
    {
      type: "link",
      props: {
        rel: "alternate",
        hrefLang: "en",
        href: `${SITE_URL}${enUrl}`,
      },
    },
    { type: "link", props: { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}` } },
  ]);

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
    head: {
      lang,
      title: seo.title,
      elements: headElements,
    },
    links,
  };
}
