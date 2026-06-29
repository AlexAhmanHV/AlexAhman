import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Case archive",
    title: "Projekt som visar systemtänk i praktiken",
    lede:
      "Tre leveranser där värdet sitter i mer än ytan: bokningslogik, datapipelines, innehållsflöden, drift och gränssnitt som går att använda.",
    labels: {
      problem: "Problem",
      solution: "Lösning",
      stack: "Teknik",
      signal: "Vad projektet visar",
      details: "Detaljer",
    },
    items: [
      {
        index: "01",
        title: "VenueFlow",
        meta: "multi-tenant booking / Laravel / live app",
        problem:
          "En verksamhetsnära bokningsprodukt behöver hantera gäster, resurser, tider, personalroller och konflikter utan att skapa friktion för användaren.",
        solution:
          "Jag byggde en Laravel-baserad plattform med publik bokning utan konto, admin- och staff-vyer, RBAC, tenant-isolering och transaktionssäker kontroll av bokningskrockar.",
        signal:
          "Visar att jag kan bygga system där affärsregler, datamodell och vardagsflöden måste sitta ihop, inte bara ett snyggt frontendskal.",
        details: ["Tenant-isolering", "Rollbaserad åtkomst", "Konfliktkontroll", "Tidszonshantering", "Supabase + Render"],
        stack: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Blade", "Tailwind", "Alpine.js", "Render"],
        casePath: "projects/venueflow",
        href: "https://venueflow-wjh1.onrender.com/",
        linkText: "Öppna appen",
      },
      {
        index: "02",
        title: "FX Monitor",
        meta: "data pipeline / TypeScript / static delivery",
        problem:
          "Växelkurser behöver kunna jämföras över tid med KPI:er, diagram och riskindikatorer utan att kräva tung backenddrift.",
        solution:
          "Jag byggde en monorepo med React/TypeScript-frontend och en Python-pipeline som hämtar ECB-data, publicerar statiska JSON-filer och uppdateras dagligen via GitHub Actions.",
        signal:
          "Visar att jag kan koppla ihop data, CI, prestanda och interaktiv UX till en lösning som är enkel att drifta och lätt att resonera om.",
        details: ["Daglig CI-uppdatering", "Statiska datafiler", "KPI-beräkning", "Jämförelseläge", "Tvåspråkigt UI"],
        stack: ["React", "TypeScript", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
        casePath: "projects/fx-monitor",
        href: "https://fx-monitor-tlpr.onrender.com",
        linkText: "Öppna appen",
      },
      {
        index: "03",
        title: "Lördagsgolf",
        meta: "public site / React / information flow",
        problem:
          "Besökare behöver snabbt förstå bana, upplägg och kontaktvägar. Sidan måste vara lätt att scanna, särskilt i mobil.",
        solution:
          "Jag byggde en React/Vite-SPA med tydlig informationshierarki, fokuserade CTA:er och responsiva vyer som håller tempot i innehållet.",
        signal:
          "Visar att jag kan göra innehåll konkret, navigerbart och tekniskt lätt att vidareutveckla utan att överdesigna upplevelsen.",
        details: ["SPA-struktur", "Responsiva vyer", "CTA-flöde", "Läsbar innehållshierarki", "Publik webb"],
        stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
        casePath: "projects/lordagsgolf",
        href: "https://lordagsgolf.se/",
        linkText: "Besök webbplats",
      },
      {
        index: "04",
        title: "Fairway",
        meta: "golf scorecard / Next.js / Claude API",
        problem:
          "Att föra runda på papper ger ingen data att förbättra sig från. Golfare behöver ett sätt att logga rundor hål för hål och få konkret återkoppling på vad som faktiskt kostade slag.",
        solution:
          "Jag byggde en fullstack Next.js-app med hål-för-hål-scorecard, localStorage-lagring, statistikdiagram, screenshot-import via AI-vision och Claude-driven coachinganalys per runda.",
        signal:
          "Visar end-to-end produkttänk: säker AI-integration på serversidan, strukturerad data från ostrukturerad input och ett gränssnitt som håller under en runda.",
        details: ["AI på serversidan", "Screenshot-import", "localStorage", "Hål-för-hål-statistik", "Coachingrapport"],
        stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Anthropic SDK", "Zod", "Render"],
        casePath: "projects/fairway",
        href: "https://golf-scorecard-ok6r.onrender.com/",
        linkText: "Öppna appen",
      },
    ],
    ctaTitle: "Vill du se hur ditt projekt skulle brytas ner?",
    ctaText:
      "Skicka nuläge, mål och det som är oklart. Jag återkommer med ett konkret första steg och vad som bör byggas först.",
    ctaPrimary: "Kontakta mig",
    ctaSecondary: "Se tjänster",
  },
  en: {
    kicker: "Case archive",
    title: "Projects that show systems thinking in practice",
    lede:
      "Three deliveries where the value is more than the surface: booking logic, data pipelines, content flows, deployment, and interfaces people can use.",
    labels: {
      problem: "Problem",
      solution: "Solution",
      stack: "Tech",
      signal: "What it shows",
      details: "Details",
    },
    items: [
      {
        index: "01",
        title: "VenueFlow",
        meta: "multi-tenant booking / Laravel / live app",
        problem:
          "A business-facing booking product needs to handle guests, resources, times, staff roles, and conflicts without creating friction for the user.",
        solution:
          "I built a Laravel platform with public booking without accounts, admin and staff views, RBAC, tenant isolation, and transaction-safe booking conflict checks.",
        signal:
          "Shows that I can build systems where business rules, data model, and daily workflows need to hold together, not just a polished frontend shell.",
        details: ["Tenant isolation", "Role-based access", "Conflict checks", "Timezone handling", "Supabase + Render"],
        stack: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Blade", "Tailwind", "Alpine.js", "Render"],
        casePath: "projects/venueflow",
        href: "https://venueflow-wjh1.onrender.com/",
        linkText: "Open app",
      },
      {
        index: "02",
        title: "FX Monitor",
        meta: "data pipeline / TypeScript / static delivery",
        problem:
          "Exchange rates need comparison over time with KPIs, charts, and risk indicators without heavy backend operations.",
        solution:
          "I built a monorepo with a React/TypeScript frontend and Python pipeline that fetches ECB data, publishes static JSON files, and updates daily through GitHub Actions.",
        signal:
          "Shows that I can connect data, CI, performance, and interactive UX into a solution that is easy to operate and reason about.",
        details: ["Daily CI update", "Static data files", "KPI calculation", "Comparison mode", "Bilingual UI"],
        stack: ["React", "TypeScript", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
        casePath: "projects/fx-monitor",
        href: "https://fx-monitor-tlpr.onrender.com",
        linkText: "Open app",
      },
      {
        index: "03",
        title: "Lördagsgolf",
        meta: "public site / React / information flow",
        problem:
          "Visitors need to understand the course, setup, and contact paths quickly. The page needs to scan well, especially on mobile.",
        solution:
          "I built a React/Vite SPA with clear information hierarchy, focused CTAs, and responsive views that keep the content moving.",
        signal:
          "Shows that I can make content concrete, navigable, and technically easy to evolve without overdesigning the experience.",
        details: ["SPA structure", "Responsive views", "CTA flow", "Readable hierarchy", "Public web"],
        stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
        casePath: "projects/lordagsgolf",
        href: "https://lordagsgolf.se/",
        linkText: "Visit website",
      },
      {
        index: "04",
        title: "Fairway",
        meta: "golf scorecard / Next.js / Claude API",
        problem:
          "Tracking a round on paper gives you no data to improve from. Golfers need a way to log rounds hole by hole and get concrete feedback on what actually cost strokes.",
        solution:
          "I built a full-stack Next.js app with a hole-by-hole scorecard, localStorage persistence, statistics charts, screenshot import via AI vision, and Claude-powered coaching analysis per round.",
        signal:
          "Shows end-to-end product thinking: secure server-side AI integration, structured data from unstructured input, and a UI that stays usable during a round.",
        details: ["Server-side AI", "Screenshot import", "localStorage", "Hole-by-hole stats", "Coaching report"],
        stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Anthropic SDK", "Zod", "Render"],
        casePath: "projects/fairway",
        href: "https://golf-scorecard-ok6r.onrender.com/",
        linkText: "Open app",
      },
    ],
    ctaTitle: "Want to see how your project would be broken down?",
    ctaText:
      "Send the current state, goal, and what is unclear. I will respond with a concrete first step and what should be built first.",
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
      ? "Projects | Case Studies | Alexander Ahman"
      : "Projekt | Case | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Selected full-stack project work covering booking systems, data pipelines, React interfaces, Laravel, PostgreSQL, Python, and deployment."
      : "Utvalda fullstackprojekt inom bokningssystem, datapipelines, React-gränssnitt, Laravel, PostgreSQL, Python och drift.";

  return (
    <>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp pageEditorial" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{t.kicker}</div>
          <h1 className="h2 pageTitle" style={{ marginTop: 10 }}>
            {t.title}
          </h1>
          <p className="lede">{t.lede}</p>

          <div className="selectedWorkList projectArchive">
            {t.items.map((item) => (
              <article className="selectedCase" key={item.title}>
                <header className="selectedCaseHeader">
                  <span className="caseIndex">{item.index}</span>
                  <div>
                    <p className="caseMeta">{item.meta}</p>
                    <h2>{item.title}</h2>
                  </div>
                  <Link className="textLink selectedCaseLink" to={pathFor(lang, item.casePath)}>
                    {lang === "en" ? "Read case" : "Läs case"}
                  </Link>
                </header>

                <div className="caseScanGrid caseScanGridWide">
                  <div>
                    <span>{t.labels.problem}</span>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <span>{t.labels.solution}</span>
                    <p>{item.solution}</p>
                  </div>
                  <div>
                    <span>{t.labels.signal}</span>
                    <p>{item.signal}</p>
                  </div>
                  <div>
                    <span>{t.labels.details}</span>
                    <div className="detailList">
                      {item.details.map((detail) => (
                        <small key={`${item.title}-${detail}`}>{detail}</small>
                      ))}
                    </div>
                  </div>
                  <div className="caseStackBlock">
                    <span>{t.labels.stack}</span>
                    <div className="projectStack">
                      {item.stack.map((token) => (
                        <span className="projectStackChip" key={`${item.title}-${token}`}>
                          {token}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="homeFinal" style={{ marginTop: 28 }}>
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
