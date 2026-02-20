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
        title: "Lördagsgolf",
        status: "Live site",
        summary:
          "Frontend-projekt byggt som en SPA med tydlig informationsstruktur och användarvänlig presentation för besökare.",
        impact: "Visar förmåga att leverera en publik webbplats med tydligt innehållsflöde och praktisk användarnytta.",
        stack: "JavaScript, React, JSX, react-router-dom, Tailwind CSS v4, Vite, ESLint",
        image: "/projects/lordagsgolf.svg",
        imageAlt: "Förhandsbild av Lördagsgolf",
        href: "https://lordagsgolf.se/",
        linkText: "Besök webbplats",
        external: true,
      },
      {
        title: "Music Insights Hub",
        status: "Live app",
        summary:
          "Fullstack-projekt byggt som en monorepo med ett React-baserat frontend och ett Spring Boot-baserat backend för att analysera musikdata och presentera insikter på ett tydligt sätt.",
        impact:
          "Visar förmåga att leverera en komplett datadriven webbapplikation med både API-lager, databasmigreringar och modern, interaktiv visualisering i UI.",
        stack: "Java 21, Spring Boot 3, PostgreSQL, Flyway, React, TypeScript, Vite, MUI, Recharts, Framer Motion",
        image: "/projects/music-insights-hub.svg",
        imageAlt: "Förhandsbild av Music Insights Hub",
        href: "https://music-insights-hub.onrender.com/",
        linkText: "Öppna appen",
        external: true,
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
        title: "Lördagsgolf",
        status: "Live site",
        summary:
          "Frontend project built as a SPA with clear information architecture and a user-friendly presentation for visitors.",
        impact: "Demonstrates ability to deliver a public-facing website with clear content flow and practical user value.",
        stack: "JavaScript, React, JSX, react-router-dom, Tailwind CSS v4, Vite, ESLint",
        image: "/projects/lordagsgolf.svg",
        imageAlt: "Preview image of Lördagsgolf",
        href: "https://lordagsgolf.se/",
        linkText: "Visit website",
        external: true,
      },
      {
        title: "Music Insights Hub",
        status: "Live app",
        summary:
          "Full-stack project built as a monorepo with a React-based frontend and a Spring Boot-based backend to analyze music data and present insights clearly.",
        impact:
          "Demonstrates ability to deliver a complete data-driven web application with an API layer, database migrations, and modern interactive UI visualization.",
        stack: "Java 21, Spring Boot 3, PostgreSQL, Flyway, React, TypeScript, Vite, MUI, Recharts, Framer Motion",
        image: "/projects/music-insights-hub.svg",
        imageAlt: "Preview image of Music Insights Hub",
        href: "https://music-insights-hub.onrender.com/",
        linkText: "Open app",
        external: true,
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
                <div className="projectThumb">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                </div>
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
