// Projektkort (sammanfattningar) för case-listorna. Projects visar utvecklarcasen
// och HemsidorExempel hemsidecasen, se DEV_CASES och HEMSIDOR_CASES i paths.js.
// Hemsidespåret finns bara på svenska, så hemsidecasen saknar engelska kort.
export const PROJECT_CARDS = {
  sv: [
    {
      title: "Bröd & Deli",
      meta: "hemsida för lokalt bageri / Next.js / Västervik",
      problem:
        "Ett bageri på Allén i Västervik behövde en hemsida där kunderna snabbt hittar sortiment, öppettider och vägen dit, oftast i mobilen.",
      solution:
        "En snabb statisk Next.js-sajt med sortimentet i åtta kategorier med bilder, en kontaktsida med öppettider och karta, och egen domän: brodochdeli.se.",
      signal:
        "Visar hur jag bygger hemsidor för lokala företag: tydligt innehåll, snabb i mobilen och byggd för att synas i lokala sökningar.",
      details: ["Sortiment i bilder", "Öppettider och karta", "Lokal SEO", "Egen domän", "Statisk export"],
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Render"],
      slug: "brod-och-deli",
      href: "https://brodochdeli.se/",
      linkText: "Besök sajten",
    },
    {
      title: "Ankarsrums Jaktskytteklubb",
      meta: "hemsida för förening / Next.js / adminläge",
      problem:
        "Skytteklubbens gamla hemsida låg nere, och styrelsen behövde kunna uppdatera nyheter och banbokningar utan att koda.",
      solution:
        "En ny hemsida med innehållet återskapat från den gamla sajten, sidor för banor, medlemskap och jägarexamen, och ett inloggat adminläge för nyheter och kalender.",
      signal:
        "Visar hur jag bygger hemsidor för föreningar: enkelt för styrelsen att hålla aktuell och tydlig för medlemmar och nya besökare.",
      details: ["Adminläge för styrelsen", "Nyheter och kalender", "Återskapat innehåll", "Förskalade bilder", "Neon Postgres"],
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Neon Postgres", "Render"],
      slug: "ankarsrums-jsk",
      href: "https://ankarsrums-jaktskytteklubb.onrender.com/",
      linkText: "Besök sajten",
    },
    {
      title: "Lördagsgolf",
      meta: "publik webb + adminpanel / React / JWT-API",
      problem:
        "Besökare ska snabbt förstå bana, upplägg och resultat, samtidigt som arrangörerna behöver ett säkert sätt att registrera spelare, rundor och banor utan att röra databasen direkt.",
      solution:
        "Jag byggde en React/Vite-frontend som pratar med en egen ASP.NET Core-backend: publika säsongs- och spelarsidor, en adminpanel bakom JWT-inloggning för att hantera spelare, rundor och banor, samt ett adapterlager som normaliserar API-svarens skiftande form.",
      signal:
        "Visar att jag kan bygga och koppla ihop en frontend mot en egen autentiserad backend över två repon, med adapters och en robust API-klient som håller UI:t oberoende av backendens exakta svarsform.",
      details: ["JWT-säkrad adminpanel", "CRUD för spelare/rundor/banor", "Adapterlager mot API-kontrakt", "API-klient med timeout/retry", "Spelarstatistik per säsong"],
      stack: ["React 19", "Vite", "React Router", "Tailwind", "ASP.NET Core", "JWT", "Render"],
      slug: "lordagsgolf",
      href: "https://lordagsgolf.se/",
      linkText: "Besök webbplats",
    },
    {
      title: "Kommunfotbollen",
      meta: "hyperlokal data-hub / Next.js / Claude API",
      problem:
        "Lokalfotboll är utspridd över flera källor och lokaltidningar. Ingen enskild plats samlar tabeller, matcher och målskyttar för kommunens lag, uppdaterat automatiskt.",
      solution:
        "Jag byggde en Next.js-app som varje kväll hämtar fem serier från Everysport och artiklar från tre lokaltidningar. Claude bedömer vilka artiklar som handlar om lagen och läser matchreferaten för att plocka ut målskyttar ur fritext. Varje lokalt lag har en egen sida med nästa match, tabellutdrag, matcher och nyheter.",
      signal:
        "Visar att jag kan bygga en källagnostisk ingest-arkitektur, använda AI för strukturerad extraktion ur text och driva det dygnet runt på gratisnivåer utan att slå i minnes- eller anslutningstak.",
      details: ["Källagnostisk ingest", "AI-driven relevansfiltrering", "Målskytte-extraktion ur text", "Egen schemaläggning i appen", "Lagsidor med bilder"],
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "sharp", "Render"],
      slug: "kommunfotboll",
      href: "https://kommunfotboll.onrender.com/",
      linkText: "Öppna appen",
    },
    {
      title: "VenueFlow",
      meta: "multi-tenant booking / Laravel / live app",
      problem:
        "En verksamhetsnära bokningsprodukt behöver hantera gäster, resurser, tider, personalroller och konflikter utan att skapa friktion för användaren.",
      solution:
        "Jag byggde en Laravel-baserad plattform med publik bokning utan konto, admin- och staff-vyer, RBAC, tenant-isolering och transaktionssäker kontroll av bokningskrockar.",
      signal:
        "Visar att jag kan bygga system där affärsregler, datamodell och vardagsflöden måste sitta ihop, inte bara ett snyggt frontendskal.",
      details: ["Tenant-isolering", "Rollbaserad åtkomst", "Konfliktkontroll", "Visuell golvplan", "Neon + Render"],
      stack: ["Laravel 11", "PHP 8.3", "Neon PostgreSQL", "Blade", "Tailwind", "Alpine.js", "Render"],
      slug: "venueflow",
      href: "https://venueflow-wjh1.onrender.com/",
      linkText: "Öppna appen",
    },
    {
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
      slug: "fairway",
      href: "https://golf-scorecard-ok6r.onrender.com/",
      linkText: "Öppna appen",
    },
    {
      title: "Kvitt",
      meta: "delad utgiftsapp / Laravel / Vue 3",
      problem:
        "Att dela utlägg i grupp (resa, sommarstuga, matlag) slutar ofta i ett virrvarr av småskulder korsvis mellan alla, och ingen vet riktigt vem som ska betala vem.",
      solution:
        "Jag byggde en Laravel + Inertia + Vue-app med grupper, delade utlägg och en girig skuldförenklingsalgoritm som räknar ut det minsta antalet transaktioner som krävs för att göra upp hela gruppens mellanhavanden, plus påminnelser med en atomärt skyddad nedkylning.",
      signal:
        "Visar att jag kan lösa ett riktigt algoritmproblem, inte bara bygga CRUD, och hantera race conditions korrekt med atomära databasoperationer.",
      details: ["Skuldförenklingsalgoritm", "Grupper & delade utlägg", "Atomär påminnelse-cooldown", "Push- & e-postnotiser", "Schemalagda påminnelser"],
      stack: ["Laravel 13", "PHP 8.3", "Inertia.js", "Vue 3", "PostgreSQL", "Pest", "Larastan", "Tailwind v4", "Render"],
      slug: "kvitt",
      href: "https://kvitt-web.onrender.com/",
      linkText: "Öppna appen",
    },
    {
      title: "FlagForge",
      meta: "feature-flag-plattform / Laravel / RBAC",
      problem:
        "Att slå på och av funktioner i produktion utan att kunna kontrollera vem som godkänner det, spåra vad som ändrades, eller rulla tillbaka snabbt är farligt i en verksamhet med flera miljöer och flera personer inblandade.",
      solution:
        "Jag byggde en Laravel-baserad feature-flag-kontrollpanel à la LaunchDarkly: projekt-scopade API-nycklar, deterministisk rollout-hashning, ett draft/publish-flöde per miljö med tvåpersonersgodkännande för kritiska flaggor, en \"break-glass\"-nödöppning, och en omutlig audit-logg med kontrollsummekedja.",
      signal:
        "Visar att jag kan designa styrning och behörighet för ett verktyg andra utvecklare litar på i produktion, inte bara bygga funktioner — governance, spårbarhet och race-condition-säkerhet är förstaklassmedborgare, inte eftertankar.",
      details: ["RBAC per projekt", "Tvåpersonersgodkännande", "Omutlig audit-kedja", "Deterministisk rollout-hashning", "Break-glass-nödöppning"],
      stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "PHPUnit", "Pint", "GitHub Actions", "Render"],
      slug: "flagforge",
      href: "https://flagforge-ira0.onrender.com/",
      linkText: "Öppna appen",
    },
    {
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
      slug: "fx-monitor",
      href: "https://fx-monitor-tlpr.onrender.com",
      linkText: "Öppna appen",
    },
  ],
  en: [
    {
      title: "Lördagsgolf",
      meta: "public site + admin panel / React / JWT API",
      problem:
        "Visitors need to understand the course, setup, and results quickly, while the organizers need a secure way to register players, rounds, and courses without touching the database directly.",
      solution:
        "I built a React/Vite frontend that talks to a purpose-built ASP.NET Core backend: public season and player pages, an admin panel behind JWT login for managing players, rounds, and courses, and an adapter layer that normalizes the API's varying response shapes.",
      signal:
        "Shows that I can build and wire a frontend to a self-authored authenticated backend across two repos, with adapters and a resilient API client that keep the UI decoupled from the backend's exact response shape.",
      details: ["JWT-protected admin panel", "CRUD for players/rounds/courses", "Adapter layer over the API contract", "API client with timeout/retry", "Per-season player stats"],
      stack: ["React 19", "Vite", "React Router", "Tailwind", "ASP.NET Core", "JWT", "Render"],
      slug: "lordagsgolf",
      href: "https://lordagsgolf.se/",
      linkText: "Visit website",
    },
    {
      title: "Kommunfotbollen",
      meta: "hyperlocal data hub / Next.js / Claude API",
      problem:
        "Local football coverage is scattered across sources and local newspapers. No single place aggregates standings, matches, and goal scorers for a town's teams, kept automatically up to date.",
      solution:
        "I built a Next.js app that pulls five leagues from Everysport and articles from three local newspapers every evening. Claude decides which articles are about the teams and reads match reports to pull goal scorers out of free text. Every local team has its own page with the next match, a table excerpt, results, and news.",
      signal:
        "Shows that I can build a source-agnostic ingest architecture, apply AI to structured extraction from text, and run it around the clock on free tiers without hitting memory or connection limits.",
      details: ["Source-agnostic ingest", "AI-driven relevance filtering", "Goal-scorer extraction from text", "In-app scheduling", "Team pages with photos"],
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "sharp", "Render"],
      slug: "kommunfotboll",
      href: "https://kommunfotboll.onrender.com/",
      linkText: "Open app",
    },
    {
      title: "VenueFlow",
      meta: "multi-tenant booking / Laravel / live app",
      problem:
        "A business-facing booking product needs to handle guests, resources, times, staff roles, and conflicts without creating friction for the user.",
      solution:
        "I built a Laravel platform with public booking without accounts, admin and staff views, RBAC, tenant isolation, and transaction-safe booking conflict checks.",
      signal:
        "Shows that I can build systems where business rules, data model, and daily workflows need to hold together, not just a polished frontend shell.",
      details: ["Tenant isolation", "Role-based access", "Conflict checks", "Visual floor plan", "Neon + Render"],
      stack: ["Laravel 11", "PHP 8.3", "Neon PostgreSQL", "Blade", "Tailwind", "Alpine.js", "Render"],
      slug: "venueflow",
      href: "https://venueflow-wjh1.onrender.com/",
      linkText: "Open app",
    },
    {
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
      slug: "fairway",
      href: "https://golf-scorecard-ok6r.onrender.com/",
      linkText: "Open app",
    },
    {
      title: "Kvitt",
      meta: "shared expense app / Laravel / Vue 3",
      problem:
        "Splitting expenses in a group (a trip, a shared cabin, a dinner club) quickly turns into a tangle of small debts crossing between everyone, and nobody's quite sure who owes whom.",
      solution:
        "I built a Laravel + Inertia + Vue app with groups, split expenses, and a greedy debt-simplification algorithm that computes the minimum number of transactions needed to settle the whole group, plus reminders with an atomically-protected cooldown.",
      signal:
        "Shows I can solve a real algorithmic problem, not just build CRUD, and handle race conditions correctly with atomic database operations.",
      details: ["Debt-simplification algorithm", "Groups & split expenses", "Atomic reminder cooldown", "Push & email notifications", "Scheduled reminders"],
      stack: ["Laravel 13", "PHP 8.3", "Inertia.js", "Vue 3", "PostgreSQL", "Pest", "Larastan", "Tailwind v4", "Render"],
      slug: "kvitt",
      href: "https://kvitt-web.onrender.com/",
      linkText: "Open app",
    },
    {
      title: "FlagForge",
      meta: "feature-flag platform / Laravel / RBAC",
      problem:
        "Turning features on and off in production without control over who approves it, traceability for what changed, or a fast rollback path is dangerous once multiple environments and multiple people are involved.",
      solution:
        "I built a Laravel-based feature-flag control plane in the style of LaunchDarkly: project-scoped API keys, deterministic rollout hashing, a draft/publish workflow per environment with two-person approval for critical flags, a break-glass emergency override, and an immutable audit log with a checksum chain.",
      signal:
        "Shows I can design governance and permissions for a tool other developers trust in production, not just build features — governance, traceability, and race-condition safety are first-class citizens, not afterthoughts.",
      details: ["Per-project RBAC", "Two-person approval", "Immutable audit chain", "Deterministic rollout hashing", "Break-glass override"],
      stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "PHPUnit", "Pint", "GitHub Actions", "Render"],
      slug: "flagforge",
      href: "https://flagforge-ira0.onrender.com/",
      linkText: "Open app",
    },
    {
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
      slug: "fx-monitor",
      href: "https://fx-monitor-tlpr.onrender.com",
      linkText: "Open app",
    },
  ],
};
