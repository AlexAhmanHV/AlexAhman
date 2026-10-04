import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { ROUTES, REDIRECTS, SITE_URL } from "./routes";

// Titel, meta, canonical, språkalternativ och JSON-LD sätts av sidorna själva
// via <Seo> och <Helmet>. Här samlas det Helmet producerade under
// serverrenderingen in och skrivs in i den statiska HTML:en, så att sökmotorer
// ser exakt samma head som webbläsaren efter hydrering.

function normalizeUrl(url) {
  if (!url) return "/";
  const clean = (url.startsWith("/") ? url : `/${url}`).replace(/\/+$/, "");
  return clean || "/";
}

function decodeEntities(str) {
  return str
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function redirectPage(path) {
  const target = `${SITE_URL}${REDIRECTS[path]}`;
  return {
    html: `<p>Sidan har flyttat till <a href="${REDIRECTS[path]}">${target}</a>.</p>`,
    head: {
      lang: "sv",
      title: "Sidan har flyttat | Alexander Åhman",
      elements: new Set([
        { type: "meta", props: { "http-equiv": "refresh", content: `0; url=${target}` } },
        { type: "link", props: { rel: "canonical", href: target } },
      ]),
    },
  };
}

export async function prerender({ url }) {
  const path = normalizeUrl(url);
  if (REDIRECTS[path]) return redirectPage(path);

  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={path}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const title = decodeEntities(helmet.title.toString().replace(/<[^>]+>/g, ""));
  const lang = helmet.htmlAttributes.toString().match(/lang="([^"]+)"/)?.[1] ?? (path.startsWith("/en") ? "en" : "sv");

  return {
    html,
    head: {
      lang,
      title,
      elements: new Set([helmet.meta.toString(), helmet.link.toString(), helmet.script.toString()]),
    },
    links: new Set([...ROUTES, ...Object.keys(REDIRECTS)]),
  };
}
