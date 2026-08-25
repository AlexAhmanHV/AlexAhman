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
        stack: ["React", "TypeScript", "Vitest", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
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
      {
        index: "05",
        title: "Kommunfotbollen",
        meta: "hyperlokal data-hub / Next.js / Claude API",
        problem:
          "Lokalfotboll är utspridd över flera källor och lokaltidningar. Ingen enskild plats samlar tabeller, matcher och målskyttar för kommunens lag, uppdaterat automatiskt.",
        solution:
          "Jag byggde en Next.js-app som hämtar serier, matcher och tabeller från en extern sportkälla, och som låter Claude läsa lokaltidningarnas matchreferat för att bedöma relevans och extrahera målskyttar ur ostrukturerad text.",
        signal:
          "Visar att jag kan bygga en källagnostisk ingest-arkitektur och använda AI för strukturerad extraktion ur text, drivet av ett schemalagt, kostnadsfritt driftupplägg.",
        details: ["Källagnostisk ingest", "AI-driven relevansfiltrering", "Målskytte-extraktion ur text", "Cron via GitHub Actions", "Supabase Postgres"],
        stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "GitHub Actions", "Render"],
        casePath: "projects/kommunfotboll",
        href: "https://kommunfotboll.onrender.com/",
        linkText: "Öppna appen",
      },
      {
        index: "06",
        title: "Kvitt",
        meta: "delad utgiftsapp / Laravel / Vue 3",
        problem:
          "Att dela utlägg i grupp (resa, sommarstuga, matlag) slutar ofta i ett virrvarr av småskulder korsvis mellan alla, och ingen vet riktigt vem som ska betala vem.",
        solution:
          "Jag byggde en Laravel + Inertia + Vue-app med grupper, delade utlägg och en girig skuldförenklingsalgoritm som räknar ut det minsta antalet transaktioner som krävs för att göra upp hela gruppens mellanhavanden, plus påminnelser med en atomärt skyddad nedkylning.",
        signal:
          "Visar att jag kan lösa ett riktigt algoritmproblem, inte bara bygga CRUD, och hantera race conditions korrekt med atomära databasoperationer.",
        details: ["Skuldförenklingsalgoritm", "Grupper & delade utlägg", "Atomär påminnelse-cooldown", "Push- & e-postnotiser", "Schemalagda påminnelser"],
        stack: ["Laravel 13", "PHP 8.3", "Inertia.js", "Vue 3", "PostgreSQL", "Pest", "Tailwind v4", "Render"],
        casePath: "projects/kvitt",
        href: "https://kvitt-web.onrender.com/",
        linkText: "Öppna appen",
      },
      {
        index: "07",
        title: "FlagForge",
        meta: "feature-flag-plattform / Laravel / RBAC",
        problem:
          "Att slå på och av funktioner i produktion utan att kunna kontrollera vem som godkänner det, spåra vad som ändrades, eller rulla tillbaka snabbt är farligt i en verksamhet med flera miljöer och flera personer inblandade.",
        solution:
          "Jag byggde en Laravel-baserad feature-flag-kontrollpanel à la LaunchDarkly: projekt-scopade API-nycklar, deterministisk rollout-hashning, ett draft/publish-flöde per miljö med tvåpersonersgodkännande för kritiska flaggor, en \"break-glass\"-nödöppning, och en omutlig audit-logg med kontrollsummekedja.",
        signal:
          "Visar att jag kan designa styrning och behörighet för ett verktyg andra utvecklare litar på i produktion, inte bara bygga funktioner — governance, spårbarhet och race-condition-säkerhet är förstaklassmedborgare, inte eftertankar.",
        details: ["RBAC per projekt", "Tvåpersonersgodkännande", "Omutlig audit-kedja", "Deterministisk rollout-hashning", "Break-glass-nödöppning"],
        stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "Pest", "Pint", "GitHub Actions", "Render"],
        casePath: "projects/flagforge",
        href: "https://flagforge-ira0.onrender.com/",
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
        stack: ["React", "TypeScript", "Vitest", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions"],
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
      {
        index: "05",
        title: "Kommunfotbollen",
        meta: "hyperlocal data hub / Next.js / Claude API",
        problem:
          "Local football coverage is scattered across sources and local newspapers. No single place aggregates standings, matches, and goal scorers for a town's teams, kept automatically up to date.",
        solution:
          "I built a Next.js app that pulls leagues, matches, and standings from an external sports data source, and lets Claude read local newspaper match reports to judge relevance and extract goal scorers from unstructured text.",
        signal:
          "Shows that I can build a source-agnostic ingest architecture and apply AI to structured extraction from text, running on a scheduled, cost-free operational setup.",
        details: ["Source-agnostic ingest", "AI-driven relevance filtering", "Goal-scorer extraction from text", "Cron via GitHub Actions", "Supabase Postgres"],
        stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "GitHub Actions", "Render"],
        casePath: "projects/kommunfotboll",
        href: "https://kommunfotboll.onrender.com/",
        linkText: "Open app",
      },
      {
        index: "06",
        title: "Kvitt",
        meta: "shared expense app / Laravel / Vue 3",
        problem:
          "Splitting expenses in a group (a trip, a shared cabin, a dinner club) quickly turns into a tangle of small debts crossing between everyone, and nobody's quite sure who owes whom.",
        solution:
          "I built a Laravel + Inertia + Vue app with groups, split expenses, and a greedy debt-simplification algorithm that computes the minimum number of transactions needed to settle the whole group, plus reminders with an atomically-protected cooldown.",
        signal:
          "Shows I can solve a real algorithmic problem, not just build CRUD, and handle race conditions correctly with atomic database operations.",
        details: ["Debt-simplification algorithm", "Groups & split expenses", "Atomic reminder cooldown", "Push & email notifications", "Scheduled reminders"],
        stack: ["Laravel 13", "PHP 8.3", "Inertia.js", "Vue 3", "PostgreSQL", "Pest", "Tailwind v4", "Render"],
        casePath: "projects/kvitt",
        href: "https://kvitt-web.onrender.com/",
        linkText: "Open app",
      },
      {
        index: "07",
        title: "FlagForge",
        meta: "feature-flag platform / Laravel / RBAC",
        problem:
          "Turning features on and off in production without control over who approves it, traceability for what changed, or a fast rollback path is dangerous once multiple environments and multiple people are involved.",
        solution:
          "I built a Laravel-based feature-flag control plane in the style of LaunchDarkly: project-scoped API keys, deterministic rollout hashing, a draft/publish workflow per environment with two-person approval for critical flags, a break-glass emergency override, and an immutable audit log with a checksum chain.",
        signal:
          "Shows I can design governance and permissions for a tool other developers trust in production, not just build features — governance, traceability, and race-condition safety are first-class citizens, not afterthoughts.",
        details: ["Per-project RBAC", "Two-person approval", "Immutable audit chain", "Deterministic rollout hashing", "Break-glass override"],
        stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "Pest", "Pint", "GitHub Actions", "Render"],
        casePath: "projects/flagforge",
        href: "https://flagforge-ira0.onrender.com/",
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
