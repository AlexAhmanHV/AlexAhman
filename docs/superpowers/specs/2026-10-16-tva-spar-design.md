# Två spår: hemsidor och systemutveckling

Datum: 2026-10-16
Gren: `feat/tva-spar` (lokal, pushas inte förrän Alex säger till)

## Mål

alexahman.se ska tjäna två publiker utan att blanda budskapen:

- **Företagskunder** (lokala företag i Västervik med omnejd) som ska köpa en hemsida av enskilda firman.
- **Rekryterare och tech-leads** som bedömer Alex som systemutvecklare inför större jobb.

En ny startsida delar upp besökarna i två spår. Startsidan ska vara läcker nog att imponera, men visa riktigt arbete snarare än generisk AI-estetik.

## Avgränsningar

- Allt byggs och testas lokalt i grenen `feat/tva-spar`. Inget pushas och inga Render-inställningar ändras förrän vid en separat lansering.
- Samma app, samma designsystem (mörk grund, kopparaccent). Ingen ny sajt, inget nytt ramverk.
- Hemsidespåret är bara på svenska. Utvecklarspåret är på svenska och engelska.
- Higgsfield-klippen tas fram av Alex. Bygget fungerar med stillbilder som platshållare tills de finns.

## Del 1: Struktur

### Layouter

`App.jsx` får tre skal:

| Skal | Adresser | Meny |
|---|---|---|
| Startsida | `/`, `/en` | Bara logga och språkknapp |
| `HemsidorLayout` | `/hemsidor/*` | Hemsidor · Priser · Exempel · Guide · Kontakt, plus en diskret länk till utvecklarspåret |
| `UtvecklareLayout` | `/systemutveckling/*`, `/en/software-development/*` | Projekt · Om mig · Kontakt, språkknapp, plus en diskret länk till hemsidespåret |

`Nav` görs om så att den tar emot spårets länkar som data i stället för att ha dem hårdkodade. Utseendet är detsamma i båda spåren. Footer anpassas på samma sätt.

### Adresser

**Hemsidor (svenska)**

| Ny adress | Komponent | Ersätter |
|---|---|---|
| `/hemsidor` | `HemsidaVastervik` | `/hemsida-vastervik` |
| `/hemsidor/priser` | `Priser` | `/priser` |
| `/hemsidor/exempel` | ny exempellista | kundcasen i `/projects` |
| `/hemsidor/exempel/brod-och-deli` | `ProjectCase` | `/projects/brod-och-deli` |
| `/hemsidor/exempel/ankarsrums-jsk` | `ProjectCase` | `/projects/ankarsrums-jsk` |
| `/hemsidor/exempel/lordagsgolf` | `ProjectCase` | (finns i båda spåren, se nedan) |
| `/hemsidor/guide` | `GuideHemsida` | `/guide/hemsida-for-lokala-foretag` |
| `/hemsidor/kontakt` | `Contact` (hemsidesingress) | – |

**Systemutveckling (svenska)**, med motsvarande engelska adresser under `/en/software-development`

| Ny adress | Engelsk adress | Komponent | Ersätter |
|---|---|---|---|
| `/systemutveckling` | `/en/software-development` | ny spårstartsida | utvecklarinnehållet på nuvarande `/`, samt `/services` |
| `/systemutveckling/projekt` | `/en/software-development/projects` | `Projects` (utan kundcasen) | `/projects` |
| `/systemutveckling/projekt/<slug>` | `/en/software-development/projects/<slug>` | `ProjectCase` | `/projects/<slug>` |
| `/systemutveckling/om` | `/en/software-development/about` | `About` | `/about` |
| `/systemutveckling/kontakt` | `/en/software-development/contact` | `Contact` (utvecklaringress) | `/contact` |

Utvecklarcasen är venueflow, fx-monitor, fairway, kommunfotboll, kvitt, flagforge och lordagsgolf.

**Gemensamt utanför spåren:** `/privacy`, `/terms`, `/en/privacy`, `/en/terms`.

### Lördagsgolf i båda spåren

Casesidan renderas under både `/hemsidor/exempel/lordagsgolf` och `/systemutveckling/projekt/lordagsgolf`, så att besökaren stannar i sitt spår och har rätt meny. Hemsidesversionen har en canonical som pekar på utvecklarversionen.

### Omdirigeringar

Alla gamla adresser läggs i `REDIRECTS` i `routes.js`, som redan omdirigerar i appen via React Router. Listan är också checklistan för 301-reglerna som läggs in i Render vid lansering.

| Gammal adress | Ny adress |
|---|---|
| `/hemsida-vastervik` | `/hemsidor` |
| `/priser` | `/hemsidor/priser` |
| `/guide/hemsida-for-lokala-foretag` | `/hemsidor/guide` |
| `/services` | `/systemutveckling` |
| `/about` | `/systemutveckling/om` |
| `/contact` | `/systemutveckling/kontakt` |
| `/projects` | `/systemutveckling/projekt` |
| `/projects/brod-och-deli`, `/projects/ankarsrums-jsk` | `/hemsidor/exempel/<slug>` |
| `/projects/<övriga>` | `/systemutveckling/projekt/<slug>` |
| `/fullstackutvecklare-vastervik` | `/systemutveckling` |
| `/webbutvecklare-vastervik` | `/hemsidor` |
| `/en/services` | `/en/software-development` |
| `/en/about`, `/en/contact`, `/en/projects`, `/en/projects/<slug>` | motsvarande under `/en/software-development` |
| `/en/fullstack-developer-vastervik` | `/en/software-development` |
| befintliga `REDIRECTS` (t.ex. `/laravel-utvecklare`) | pekas om direkt till slutmålet, utan kedjor |

