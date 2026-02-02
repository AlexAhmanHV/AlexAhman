import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Systemutvecklare & fullstackutvecklare",
    headline: "Utveckling som lyfter hela din digitala lösning",
    lede:
      "Jag hjälper team att gå från idé till fungerande webbtjänst. Struktur som skalar, snabb respons och en lösning som är lätt att förvalta.",
    ctaPrimary: "Ta kontakt",
    ctaSecondary: "Se tjänster",
    localPageLink: "Soker du hemsida i Vastervik?",
    badges: ["React", "Laravel", "WordPress", "SEO", "API", "SQL"],
    availabilityTitle: "Tillgänglig för uppdrag",
    availabilityText: "Öppen för freelance, deltidsuppdrag och juniora roller.",
    checklist: [
      "Frontend, backend och API-utveckling",
      "Databaser, SQL och systemlogik i C#",
      "Integrationer mot externa tjänster och API:er",
      "Prestanda, tillgänglighet och responsivitet",
      "Webb, CMS och teknisk SEO i samma leverans",
      "Säkerhet: validering, behörighet och dataskydd",
    ],
    servicesKicker: "Tjänster",
    servicesTitle: "Jag hjälper dig hela vägen",
    servicesStrengths: "Min styrka ligger i flexibiliteten.",
    services: [
      ["React", "Bygger snabba, moderna gränssnitt med fokus på UX, struktur och prestanda."],
      ["C#", "Utvecklar robust affärslogik och tydliga backendlösningar i C#."],
      ["SQL", "Designar databaser, skriver effektiva queries och skapar stabil datamodellering."],
      ["Laravel", "Bygger backend i Laravel med tydlig arkitektur, validering och API-flöden."],
      ["WordPress", "Skapar flexibla och lättredigerade WordPress-sidor med SEO i fokus."],
      ["SEO", "Arbetar med on-page SEO, metadata och tekniska förbättringar för bättre synlighet."],
    ],
    processKicker: "Arbetssätt",
    processTitle: "Ett enkelt arbetssätt som ger tydliga resultat",
    process: [
      ["1. Strategi", "Vi definierar målgrupp, intention och vilka mål som ska uppnås."],
      ["2. Produktion", "Jag utvecklar iterativt mot de mål vi satt upp, med fokus på snabbhet och kvalitet."],
      ["3. Optimering", "Vi finslipar innehåll, metadata och prestanda inför lansering."],
    ],
    finalTitle: "Vill du ha en utvecklare som tar helhetsansvar?",
    finalText: "Skicka ett meddelande så tar vi fram en lösning som matchar dina mål.",
  },

  en: {
    kicker: "Software Developer & Full-Stack Developer",
    headline: "Development that strengthens your digital product",
    lede:
      "I help teams go from idea to a working web service—built with scalable structure, fast performance, and long-term maintainability in mind.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View services",
    localPageLink: "",
    badges: ["React", "Laravel", "WordPress", "SEO", "API", "SQL"],
    availabilityTitle: "Available for work",
    availabilityText: "Open to freelance work, part-time projects, and junior roles.",
    checklist: [
      "Front-end, back-end, and API development",
      "Databases, SQL, and business logic in C#",
      "Integrations with external services and APIs",
      "Performance, accessibility, and responsive UI",
      "Web, CMS, and technical SEO—delivered together",
      "Security: validation, auth, and data protection",
    ],
    servicesKicker: "Services",
    servicesTitle: "Support from start to launch",
    servicesStrengths: "My strength is flexibility—I can step in where you need me most.",
    services: [
      ["React", "Build fast, modern interfaces with a strong focus on UX, structure, and performance."],
      ["C#", "Develop robust business logic and clean back-end solutions in C#."],
      ["SQL", "Design databases, write efficient queries, and build reliable data models."],
      ["Laravel", "Build Laravel back ends with clear architecture, validation, and API flows."],
      ["WordPress", "Create flexible WordPress sites that are easy to edit—built with SEO in mind."],
      ["SEO", "Work with on-page SEO, metadata, and technical improvements to increase visibility."],
    ],
    processKicker: "Process",
    processTitle: "A simple process with clear results",
    process: [
      ["1. Strategy", "We define the audience, intent, and what success looks like."],
      ["2. Build", "I develop iteratively toward our goals—prioritizing speed and quality."],
      ["3. Optimize", "We refine content, metadata, and performance before launch."],
    ],
    finalTitle: "Need a developer who helps you all the way?",
    finalText: "Send me a message and we’ll find the right solution for your goals.",
  },
};

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";

  // Normalize so both "contact" and "/contact" work, and avoid double slashes
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;

  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

