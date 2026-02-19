import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Portfolio",
    title: "Case och projekt",
    lede:
      "Här visar jag konkreta leveranser med fokus på teknikval, effekt och hur lösningen skapar affärsnytta.",
    items: [
      {
        title: "Interaktiv casinodemo",
        status: "Live demo",
        summary:
          "Frontend-prototyp byggd i React för att demonstrera spelmekanik, state-flöde och UI-logik i en snabb, spelbar upplevelse.",
        impact: "Visar förmåga att bygga interaktiv produktlogik med tydlig komponentstruktur.",
        stack: "React, JavaScript, UI state management",
        href: "/casinodemo/",
        linkText: "Öppna demo",
        external: true,
      },
      {
        title: "alexahman.se (denna sajt)",
        status: "Produktionssatt",
        summary:
          "Flerspråkig portfolio med prerendering, teknisk SEO, metadata och strukturerad intern länkning för bättre indexering.",
        impact: "Byggd för snabb laddning, tydlig konvertering och bättre synlighet i lokala sökningar.",
        stack: "React, Vite, prerender, schema.org",
        href: "/",
        linkText: "Till startsidan",
        external: false,
      },
      {
        title: "Lokal landningssida: Hemsida Västervik",
        status: "SEO-fokuserad",
        summary:
          "Nischad landningssida för lokal sökintention med tydligt budskap, konverteringsfokus och relevant metadata.",
        impact: "Ökar chansen att synas på lokala tjänstesökningar med högre köpintention.",
        stack: "Content strategy, on-page SEO, conversion copy",
        href: "/hemsida-vastervik",
        linkText: "Se landningssidan",
        external: false,
      },
    ],
    ctaTitle: "Vill du att nästa case blir ditt projekt?",
    ctaText:
      "Skicka dina mål och nuläge så återkommer jag med ett konkret upplägg för vad som bör byggas först.",
    ctaPrimary: "Kontakta mig",
    ctaSecondary: "Se tjänster",
  },
  en: {
    kicker: "Portfolio",
    title: "Case studies and projects",
    lede:
      "Concrete delivery examples with a focus on technical decisions, outcomes, and business impact.",
    items: [
      {
        title: "Interactive casino demo",
        status: "Live demo",
        summary:
          "React-based front-end prototype built to demonstrate game mechanics, state flow, and UI logic in a playable format.",
        impact: "Demonstrates ability to build interactive product logic with a clear component structure.",
        stack: "React, JavaScript, UI state management",
        href: "/casinodemo/",
        linkText: "Open demo",
        external: true,
      },
      {
        title: "alexahman.se (this website)",
        status: "Production",
        summary:
          "Bilingual portfolio with prerendering, technical SEO, metadata, and clean internal linking for indexing.",
        impact: "Built for fast load times, better conversion, and stronger local search visibility.",
        stack: "React, Vite, prerender, schema.org",
        href: "/en",
        linkText: "Go to homepage",
        external: false,
      },
      {
        title: "Local landing page: Website Västervik",
        status: "SEO-focused",
        summary:
          "Dedicated landing page aligned with local search intent, conversion-first messaging, and relevant metadata.",
        impact: "Improves visibility for local service queries with stronger buying intent.",
        stack: "Content strategy, on-page SEO, conversion copy",
        href: "/hemsida-vastervik",
        linkText: "View landing page",
        external: false,
      },
    ],
    ctaTitle: "Want your project to be the next case?",
    ctaText:
      "Share your goals and current setup, and I will propose a concrete first-step implementation plan.",
    ctaPrimary: "Contact me",
    ctaSecondary: "View services",
  },
};

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;
  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

export default function Projects({ lang }) {
  const t = copy[lang] || copy.sv;

  const pathname = lang === "en" ? "/en/projects" : "/projects";

  const seoTitle =
    lang === "en"
      ? "Projects | Case Studies | Alexander Åhman"
      : "Projekt | Case | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Selected project work: interactive demos, multilingual web implementation, and SEO-focused landing pages."
      : "Utvalda projekt: interaktiva demos, flerspråkig webbutveckling och SEO-fokuserade landningssidor.";

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

          <div className="projectGrid">
            {t.items.map((item) => (
              <article className="projectCard" key={item.title}>
                <div className="projectThumb" aria-hidden="true" />
                <div className="projectBody">
                  <span className="projectBadge">{item.status}</span>
                  <h3 style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>{item.title}</h3>
                  <p style={{ marginTop: 8 }}>{item.summary}</p>
                  <p style={{ marginTop: 8 }}>
                    <b>Impact:</b> {item.impact}
                  </p>
                  <p style={{ marginTop: 8, fontSize: 13 }}>
                    <b>Stack:</b> {item.stack}
                  </p>

                  <div className="row" style={{ marginTop: 12 }}>
                    {!item.external ? (
                      <Link className="btn btn-outline" to={item.href}>
                        {item.linkText}
                      </Link>
                    ) : (
                      <a className="btn btn-outline" href={item.href} target="_blank" rel="noreferrer">
                        {item.linkText}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="homeFinal" style={{ marginTop: 24 }}>
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{t.ctaTitle}</h2>
            <p className="lede">{t.ctaText}</p>
            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pathFor(lang, "contact")}>
                {t.ctaPrimary}
              </Link>
              <Link className="btn btn-home-outline" to={pathFor(lang, "services")}>
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
