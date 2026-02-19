import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "";

const copy = {
  sv: {
    kicker: "Systemutvecklare i Västervik",
    headline: "Jag bygger webblösningar som ger resultat, inte bara kod",
    lede:
      "För företag och team som vill växa digitalt: jag tar ansvar från idé till driftsatt lösning, med fokus på snabb prestanda, tydlig struktur och hög konvertering.",
    ctaPrimary: "Ta kontakt",
    ctaSecondary: "Se tjänster",
    ctaBook: "Boka första samtal",
    badges: ["React", "Laravel", "Apputveckling", "SEO", "API", "SQL"],
    availabilityTitle: "Tillgänglig för uppdrag",
    availabilityText: "Öppen för konsultuppdrag, projektanställning och juniora roller.",

    checklist: [
      "Frontend, backend och API-utveckling",
      "Databaser, SQL och systemlogik i C#",
      "Integrationer mot externa tjänster och API:er",
      "Prestanda, tillgänglighet och responsivitet",
      "Webb, apputveckling och teknisk SEO i samma leverans",
      "Säkerhet: validering, behörighet och dataskydd",
    ],
    servicesKicker: "Tjänster",
    servicesTitle: "Jag hjälper dig hela vägen",
    servicesStrengths: "Min styrka ligger i flexibiliteten.",
    proofKicker: "Varför anlita mig",
    proofTitle: "Fokus på effekt i varje leverans",
    proofStats: [
      ["Leveransfokus", "Från start till lansering i en sammanhållen process."],
      ["Teknikbredd", "React, Laravel, C#, SQL, apputveckling och teknisk SEO."],
      ["Arbetssätt", "Snabb återkoppling, tydliga beslut och kod som går att förvalta."],
    ],
    localSpotlightKicker: "Lokalt i Västervik",
    localSpotlightTitle: "Bor du i Västervik med omnejd och behöver en utvecklare?",
    localSpotlightText:
      "Behöver du en som tar helhetsansvar för det digitala? Jag finns lokalt för dig i Västervik och gör det enkelt att få fart på både synlighet och försäljning.",
    localSpotlightCta: "Jag bor i Västervik och vill ha hjälp!",
    services: [
      ["React", "Bygger snabba, moderna gränssnitt med fokus på UX, struktur och prestanda."],
      ["C#", "Utvecklar robust affärslogik och tydliga backendlösningar i C#."],
      ["SQL", "Designar databaser, skriver effektiva queries och skapar stabil datamodellering."],
      ["Laravel", "Bygger backend i Laravel med tydlig arkitektur, validering och API-flöden."],
      ["Apputveckling", "Bygger användarvänliga appar med stabil struktur och tydliga användarflöden."],
      ["SEO", "Arbetar med on-page SEO, metadata och tekniska förbättringar för bättre synlighet."],
    ],
    processKicker: "Arbetssätt",
    processTitle: "Ett enkelt arbetssätt som ger tydliga resultat",
    process: [
      ["1. Strategi", "Vi definierar målgrupp, intention och vilka mål som ska uppnås."],
      ["2. Produktion", "Jag utvecklar iterativt mot de mål vi satt upp, med fokus på snabbhet och kvalitet."],
      ["3. Optimering", "Vi finslipar innehåll, metadata och prestanda inför lansering."],
    ],
    linksKicker: "Läs vidare",
    linksTitle: "Utforska fler sidor",
    links: [
      ["Tjänster", "services"],
      ["Om mig", "about"],
      ["Kontakt", "contact"],
    ],
    finalTitle: "Vill du ha en utvecklare som tar helhetsansvar?",
    finalText:
      "Skicka ett meddelande eller boka ett första samtal. Du får en tydlig rekommendation för nästa steg utifrån dina mål.",
  },

  en: {
    kicker: "Software Developer & Full-Stack Developer",
    headline: "I build web solutions that drive outcomes, not just features",
    lede:
      "I help teams move from idea to launched product with fast, maintainable implementation and a clear focus on user value and conversion.",
    ctaPrimary: "Get in touch",
    ctaSecondary: "View services",
    ctaBook: "Book intro call",
    badges: ["React", "Laravel", "App Development", "SEO", "API", "SQL"],
    availabilityTitle: "Available for work",
    availabilityText: "Open to freelance work, part-time projects, and junior roles.",
    checklist: [
      "Front-end, back-end, and API development",
      "Databases, SQL, and business logic in C#",
      "Integrations with external services and APIs",
      "Performance, accessibility, and responsive UI",
      "Web, app development, and technical SEO delivered together",
      "Security: validation, auth, and data protection",
    ],
    servicesKicker: "Services",
    servicesTitle: "Support from start to launch",
    servicesStrengths: "My strength is flexibility, I can step in where you need me most.",
    proofKicker: "Why work with me",
    proofTitle: "Execution with measurable impact in mind",
    proofStats: [
      ["Delivery ownership", "From discovery to launch in one coherent workflow."],
      ["Technical range", "React, Laravel, C#, SQL, app development, and technical SEO."],
      ["Collaboration style", "Fast feedback loops, clear tradeoffs, and maintainable code."],
    ],
    services: [
      ["React", "Build fast, modern interfaces with a strong focus on UX, structure, and performance."],
      ["C#", "Develop robust business logic and clean back-end solutions in C#."],
      ["SQL", "Design databases, write efficient queries, and build reliable data models."],
      ["Laravel", "Build Laravel back ends with clear architecture, validation, and API flows."],
      ["App Development", "Build user-friendly apps with stable architecture and clear user flows."],
      ["SEO", "Work with on-page SEO, metadata, and technical improvements to increase visibility."],
    ],
    processKicker: "Process",
    processTitle: "A simple process with clear results",
    process: [
      ["1. Strategy", "We define the audience, intent, and what success looks like."],
      ["2. Build", "I develop iteratively toward our goals, prioritizing speed and quality."],
      ["3. Optimize", "We refine content, metadata, and performance before launch."],
    ],
    linksKicker: "Continue",
    linksTitle: "Explore more pages",
    links: [
      ["Services", "services"],
      ["About", "about"],
      ["Contact", "contact"],
    ],
    finalTitle: "Need a developer who helps you all the way?",
    finalText: "Send a message or book an intro call. You will get a clear recommendation for the next step.",
  },
};

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";

  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;

  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

