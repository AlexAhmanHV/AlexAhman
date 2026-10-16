import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";
import { pagePath } from "../paths";

import { SITE_URL } from "../routes";

// Delad startsida utan meny och sidfot. Platshållare tills den riktiga
// tvådelade startsidan byggs.
const copy = {
  sv: {
    title: "Alexander Åhman – hemsidor och systemutveckling i Västervik",
    description: "Hemsidor för företag och föreningar i Västervik, och systemutveckling med React, Laravel och PostgreSQL.",
    hemsidor: "Hemsidor för företag",
    dev: "Systemutveckling",
  },
  en: {
    title: "Alexander Ahman – websites and software development in Västervik",
    description: "Websites for local businesses in Västervik, and software development with React, Laravel, and PostgreSQL.",
    hemsidor: "Websites for businesses (in Swedish)",
    dev: "Software development",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alexander Åhman",
  url: SITE_URL,
  inLanguage: ["sv", "en"],
};

export default function SplitHome({ lang }) {
  const t = copy[lang] || copy.sv;

  return (
    <main className="pageShell routeTransition" data-page-shell>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
      </Helmet>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pagePath("home", lang)}
        title={t.title}
        description={t.description}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp" style={{ borderTop: "none" }}>
        <div className="container">
          <h1 className="h2">{t.title}</h1>
          <div className="row" style={{ marginTop: 18 }}>
            <Link className="btn" to={pagePath("hemsidor")}>
              {t.hemsidor}
            </Link>
            <Link className="btn btn-home-outline" to={pagePath("dev", lang)}>
              {t.dev}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
