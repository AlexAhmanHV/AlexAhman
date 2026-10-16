import { Helmet } from "react-helmet-async";
import { businessJsonLd } from "./business";
import { langAlternates } from "./paths";

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
  pathname, // e.g. "/" or "/systemutveckling/om"
  canonicalPath, // ersätter pathname i canonical och og:url när den anges
  title,
  description,
  siteUrl, // e.g. "https://alexahman.se"
  svOnly: svOnlyProp = false,
  alternateSvPath,
  alternateEnPath,
  xDefaultPath,
  image = "/Alex-1200.jpg", // share image path
  type = "website", // og:type, "article" for guides
}) {
  const canonical = buildUrl(siteUrl, canonicalPath ?? pathname);
  const ogImage = buildUrl(siteUrl, image);

  // Språkalternativ från paths.js, om inte anroparen anger dem explicit.
  // Med canonicalPath följer alternativen den kanoniska adressen.
  const alternates = langAlternates(canonicalPath ?? pathname);
  const svPath = alternateSvPath !== undefined ? alternateSvPath : alternates.sv;
  const enPath = alternateEnPath !== undefined ? alternateEnPath : alternates.en;
  const defaultPath = xDefaultPath !== undefined ? xDefaultPath : svPath;

  const svOnly = svOnlyProp || !enPath;
  const svUrl = svPath ? buildUrl(siteUrl, svPath) : null;
  const enUrl = enPath ? buildUrl(siteUrl, enPath) : null;
  const xDefaultUrl = defaultPath ? buildUrl(siteUrl, defaultPath) : canonical;

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content={lang === "en" ? "en_US" : "sv_SE"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="canonical" href={canonical} />

      {svUrl ? <link rel="alternate" hrefLang="sv" href={svUrl} /> : null}
      {!svOnly && enUrl ? <link rel="alternate" hrefLang="en" href={enUrl} /> : null}
      <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />

      <script type="application/ld+json">{JSON.stringify(businessJsonLd)}</script>
    </Helmet>
  );
}