export default function Home({ lang }) {
  const t = copy[lang] || copy.sv;
  const hasBooking = Boolean(BOOKING_URL);

  const pathname = lang === "en" ? "/en" : "/";

  const seoTitle =
    lang === "en"
      ? "Software Developer in Västervik | Alexander Åhman"
      : "Systemutvecklare i Västervik | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Software developer in Västervik with a broad full-stack profile. I build fast, maintainable web services, from UI to APIs, databases, and CMS."
      : "Systemutvecklare i Västervik med bred fullstackprofil. Jag bygger snabba och lättförvaltade webbtjänster, från UI till API, databas och apputveckling.";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alexander Åhman",
    alternateName: "Alex Ahman",
    url: SITE_URL,
    jobTitle: lang === "en" ? "Software Developer" : "Systemutvecklare",
    homeLocation: {
      "@type": "Place",
      name: "Västervik, Sweden",
    },
    sameAs: [
      "https://www.linkedin.com/in/alexander-%C3%A5hman/",
      "https://www.instagram.com/AlexAhman",
      "https://github.com/alexahman",
    ],
    knowsAbout: ["React", "Laravel", "App Development", "C#", "SQL", "SEO"],
  };
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Alexander Åhman",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    sameAs: [
      "https://www.linkedin.com/in/alexander-%C3%A5hman/",
      "https://www.instagram.com/AlexAhman",
      "https://github.com/alexahman",
    ],
  };
  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alexander Åhman",
    url: SITE_URL,
    inLanguage: ["sv", "en"],
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
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
                  {hasBooking ? (
                    <a className="btn btn-outline" href={BOOKING_URL} target="_blank" rel="noreferrer">
                      {t.ctaBook}
                    </a>
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
          <div className="kicker">{t.proofKicker}</div>
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle" style={{ marginTop: 10 }}>
            {t.proofTitle}
          </h2>

          <div className="grid cols-3 homeCards" style={{ marginTop: 22 }}>
            {t.proofStats.map(([title, text]) => (
              <div className="card homeCard" key={title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{text}</p>
              </div>
            ))}
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
          <div className="grid cols-3 homeCards" style={{ marginTop: 24 }}>
            {t.services.map(([title, desc], i) => (
              <div className="card homeCard" key={`${title}-${i}`}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>

          {lang === "sv" ? (
            <aside className="localSpotlight">
              <div className="kicker">{t.localSpotlightKicker}</div>
              <h3>{t.localSpotlightTitle}</h3>
              <p>{t.localSpotlightText}</p>
              <div className="row" style={{ marginTop: 12 }}>
                <Link className="btn btn-outline" to="/hemsida-vastervik">
                  {t.localSpotlightCta}
                </Link>
              </div>
            </aside>
          ) : null}
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

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          <div className="kicker">{t.linksKicker}</div>
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle" style={{ marginTop: 10 }}>
            {t.linksTitle}
          </h2>
          <div className="row" style={{ marginTop: 14 }}>
            {t.links.map(([label, to]) => (
              <Link className="btn btn-outline" key={to} to={pathFor(lang, to)}>
                {label}
              </Link>
            ))}
            {lang === "sv" ? (
              <Link className="btn btn-outline" to="/hemsida-vastervik">
                Hemsida i Västervik
              </Link>
            ) : null}
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
              {hasBooking ? (
                <a className="btn btn-home-outline" href={BOOKING_URL} target="_blank" rel="noreferrer">
                  {t.ctaBook}
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
