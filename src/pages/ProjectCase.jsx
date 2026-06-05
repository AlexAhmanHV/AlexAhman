import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const cases = {
  venueflow: {
    sv: {
      title: "VenueFlow",
      kicker: "Case / bokningssystem",
      meta: "Laravel / PostgreSQL / multi-tenant booking",
      seoTitle: "VenueFlow case | Bokningssystem i Laravel | Alexander Åhman",
      seoDescription:
        "Case om VenueFlow: ett multi-tenant bokningssystem byggt i Laravel, PostgreSQL och Supabase med RBAC, konfliktkontroll och publik gästbokning.",
      lede:
        "VenueFlow är ett bokningssystem för aktivitets- och restaurangmiljöer där gäster ska kunna boka utan konto och personalen behöver hantera resurser, tider och roller internt.",
      problem:
        "Bokningsflöden blir snabbt komplexa när flera resurser, tider, roller och tenants delar samma system. Den publika gästen behöver ett enkelt flöde, medan verksamheten behöver kontroll bakom kulisserna.",
      solution:
        "Jag byggde en Laravel-plattform med publik gästbokning, admin- och staff-vyer, tenant-isolering, rollbaserad åtkomst och transaktionssäker konfliktkontroll.",
      decisions: [
        "Tenant-isolering för att hålla verksamheters data separerad.",
        "Policies/Gates för att göra behörigheter tydliga i koden.",
        "PostgreSQL via Supabase för relationsdata och praktisk drift.",
        "Render-deployment för att få appen live utan onödig driftkomplexitet.",
      ],
      result:
        "Projektet visar min förmåga att bygga affärsnära system där datamodell, användarflöde, behörighet och deployment behöver fungera ihop.",
      stack: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Supabase", "Blade", "Tailwind", "Alpine.js", "Render"],
      href: "https://venueflow-wjh1.onrender.com/",
      linkText: "Öppna VenueFlow",
    },
    en: {
      title: "VenueFlow",
      kicker: "Case / booking system",
      meta: "Laravel / PostgreSQL / multi-tenant booking",
      seoTitle: "VenueFlow case | Laravel booking system | Alexander Ahman",
      seoDescription:
        "Case study for VenueFlow: a multi-tenant booking system built with Laravel, PostgreSQL, Supabase, RBAC, conflict checks, and public guest booking.",
      lede:
        "VenueFlow is a booking system for activity and restaurant venues where guests can book without accounts while staff manage resources, times, and roles internally.",
      problem:
        "Booking flows get complex quickly when resources, times, roles, and tenants share the same system. The public guest needs a simple flow, while the business needs control behind the scenes.",
      solution:
        "I built a Laravel platform with public guest booking, admin and staff views, tenant isolation, role-based access, and transaction-safe conflict checks.",
      decisions: [
        "Tenant isolation to keep business data separated.",
        "Policies/Gates to make permissions explicit in code.",
        "PostgreSQL through Supabase for relational data and practical operations.",
        "Render deployment to get the app live without unnecessary operational complexity.",
      ],
      result:
        "The project shows my ability to build business-facing systems where data model, user flow, permissions, and deployment need to work together.",
      stack: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Supabase", "Blade", "Tailwind", "Alpine.js", "Render"],
      href: "https://venueflow-wjh1.onrender.com/",
      linkText: "Open VenueFlow",
    },
  },
  "fx-monitor": {
    sv: {
      title: "FX Monitor",
      kicker: "Case / datapipeline",
      meta: "React / TypeScript / Python / GitHub Actions",
      seoTitle: "FX Monitor case | Datapipeline och React-dashboard | Alexander Åhman",
      seoDescription:
        "Case om FX Monitor: React- och TypeScript-dashboard med Python-pipeline, ECB-data, statiska JSON-filer och GitHub Actions.",
      lede:
        "FX Monitor visualiserar växelkurser och riskindikatorer utan tung backend. Datat hämtas automatiskt, publiceras som statiska filer och används av ett interaktivt gränssnitt.",
      problem:
        "Växelkurser ska kunna jämföras över tid, men en traditionell backend hade gjort lösningen dyrare och mer komplex än nödvändigt.",
      solution:
        "Jag byggde en monorepo med React/TypeScript-frontend och en Python-pipeline som hämtar ECB-data, beräknar KPI:er och publicerar statiska JSON-filer via GitHub Actions.",
      decisions: [
        "Statisk leverans för att minska driftkostnad och rörliga delar.",
        "Python-pipeline med tester för datainsamling och bearbetning.",
        "Chart.js för tydlig visualisering av jämförelser och risknivåer.",
        "Tvåspråkigt UI för att göra appen mer flexibel.",
      ],
      result:
        "Projektet visar hur jag kopplar ihop data, automation, frontend och drift till en lösning som är lätt att förstå och billig att köra.",
      stack: ["React", "TypeScript", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions", "Render Static Site"],
      href: "https://fx-monitor-tlpr.onrender.com",
      linkText: "Öppna FX Monitor",
    },
    en: {
      title: "FX Monitor",
      kicker: "Case / data pipeline",
      meta: "React / TypeScript / Python / GitHub Actions",
      seoTitle: "FX Monitor case | Data pipeline and React dashboard | Alexander Ahman",
      seoDescription:
        "Case study for FX Monitor: React and TypeScript dashboard with a Python pipeline, ECB data, static JSON files, and GitHub Actions.",
      lede:
        "FX Monitor visualizes exchange rates and risk indicators without heavy backend operations. Data is fetched automatically, published as static files, and consumed by an interactive interface.",
      problem:
        "Exchange rates need comparison over time, but a traditional backend would make the solution more expensive and complex than necessary.",
      solution:
        "I built a monorepo with a React/TypeScript frontend and Python pipeline that fetches ECB data, calculates KPIs, and publishes static JSON files through GitHub Actions.",
      decisions: [
        "Static delivery to reduce operational cost and moving parts.",
        "Python pipeline with tests for data fetching and processing.",
        "Chart.js for clear comparison and risk-level visualization.",
        "Bilingual UI to make the app more flexible.",
      ],
      result:
        "The project shows how I connect data, automation, frontend, and deployment into a solution that is easy to understand and cheap to run.",
      stack: ["React", "TypeScript", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions", "Render Static Site"],
      href: "https://fx-monitor-tlpr.onrender.com",
      linkText: "Open FX Monitor",
    },
  },
  lordagsgolf: {
    sv: {
      title: "Lördagsgolf",
      kicker: "Case / publik webb",
      meta: "React / Vite / informationsflöde",
      seoTitle: "Lördagsgolf case | React-webbplats med tydligt informationsflöde | Alexander Åhman",
      seoDescription:
        "Case om Lördagsgolf: publik React- och Vite-webbplats med tydlig informationshierarki, responsiva vyer och fokuserade CTA:er.",
      lede:
        "Lördagsgolf är en publik webbplats där besökaren snabbt ska förstå bana, upplägg och kontaktvägar, särskilt i mobil.",
      problem:
        "Innehållstunga webbplatser tappar ofta tempo. Om besökaren inte snabbt förstår vad som erbjuds, var informationen finns och hur man går vidare minskar nyttan.",
      solution:
        "Jag byggde en React/Vite-SPA med fokuserad informationshierarki, responsiva vyer och CTA:er som gör nästa steg tydligt.",
      decisions: [
        "SPA-struktur med React Router för snabb navigering.",
        "Tydlig innehållsordning för att minska friktion i mobil.",
        "Responsiva sektioner som prioriterar läsbarhet framför dekoration.",
        "Lätt teknisk grund som kan byggas vidare på.",
      ],
      result:
        "Projektet visar att jag kan göra en publik webbplats konkret, scannbar och tekniskt enkel att förvalta.",
      stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
      href: "https://lordagsgolf.se/",
      linkText: "Besök Lördagsgolf",
    },
    en: {
      title: "Lördagsgolf",
      kicker: "Case / public web",
      meta: "React / Vite / information flow",
      seoTitle: "Lördagsgolf case | React website with clear information flow | Alexander Ahman",
      seoDescription:
        "Case study for Lördagsgolf: public React and Vite website with clear information hierarchy, responsive views, and focused CTAs.",
      lede:
        "Lördagsgolf is a public website where visitors need to quickly understand the course, setup, and contact paths, especially on mobile.",
      problem:
        "Content-heavy websites often lose pace. If visitors do not quickly understand what is offered, where the information is, and how to continue, the value drops.",
      solution:
        "I built a React/Vite SPA with focused information hierarchy, responsive views, and CTAs that make the next step clear.",
      decisions: [
        "SPA structure with React Router for fast navigation.",
        "Clear content order to reduce friction on mobile.",
        "Responsive sections that prioritize readability over decoration.",
        "Light technical foundation that can keep evolving.",
      ],
      result:
        "The project shows that I can make a public website concrete, scannable, and technically easy to maintain.",
      stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
      href: "https://lordagsgolf.se/",
      linkText: "Visit Lördagsgolf",
    },
  },
};

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;
  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

export default function ProjectCase({ lang, slug }) {
  const item = cases[slug]?.[lang] || cases[slug]?.sv || cases.venueflow.sv;
  const pathname = lang === "en" ? `/en/projects/${slug}` : `/projects/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    headline: item.seoTitle,
    description: item.seoDescription,
    url: `${SITE_URL}${pathname}`,
    author: {
      "@type": "Person",
      name: "Alexander Åhman",
      url: SITE_URL,
    },
    about: item.stack,
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={item.seoTitle}
        description={item.seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp pageEditorial" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{item.kicker}</div>
          <h1 className="h2 pageTitle" style={{ marginTop: 10 }}>
            {item.title}
          </h1>
          <p className="caseMeta" style={{ marginTop: 12 }}>{item.meta}</p>
          <p className="lede">{item.lede}</p>

          <article className="selectedCase caseDetail">
            <div className="caseScanGrid caseScanGridWide">
              <div>
                <span>{lang === "en" ? "Problem" : "Problem"}</span>
                <p>{item.problem}</p>
              </div>
              <div>
                <span>{lang === "en" ? "Solution" : "Lösning"}</span>
                <p>{item.solution}</p>
              </div>
              <div>
                <span>{lang === "en" ? "Technical decisions" : "Tekniska beslut"}</span>
                <div className="detailList">
                  {item.decisions.map((decision) => (
                    <small key={decision}>{decision}</small>
                  ))}
                </div>
              </div>
              <div>
                <span>{lang === "en" ? "What it shows" : "Vad det visar"}</span>
                <p>{item.result}</p>
              </div>
              <div className="caseStackBlock">
                <span>{lang === "en" ? "Tech" : "Teknik"}</span>
                <div className="projectStack">
                  {item.stack.map((token) => (
                    <span className="projectStackChip" key={token}>{token}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>

          <div className="relatedStrip">
            <p>{lang === "en" ? "Next" : "Nästa"}</p>
            <div className="row">
              <a className="textLink" href={item.href} target="_blank" rel="noreferrer">
                {item.linkText}
              </a>
              <Link className="textLink" to={pathFor(lang, "projects")}>
                {lang === "en" ? "All projects" : "Alla projekt"}
              </Link>
              <Link className="textLink" to={pathFor(lang, "contact")}>
                {lang === "en" ? "Contact" : "Kontakt"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
