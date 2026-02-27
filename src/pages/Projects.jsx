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
          "Frontend-projekt byggt som en SPA med tydlig informationsstruktur, fokuserad innehållshierarki och användarvänlig presentation för besökare som snabbt behöver hitta rätt information om banan, upplägg och kontaktvägar, med särskilt fokus på läsbarhet, tydliga call-to-actions och stabil upplevelse i både mobil och desktop.",
        impact: "Visar förmåga att leverera en publik webbplats med tydligt innehållsflöde och praktisk användarnytta.",
        stack: "JavaScript, React, JSX, react-router-dom, Tailwind CSS v4, Vite, ESLint",
        image: "/projects/lordagsgolf.svg",
        imageAlt: "Förhandsbild av Lördagsgolf",
        href: "https://lordagsgolf.se/",
        linkText: "Besök webbplats",
        external: true,
      },
      {
        title: "FX Monitor",
        status: "Live app",
        summary:
          "Fullstack-/data-projekt byggt som en monorepo med ett React/TypeScript-baserat frontend och en Python-baserad datapipeline som hämtar och publicerar ECB-växelkurser som statiska JSON-filer för visualisering och analys.",
        impact:
          "Visar förmåga att leverera en komplett datadriven webbapplikation utan backend-drift, med automatiserad datainsamling, daglig CI-uppdatering, robust KPI-beräkning och modern interaktiv UX (jämförelseläge, riskdiagram, tvåspråkighet och tema-stöd).",
        stack: "Python 3.11, requests, pytest, ruff, GitHub Actions, React, TypeScript, Vite, Chart.js, Render Static Site",
        image: "/projects/fx-monitor.svg",
        imageAlt: "Förhandsbild av FX Monitor",
        href: "https://fx-monitor-tlpr.onrender.com",
        linkText: "Öppna appen",
        external: true,
      },
      {
        title: "VenueFlow",
        status: "Live app",
        summary:
          "Multi-tenant bokningsplattform för aktivitets- och restaurangmiljöer med publik gästbokning utan konto, intern admin/staff-panel, RBAC och robust konfliktkontroll för resurser och tider.",
        impact:
          "Visar förmåga att bygga en affärsnära SaaS-lösning med tenant-isolering, transaktionssäker bokningslogik, tidszonshantering och deployment mot Supabase + Render.",
        stack: "Laravel 11, PHP 8.3, PostgreSQL (Supabase), Blade, Tailwind, Alpine.js, Policies/Gates, Mailables, Render",
        image: "/projects/venueflow.svg",
        imageAlt: "Förhandsbild av VenueFlow",
        href: "https://venueflow-wjh1.onrender.com/",
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
          "Frontend project built as a SPA with clear information architecture, focused content hierarchy, and a user-friendly presentation for visitors who need to quickly find key details about the course, setup, and contact paths, with emphasis on readability, clear calls to action, and a consistent experience across mobile and desktop.",
        impact: "Demonstrates ability to deliver a public-facing website with clear content flow and practical user value.",
        stack: "JavaScript, React, JSX, react-router-dom, Tailwind CSS v4, Vite, ESLint",
        image: "/projects/lordagsgolf.svg",
        imageAlt: "Preview image of Lördagsgolf",
        href: "https://lordagsgolf.se/",
        linkText: "Visit website",
        external: true,
      },
      {
        title: "FX Monitor",
        status: "Live app",
        summary:
          "Full-stack/data project built as a monorepo with a React/TypeScript frontend and a Python-based data pipeline that fetches and publishes ECB exchange rates as static JSON files for visualization and analysis.",
        impact:
          "Demonstrates the ability to deliver a complete data-driven web application without backend operations, with automated data collection, daily CI updates, robust KPI calculations, and a modern interactive UX (comparison mode, risk charts, bilingual support, and theme support).",
        stack: "Python 3.11, requests, pytest, ruff, GitHub Actions, React, TypeScript, Vite, Chart.js, Render Static Site",
        image: "/projects/fx-monitor.svg",
        imageAlt: "Preview image of FX Monitor",
        href: "https://fx-monitor-tlpr.onrender.com",
        linkText: "Open app",
        external: true,
      },
      {
        title: "VenueFlow",
        status: "Live app",
        summary:
          "Multi-tenant booking platform for activity and restaurant venues with public guest booking without accounts, internal admin/staff panels, RBAC, and robust resource conflict control.",
        impact:
          "Demonstrates ability to deliver a business-facing SaaS product with tenant isolation, transaction-safe booking logic, timezone handling, and deployment on Supabase + Render.",
        stack: "Laravel 11, PHP 8.3, PostgreSQL (Supabase), Blade, Tailwind, Alpine.js, Policies/Gates, Mailables, Render",
        image: "/projects/venueflow.svg",
        imageAlt: "Preview image of VenueFlow",
        href: "https://venueflow-wjh1.onrender.com/",
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
