import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "";

const copy = {
  sv: {
    kicker: "Alexander Åhman / systemutvecklare",
    headline: "Systemutvecklare som bygger praktiska webbappar och automationer.",
    lede: [
      "Jag hjälper team och företag att gå från rörigt problem till körbar lösning: datamodell, API, gränssnitt, automation och drift.",
      "Du anlitar mig när du behöver någon som förstår nuläget snabbt, fattar rimliga tekniska beslut och bygger första versionen utan att tappa kvaliteten.",
    ],
    ctaPrimary: "Kontakta mig",
    ctaSecondary: "Se projekt",
    ctaBook: "Boka första samtal",
    badges: ["React", "Laravel", "TypeScript", "Python", "PostgreSQL", "CI/CD"],
    availabilityTitle: "Produktnära systemutvecklare",
    availabilityText: "Jag bygger användbara digitala flöden med praktiskt ansvar från problemförståelse till fungerande produkt.",
    heroMeta: [
      ["mode", "fullstack / produktnära"],
      ["base", "Västervik, remote"],
      ["focus", "webbappar, AI, automation"],
    ],

    checklist: [
      "Bygger från databas och API till användbart gränssnitt",
      "Hittar risker innan de blir dyra",
      "Dokumenterar beslut så teamet kan fortsätta",
      "Prioriterar det som får lösningen i händerna på användare",
    ],
    selectedKicker: "Selected work",
    selectedTitle: "Tre projekt som visar hur jag tänker när det ska bli mer än en snygg vy.",
    caseLabels: {
      problem: "Problem",
      solution: "Lösning",
      stack: "Teknik",
      signal: "Visar om mig",
    },
    selectedWork: [
      {
        index: "01",
        title: "VenueFlow",
        meta: "multi-tenant booking / live app",
        problem: "Aktivitets- och restaurangmiljöer behöver hantera bokningar, resurser, personalroller och konflikter utan att göra gästen beroende av ett konto.",
        solution: "En Laravel-baserad bokningsplattform med publik gästbokning, intern admin/staff-panel, RBAC, tenant-isolering och transaktionssäker konfliktkontroll.",
        stack: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Supabase", "Blade", "Alpine.js", "Render"],
        signal: "Jag kan bygga affärsnära system där datamodell, behörighet och vardagsflöden måste hålla ihop.",
        href: "https://venueflow-wjh1.onrender.com/",
        casePath: "projects/venueflow",
        linkText: "Öppna appen",
      },
      {
        index: "02",
        title: "FX Monitor",
        meta: "data pipeline / static delivery",
        problem: "Växelkurser behöver följas över tid med jämförelser, KPI:er och riskindikatorer utan tung backenddrift.",
        solution: "En monorepo med React/TypeScript-frontend och Python-pipeline som hämtar ECB-data, publicerar statiska JSON-filer och uppdateras via GitHub Actions.",
        stack: ["React", "TypeScript", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
        signal: "Jag gillar när drift, data och gränssnitt möts i en lösning som är enkel att förstå och billig att köra.",
        href: "https://fx-monitor-tlpr.onrender.com",
        casePath: "projects/fx-monitor",
        linkText: "Öppna appen",
      },
      {
        index: "03",
        title: "Lördagsgolf",
        meta: "public site / information flow",
        problem: "Besökare behöver snabbt förstå bana, upplägg och kontaktvägar utan att gräva i text eller tappa tempo i mobilen.",
        solution: "En React/Vite-SPA med tydlig informationshierarki, responsiva vyer och fokuserade CTA:er för ett enkelt publikt flöde.",
        stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
        signal: "Jag kan göra innehåll konkret, snabbt att scanna och tekniskt lätt att vidareutveckla.",
        href: "https://lordagsgolf.se/",
        casePath: "projects/lordagsgolf",
        linkText: "Besök webbplats",
      },
    ],
    workCta: "Se fler detaljer",
    workCtaPath: "projects",
    howKicker: "How I work",
    howTitle: "Jag arbetar nära problemet, inte bara briefen.",
    howIntro:
      "Min process är ganska rak: förstå vad som faktiskt ska hända i verksamheten, skissa systemet runt det och bygga i steg som går att testa tidigt.",
    how: [
      ["01 / Läs nuläget", "Jag börjar med användarflöde, datakällor, begränsningar och vad som redan finns. Det sparar tid senare."],
      ["02 / Gör det körbart", "Jag prioriterar en version som fungerar på riktigt framför en stor plan som aldrig möter användare."],
      ["03 / Skriv för nästa person", "Kod, namn, struktur och små anteckningar ska göra det lätt för mig eller någon annan att fortsätta."],
      ["04 / Var tydlig med tradeoffs", "Jag säger vad som är snabbt, vad som är robust och vad som behöver vänta. Det gör beslut enklare."],
    ],
    localSpotlightKicker: "Lokalt i Västervik",
    localSpotlightTitle: "Bor du i Västervik med omnejd och behöver en utvecklare?",
    localSpotlightText:
      "Behöver du en som tar helhetsansvar för det digitala? Jag finns lokalt för dig i Västervik och gör det enkelt att få fart på både synlighet och försäljning.",
    localSpotlightCta: "Planera en hemsida i Västervik",
    linksKicker: "Läs vidare",
    linksTitle: "Utforska fler sidor",
    links: [
      ["Se case", "projects"],
      ["Läs om Alex", "about"],
      ["Starta dialog", "contact"],
    ],
    finalTitle: "Behöver du en utvecklare som bygger på riktigt?",
    finalText:
      "Skicka ett meddelande med nuläge, mål och vad som skaver. Jag återkommer med ett konkret nästa steg.",
  },

  en: {
    kicker: "Alexander Åhman / software developer",
    headline: "Software developer building practical web apps and automations.",
    lede: [
      "I help teams move from messy problem to running product: data model, API, interface, automation, and deployment.",
      "You bring me in when you need someone who understands the current state quickly, makes reasonable technical decisions, and ships the first version without losing quality.",
    ],
    ctaPrimary: "Contact me",
    ctaSecondary: "View projects",
    ctaBook: "Book intro call",
    badges: ["React", "Laravel", "TypeScript", "Python", "PostgreSQL", "CI/CD"],
    availabilityTitle: "Product-minded software developer",
    availabilityText: "I build useful digital workflows with practical ownership from problem understanding to working product.",
    heroMeta: [
      ["mode", "full-stack / product-minded"],
      ["base", "Västervik, remote"],
      ["focus", "web apps, AI, automation"],
    ],
    checklist: [
      "Builds from database and API to usable interface",
      "Finds risks before they become expensive",
      "Documents decisions so the team can continue",
      "Prioritizes what gets the solution in front of users",
    ],
    selectedKicker: "Selected work",
    selectedTitle: "Three projects that show how I think when the job is more than a good-looking view.",
    caseLabels: {
      problem: "Problem",
      solution: "Solution",
      stack: "Tech",
      signal: "Shows about me",
    },
    selectedWork: [
      {
        index: "01",
        title: "VenueFlow",
        meta: "multi-tenant booking / live app",
        problem: "Activity and restaurant venues need booking, resources, staff roles, and conflict handling without forcing guests into accounts.",
        solution: "A Laravel booking platform with public guest booking, internal admin/staff panels, RBAC, tenant isolation, and transaction-safe conflict checks.",
        stack: ["Laravel 11", "PHP 8.3", "PostgreSQL", "Supabase", "Blade", "Alpine.js", "Render"],
        signal: "I can build business-facing systems where data model, permissions, and daily workflows need to hold together.",
        href: "https://venueflow-wjh1.onrender.com/",
        casePath: "projects/venueflow",
        linkText: "Open app",
      },
      {
        index: "02",
        title: "FX Monitor",
        meta: "data pipeline / static delivery",
        problem: "Exchange rates need comparison, KPIs, and risk indicators over time without heavy backend operations.",
        solution: "A monorepo with a React/TypeScript frontend and Python pipeline that fetches ECB data, publishes static JSON, and updates through GitHub Actions.",
        stack: ["React", "TypeScript", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
        signal: "I like solutions where operations, data, and interface meet in something simple to reason about and cheap to run.",
        href: "https://fx-monitor-tlpr.onrender.com",
        casePath: "projects/fx-monitor",
        linkText: "Open app",
      },
      {
        index: "03",
        title: "Lördagsgolf",
        meta: "public site / information flow",
        problem: "Visitors need to understand the course, setup, and contact paths quickly without digging through text or losing pace on mobile.",
        solution: "A React/Vite SPA with clear information hierarchy, responsive views, and focused CTAs for a simple public flow.",
        stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
        signal: "I can make content concrete, easy to scan, and technically easy to keep evolving.",
        href: "https://lordagsgolf.se/",
        casePath: "projects/lordagsgolf",
        linkText: "Visit website",
      },
    ],
    workCta: "View details",
    workCtaPath: "projects",
    howKicker: "How I work",
    howTitle: "I work close to the problem, not just the brief.",
    howIntro:
      "My process is direct: understand what actually needs to happen in the business, sketch the system around it, and build in steps that can be tested early.",
    how: [
      ["01 / Read the current state", "I start with user flows, data sources, constraints, and what already exists. It saves time later."],
      ["02 / Make it runnable", "I prioritize a version that works for real over a large plan that never meets users."],
      ["03 / Write for the next person", "Code, names, structure, and small notes should make it easy for me or someone else to continue."],
      ["04 / Be clear about tradeoffs", "I say what is fast, what is robust, and what needs to wait. That makes decisions easier."],
    ],
    linksKicker: "Continue",
    linksTitle: "Explore more pages",
    links: [
      ["Projects", "projects"],
      ["About", "about"],
      ["Contact", "contact"],
    ],
    finalTitle: "Need a developer who builds for real?",
    finalText: "Send a message with your current state, goal, and what is getting in the way. I will respond with a concrete next step.",
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
      ? "Full-stack software developer in Västervik building real digital systems across UI, APIs, data, integrations, deployment, and product workflows."
      : "Fullstackutvecklare i Västervik som bygger riktiga digitala system över gränssnitt, API:er, data, integrationer, drift och produktflöden.";

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
    knowsAbout: ["React", "Laravel", "TypeScript", "Python", "PostgreSQL", "API development", "System design"],
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

      <section className="hero homeHero portfolioRebuildHero boldPortfolioHero">
        <div className="container">
          <div className="homeHeroPanel homeHeroRebuild workbenchHero boldHeroCanvas fadeUp" data-parallax="hero">
            <div className="heroAmbient" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="workbenchTopline" aria-hidden="true">
              <span>alexahman.se</span>
              <span>systems / automations / product UI</span>
            </div>
            <div className="boldNameRail" aria-hidden="true">Alexander Åhman</div>
            <div className="homeHeroGrid workbenchGrid boldHeroGrid">
              <div className="homeHeroCopy homeHeroCommand workbenchCopy boldHeroCopy">
                <div className="kicker heroKicker">{t.kicker}</div>
                <h1 className="h1 homeHeadline workbenchHeadline">{t.headline}</h1>
                {Array.isArray(t.lede)
                  ? t.lede.map((paragraph) => (
                      <p className="lede heroLede" key={paragraph}>
                        {paragraph}
                      </p>
                    ))
                  : <p className="lede heroLede">{t.lede}</p>}

                <div className="row heroActions" style={{ marginTop: 16 }}>
                  <Link className="btn heroPrimary" to={pathFor(lang, "contact")}>
                    {t.ctaPrimary}
                  </Link>
                  <Link className="btn btn-outline heroSecondary" to={pathFor(lang, "projects")}>
                    {t.ctaSecondary}
                  </Link>
                </div>

                <div className="badges homeBadges workbenchBadges">
                  {t.badges.map((badge) => (
                    <span className="badge" key={badge}>
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              <div className="boldPortraitStack">
                <figure className="boldPortraitCard">
                  <img src="/Alex-680.jpg" alt="Alexander Åhman" />
                  <figcaption>
                    <span>{lang === "en" ? "Based in Västervik" : "Bas i Västervik"}</span>
                    <strong>{lang === "en" ? "Building useful systems" : "Bygger användbara system"}</strong>
                  </figcaption>
                </figure>
                <div className="boldBuildStrip" aria-hidden="true">
                  <span>01 problem</span>
                  <span>02 model</span>
                  <span>03 interface</span>
                  <span>04 ship</span>
                </div>
              </div>

              <aside className="homeSignalCard homeHeroConsole workbenchConsole boldSignalPanel">
                <div className="terminalHeader" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="consoleEyebrow" aria-hidden="true">
                  <span>profile.ready</span>
                  <span>vastervik / remote</span>
                </div>
                <div className="kicker">{t.availabilityTitle}</div>
                <p style={{ marginTop: 12 }}>{t.availabilityText}</p>

                <div className="systemMap" aria-hidden="true">
                  <span className="systemNode systemNodeData">Data</span>
                  <span className="systemLine systemLineOne" />
                  <span className="systemNode systemNodeApi">API</span>
                  <span className="systemLine systemLineTwo" />
                  <span className="systemNode systemNodeUi">UI</span>
                  <span className="systemLine systemLineThree" />
                  <span className="systemNode systemNodeOps">Ops</span>
                </div>

                <dl className="homeMetaList">
                  {t.heroMeta.map(([label, value]) => (
                    <div className="homeMetaRow" key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="homeChecklist">
                  {t.checklist.map((item) => (
                    <div key={item} className="homeChecklistItem">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="heroSystemStrip" aria-hidden="true">
                  <span>API</span>
                  <span>UI</span>
                  <span>DATA</span>
                  <span>AUTO</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section homeWorkSection">
        <div className="container">
          <div className="sectionIntroLine">
            <div>
              <div className="kicker">{t.selectedKicker}</div>
              <h2 className="h2 homeSectionTitle" style={{ marginTop: 10 }}>
                {t.selectedTitle}
              </h2>
            </div>
            <Link className="textLink" to={pathFor(lang, t.workCtaPath)}>
              {t.workCta}
            </Link>
          </div>

          <div className="selectedWorkList boldProofGrid">
            {t.selectedWork.map((item) => (
              <article className="selectedCase selectedCaseRebuild proofCard boldProofCard" key={item.title}>
                <header className="selectedCaseHeader">
                  <span className="caseIndex">{item.index}</span>
                  <div>
                    <p className="caseMeta">{item.meta}</p>
                    <h3>{item.title}</h3>
                  </div>
                  <Link className="textLink selectedCaseLink" to={pathFor(lang, item.casePath)}>
                    {lang === "en" ? "Read case" : "Läs case"}
                  </Link>
                </header>

                <div className="proofRail" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="caseScanGrid">
                  <div>
                    <span>{t.caseLabels.problem}</span>
                    <p>{item.problem}</p>
                  </div>
                  <div>
                    <span>{t.caseLabels.solution}</span>
                    <p>{item.solution}</p>
                  </div>
                  <div>
                    <span>{t.caseLabels.signal}</span>
                    <p>{item.signal}</p>
                  </div>
                  <div className="caseStackBlock">
                    <span>{t.caseLabels.stack}</span>
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

          {lang === "sv" ? (
            <aside className="localSpotlight localSpotlightRebuild">
              <div>
                <div className="kicker">{t.localSpotlightKicker}</div>
                <h3>{t.localSpotlightTitle}</h3>
                <p>{t.localSpotlightText}</p>
              </div>
              <Link className="btn btn-outline localCtaButton" to="/hemsida-vastervik">
                {t.localSpotlightCta}
              </Link>
            </aside>
          ) : null}
        </div>
      </section>

      <section className="section homeProcessSection processWorkbench">
        <div className="container">
          <div className="howWorkShell">
            <div>
              <div className="kicker">{t.howKicker}</div>
              <h2 className="h2 homeSectionTitle" style={{ marginTop: 10 }}>
                {t.howTitle}
              </h2>
              <p className="lede">{t.howIntro}</p>
            </div>

            <div className="homeProcessGrid editorialProcess">
              {t.how.map(([title, text]) => (
                <div className="homeProcessItem homeProcessItemRebuild" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 28 }}>
        <div className="container">
          <div className="kicker">{t.linksKicker}</div>
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle" style={{ marginTop: 10 }}>
            {t.linksTitle}
          </h2>
          <div className="row exploreButtonRow" style={{ marginTop: 14 }}>
            {t.links.map(([label, to]) => (
              <Link className="btn btn-outline exploreButton" key={to} to={pathFor(lang, to)}>
                {label}
              </Link>
            ))}
            {lang === "sv" ? (
              <Link className="btn btn-outline exploreButton exploreButtonLocal" to="/hemsida-vastervik">
                Lokal hemsida
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section finalWorkbenchSection" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="homeFinal finalWorkbench">
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
