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
      title: "Fullstackutvecklare i Västervik | Alexander Åhman",
      description:
        "Fullstackutvecklare i Västervik som bygger riktiga digitala system över gränssnitt, API:er, data, integrationer, drift och produktflöden.",
    },
    "/services": {
      title: "Tjänster | Fullstackutveckling | Alexander Åhman",
      description:
        "Fullstacktjänster inom React, Laravel, API:er, PostgreSQL, Python-baserade dataflöden, automation och teknisk produktplanering.",
    },
    "/about": {
      title: "Om mig | Alexander Åhman",
      description:
        "Om Alexander Åhman, fullstackutvecklare i Västervik med fokus på produktnära system, React, Laravel, API:er, data och praktisk leverans.",
    },
    "/contact": {
      title: "Kontakt | Alexander Åhman",
      description:
        "Kontakta Alexander Åhman i Västervik om fullstackutveckling, konsultuppdrag, React, Laravel, API:er, dataflöden och produktnära system.",
    },
    "/projects": {
      title: "Projekt | Case | Alexander Åhman",
      description:
        "Utvalda fullstackprojekt inom bokningssystem, datapipelines, React-gränssnitt, Laravel, PostgreSQL, Python och drift.",
    },
    "/projects/venueflow": {
      title: "VenueFlow case | Bokningssystem i Laravel | Alexander Åhman",
      description:
        "Case om VenueFlow: ett multi-tenant bokningssystem byggt i Laravel, PostgreSQL och Supabase med RBAC, konfliktkontroll och publik gästbokning.",
    },
    "/projects/fx-monitor": {
      title: "FX Monitor case | Datapipeline och React-dashboard | Alexander Åhman",
      description:
        "Case om FX Monitor: React- och TypeScript-dashboard med Python-pipeline, ECB-data, statiska JSON-filer och GitHub Actions.",
    },
    "/projects/lordagsgolf": {
      title: "Lördagsgolf case | React-webbplats med tydligt informationsflöde | Alexander Åhman",
      description:
        "Case om Lördagsgolf: publik React- och Vite-webbplats med tydlig informationshierarki, responsiva vyer och fokuserade CTA:er.",
    },
    "/fullstackutvecklare-vastervik": {
      title: "Fullstackutvecklare Västervik | Alexander Åhman",
      description:
        "Fullstackutvecklare i Västervik för webbappar, API:er, databaser, Laravel, React, PostgreSQL och produktnära systemutveckling.",
      svOnly: true,
    },
    "/webbutvecklare-vastervik": {
      title: "Webbutvecklare Västervik | Alexander Åhman",
      description:
        "Webbutvecklare i Västervik som bygger moderna webbplatser, webbappar, React-gränssnitt, API-kopplingar och tekniska lösningar för företag.",
      svOnly: true,
    },
    "/react-utvecklare-vastervik": {
      title: "React-utvecklare Västervik | Alexander Åhman",
      description:
        "React-utvecklare i Västervik för webbappar, komponentbaserade gränssnitt, TypeScript, Vite, API-integrationer och produktnära frontend.",
      svOnly: true,
    },
    "/react-laravel-utvecklare": {
      title: "React- och Laravel-utvecklare | Alexander Åhman",
      description:
        "React- och Laravel-utvecklare som bygger webbappar, API:er, adminflöden och databaser med tydlig koppling mellan frontend och backend.",
      svOnly: true,
    },
    "/laravel-utvecklare": {
      title: "Laravel-utvecklare | API, PostgreSQL och bokningssystem | Alexander Åhman",
      description:
        "Laravel-utvecklare som bygger API:er, adminflöden, bokningslogik, PostgreSQL-databaser, behörighet och produktnära backends.",
      svOnly: true,
    },
    "/konsult-systemutvecklare": {
      title: "Konsult systemutvecklare | Fullstack | Alexander Åhman",
      description:
        "Konsult inom systemutveckling och fullstackutveckling för team som behöver hjälp med React, Laravel, API:er, databaser, dataflöden och teknisk uppstart.",
      svOnly: true,
    },
    "/hemsida-vastervik": {
      title: "Hemsida Västervik | Webbutveckling och hemsidor | Alex Åhman",
      description:
        "Behöver du hjälp med hemsida i Västervik? Jag bygger snabba, moderna och sökmotorvänliga hemsidor för företag i Västervik med fokus på kvalitet, prestanda och enkel förvaltning.",
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
      title: "Software Developer in Västervik | Alexander Åhman",
      description:
        "Full-stack software developer in Västervik building real digital systems across UI, APIs, data, integrations, deployment, and product workflows.",
    },
    "/en/services": {
      title: "Services | Full-Stack Development | Alexander Ahman",
      description:
        "Full-stack development services across React, Laravel, APIs, PostgreSQL, Python data flows, automation, and technical product planning.",
    },
    "/en/about": {
      title: "About | Alexander Ahman",
      description:
        "About Alexander Ahman, a full-stack developer in Västervik focused on product-facing systems, React, Laravel, APIs, data, and practical delivery.",
    },
    "/en/contact": {
      title: "Contact | Alexander Ahman",
      description:
        "Contact Alexander Ahman in Västervik about full-stack development, consulting work, React, Laravel, APIs, data flows, and product-facing systems.",
    },
    "/en/projects": {
      title: "Projects | Case Studies | Alexander Ahman",
      description:
        "Selected full-stack project work covering booking systems, data pipelines, React interfaces, Laravel, PostgreSQL, Python, and deployment.",
    },
    "/en/projects/venueflow": {
      title: "VenueFlow case | Laravel booking system | Alexander Ahman",
      description:
        "Case study for VenueFlow: a multi-tenant booking system built with Laravel, PostgreSQL, Supabase, RBAC, conflict checks, and public guest booking.",
    },
    "/en/projects/fx-monitor": {
      title: "FX Monitor case | Data pipeline and React dashboard | Alexander Ahman",
      description:
        "Case study for FX Monitor: React and TypeScript dashboard with a Python pipeline, ECB data, static JSON files, and GitHub Actions.",
    },
    "/en/projects/lordagsgolf": {
      title: "Lördagsgolf case | React website with clear information flow | Alexander Ahman",
      description:
        "Case study for Lördagsgolf: public React and Vite website with clear information hierarchy, responsive views, and focused CTAs.",
    },
    "/en/fullstack-developer-vastervik": {
      title: "Full-stack developer Västervik | Alexander Ahman",
      description:
        "Full-stack developer in Västervik building web apps, APIs, databases, Laravel, React, PostgreSQL, and product-facing systems.",
      enOnly: true,
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
  return url === "/hemsida-vastervik" || Boolean(SEO.sv[url]?.svOnly);
}

