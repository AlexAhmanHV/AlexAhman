import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "";

const copy = {
  sv: {
    kicker: "Systemutvecklare i Västervik",
    headline: "Jag arbetar brett inom digital utveckling, från gränssnitt till backend och teknisk struktur",
    lede: [
      "Jag hjälper företag som behöver en bred utvecklare, team som behöver avlastning och arbetsgivare som söker en fullstackprofil med helhetstänk.",
      "Jag tar ansvar från idé och struktur till färdig leverans, och kommer snabbt in i befintliga kodbaser, samarbeten och tekniska sammanhang där det behövs någon som kan bidra brett och bygga vidare på det som redan finns.",
    ],
    ctaPrimary: "Ta kontakt",
    ctaSecondary: "Se tjänster",
    ctaBook: "Boka första samtal",
    badges: ["React", "Laravel", "Apputveckling", "SEO", "API", "SQL"],
    availabilityTitle: "Tillgänglig för uppdrag",
    availabilityText: "Öppen för konsultuppdrag, projektanställning och roller där en bred utvecklare kan bidra snabbt och ta ansvar.",

    checklist: [
      "Frontend, backend och API-utveckling",
      "Databaser, SQL och systemlogik i C#",
      "Systemdesign, informationsflöden och teknisk struktur",
      "Snabb i befintliga kodbaser och nya arbetssätt",
      "Integrationer mot externa tjänster och API:er",
      "Prestanda, tillgänglighet och responsivitet",
      "Samarbete med team, verksamhet och tydliga prioriteringar",
      "Kod som går att förvalta, bygga vidare på och drifta tryggt",
    ],
    servicesKicker: "Tjänster",
    servicesTitle: "Jag hjälper dig hela vägen",
    servicesStrengths: "Min styrka ligger i att kunna kliva in där behovet är störst, förstå helheten snabbt och bidra både i kod och teknisk struktur.",
    proofKicker: "Varför anlita mig",
    proofTitle: "Därför fungerar jag bra i både team och projekt",
    proofStats: [
      ["Snabb uppstart", "Jag sätter mig snabbt in i befintliga kodbaser, verktyg och arbetssätt utan lång startsträcka."],
      ["Bred nytta", "Jag kan bidra i gränssnitt, backend, API:er, databaser och tekniska vägval beroende på var behovet är störst."],
      ["Hållbar leverans", "Jag bygger lösningar som är tydliga att förstå, enkla att samarbeta kring och möjliga att förvalta vidare."],
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
      ["Systemarkitektur", "Hjälper till att forma teknisk struktur, dataflöden och lösningar som går att bygga vidare på."],
    ],
    processKicker: "Arbetssätt",
    processTitle: "Ett enkelt arbetssätt som ger tydliga resultat",
    process: [
      ["1. Strategi", "Vi definierar mål, målgrupp, kravbild och hur systemet behöver fungera i praktiken."],
      ["2. Struktur", "Jag sätter en tydlig teknisk riktning för flöden, data, integrationer och arkitektur."],
      ["3. Leverans", "Jag utvecklar, testar och optimerar lösningen inför lansering och vidare förvaltning."],
    ],
    linksKicker: "Läs vidare",
    linksTitle: "Utforska fler sidor",
    links: [
      ["Tjänster", "services"],
      ["Om mig", "about"],
      ["Kontakt", "contact"],
    ],
    finalTitle: "Vill du ha en utvecklare med helhetstänk?",
    finalText:
      "Skicka ett meddelande eller boka ett första samtal. Du får en tydlig rekommendation för nästa steg, både tekniskt och affärsmässigt.",
  },

  en: {
    kicker: "Software Developer & Full-Stack Developer",
    headline: "I work broadly across digital development, from interfaces to back-end and technical structure",
    lede: [
      "I help companies that need a broad developer, teams that need extra capacity, and employers looking for a full-stack profile with an end-to-end mindset.",
      "I take responsibility from idea and structure to delivery, and I ramp up quickly in existing codebases, collaborations, and technical contexts where broad contribution is needed and where existing systems need to be understood and improved.",
    ],
    ctaPrimary: "Get in touch",
    ctaSecondary: "View services",
    ctaBook: "Book intro call",
    badges: ["React", "Laravel", "App Development", "SEO", "API", "SQL"],
    availabilityTitle: "Available for work",
    availabilityText: "Open to freelance work, project roles, and positions where a broad developer can contribute quickly and take ownership.",
    checklist: [
      "Front-end, back-end, and API development",
      "Databases, SQL, and business logic in C#",
      "System design, data flows, and technical structure",
      "Fast ramp-up in existing codebases and workflows",
      "Integrations with external services and APIs",
      "Performance, accessibility, and responsive UI",
      "Collaboration with teams, stakeholders, and clear priorities",
      "Code that is maintainable, extendable, and safe to operate",
    ],
    servicesKicker: "Services",
    servicesTitle: "Support from start to launch",
    servicesStrengths: "My strength is being able to step in where the need is greatest, understand the bigger picture quickly, and contribute both in code and technical structure.",
    proofKicker: "Why work with me",
    proofTitle: "Why I work well in both teams and projects",
    proofStats: [
      ["Fast ramp-up", "I get productive quickly in existing codebases, tools, and workflows without a long onboarding curve."],
      ["Broad contribution", "I can contribute across UI, back end, APIs, databases, and technical decisions depending on where the need is greatest."],
      ["Maintainable delivery", "I build solutions that are easy to understand, easy to collaborate around, and realistic to maintain over time."],
    ],
    services: [
      ["React", "Build fast, modern interfaces with a strong focus on UX, structure, and performance."],
      ["C#", "Develop robust business logic and clean back-end solutions in C#."],
      ["SQL", "Design databases, write efficient queries, and build reliable data models."],
      ["Laravel", "Build Laravel back ends with clear architecture, validation, and API flows."],
      ["App Development", "Build user-friendly apps with stable architecture and clear user flows."],
      ["System Architecture", "Help shape technical structure, data flows, and solutions that are built to evolve."],
    ],
    processKicker: "Process",
    processTitle: "A simple process with clear results",
    process: [
      ["1. Strategy", "We define goals, requirements, audience, and how the system needs to work in practice."],
      ["2. Structure", "I define a clear technical direction for flows, data, integrations, and architecture."],
      ["3. Delivery", "I build, test, and optimize the solution for launch and long-term maintainability."],
    ],
    linksKicker: "Continue",
    linksTitle: "Explore more pages",
    links: [
      ["Services", "services"],
      ["About", "about"],
      ["Contact", "contact"],
    ],
    finalTitle: "Need a developer with an end-to-end mindset?",
    finalText: "Send a message or book an intro call. You will get a clear recommendation for the next step, both technically and commercially.",
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
      ? "Software developer in Västervik with a broad full-stack profile. I build maintainable digital systems from UI and APIs to databases, integrations, and technical structure."
      : "Systemutvecklare i Västervik med bred fullstackprofil. Jag bygger hållbara digitala system från gränssnitt och API:er till databaser, integrationer och teknisk struktur.";

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
                {Array.isArray(t.lede)
                  ? t.lede.map((paragraph) => (
                      <p className="lede" key={paragraph}>
                        {paragraph}
                      </p>
                    ))
                  : <p className="lede">{t.lede}</p>}

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
