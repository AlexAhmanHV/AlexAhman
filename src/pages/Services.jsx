import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Tjänster",
    title: "Det jag kan hjälpa till med",
    lede: "Bred fullstackkompetens med fokus på tydlig struktur och stabil leverans.",
    localKicker: "Lokalt i Västervik",
    localTitle: "Hemsida i Västervik",
    localText:
      "Söker du en lokal partner för hemsida och vidareutveckling? Läs mer om upplägg, fokus och leverans nedan.",
    localCta: "Jag behöver en hemsida i Västervik med omnejd",
    items: [
      ["React & JavaScript", "Komponentbaserad UI och moderna webbappar."],
      ["PHP & Laravel", "Backendutveckling, validering och API:er."],
      ["SQL & databaser", "Datamodellering, queries och tydlig struktur."],
      ["C# & .NET", "Grundläggande erfarenhet av utveckling i C#/.NET."],
      ["WordPress", "Teman, innehåll och enklare anpassningar."],
      ["SEO", "Grundläggande on-page-arbete i webbprojekt."],
    ],
  },

  en: {
    kicker: "Services",
    title: "What I can help with",
    lede: "Broad full-stack skills with a focus on clear structure and reliable delivery.",
    items: [
      ["React & JavaScript", "Component-based UI and modern web apps."],
      ["PHP & Laravel", "Back-end development, validation, and APIs."],
      ["SQL & databases", "Data modeling, queries, and clear structure."],
      ["C# & .NET", "Foundational experience with C#/.NET development."],
      ["WordPress", "Themes, content, and light customization."],
      ["SEO", "Foundational on-page SEO work in web projects."],
    ],
  },
};

export default function Services({ lang }) {
  const t = copy[lang] || copy.sv;

  const pathname = lang === "en" ? "/en/services" : "/services";

  const seoTitle =
    lang === "en"
      ? "Services | Full-Stack Development | Alexander Åhman"
      : "Tjänster | Fullstackutveckling | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Full-stack development services: React, Laravel/PHP, SQL, C#/.NET, WordPress, and technical SEO—focused on performance and maintainability."
      : "Tjänster inom fullstackutveckling: React, Laravel/PHP, SQL, C#/.NET, WordPress och teknisk SEO – med fokus på prestanda och hållbar struktur.";

  return (
    <>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{t.kicker}</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            {t.title}
          </h1>
          <p className="lede">{t.lede}</p>

          {lang === "sv" ? (
            <aside className="localSpotlight localSpotlightSlim">
              <div className="kicker">{t.localKicker}</div>
              <h3>{t.localTitle}</h3>
              <p>{t.localText}</p>
              <div className="row" style={{ marginTop: 12 }}>
                <Link className="btn btn-outline" to="/hemsida-vastervik">
                  {t.localCta}
                </Link>
              </div>
            </aside>
          ) : null}

          <div className="grid cols-3" style={{ marginTop: 20 }}>
            {t.items.map(([title, desc]) => (
              <div className="card" key={title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
