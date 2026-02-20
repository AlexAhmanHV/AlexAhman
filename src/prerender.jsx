import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const SITE_URL = "https://alexahman.se";
const OG_IMAGE = `${SITE_URL}/Alex-1200.jpg`;

const SEO = {
  sv: {
    "/": {
      title: "Systemutvecklare i Västervik | Alex Åhman",
      description:
        "Systemutvecklare i Västervik med bred fullstackkompetens. Jag bygger snabba och lättförvaltade webblösningar, från UI till API, databas och apputveckling.",
    },
    "/services": {
      title: "Tjänster | Fullstackutveckling & hemsidor i Västervik | Alex Åhman",
      description:
        "Fullstacktjänster i Västervik: webbappar, API:er, databaser, apputveckling och teknisk SEO. Struktur som skalar, prestanda som håller och kod som är lätt att förvalta.",
    },
    "/about": {
      title: "Om | Systemutvecklare i Västervik | Alex Åhman",
      description:
        "Teknisk profil med helhetsperspektiv mellan front-end och back-end. Strukturerat arbetssätt, snabb onboarding och stabil leverans. Baserad i Västervik.",
    },
    "/contact": {
      title: "Kontakt | Alex Åhman - systemutvecklare i Västervik",
      description:
        "Kontakta mig om jobb eller uppdrag inom systemutveckling. Jag finns i Västervik och svarar så snart jag kan.",
    },
    "/projects": {
      title: "Projekt | Case | Alex Åhman",
      description:
        "Utvalda projekt med fokus på teknikval, resultat och affärsnytta inom webbutveckling.",
    },
    "/hemsida-vastervik": {
      title: "Hemsida i Västervik | Webbutveckling med Alex Åhman",
      description:
        "Behöver du en hemsida i Västervik? Jag bygger snabba, moderna och sökmotorvänliga hemsidor med fokus på kvalitet, prestanda och enkel förvaltning.",
    },
    "/terms": {
      title: "Användarvillkor | Alex Åhman",
      description:
        "Användarvillkor för alexahman.se: användning av innehåll, ansvar och hur du begär tillstånd att återanvända material.",
    },
    "/privacy": {
      title: "Integritetspolicy | Alex Åhman",
      description:
        "Integritetspolicy för alexahman.se. Sidan samlar endast in uppgifter du skickar via kontaktformulär och sparar dem bara så länge det behövs.",
    },
  },

  en: {
    "/en": {
      title: "Software Developer in Västervik | Alex Åhman",
      description:
        "Software developer in Västervik with a broad full-stack profile. I build fast, maintainable web solutions from UI to APIs, databases, and app development.",
    },
    "/en/services": {
      title: "Services | Full-Stack Development | Alex Åhman",
      description:
        "Full-stack services: web apps, APIs, databases, app development, and technical SEO built for performance, clarity, and long-term maintainability.",
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
    "/en/projects": {
      title: "Projects | Case Studies | Alex Åhman",
      description:
        "Selected projects with a focus on technical decisions, outcomes, and business impact.",
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

function isSvOnly(url) {
  return url === "/hemsida-vastervik";
}

function canonicalFor(url) {
  return `${SITE_URL}${url === "/" ? "" : url}`;
}

function alternatesFor(url) {
  if (isSvOnly(url)) {
    return { svUrl: url, enUrl: null };
  }

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

  const headElements = [
    { type: "meta", props: { name: "description", content: seo.description } },
    { type: "meta", props: { property: "og:title", content: seo.title } },
    { type: "meta", props: { property: "og:description", content: seo.description } },
    { type: "meta", props: { property: "og:url", content: canonical } },
    { type: "meta", props: { property: "og:type", content: "website" } },
    { type: "meta", props: { property: "og:image", content: OG_IMAGE } },
    { type: "meta", props: { name: "twitter:card", content: "summary_large_image" } },
    { type: "meta", props: { name: "twitter:title", content: seo.title } },
    { type: "meta", props: { name: "twitter:description", content: seo.description } },
    { type: "meta", props: { name: "twitter:image", content: OG_IMAGE } },
    { type: "link", props: { rel: "canonical", href: canonical } },
    {
      type: "link",
      props: {
        rel: "alternate",
        hrefLang: "sv",
        href: `${SITE_URL}${svUrl === "/" ? "" : svUrl}`,
      },
    },
    ...(enUrl
      ? [
          {
            type: "link",
            props: {
              rel: "alternate",
              hrefLang: "en",
              href: `${SITE_URL}${enUrl}`,
            },
          },
        ]
      : []),
    { type: "link", props: { rel: "alternate", hrefLang: "x-default", href: `${SITE_URL}` } },
  ];

  const links = new Set([
    "/",
    "/services",
    "/about",
    "/contact",
    "/projects",
    "/hemsida-vastervik",
    "/terms",
    "/privacy",
    "/en",
    "/en/services",
    "/en/about",
    "/en/contact",
    "/en/projects",
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