function isEnOnly(url) {
  return Boolean(SEO.en[url]?.enOnly);
}

function canonicalFor(url) {
  return `${SITE_URL}${url === "/" ? "" : url}`;
}

function alternatesFor(url) {
  if (isSvOnly(url)) {
    return { svUrl: url, enUrl: null, xDefaultUrl: url };
  }

  if (isEnOnly(url)) {
    return { svUrl: null, enUrl: url, xDefaultUrl: url };
  }

  const enUrl = url === "/" ? "/en" : url.startsWith("/en") ? url : `/en${url}`;
  const svUrl =
    url === "/en" ? "/" : url.startsWith("/en/") ? url.replace(/^\/en/, "") : url;

  return { svUrl: svUrl || "/", enUrl, xDefaultUrl: svUrl || "/" };
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

  const { svUrl, enUrl, xDefaultUrl } = alternatesFor(path);
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
    ...(svUrl
      ? [
          {
            type: "link",
            props: {
              rel: "alternate",
              hrefLang: "sv",
              href: `${SITE_URL}${svUrl === "/" ? "" : svUrl}`,
            },
          },
        ]
      : []),
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
    {
      type: "link",
      props: {
        rel: "alternate",
        hrefLang: "x-default",
        href: `${SITE_URL}${xDefaultUrl === "/" ? "" : xDefaultUrl}`,
      },
    },
  ];

  const links = new Set([
    "/",
    "/services",
    "/about",
    "/contact",
    "/projects",
    "/projects/venueflow",
    "/projects/fx-monitor",
    "/projects/lordagsgolf",
    "/hemsida-vastervik",
    "/fullstackutvecklare-vastervik",
    "/webbutvecklare-vastervik",
    "/react-utvecklare-vastervik",
    "/react-laravel-utvecklare",
    "/laravel-utvecklare",
    "/konsult-systemutvecklare",
    "/terms",
    "/privacy",
    "/en",
    "/en/services",
    "/en/about",
    "/en/contact",
    "/en/projects",
    "/en/projects/venueflow",
    "/en/projects/fx-monitor",
    "/en/projects/lordagsgolf",
    "/en/fullstack-developer-vastervik",
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
