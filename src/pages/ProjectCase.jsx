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
        "CI-pipeline med 67 tester, lint, bygge och sårbarhetsscanning (Dependabot, CodeQL) på varje ändring.",
        "Feltolerant pipeline per valutapar med statusbadge på sajten, så drifthälsa syns utan att gräva i loggar.",
      ],
      result:
        "Projektet visar hur jag kopplar ihop data, automation, frontend och drift till en lösning som är lätt att förstå och billig att köra.",
      stack: ["React", "TypeScript", "Vitest", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions", "Render Static Site"],
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
        "CI pipeline with 67 tests, lint, build, and vulnerability scanning (Dependabot, CodeQL) on every change.",
        "Fault-tolerant pipeline per currency pair with a live status badge, so operational health is visible without digging through logs.",
      ],
      result:
        "The project shows how I connect data, automation, frontend, and deployment into a solution that is easy to understand and cheap to run.",
      stack: ["React", "TypeScript", "Vitest", "Python", "pytest", "ruff", "Chart.js", "GitHub Actions", "Render Static Site"],
      href: "https://fx-monitor-tlpr.onrender.com",
      linkText: "Open FX Monitor",
    },
  },
  fairway: {
    sv: {
      title: "Fairway",
      kicker: "Case / golf scorecard",
      meta: "Next.js / TypeScript / Claude API",
      seoTitle: "Fairway case | Golf scorecard med AI-coachning | Alexander Åhman",
      seoDescription:
        "Case om Fairway: en Next.js-app för golf med hål-för-hål-scorecard, statistik, screenshot-import via AI-vision och Claude-driven coachinganalys.",
      lede:
        "Fairway är en fullstack-app för att logga golfrundor hål för hål, se statistik över tid och få en coachinganalys av Claude baserad på scorekortet.",
      problem:
        "Pappersscorekortet ger ingen data att agera på. Golfare som vill förbättra sig behöver spåra puttar, GIR och fairway-träffar per hål och få feedback på vad som faktiskt kostade slag.",
      solution:
        "Jag byggde en Next.js-app med ett hål-för-hål-formulär, localStorage-lagring utan konto, statistikdiagram, screenshot-import via Claude vision och en server-side AI-rutt som returnerar en strukturerad coachingrapport.",
      decisions: [
        "API-nyckeln hålls enbart på servern via en Next.js-routehandler — aldrig exponerad i klienten.",
        "Zod-validering på både request och AI-response för att garantera strukturerad data.",
        "localStorage för att appen ska fungera utan backend eller konto.",
        "Dynamic import med ssr:false för WebGL-komponenter för att undvika SSR-problem.",
        "Render för enkel deployment av en fullstack Next.js-app.",
      ],
      result:
        "Projektet visar att jag kan bygga AI-integrationer på ett säkert och strukturerat sätt: rätt lager för rätt ansvar, utan att exponera känsliga nyckel eller returnera ovaliderad data.",
      stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Anthropic SDK", "Zod", "WebGL", "Render"],
      href: "https://golf-scorecard-ok6r.onrender.com/",
      linkText: "Öppna Fairway",
    },
    en: {
      title: "Fairway",
      kicker: "Case / golf scorecard",
      meta: "Next.js / TypeScript / Claude API",
      seoTitle: "Fairway case | Golf scorecard with AI coaching | Alexander Ahman",
      seoDescription:
        "Case study for Fairway: a Next.js golf app with hole-by-hole scorecard, statistics, screenshot import via AI vision, and Claude-powered coaching analysis.",
      lede:
        "Fairway is a full-stack app for logging golf rounds hole by hole, tracking statistics over time, and receiving a Claude-powered coaching analysis based on the scorecard.",
      problem:
        "A paper scorecard gives no data to act on. Golfers who want to improve need to track putts, GIR, and fairway hits per hole and get feedback on what actually cost strokes.",
      solution:
        "I built a Next.js app with a hole-by-hole form, localStorage persistence without accounts, statistics charts, screenshot import via Claude vision, and a server-side AI route that returns a structured coaching report.",
      decisions: [
        "API key kept server-side only via a Next.js route handler — never exposed to the client.",
        "Zod validation on both the request and the AI response to guarantee structured data.",
        "localStorage so the app works without a backend or account.",
        "Dynamic import with ssr:false for WebGL components to avoid SSR issues.",
        "Render for straightforward deployment of a full-stack Next.js app.",
      ],
      result:
        "The project shows that I can build AI integrations in a secure and structured way: the right layer for the right responsibility, without exposing sensitive keys or returning unvalidated data.",
      stack: ["Next.js 16", "TypeScript", "Tailwind v4", "Anthropic SDK", "Zod", "WebGL", "Render"],
      href: "https://golf-scorecard-ok6r.onrender.com/",
      linkText: "Open Fairway",
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
  kommunfotboll: {
    sv: {
      title: "Kommunfotbollen",
      kicker: "Case / hyperlokal data-hub",
      meta: "Next.js / Claude API / GitHub Actions",
      seoTitle: "Kommunfotbollen case | Lokalfotboll med AI-extraktion | Alexander Åhman",
      seoDescription:
        "Case om Kommunfotbollen: en Next.js-app som samlar tabeller och matcher för kommunens fotbollslag och använder Claude för att läsa lokaltidningarnas matchreferat och extrahera målskyttar.",
      lede:
        "Kommunfotbollen samlar tabeller, matcher och nyheter för en kommuns fotbollslag på ett ställe, uppdaterat automatiskt utan att någon behöver mata in data manuellt.",
      problem:
        "Lokalfotboll är utspridd över en extern sportkälla och flera lokaltidningar. Ingen plats samlade serier, matcher och målskyttar, och matchreferaten fanns bara som fritext utan struktur.",
      solution:
        "Jag byggde en Next.js-app med en källagnostisk ingest-arkitektur som hämtar serier och matcher, och en AI-pipeline där Claude läser lokaltidningarnas matchreferat, bedömer om artikeln är relevant för ett visst lag och extraherar målskyttar ur den ostrukturerade texten.",
      decisions: [
        "Källagnostisk ingest-arkitektur (MatchSource) så fler datakällor kan kopplas in utan att skriva om resten av appen.",
        "Claude används för två separata AI-uppgifter: relevansfiltrering av nyheter och extraktion av målskyttar ur matchreferat.",
        "Supabase Postgres via Drizzle istället för en inbäddad databas, så data överlever omstarter oberoende av var appen körs.",
        "Synkning flyttad från in-process timers till schemalagd GitHub Actions-cron mot en autentiserad endpoint, så drift blir enkel och stateless.",
        "Zod-validering av extern data för att hålla datamodellen pålitlig trots källor med varierande kvalitet.",
      ],
      result:
        "Projektet visar att jag kan bygga integrationer mot flera externa datakällor, använda AI för strukturerad extraktion ur text, och göra medvetna arkitekturval för att hålla driftkostnaden nere.",
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "GitHub Actions", "Render"],
      href: "https://kommunfotboll.onrender.com/",
      linkText: "Öppna Kommunfotbollen",
    },
    en: {
      title: "Kommunfotbollen",
      kicker: "Case / hyperlocal data hub",
      meta: "Next.js / Claude API / GitHub Actions",
      seoTitle: "Kommunfotbollen case | Local football with AI extraction | Alexander Ahman",
      seoDescription:
        "Case study for Kommunfotbollen: a Next.js app that aggregates standings and matches for a town's football teams and uses Claude to read local newspaper match reports and extract goal scorers.",
      lede:
        "Kommunfotbollen aggregates standings, matches, and news for a town's football teams in one place, kept automatically up to date without anyone entering data by hand.",
      problem:
        "Local football coverage was scattered across an external sports data source and several local newspapers. No single place aggregated leagues, matches, and goal scorers, and match reports existed only as unstructured free text.",
      solution:
        "I built a Next.js app with a source-agnostic ingest architecture that pulls leagues and matches, and an AI pipeline where Claude reads local newspaper match reports, judges whether an article is relevant to a given team, and extracts goal scorers from the unstructured text.",
      decisions: [
        "Source-agnostic ingest architecture (MatchSource) so more data sources can be added without rewriting the rest of the app.",
        "Claude handles two separate AI tasks: news relevance filtering and goal-scorer extraction from match reports.",
        "Supabase Postgres via Drizzle instead of an embedded database, so data survives restarts independent of where the app runs.",
        "Sync moved from in-process timers to a scheduled GitHub Actions cron hitting an authenticated endpoint, keeping operations simple and stateless.",
        "Zod validation of external data to keep the data model reliable despite sources of varying quality.",
      ],
      result:
        "The project shows that I can build integrations against multiple external data sources, use AI for structured extraction from text, and make deliberate architecture choices to keep operating costs down.",
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "GitHub Actions", "Render"],
      href: "https://kommunfotboll.onrender.com/",
      linkText: "Open Kommunfotbollen",
    },
  },
  kvitt: {
    sv: {
      title: "Kvitt",
      kicker: "Case / delad utgiftsapp",
      meta: "Laravel / Vue 3 / PostgreSQL",
      seoTitle: "Kvitt case | Delad utgiftsapp med skuldförenkling | Alexander Åhman",
      seoDescription:
        "Case om Kvitt: en Laravel- och Vue-app för att dela utlägg i grupp, med en girig skuldförenklingsalgoritm och atomärt skyddade påminnelser.",
      lede:
        "Kvitt låter en grupp dela utlägg, se vem som är skyldig vem, och göra upp med så få betalningar som möjligt — istället för att alla ska hålla reda på det själva.",
      problem:
        "Att dela utlägg i grupp slutar ofta i ett virrvarr av småskulder korsvis mellan alla. Utan ett sätt att förenkla skulderna behöver varje person göra upp med varje annan person, även när nettoresultatet hade räckt med några få betalningar.",
      solution:
        "Jag byggde en Laravel + Inertia + Vue-app med grupper, utlägg med jämn eller anpassad delning, och en girig skuldförenklingsalgoritm som matchar den största fordran mot den största skulden om och om igen tills hela gruppen är uppgjord.",
      decisions: [
        "Skuldförenklingsalgoritmen räknar i heltalscent, inte flyttal, för att undvika avrundningsfel som annars smyger sig in vid upprepade delningar.",
        "Påminnelsers nedkylning kontrolleras med en atomär villkorad UPDATE (WHERE last_reminded_at IS NULL OR < cutoff) istället för läs-sedan-skriv, för att undvika dubbla notiser vid samtidiga förfrågningar.",
        "Inertia.js för SPA-känsla utan att bygga och underhålla ett separat API-lager.",
        "Laravel Wayfinder för typade routes delade mellan backend och frontend.",
        "Pest, Larastan och Pint i CI via GitHub Actions, pinnade till commit-SHA:n istället för flyttbara taggar.",
      ],
      result:
        "Projektet visar att jag kan lösa ett riktigt algoritmproblem (skuldförenkling) och hantera race conditions korrekt, inte bara bygga formulär och tabeller.",
      stack: ["Laravel 13", "PHP 8.3", "Inertia.js", "Vue 3", "PostgreSQL", "Pest", "Larastan", "Tailwind v4", "Render"],
      href: "https://kvitt-web.onrender.com/",
      linkText: "Öppna Kvitt",
    },
    en: {
      title: "Kvitt",
      kicker: "Case / shared expense app",
      meta: "Laravel / Vue 3 / PostgreSQL",
      seoTitle: "Kvitt case | Shared expense app with debt simplification | Alexander Ahman",
      seoDescription:
        "Case study for Kvitt: a Laravel and Vue app for splitting group expenses, with a greedy debt-simplification algorithm and atomically-protected reminders.",
      lede:
        "Kvitt lets a group split expenses, see who owes whom, and settle up with as few payments as possible — instead of everyone having to keep track themselves.",
      problem:
        "Splitting expenses in a group often turns into a tangle of small debts crossing between everyone. Without a way to simplify the debts, each person would need to settle with every other person, even when the net result could be handled with a handful of payments.",
      solution:
        "I built a Laravel + Inertia + Vue app with groups, expenses with even or custom splits, and a greedy debt-simplification algorithm that repeatedly matches the largest credit against the largest debt until the whole group is settled.",
      decisions: [
        "The debt-simplification algorithm works in integer cents, not floats, to avoid rounding errors that would otherwise creep in across repeated splits.",
        "Reminder cooldowns are checked with an atomic conditional UPDATE (WHERE last_reminded_at IS NULL OR < cutoff) instead of read-then-write, to avoid duplicate notifications under concurrent requests.",
        "Inertia.js for an SPA feel without building and maintaining a separate API layer.",
        "Laravel Wayfinder for typed routes shared between backend and frontend.",
        "Pest, Larastan, and Pint in CI via GitHub Actions, pinned to commit SHAs rather than movable tags.",
      ],
      result:
        "The project shows I can solve a real algorithmic problem (debt simplification) and handle race conditions correctly, not just build forms and tables.",
      stack: ["Laravel 13", "PHP 8.3", "Inertia.js", "Vue 3", "PostgreSQL", "Pest", "Larastan", "Tailwind v4", "Render"],
      href: "https://kvitt-web.onrender.com/",
      linkText: "Open Kvitt",
    },
  },
  flagforge: {
    sv: {
      title: "FlagForge",
      kicker: "Case / feature-flag-plattform",
      meta: "Laravel / PostgreSQL / RBAC",
      seoTitle: "FlagForge case | Feature-flag-kontrollpanel med governance | Alexander Åhman",
      seoDescription:
        "Case om FlagForge: en Laravel-baserad feature-flag-plattform med RBAC, tvåpersonersgodkännande för kritiska flaggor och en omutlig audit-logg.",
      lede:
        "FlagForge är en feature-flag-kontrollpanel à la LaunchDarkly där team kan slå på och av funktioner per miljö, med kontroll över vem som godkänner ändringar och full spårbarhet bakåt.",
      problem:
        "Att styra funktionsflaggor i produktion utan governance är riskabelt: vem som helst kan publicera en ändring till alla användare, ingen vet vem som gjorde vad, och en trasig utrullning är svår att rulla tillbaka snabbt.",
      solution:
        "Jag byggde en Laravel-plattform med projekt-scopad RBAC, ett draft/publish-flöde per miljö, deterministisk rollout-hashning för konsekvent målgruppsstyrning, tvåpersonersgodkännande för kritiska flaggor, en \"break-glass\"-nödöppning för akuta lägen, och en omutlig audit-logg med kontrollsummekedja för att bevisa att historiken inte manipulerats.",
      decisions: [
        "Draft/publish-separation per miljö så en ändring aldrig når produktion utan ett explicit godkännandesteg.",
        "Tvåpersonersgodkännande specifikt för flaggor märkta som kritiska, konfigurerbart per miljös policy.",
        "Omutlig audit-logg med kontrollsummekedja — varje post innehåller ett hash av föregående post, så manipulation blir upptäckbar.",
        "Deterministisk rollout-hashning (samma användare hamnar alltid i samma bucket) istället för slumpmässig procentutrullning.",
        "Signerade webhooks (HMAC-SHA256, köad leverans) vid publish/rollback så nedströmssystem kan ogiltigförklara sin cache istället för att polla.",
        "Pest, Pint och GitHub Actions i CI; k6-lasttester för att hålla utvärderings-endpointen under en satt p95-SLO.",
      ],
      result:
        "Projektet visar att jag kan designa behörighet, godkännandeflöden och spårbarhet för ett internt utvecklarverktyg — governance som förstaklassmedborgare, inte en eftertanke.",
      stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "Pest", "Pint", "GitHub Actions", "Render"],
      href: "https://flagforge-ira0.onrender.com/",
      linkText: "Öppna FlagForge",
      secondaryHref: "https://flagforge-ira0.onrender.com/status",
      secondaryLinkText: "Se live-status (SLO, cache, audit-kedja)",
      screenshots: [
        { src: "/projects/flagforge/project-environments.png", alt: "Per-miljö release-flöde: policy, publicering, snapshots och test-utvärdering" },
        { src: "/projects/flagforge/login.png", alt: "Inloggningssidan med FlagForges kontrollpanel-hero" },
        { src: "/projects/flagforge/flag-rollout.png", alt: "En flaggas detaljvy: 25% utrullning i produktion, kritisk-markering och en beta-testers-segmentregel" },
      ],
    },
    en: {
      title: "FlagForge",
      kicker: "Case / feature-flag platform",
      meta: "Laravel / PostgreSQL / RBAC",
      seoTitle: "FlagForge case | Feature-flag control plane with governance | Alexander Ahman",
      seoDescription:
        "Case study for FlagForge: a Laravel-based feature-flag platform with RBAC, two-person approval for critical flags, and an immutable audit log.",
      lede:
        "FlagForge is a feature-flag control plane in the style of LaunchDarkly, where teams can toggle features per environment with control over who approves changes and full traceability.",
      problem:
        "Controlling feature flags in production without governance is risky: anyone can publish a change to every user, nobody knows who did what, and a broken rollout is hard to reverse quickly.",
      solution:
        "I built a Laravel platform with project-scoped RBAC, a draft/publish workflow per environment, deterministic rollout hashing for consistent targeting, two-person approval for critical flags, a break-glass emergency override, and an immutable audit log with a checksum chain to prove the history hasn't been tampered with.",
      decisions: [
        "Draft/publish separation per environment so a change never reaches production without an explicit approval step.",
        "Two-person approval specifically for flags marked critical, configurable per environment's policy.",
        "Immutable audit log with a checksum chain — each entry hashes the previous one, making tampering detectable.",
        "Deterministic rollout hashing (the same user always lands in the same bucket) instead of random percentage rollouts.",
        "Signed webhooks (HMAC-SHA256, queued delivery) on publish/rollback so downstream systems can invalidate their cache instead of polling.",
        "Pest, Pint, and GitHub Actions in CI; k6 load tests to keep the evaluation endpoint under a set p95 SLO.",
      ],
      result:
        "The project shows I can design permissions, approval flows, and traceability for an internal developer tool — governance as a first-class citizen, not an afterthought.",
      stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "Pest", "Pint", "GitHub Actions", "Render"],
      href: "https://flagforge-ira0.onrender.com/",
      linkText: "Open FlagForge",
      secondaryHref: "https://flagforge-ira0.onrender.com/status",
      secondaryLinkText: "See live status (SLO, cache, audit chain)",
      screenshots: [
        { src: "/projects/flagforge/project-environments.png", alt: "Per-environment release workflow: policy, publish, snapshots, and test evaluation" },
        { src: "/projects/flagforge/login.png", alt: "Sign-in page with the FlagForge control plane hero" },
        { src: "/projects/flagforge/flag-rollout.png", alt: "Flag detail view: a 25% prod rollout, a critical-flag marker, and a beta-testers segment rule" },
      ],
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

          {item.screenshots?.length > 0 && (
            <div className="caseScreenshots">
              {item.screenshots.map((shot) => (
                <img key={shot.src} src={shot.src} alt={shot.alt} loading="lazy" />
              ))}
            </div>
          )}

          <div className="relatedStrip">
            <p>{lang === "en" ? "Next" : "Nästa"}</p>
            <div className="row">
              <a className="textLink" href={item.href} target="_blank" rel="noreferrer">
                {item.linkText}
              </a>
              {item.secondaryHref && (
                <a className="textLink" href={item.secondaryHref} target="_blank" rel="noreferrer">
                  {item.secondaryLinkText}
                </a>
              )}
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
