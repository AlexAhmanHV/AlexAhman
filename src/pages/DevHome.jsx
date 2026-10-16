import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";
import { devCasePath, pagePath } from "../paths";

import { SITE_URL } from "../routes";
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "";

// Startsidan för utvecklarspåret: hero och utvalda case (tidigare Home) och
// tjänsterna (tidigare Services).
const copy = {
  sv: {
    kicker: "Alexander Åhman / systemutvecklare i Västervik",
    headline: "Systemutvecklare som bygger webbappar och automation som fungerar på riktigt.",
    lede: [
      "Jag hjälper team att gå från rörigt problem till körbar produkt: datamodell, API, gränssnitt, automation och driftsättning.",
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
        title: "Fairway",
        meta: "golf scorecard / Next.js / Claude API",
        problem: "Golfare som vill förbättra sig har ingen data att agera på efter en runda på papper. De behöver ett sätt att logga hål för hål och få konkret återkoppling.",
        solution: "En fullstack Next.js-app med hål-för-hål-scorecard, localStorage-lagring, statistikdiagram, screenshot-import via AI-vision och Claude-driven coachinganalys per runda.",
        stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Anthropic SDK", "Zod", "Render"],
        signal: "Jag kan bygga säkra AI-integrationer med rätt ansvarsfördelning: nyckel på servern, validerad data, ett gränssnitt som fungerar på banan.",
        slug: "fairway",
      },
      {
        index: "02",
        title: "FX Monitor",
        meta: "data pipeline / static delivery",
        problem: "Växelkurser behöver följas över tid med jämförelser, KPI:er och riskindikatorer utan tung backenddrift.",
        solution: "En monorepo med React/TypeScript-frontend och Python-pipeline som hämtar ECB-data, publicerar statiska JSON-filer och uppdateras via GitHub Actions.",
        stack: ["React", "TypeScript", "Vitest", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
        signal: "Jag gillar när drift, data och gränssnitt möts i en lösning som är enkel att förstå och billig att köra.",
        slug: "fx-monitor",
      },
      {
        index: "03",
        title: "Lördagsgolf",
        meta: "public site / information flow",
        problem: "Besökare behöver snabbt förstå bana, upplägg och kontaktvägar utan att gräva i text eller tappa tempo i mobilen.",
        solution: "En React/Vite-SPA med tydlig informationshierarki, responsiva vyer och fokuserade CTA:er för ett enkelt publikt flöde.",
        stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
        signal: "Jag kan göra innehåll konkret, snabbt att scanna och tekniskt lätt att vidareutveckla.",
        slug: "lordagsgolf",
      },
    ],
    workCta: "Se fler detaljer",
    servicesKicker: "Tjänster",
    servicesTitle: "Jag hjälper där produkt, kod och verklighet möts",
    servicesLede:
      "Jag tar uppdrag där det behövs någon som kan förstå problemet, välja rimlig teknisk riktning och bygga en version som faktiskt går att använda.",
    serviceLabels: {
      context: "När det passar",
      output: "Vad du får",
      stack: "Typisk teknik",
    },
    services: [
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
    linksKicker: "Läs vidare",
    linksTitle: "Utforska fler sidor",
    links: [
      ["Se case", "devProjekt"],
      ["Läs om Alex", "devOm"],
      ["Starta dialog", "devKontakt"],
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
        title: "Fairway",
        meta: "golf scorecard / Next.js / Claude API",
        problem: "Golfers who want to improve have no data to act on after a paper round. They need a way to log hole by hole and get concrete feedback on what cost strokes.",
        solution: "A full-stack Next.js app with hole-by-hole scorecard, localStorage persistence, statistics charts, screenshot import via AI vision, and Claude-powered coaching analysis per round.",
        stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Anthropic SDK", "Zod", "Render"],
        signal: "I can build secure AI integrations with the right separation of concerns: key server-side, validated data, an interface that works on the course.",
        slug: "fairway",
      },
      {
        index: "02",
        title: "FX Monitor",
        meta: "data pipeline / static delivery",
        problem: "Exchange rates need comparison, KPIs, and risk indicators over time without heavy backend operations.",
        solution: "A monorepo with a React/TypeScript frontend and Python pipeline that fetches ECB data, publishes static JSON, and updates through GitHub Actions.",
        stack: ["React", "TypeScript", "Vitest", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
        signal: "I like solutions where operations, data, and interface meet in something simple to reason about and cheap to run.",
        slug: "fx-monitor",
      },
      {
        index: "03",
        title: "Lördagsgolf",
        meta: "public site / information flow",
        problem: "Visitors need to understand the course, setup, and contact paths quickly without digging through text or losing pace on mobile.",
        solution: "A React/Vite SPA with clear information hierarchy, responsive views, and focused CTAs for a simple public flow.",
        stack: ["React", "Vite", "JSX", "React Router", "Tailwind", "ESLint"],
        signal: "I can make content concrete, easy to scan, and technically easy to keep evolving.",
        slug: "lordagsgolf",
      },
    ],
    workCta: "View details",
    servicesKicker: "Services",
    servicesTitle: "I help where product, code, and reality meet",
    servicesLede:
      "I take on work where someone needs to understand the problem, choose a reasonable technical direction, and build a version people can actually use.",
    serviceLabels: {
      context: "When it fits",
      output: "What you get",
      stack: "Typical tech",
    },
    services: [
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
      ["Projects", "devProjekt"],
      ["About", "devOm"],
      ["Contact", "devKontakt"],
    ],
    finalTitle: "Need a developer who builds for real?",
    finalText: "Send a message with your current state, goal, and what is getting in the way. I will respond with a concrete next step.",
  },
};

export default function DevHome({ lang }) {
  const t = copy[lang] || copy.sv;
  const hasBooking = Boolean(BOOKING_URL);

  const pathname = pagePath("dev", lang);

  const seoTitle =
    lang === "en"
      ? "Software developer in Västervik – full-stack, React, Laravel | Alexander Ahman"
      : "Systemutvecklare i Västervik – fullstack, React, Laravel | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Full-stack developer in Västervik building web apps, APIs, databases, and product-facing systems with React, Laravel, and PostgreSQL, on site or remote."
      : "Fullstackutvecklare och webbutvecklare i Västervik: React- och Laravel-webbappar, API:er, PostgreSQL, dataflöden och teknisk uppstart för företag och team, på plats eller remote.";

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
      "https://github.com/AlexAhmanHV",
    ],
    knowsAbout: ["React", "Laravel", "TypeScript", "Python", "PostgreSQL", "API development", "System design"],
  };
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: lang === "en" ? "Full-stack development services" : "Fullstacktjänster",
    itemListElement: t.services.map((item, index) => ({
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

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(personJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
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
                {t.lede.map((paragraph) => (
                  <p className="lede heroLede" key={paragraph}>
                    {paragraph}
                  </p>
                ))}

                <div className="row heroActions" style={{ marginTop: 16 }}>
                  <Link className="btn heroPrimary" to={pagePath("devKontakt", lang)}>
                    {t.ctaPrimary}
                  </Link>
                  <Link className="btn btn-outline heroSecondary" to={pagePath("devProjekt", lang)}>
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
            <Link className="textLink" to={pagePath("devProjekt", lang)}>
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
                  <Link className="textLink selectedCaseLink" to={devCasePath(item.slug, lang)}>
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
        </div>
      </section>

      <section className="section pageEditorial">
        <div className="container">
          <div className="kicker">{t.servicesKicker}</div>
          <h2 className="h2 homeSectionTitle" style={{ marginTop: 10 }}>
            {t.servicesTitle}
          </h2>
          <p className="lede">{t.servicesLede}</p>

          <div className="serviceList">
            {t.services.map((item) => (
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
                    <span>{t.serviceLabels.context}</span>
                    <p>{item.context}</p>
                  </div>
                  <div>
                    <span>{t.serviceLabels.output}</span>
                    <p>{item.output}</p>
                  </div>
                  <div className="caseStackBlock">
                    <span>{t.serviceLabels.stack}</span>
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
            {t.links.map(([label, page]) => (
              <Link className="btn btn-outline exploreButton" key={page} to={pagePath(page, lang)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section finalWorkbenchSection" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="homeFinal finalWorkbench">
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{t.finalTitle}</h2>
            <p className="lede">{t.finalText}</p>

            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pagePath("devKontakt", lang)}>
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