export default function Home({ lang }) {
  const t = copy[lang] || copy.sv;

  const pathname = lang === "en" ? "/en" : "/";

  // SEO focused on your local keywords (SV) + clean EN version
  const seoTitle =
    lang === "en"
      ? "Software Developer in Västervik | Alexander Åhman"
      : "Systemutvecklare i Västervik | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Software developer in Västervik with a broad full-stack profile. I build fast, maintainable web services—from UI to APIs, databases, and CMS."
      : "Systemutvecklare i Västervik med bred fullstackprofil. Jag bygger snabba och lättförvaltade webbtjänster – från UI till API, databas och CMS.";
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexander Åhman",
    alternateName: "Alex Ahman",
    url: SITE_URL,
    jobTitle: lang === "en" ? "Software Developer" : "Systemutvecklare",
    homeLocation: {
      "@type": "Place",
      name: "Vastervik, Sweden",
    },
    sameAs: [
      "https://www.linkedin.com/in/alexander-%C3%A5hman/",
      "https://www.instagram.com/AlexAhman",
    ],
    knowsAbout: ["React", "Laravel", "WordPress", "C#", "SQL", "SEO"],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
      </Helmet>

      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="hero homeHero">
        <div className="container">
          <div className="homeHeroPanel fadeUp">
            <div className="homeHeroGrid">
              <div className="homeHeroCopy">
                <div className="kicker">{t.kicker}</div>
                <h1 className="h1 homeHeadline">{t.headline}</h1>
                <p className="lede">{t.lede}</p>

                <div className="row" style={{ marginTop: 16 }}>
                  <Link className="btn" to={pathFor(lang, "contact")}>
                    {t.ctaPrimary}
                  </Link>
                  <Link className="btn btn-outline" to={pathFor(lang, "services")}>
                    {t.ctaSecondary}
                  </Link>
                  {lang === "sv" ? (
                    <Link className="btn btn-outline" to="/hemsida-vastervik">
                      {t.localPageLink}
                    </Link>
                  ) : null}
                </div>

                <div className="badges homeBadges">
                  {t.badges.map((badge) => (
                    <span className="badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <aside className="homeSignalCard">
                <div className="kicker">{t.availabilityTitle}</div>
                <p style={{ marginTop: 12 }}>{t.availabilityText}</p>

                <div className="homeChecklist">
                  {t.checklist.map((item) => (
                    <div key={item} className="homeChecklistItem">
                      {item}
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">{t.servicesKicker}</div>
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle" style={{ marginTop: 10 }}>
            {t.servicesTitle}
          </h2>
          <p style={{ marginTop: 12 }}>{t.servicesStrengths}</p>
          {lang === "sv" ? (
            <div className="row" style={{ marginTop: 12 }}>
              <Link className="socialLink" to="/hemsida-vastervik">
                Hemsida i Vastervik - las mer
              </Link>
            </div>
          ) : null}

          <div className="grid cols-3 homeCards" style={{ marginTop: 24 }}>
            {t.services.map(([title, desc], i) => (
              <div className="card homeCard" key={`${title}-${i}`}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">{t.processKicker}</div>
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle" style={{ marginTop: 10 }}>
            {t.processTitle}
          </h2>

          <div className="homeProcessGrid">
            {t.process.map(([title, text]) => (
              <div className="homeProcessItem" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="homeFinal">
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{t.finalTitle}</h2>
            <p className="lede">{t.finalText}</p>

            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pathFor(lang, "contact")}>
                {t.ctaPrimary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}




