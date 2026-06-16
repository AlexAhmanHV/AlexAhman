import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Tjänster",
    title: "Jag hjälper där produkt, kod och verklighet möts",
    lede:
      "Jag tar uppdrag där det behövs någon som kan förstå problemet, välja rimlig teknisk riktning och bygga en version som faktiskt går att använda.",
    localKicker: "Lokalt i Västervik",
    localTitle: "Hemsida i Västervik",
    localText:
      "Söker du en lokal partner för hemsida och vidareutveckling? Jag hjälper med struktur, innehåll, implementation och nästa tekniska steg.",
    localCta: "Planera en hemsida i Västervik",
    labels: {
      context: "När det passar",
      output: "Vad du får",
      stack: "Typisk teknik",
    },
    items: [
      {
        index: "01",
        title: "Webbappar och gränssnitt",
        meta: "frontend / UX / produktflöden",
        context: "När en idé, intern vy eller publik tjänst behöver bli snabb, begriplig och möjlig att vidareutveckla.",
        output: "React-baserade vyer, komponentstruktur, routing, formulär, tillstånd, responsivitet och UI som är byggt för riktiga användarflöden.",
        stack: ["React", "TypeScript", "JavaScript", "Vite", "React Router", "CSS"],
      },
      {
        index: "02",
        title: "Backend, API och affärslogik",
        meta: "server / data / regler",
        context: "När systemet behöver hantera bokningar, roller, validering, integrationer eller andra regler som inte får bli lösa trådar.",
        output: "API:er, datamodeller, behörighet, validering, adminflöden och backendkod som går att testa och förvalta.",
        stack: ["Laravel", "PHP", "PostgreSQL", "SQL", "Policies", "Mailables"],
      },
      {
        index: "03",
        title: "Dataflöden och automation",
        meta: "pipelines / CI / statisk leverans",
        context: "När data ska hämtas, bearbetas, publiceras eller visualiseras utan att göra driften onödigt tung.",
        output: "Datapipelines, schemalagda uppdateringar, statiska JSON-flöden, testbar bearbetning och dashboards.",
        stack: ["Python", "GitHub Actions", "pytest", "ruff", "JSON", "Chart.js"],
      },
      {
        index: "04",
        title: "Teknisk riktning och uppstart",
        meta: "audit / planning / execution",
        context: "När du vet vad du vill uppnå men behöver få ner det till rätt första bygge, teknikval och prioritering.",
        output: "Genomgång av nuläge, risker, systemskiss, prioriterad backlog och en konkret plan för vad som bör byggas först.",
        stack: ["Systemskiss", "Datamodell", "API-plan", "Roadmap", "Risklista"],
      },
    ],
    ctaTitle: "Vill du veta vilket spår som passar ditt läge?",
    ctaText: "Beskriv kort vad du bygger, vad som finns i dag och vad som bromsar. Jag svarar med nästa rimliga steg.",
    ctaPrimary: "Kontakta mig",
    ctaSecondary: "Se projekt",
    focusLinksTitle: "Fokuserade tjänstesidor",
    focusLinks: [
      ["Fullstackutvecklare Västervik", "fullstackutvecklare-vastervik"],
      ["Webbutvecklare Västervik", "webbutvecklare-vastervik"],
      ["React-utvecklare Västervik", "react-utvecklare-vastervik"],
      ["React- och Laravel-utvecklare", "react-laravel-utvecklare"],
      ["Laravel-utvecklare", "laravel-utvecklare"],
      ["Konsult systemutvecklare", "konsult-systemutvecklare"],
    ],
  },

  en: {
    kicker: "Services",
    title: "I help where product, code, and reality meet",
    lede:
      "I take on work where someone needs to understand the problem, choose a reasonable technical direction, and build a version people can actually use.",
    labels: {
      context: "When it fits",
      output: "What you get",
      stack: "Typical tech",
    },
    items: [
      {
        index: "01",
        title: "Web apps and interfaces",
        meta: "frontend / UX / product flows",
        context: "When an idea, internal view, or public service needs to become fast, understandable, and possible to keep evolving.",
        output: "React-based views, component structure, routing, forms, state, responsiveness, and UI built for real user flows.",
        stack: ["React", "TypeScript", "JavaScript", "Vite", "React Router", "CSS"],
      },
      {
        index: "02",
        title: "Backend, API, and business logic",
        meta: "server / data / rules",
        context: "When the system needs to handle bookings, roles, validation, integrations, or other rules that cannot become loose ends.",
        output: "APIs, data models, permissions, validation, admin flows, and backend code that can be tested and maintained.",
        stack: ["Laravel", "PHP", "PostgreSQL", "SQL", "Policies", "Mailables"],
      },
      {
        index: "03",
        title: "Data flows and automation",
        meta: "pipelines / CI / static delivery",
        context: "When data needs to be fetched, processed, published, or visualized without making operations unnecessarily heavy.",
        output: "Data pipelines, scheduled updates, static JSON flows, testable processing, and dashboards.",
        stack: ["Python", "GitHub Actions", "pytest", "ruff", "JSON", "Chart.js"],
      },
      {
        index: "04",
        title: "Technical direction and ramp-up",
        meta: "audit / planning / execution",
        context: "When you know what you want to achieve but need to turn it into the right first build, technical choices, and priorities.",
        output: "Current-state review, risks, system sketch, prioritized backlog, and a concrete plan for what should be built first.",
        stack: ["System sketch", "Data model", "API plan", "Roadmap", "Risk list"],
      },
    ],
    ctaTitle: "Want to know which path fits your situation?",
    ctaText: "Describe what you are building, what exists today, and what is slowing it down. I will respond with the next reasonable step.",
    ctaPrimary: "Contact me",
    ctaSecondary: "View projects",
    focusLinksTitle: "Focused service pages",
    focusLinks: [["Full-stack developer Västervik", "fullstack-developer-vastervik"]],
  },
};

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;
  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

