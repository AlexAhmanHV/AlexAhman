import { Helmet } from "react-helmet-async";

function normalizePath(pathname) {
  if (!pathname) return "/";
  const clean = pathname.replace(/\/+$/, "") || "/";
  return clean;
}

function buildUrl(siteUrl, pathname) {
  const base = siteUrl.replace(/\/+$/, "");
  const path = normalizePath(pathname);
  return `${base}${path === "/" ? "" : path}`;
}

export default function Seo({
  lang, // "sv" | "en"
  pathname, // e.g. "/" or "/services" or "/en/services"
  title,
  description,
  siteUrl, // e.g. "https://alexahman.se"
}) {
  const canonical = buildUrl(siteUrl, pathname);

  // Language alternates: sv lives on "/", en on "/en"
  const svPath = pathname.startsWith("/en") ? pathname.replace(/^\/en/, "") || "/" : pathname;
  const enPath = svPath === "/" ? "/en" : `/en${svPath}`;

  const svUrl = buildUrl(siteUrl, svPath);
  const enUrl = buildUrl(siteUrl, enPath);

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />

      <link rel="canonical" href={canonical} />

      <link rel="alternate" hrefLang="sv" href={svUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={svUrl} />
    </Helmet>
  );
}