`ServiceLanding`-sidorna försvinner som egna sidor. Deras sökord (fullstackutvecklare, webbutvecklare, Västervik) förs in i titel och ingress på spårstartsidorna.

### SEO

- `ROUTES` i `routes.js` får alla nya adresser, så förrendering och sitemap följer med automatiskt. Gamla adresser tas bort från `ROUTES`.
- `/hemsidor` behåller "hemsida" och "Västervik" i titel och `h1`, eftersom `/hemsida-vastervik` troligen rankar för de orden i dag.
- Språkväxlingen i `Nav` (`toggleLangPath`) och `Seo` (hreflang) får nya par: varje sida i utvecklarspåret paras med sin engelska motsvarighet. Sidorna under `/hemsidor` växlar till `/en`.

### Kontakt

`Contact` används i båda spåren med olika ingress. Formuläret skickar fortfarande till samma Formspree-formulär, med ett dolt fält `spår` (`hemsidor` eller `systemutveckling`) så att Alex ser vilken publik meddelandet kom från.

## Del 2: Startsida med delad skärm

### Layout

- **Desktop:** fyller hela fönstret och delas 50/50. Halvan med hover eller fokus växer till cirka 62 procent, och den andra tonas ner något men går att läsa. Alex namn står i skarven, och längst upp finns bara logga och språkknapp.
- **Klick:** den valda halvan fyller hela skärmen (cirka 500 ms) innan navigeringen sker.
- **Mobil:** halvorna ligger staplade, cirka 50svh var, och fungerar utan hover.

### Varje halva har tre lager

1. **Higgsfield-klipp:** stumt, loopande och med en mörk overlay för textkontrast. 8–10 s, högst cirka 2 MB, webm och mp4, med en poster-bild. På mobil används en 720p-version.
2. **Riktigt innehåll (hybrid):**
   - *Systemutveckling:* en terminal i HTML som skriver ut riktiga sekvenser från Alex projekt i en loop: `git push`, testerna i FX Monitor som går gröna, deploy till Render. Texten är skarp och går att markera. På mobil är den kortare.
   - *Hemsidor:* en laptop- och en mobilram där helsidesskärmdumpar av riktiga kundsajter scrollar långsamt (Bröd & Deli, Ankarsrums JSK, exempelsajterna i `public/exempel`). På mobil visas bara mobilramen.
3. **Text och knapp:**
   - *Hemsidor:* rubrik i stil med "Hemsidor för företag i Västervik", raden "Från {LOWEST_PRICE} kr · klart på ca 2 veckor" och knappen "Se paket". Priset hämtas från `LOWEST_PRICE` i `packages.js`.
   - *Systemutveckling:* rubriken "Systemutvecklare", raden "Fullstack · React, Laravel, TypeScript, Python" och knappen "Se projekt".

Den slutliga texten finslipas under bygget.

### Engelska `/en`

Samma delade sida. Hemsidehalvan heter "Websites for local businesses (in Swedish)" och länkar till `/hemsidor`. Utvecklarhalvan länkar till `/en/software-development`.

### Färg

Den mörka grunden och kopparaccenten (`#c8683d`) behålls. Hemsidehalvan får en varmare ton med kopparaccent, och utvecklarhalvan en svalare med teal (`#1f8b7f`, finns redan i paletten). En färgklick per halva.

### Prestanda och tillgänglighet

- Texten förrenderas: en riktig `h1` och riktiga `<a>`-länkar för halvorna.
- Videon börjar laddas först när sidan har ritats upp. Poster-bilden visas till dess.
- `prefers-reduced-motion`: stillbilder i stället för video, terminalen visas färdigutskriven och skärmdumparna scrollar inte.
- Halvorna går att nå med tangentbordet. Fokus ger samma effekt som hover.

### Platshållare

Tills klippen finns används stillbilder som poster och bakgrund, så sidan fungerar och kan visas från dag ett. När Alex levererar klippen läggs de i `public/` och kopplas in utan kodändringar utöver filnamnen.

## Del 3: Klippen (senare)

Alex tar fram två klipp i Higgsfield: ett mörkt och svalt för utvecklarhalvan (till exempel en arbetsplats i skärmsken med damm i ljuset) och ett varmt för hemsidehalvan (till exempel kvällsljus i Västervik). Klippen är bara stämningsbakgrund, eftersom AI-video inte klarar läsbar text eller läsbara gränssnitt. Claude skriver prompts enligt formeln motiv → en långsam kamerarörelse → ljus och färgton → format, med uttrycklig sömlös loop.

## Verifiering

Allt sker lokalt:

1. `npm run build` går igenom och varje adress i `ROUTES` får en egen HTML-fil i `dist/`.
2. `sitemap.xml` innehåller de nya adresserna och inga gamla.
3. Ett skript hittar interna länkar (`to=`, `href=`, `pathFor(`) som pekar på gamla adresser. Det ska ge noll träffar.
4. `npm run lint` går igenom.
5. Granskning i `npm run preview` (ingen dev-server startas automatiskt): startsidan i 375, 768 och 1440 px, med reducerad rörelse på och av, varje menylänk i båda spåren, språkväxling i utvecklarspåret och omdirigering från några gamla adresser.

## Utanför scope

- Lansering: merge till `main`, push och 301-regler i Render görs i ett separat steg när Alex har godkänt resultatet lokalt.
- Nytt innehåll i casen utöver det som krävs för flytten.
- Engelsk version av hemsidespåret.