export default function Services({ lang }) {
  const t = copy[lang] || copy.sv;
  const pathname = lang === "en" ? "/en/services" : "/services";
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: lang === "en" ? "Full-stack development services" : "Fullstacktjänster",
    itemListElement: t.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: item.title,
        description: item.output,
        provider: {
          "@type": "Person",
          name: "Alexander Åhman",
          url: SITE_URL,
        },
        areaServed: lang === "en" ? "Sweden and remote" : "Sverige och remote",
      },
    })),
  };

  const seoTitle =
    lang === "en"
      ? "Services | Full-Stack Development | Alexander Ahman"
      : "Tjänster | Fullstackutveckling | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Full-stack development services across React, Laravel, APIs, PostgreSQL, Python data flows, automation, and technical product planning."
      : "Fullstacktjänster inom React, Laravel, API:er, PostgreSQL, Python-baserade dataflöden, automation och teknisk produktplanering.";

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>
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

          {lang === "sv" ? (
            <aside className="localSpotlight localSpotlightSlim">
              <div className="kicker">{t.localKicker}</div>
              <h3>{t.localTitle}</h3>
              <p>{t.localText}</p>
              <div className="row" style={{ marginTop: 12 }}>
                <Link className="btn btn-outline localCtaButton" to="/hemsida-vastervik">
                  {t.localCta}
                </Link>
              </div>
            </aside>
          ) : null}

          <div className="serviceList">
            {t.items.map((item) => (
              <article className="serviceRow" key={item.title}>
                <div className="serviceRowHeader">
                  <span className="caseIndex">{item.index}</span>
                  <div>
                    <p className="caseMeta">{item.meta}</p>
                    <h2>{item.title}</h2>
                  </div>
                </div>
                <div className="serviceRowBody">
                  <div>
                    <span>{t.labels.context}</span>
                    <p>{item.context}</p>
                  </div>
                  <div>
                    <span>{t.labels.output}</span>
                    <p>{item.output}</p>
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

          <div className="relatedStrip">
            <p>{t.focusLinksTitle}</p>
            <div className="row">
              {t.focusLinks.map(([label, to]) => (
                <Link className="textLink" to={pathFor(lang, to)} key={to}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="homeFinal" style={{ marginTop: 28 }}>
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{t.ctaTitle}</h2>
            <p className="lede">{t.ctaText}</p>
            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pathFor(lang, "contact")}>
                {t.ctaPrimary}
              </Link>
              <Link className="btn btn-home-outline" to={pathFor(lang, "projects")}>
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
