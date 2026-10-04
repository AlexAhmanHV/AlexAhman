import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

import { SITE_URL } from "../routes";

const cases = {
  venueflow: {
    sv: {
      title: "VenueFlow",
      kicker: "Case / bokningssystem",
      meta: "Laravel / PostgreSQL / multi-tenant booking",
      seoTitle: "VenueFlow case | Bokningssystem i Laravel | Alexander Åhman",
      seoDescription:
        "Case om VenueFlow: ett multi-tenant bokningssystem byggt i Laravel, Neon PostgreSQL och Alpine.js med RBAC, konfliktkontroll, visuell golvplan och publik gästbokning.",
      lede:
        "VenueFlow är ett bokningssystem för aktivitets- och restaurangmiljöer där gäster ska kunna boka utan konto och personalen behöver hantera resurser, tider och roller internt.",
      problem:
        "Bokningsflöden blir snabbt komplexa när flera resurser, tider, roller och tenants delar samma system. Den publika gästen behöver ett enkelt flöde, medan verksamheten behöver kontroll bakom kulisserna.",
      solution:
        "Jag byggde en Laravel-plattform med publik gästbokning, admin- och staff-vyer, tenant-isolering, rollbaserad åtkomst och transaktionssäker konfliktkontroll.",
      decisions: [
        "Tenant-isolering för att hålla verksamheters data separerad.",
        "Policies/Gates för att göra behörigheter tydliga i koden.",
        "Neon (serverless PostgreSQL) för relationsdata utan manuell drift.",
        "Render-deployment för att få appen live utan onödig driftkomplexitet.",
      ],
      result:
        "Projektet visar min förmåga att bygga affärsnära system där datamodell, användarflöde, behörighet och deployment behöver fungera ihop.",
      stack: ["Laravel 11", "PHP 8.3", "Neon PostgreSQL", "Blade", "Tailwind", "Alpine.js", "Render"],
      screenshots: [
        { src: "/projects/venueflow/landing.png", alt: "Publik restaurangsida med bokningsstatus och steg-för-steg-guide" },
        { src: "/projects/venueflow/booking.png", alt: "Gästbokningsflöde: välj aktivitet och lediga tider" },
        { src: "/projects/venueflow/floor-plan.png", alt: "Live board med visuell golvplan, färgkodad efter beläggning" },
      ],
      href: "https://venueflow-wjh1.onrender.com/",
      linkText: "Öppna VenueFlow",
    },
    en: {
      title: "VenueFlow",
      kicker: "Case / booking system",
      meta: "Laravel / PostgreSQL / multi-tenant booking",
      seoTitle: "VenueFlow case | Laravel booking system | Alexander Ahman",
      seoDescription:
        "Case study for VenueFlow: a multi-tenant booking system built with Laravel, Neon PostgreSQL, and Alpine.js, with RBAC, conflict checks, a visual floor plan, and public guest booking.",
      lede:
        "VenueFlow is a booking system for activity and restaurant venues where guests can book without accounts while staff manage resources, times, and roles internally.",
      problem:
        "Booking flows get complex quickly when resources, times, roles, and tenants share the same system. The public guest needs a simple flow, while the business needs control behind the scenes.",
      solution:
        "I built a Laravel platform with public guest booking, admin and staff views, tenant isolation, role-based access, and transaction-safe conflict checks.",
      decisions: [
        "Tenant isolation to keep business data separated.",
        "Policies/Gates to make permissions explicit in code.",
        "Neon (serverless PostgreSQL) for relational data with no manual operations.",
        "Render deployment to get the app live without unnecessary operational complexity.",
      ],
      result:
        "The project shows my ability to build business-facing systems where data model, user flow, permissions, and deployment need to work together.",
      stack: ["Laravel 11", "PHP 8.3", "Neon PostgreSQL", "Blade", "Tailwind", "Alpine.js", "Render"],
      screenshots: [
        { src: "/projects/venueflow/landing.png", alt: "Public restaurant page with booking status and a step-by-step guide" },
        { src: "/projects/venueflow/booking.png", alt: "Guest booking flow: choosing an activity and an available time" },
        { src: "/projects/venueflow/floor-plan.png", alt: "Live board with a visual floor plan, color-coded by occupancy" },
      ],
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
      screenshots: [
        { src: "/projects/fx-monitor/dashboard.png", alt: "Dashboard med kurshistorik, KPI-kort och marknadsöversikt" },
        { src: "/projects/fx-monitor/comparison-mode.png", alt: "Jämförelseläge med tre valutapar normaliserade till index 100" },
        { src: "/projects/fx-monitor/light-theme.png", alt: "Samma dashboard i ljust tema" },
      ],
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
      screenshots: [
        { src: "/projects/fx-monitor/dashboard.png", alt: "Dashboard with rate history chart, KPI cards, and market snapshot" },
        { src: "/projects/fx-monitor/comparison-mode.png", alt: "Comparison mode overlaying three currency pairs normalized to index 100" },
        { src: "/projects/fx-monitor/light-theme.png", alt: "The same dashboard in light theme" },
      ],
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
      screenshots: [
        { src: "/projects/fairway/dashboard.png", alt: "Dashboard med rundhistorik och snabbåtgärder" },
        { src: "/projects/fairway/scorecard.png", alt: "Hål-för-hål-scorekort med live-summering" },
        { src: "/projects/fairway/stats.png", alt: "Statistikvy: score-trend, GIR/fairway-staplar och scorefördelning" },
      ],
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
      screenshots: [
        { src: "/projects/fairway/dashboard.png", alt: "Dashboard with round history and quick actions" },
        { src: "/projects/fairway/scorecard.png", alt: "Hole-by-hole scorecard with live running totals" },
        { src: "/projects/fairway/stats.png", alt: "Statistics view: score trend, GIR/fairway bars, and score distribution" },
      ],
    },
  },
  lordagsgolf: {
    sv: {
      title: "Lördagsgolf",
      kicker: "Case / publik webb + adminpanel",
      meta: "React / JWT-säkrad API / adminpanel",
      seoTitle: "Lördagsgolf case | React-frontend mot JWT-säkrad API | Alexander Åhman",
      seoDescription:
        "Case om Lördagsgolf: en React/Vite-frontend som konsumerar en egen JWT-säkrad ASP.NET Core-backend, med adminpanel för spelare, rundor och banor.",
      lede:
        "Lördagsgolf är en publik säsongswebb med en adminpanel bakom JWT-inloggning, där arrangörerna registrerar spelare, rundor och banor mot en egen backend-API.",
      problem:
        "Besökare ska snabbt förstå bana, upplägg och resultat, samtidigt som arrangörerna behöver ett sätt att mata in rundor, spelare och banor utan att röra databasen direkt eller riskera att obehöriga kan skriva data.",
      solution:
        "Jag byggde en React/Vite-frontend som pratar med en egen ASP.NET Core-backend: publika sidor för säsongsresultat och spelarprofiler, en adminpanel bakom JWT-inloggning för att hantera spelare, rundor och banor, ett adapterlager som normaliserar API-svarens skiftande form, och en API-klient med timeout och retry.",
      decisions: [
        "Adapterlager (src/services/adapters) som normaliserar API-kontraktet — t.ex. $values-wrappers och skiftande casing — så UI-komponenterna aldrig behöver känna till backendens råa form.",
        "Central API-konfiguration via miljövariabler, med fallback-URL:er om env saknas.",
        "Auth-token med utgångstid lagrat i sessionStorage, rensas automatiskt vid 401 från backend.",
        "Backend (ASP.NET Core) kräver JWT för alla skrivande anrop (POST/PUT/DELETE) på spelare, rundor och banor, med IP-baserad rate limiting på inloggning.",
        "GitHub Actions kör lint, test och bygge på varje push/PR mot main.",
      ],
      result:
        "Projektet visar att jag kan bygga och koppla ihop en frontend mot en egen autentiserad backend över två repon, med adapters och en robust API-klient som håller UI:t oberoende av backendens exakta svarsform.",
      stack: ["React 19", "Vite 6", "React Router 7", "Tailwind CSS 4", "Vitest", "ASP.NET Core", "JWT", "Render"],
      href: "https://lordagsgolf.se/",
      linkText: "Besök Lördagsgolf",
      screenshots: [
        { src: "/projects/lordagsgolf/home.png", alt: "Startsida med hero och genvägar till säsong och spelare" },
        { src: "/projects/lordagsgolf/season-results.png", alt: "Säsongsvy med senaste rundan och topplistor" },
        { src: "/projects/lordagsgolf/players.png", alt: "Spelarkatalog med alla profiler" },
      ],
    },
    en: {
      title: "Lördagsgolf",
      kicker: "Case / public site + admin panel",
      meta: "React / JWT-protected API / admin panel",
      seoTitle: "Lördagsgolf case | React frontend for a JWT-protected API | Alexander Ahman",
      seoDescription:
        "Case study for Lördagsgolf: a React/Vite frontend consuming a purpose-built, JWT-protected ASP.NET Core backend, with an admin panel for players, rounds, and courses.",
      lede:
        "Lördagsgolf is a public season site with an admin panel behind JWT login, where organizers register players, rounds, and courses against a purpose-built backend API.",
      problem:
        "Visitors need to quickly understand the course, setup, and results, while organizers need a way to enter rounds, players, and courses without touching the database directly or risking unauthorized writes.",
      solution:
        "I built a React/Vite frontend that talks to a purpose-built ASP.NET Core backend: public pages for season results and player profiles, an admin panel behind JWT login for managing players, rounds, and courses, an adapter layer that normalizes the API's varying response shapes, and an API client with timeout and retry.",
      decisions: [
        "Adapter layer (src/services/adapters) that normalizes the API contract — e.g. $values wrappers and inconsistent casing — so UI components never need to know the backend's raw shape.",
        "Central API configuration via environment variables, with fallback URLs if the env is missing.",
        "Auth token with an expiry stored in sessionStorage, cleared automatically on a 401 from the backend.",
        "The backend (ASP.NET Core) requires JWT for every write (POST/PUT/DELETE) on players, rounds, and courses, with IP-based rate limiting on login.",
        "GitHub Actions runs lint, test, and build on every push/PR against main.",
      ],
      result:
        "The project shows that I can build and wire a frontend to a self-authored authenticated backend across two repos, with adapters and a resilient API client that keep the UI decoupled from the backend's exact response shape.",
      stack: ["React 19", "Vite 6", "React Router 7", "Tailwind CSS 4", "Vitest", "ASP.NET Core", "JWT", "Render"],
      href: "https://lordagsgolf.se/",
      linkText: "Visit Lördagsgolf",
      screenshots: [
        { src: "/projects/lordagsgolf/home.png", alt: "Home page with hero and shortcuts to season and players" },
        { src: "/projects/lordagsgolf/season-results.png", alt: "Season view with the latest round and leaderboards" },
        { src: "/projects/lordagsgolf/players.png", alt: "Player directory with all profiles" },
      ],
    },
  },
  kommunfotboll: {
    sv: {
      title: "Kommunfotbollen",
      kicker: "Case / hyperlokal data-hub",
      meta: "Next.js / Claude API / Supabase",
      seoTitle: "Kommunfotbollen case | Lokalfotboll med AI-extraktion | Alexander Åhman",
      seoDescription:
        "Case om Kommunfotbollen: en Next.js-app som samlar tabeller och matcher för kommunens fotbollslag och använder Claude för att läsa lokaltidningarnas matchreferat och extrahera målskyttar.",
      lede:
        "Kommunfotbollen samlar tabeller, matcher, målskyttar och nyheter för Västerviks kommuns tio fotbollslag på ett ställe. Allt uppdateras automatiskt varje kväll, utan att någon matar in data för hand.",
      problem:
        "Lokalfotboll är utspridd över en extern sportkälla och flera lokaltidningar. Ingen plats samlade serier, matcher och målskyttar, och matchreferaten fanns bara som fritext utan struktur.",
      solution:
        "Jag byggde en Next.js-app med en källagnostisk ingest-arkitektur som hämtar fem serier från Everysport, och en AI-pipeline där Claude läser lokaltidningarnas artiklar, bedömer om de är relevanta för ett visst lag och extraherar målskyttar ur matchreferaten. Startsidan lyfter veckans match, och varje lag har en egen sida med nästa match, tabellutdrag, matcher med skyttar och de senaste nyheterna.",
      decisions: [
        "Källagnostisk ingest-arkitektur (MatchSource) så fler datakällor kan kopplas in utan att skriva om resten av appen.",
        "Claude används för två separata AI-uppgifter: relevansfiltrering av nyheter och extraktion av målskyttar ur matchreferat.",
        "Målskyttar sparas bara när både resultat och båda lagnamn i referatet stämmer med en spelad match, så AI:n aldrig gissar fram en koppling.",
        "Artiklar hittas via tidningarnas sitemaps och fotbollssidor, eftersom en sitemap kan ligga ett dygn efter. Automatiska robotreferat filtreras bort ur nyhetslistan.",
        "Appen schemalägger sina egna jobb: nyheter kl 22 och lagdata kl 23, efter kvällens matcher. En liten hälsoendpoint håller tjänsten vaken utan att röra databasen.",
        "Byggd för gratisnivåernas gränser: lagbilderna förskalas till WebP innan de laddas upp, så servern aldrig behöver bildbearbeta dem, och databaspoolen hålls under Supabases tak på 15 anslutningar.",
        "Zod-validering av extern data för att hålla datamodellen pålitlig trots källor med varierande kvalitet.",
      ],
      result:
        "Sajten ligger uppe dygnet runt och fyller på sig själv varje kväll. Projektet visar att jag kan bygga integrationer mot flera externa datakällor, använda AI för strukturerad extraktion ur text och göra medvetna arkitekturval för att hålla driftkostnaden nere.",
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "sharp", "Render"],
      href: "https://kommunfotboll.onrender.com/",
      linkText: "Öppna Kommunfotbollen",
      screenshots: [
        { src: "/projects/kommunfotboll/home.png", alt: "Startsida med veckans match, kommande matcher och lokala lag" },
        { src: "/projects/kommunfotboll/team.png", alt: "Lagsida med placering, form, tabellutdrag och matcher med målskyttar" },
        { src: "/projects/kommunfotboll/news.png", alt: "AI-filtrerade nyheter om lagen, taggade per lag, och lokala poddar" },
        { src: "/projects/kommunfotboll/standings.png", alt: "Serietabell med de lokala lagen markerade" },
      ],
    },
    en: {
      title: "Kommunfotbollen",
      kicker: "Case / hyperlocal data hub",
      meta: "Next.js / Claude API / Supabase",
      seoTitle: "Kommunfotbollen case | Local football with AI extraction | Alexander Ahman",
      seoDescription:
        "Case study for Kommunfotbollen: a Next.js app that aggregates standings and matches for a town's football teams and uses Claude to read local newspaper match reports and extract goal scorers.",
      lede:
        "Kommunfotbollen aggregates standings, matches, goal scorers, and news for the ten football teams in Västervik municipality in one place. Everything updates automatically every evening, without anyone entering data by hand.",
      problem:
        "Local football coverage was scattered across an external sports data source and several local newspapers. No single place aggregated leagues, matches, and goal scorers, and match reports existed only as unstructured free text.",
      solution:
        "I built a Next.js app with a source-agnostic ingest architecture that pulls five leagues from Everysport, and an AI pipeline where Claude reads local newspaper articles, judges whether they are relevant to a given team, and extracts goal scorers from match reports. The home page features the match of the week, and every team has its own page with the next match, a table excerpt, results with scorers, and the latest news.",
      decisions: [
        "Source-agnostic ingest architecture (MatchSource) so more data sources can be added without rewriting the rest of the app.",
        "Claude handles two separate AI tasks: news relevance filtering and goal-scorer extraction from match reports.",
        "Goal scorers are only stored when both the result and both team names in the report match a played match, so the AI never guesses a link.",
        "Articles are found through the newspapers' sitemaps and football pages, since a sitemap can lag a day behind. Automated robot match reports are filtered out of the news list.",
        "The app schedules its own jobs: news at 22:00 and team data at 23:00, after the evening's matches. A tiny health endpoint keeps the service awake without touching the database.",
        "Built for free-tier limits: team photos are pre-scaled to WebP before upload so the server never has to process images, and the database pool stays under Supabase's 15-connection cap.",
        "Zod validation of external data to keep the data model reliable despite sources of varying quality.",
      ],
      result:
        "The site runs around the clock and fills itself up every evening. The project shows that I can build integrations against multiple external data sources, use AI for structured extraction from text, and make deliberate architecture choices to keep operating costs down.",
      stack: ["Next.js 16", "TypeScript", "Drizzle ORM", "Supabase", "Zod", "Tailwind v4", "Anthropic SDK", "sharp", "Render"],
      href: "https://kommunfotboll.onrender.com/",
      linkText: "Open Kommunfotbollen",
      screenshots: [
        { src: "/projects/kommunfotboll/home.png", alt: "Home page with the match of the week, upcoming matches, and local teams" },
        { src: "/projects/kommunfotboll/team.png", alt: "Team page with position, form, table excerpt, and matches with goal scorers" },
        { src: "/projects/kommunfotboll/news.png", alt: "AI-filtered news about the teams, tagged per team, plus local podcasts" },
        { src: "/projects/kommunfotboll/standings.png", alt: "League table with the local teams highlighted" },
      ],
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
      screenshots: [
        { src: "/projects/kvitt/group-overview.png", alt: "Gruppvy med utlägg, nettosaldo och föreslagna uppgörelser", portrait: true },
        { src: "/projects/kvitt/new-expense.png", alt: "Formulär för nytt utlägg med jämn/anpassad delning", portrait: true },
      ],
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
      screenshots: [
        { src: "/projects/kvitt/group-overview.png", alt: "Group view with expenses, net balance, and suggested settlements", portrait: true },
        { src: "/projects/kvitt/new-expense.png", alt: "New expense form with even/custom split", portrait: true },
      ],
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
        "PHPUnit, Pint och GitHub Actions i CI; k6-lasttester för att hålla utvärderings-endpointen under en satt p95-SLO.",
      ],
      result:
        "Projektet visar att jag kan designa behörighet, godkännandeflöden och spårbarhet för ett internt utvecklarverktyg — governance som förstaklassmedborgare, inte en eftertanke.",
      stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "PHPUnit", "Pint", "GitHub Actions", "Render"],
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
        "PHPUnit, Pint, and GitHub Actions in CI; k6 load tests to keep the evaluation endpoint under a set p95 SLO.",
      ],
      result:
        "The project shows I can design permissions, approval flows, and traceability for an internal developer tool — governance as a first-class citizen, not an afterthought.",
      stack: ["Laravel 12", "PHP 8.3", "PostgreSQL", "PHPUnit", "Pint", "GitHub Actions", "Render"],
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
  "brod-och-deli": {
    sv: {
      title: "Bröd & Deli",
      kicker: "Case / hemsida för lokalt bageri",
      meta: "Next.js / statisk export / lokal SEO",
      seoTitle: "Bröd & Deli case | Hemsida för bageri i Västervik | Alexander Åhman",
      seoDescription:
        "Case om hemsidan för Guldkringlans Bröd & Deli på Allén i Västervik: sortiment i bilder, öppettider, karta och lokal SEO, byggd som en snabb statisk Next.js-sajt.",
      lede:
        "Guldkringlans Bröd & Deli är ett bageri och deli på Allén 68 i Västervik. Hemsidan visar sortimentet, öppettiderna och vägen dit, och är byggd för att hittas när någon i Västervik söker efter bageri, smörgåstårta eller lunch.",
      problem:
        "Ett lokalt bageri behöver att kunderna snabbt hittar öppettider, adress och vad som finns att köpa, oftast i mobilen och ofta strax innan de ska handla. Utan en egen tydlig hemsida hamnar den informationen utspridd eller inaktuell.",
      solution:
        "Jag byggde en hemsida med sortimentet uppdelat i åtta kategorier med egna sidor och bilder, en kontaktsida med öppettider, karta och lunchleverans till företag, och en startsida som direkt säger vad bageriet erbjuder och var det ligger.",
      decisions: [
        "Statisk export av Next.js, så att sidorna levereras färdiga och laddar snabbt i mobilen utan någon server som behöver drivas.",
        "En egen sida per sortimentskategori, så att varje produkttyp kan hittas och delas för sig.",
        "Titlar, beskrivningar, sitemap och robots byggda kring sökningar i Västervik, och egen domän: brodochdeli.se.",
        "Öppettider, adress och telefon på samma ställe som kartan, eftersom det är det besökaren oftast letar efter.",
      ],
      result:
        "Bageriet har en snabb hemsida på egen domän som visar sortimentet och gör det enkelt att hitta dit. Projektet visar hur jag bygger hemsidor för lokala företag: tydligt innehåll, bra i mobilen och byggt för att synas i lokala sökningar.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Statisk export", "Render"],
      href: "https://brodochdeli.se/",
      linkText: "Besök brodochdeli.se",
      screenshots: [
        { src: "/projects/brod-och-deli/home.png", alt: "Startsida för Guldkringlans Bröd & Deli i Västervik" },
        { src: "/projects/brod-och-deli/sortiment.png", alt: "Sortimentet i åtta kategorier med bilder" },
        { src: "/projects/brod-och-deli/kontakt.png", alt: "Kontaktsida med öppettider, adress och karta" },
      ],
    },
    en: {
      title: "Bröd & Deli",
      kicker: "Case / website for a local bakery",
      meta: "Next.js / static export / local SEO",
      seoTitle: "Bröd & Deli case | Website for a bakery in Västervik | Alexander Ahman",
      seoDescription:
        "Case study for the website of Guldkringlans Bröd & Deli in Västervik: the product range in photos, opening hours, a map, and local SEO, built as a fast static Next.js site.",
      lede:
        "Guldkringlans Bröd & Deli is a bakery and deli on Allén 68 in Västervik. The website shows the range, the opening hours, and how to get there, and is built to be found when someone in Västervik searches for a bakery, sandwich cake, or lunch.",
      problem:
        "A local bakery needs customers to quickly find opening hours, the address, and what is for sale, usually on a phone and often right before they head out. Without a clear website of its own, that information ends up scattered or out of date.",
      solution:
        "I built a website with the range split into eight categories with their own pages and photos, a contact page with opening hours, a map, and lunch delivery for workplaces, and a home page that says straight away what the bakery offers and where it is.",
      decisions: [
        "Static export from Next.js, so pages are delivered ready-made and load fast on phones with no server to run.",
        "One page per product category, so every kind of product can be found and shared on its own.",
        "Titles, descriptions, sitemap, and robots built around searches in Västervik, on its own domain: brodochdeli.se.",
        "Opening hours, address, and phone next to the map, since that is what visitors look for most.",
      ],
      result:
        "The bakery has a fast website on its own domain that shows the range and makes it easy to find the shop. The project shows how I build websites for local businesses: clear content, good on phones, and built to show up in local searches.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Static export", "Render"],
      href: "https://brodochdeli.se/",
      linkText: "Visit brodochdeli.se",
      screenshots: [
        { src: "/projects/brod-och-deli/home.png", alt: "Home page for Guldkringlans Bröd & Deli in Västervik" },
        { src: "/projects/brod-och-deli/sortiment.png", alt: "The range in eight categories with photos" },
        { src: "/projects/brod-och-deli/kontakt.png", alt: "Contact page with opening hours, address, and map" },
      ],
    },
  },
  "ankarsrums-jsk": {
    sv: {
      title: "Ankarsrums Jaktskytteklubb",
      kicker: "Case / hemsida för förening",
      meta: "Next.js / Postgres / adminläge",
      seoTitle: "Ankarsrums Jaktskytteklubb case | Hemsida för förening | Alexander Åhman",
      seoDescription:
        "Case om nya hemsidan för Ankarsrums Jaktskytteklubb utanför Ankarsrum: nyheter, kalender för banbokningar och ett adminläge där styrelsen uppdaterar själv, byggd i Next.js med Postgres.",
      lede:
        "Ankarsrums Jaktskytteklubb har skjutbanor vid Tjursbo utanför Ankarsrum sedan 1962. Klubbens gamla hemsida låg nere, så jag byggde en ny där styrelsen själv kan lägga in nyheter och banbokningar.",
      problem:
        "Klubbens gamla sajt var nere, och informationen om banor, öppettider, medlemskap och jägarexamen fanns bara kvar i webbarkivet. En förening behöver dessutom kunna uppdatera nyheter och kalender löpande utan att någon i styrelsen behöver kunna koda.",
      solution:
        "Jag återskapade innehållet från den gamla sajten och byggde en ny hemsida med sidor för banor, medlemskap, bokningsregler, jägarexamen och kontakt, plus ett inloggat adminläge där styrelsen hanterar nyheter, kalender och fler adminkonton.",
      decisions: [
        "Next.js med Postgres för nyheter och kalender, så att innehållet som ändras ofta ligger i en databas och resten är snabba statiska sidor.",
        "Adminläge med inloggning, ett huvudkonto som kan skapa konton åt resten av styrelsen och spärr efter upprepade felaktiga inloggningsförsök.",
        "Bilderna förskalas innan de laddas upp, så att servern aldrig behöver bildbearbeta och minnet räcker gott.",
        "Telefonnummer till enskilda styrelsemedlemmar publiceras inte, av integritetsskäl.",
      ],
      result:
        "Klubben har fått en modern hemsida som styrelsen själv kan hålla aktuell. Sajten granskas just nu av styrelsen innan den ersätter den gamla adressen. Projektet visar hur jag bygger hemsidor för föreningar: enkelt att uppdatera, tydligt för medlemmar och nya besökare.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Neon Postgres", "Render"],
      href: "https://ankarsrums-jaktskytteklubb.onrender.com/",
      linkText: "Besök klubbens nya sajt",
      screenshots: [
        { src: "/projects/ankarsrums-jsk/home.png", alt: "Startsida för Ankarsrums Jaktskytteklubb" },
        { src: "/projects/ankarsrums-jsk/klubben.png", alt: "Om klubben med öppettider, banor och medlemskap" },
        { src: "/projects/ankarsrums-jsk/banor.png", alt: "Sidan om klubbens banor vid Tjursbo" },
      ],
    },
    en: {
      title: "Ankarsrums Jaktskytteklubb",
      kicker: "Case / website for a club",
      meta: "Next.js / Postgres / admin mode",
      seoTitle: "Ankarsrums Jaktskytteklubb case | Website for a club | Alexander Ahman",
      seoDescription:
        "Case study for the new website of Ankarsrums Jaktskytteklubb, a shooting club near Ankarsrum: news, a calendar for range bookings, and an admin mode where the board updates content itself, built with Next.js and Postgres.",
      lede:
        "Ankarsrums Jaktskytteklubb has run shooting ranges at Tjursbo near Ankarsrum since 1962. The club's old website was down, so I built a new one where the board can add news and range bookings themselves.",
      problem:
        "The club's old site was down, and the information about ranges, opening hours, membership, and the hunting exam only survived in the web archive. A club also needs to keep news and the calendar up to date without anyone on the board having to code.",
      solution:
        "I recovered the content from the old site and built a new website with pages for ranges, membership, booking rules, the hunting exam, and contact, plus a logged-in admin mode where the board manages news, the calendar, and more admin accounts.",
      decisions: [
        "Next.js with Postgres for news and the calendar, so frequently changing content lives in a database and everything else is fast static pages.",
        "An admin mode with login, a main account that can create accounts for the rest of the board, and a lockout after repeated failed login attempts.",
        "Photos are pre-scaled before upload, so the server never has to process images and memory stays comfortable.",
        "Phone numbers of individual board members are not published, for privacy.",
      ],
      result:
        "The club has a modern website the board can keep current on its own. The site is currently being reviewed by the board before it replaces the old address. The project shows how I build websites for clubs: easy to update, clear for members and new visitors.",
      stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Neon Postgres", "Render"],
      href: "https://ankarsrums-jaktskytteklubb.onrender.com/",
      linkText: "Visit the club's new site",
      screenshots: [
        { src: "/projects/ankarsrums-jsk/home.png", alt: "Home page for Ankarsrums Jaktskytteklubb" },
        { src: "/projects/ankarsrums-jsk/klubben.png", alt: "About the club with opening hours, ranges, and membership" },
        { src: "/projects/ankarsrums-jsk/banor.png", alt: "The page about the club's ranges at Tjursbo" },
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
  const [lightboxShot, setLightboxShot] = useState(null);

  useEffect(() => {
    if (!lightboxShot) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setLightboxShot(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxShot]);

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
                <button
                  key={shot.src}
                  type="button"
                  className={`caseScreenshotThumb${shot.portrait ? " isPortrait" : ""}`}
                  onClick={() => setLightboxShot(shot)}
                  aria-label={lang === "en" ? `Enlarge screenshot: ${shot.alt}` : `Förstora skärmbild: ${shot.alt}`}
                >
                  <img src={shot.src} alt={shot.alt} loading="lazy" />
                </button>
              ))}
            </div>
          )}

          {lightboxShot && (
            <div
              className="caseLightbox"
              role="dialog"
              aria-modal="true"
              aria-label={lightboxShot.alt}
              onClick={() => setLightboxShot(null)}
            >
              <button
                type="button"
                className="caseLightboxClose"
                onClick={() => setLightboxShot(null)}
                aria-label={lang === "en" ? "Close" : "Stäng"}
              >
                ×
              </button>
              <img
                src={lightboxShot.src}
                alt={lightboxShot.alt}
                onClick={(e) => e.stopPropagation()}
              />
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
