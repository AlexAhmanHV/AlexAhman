# Omdirigeringar för Render

Reglerna läggs in i Render (Redirects/Rewrites) vid lansering, inte nu.

Kontrollera i Render vid lansering att även varianten med avslutande snedstreck av varje källa (t.ex. /projects/fairway/) matchar, och lägg till en regel om Render inte gör det.

Gamla regler som ska ersättas, inte kompletteras: de fyra befintliga Render-reglerna för `/react-utvecklare-vastervik`, `/react-laravel-utvecklare`, `/laravel-utvecklare` och `/konsult-systemutvecklare` pekade tidigare någon annanstans och ska nu peka på `/systemutveckling`. Ta bort de gamla reglerna och lägg in tabellens, annars får adresserna två regler.

`public/projects/<slug>/` innehåller case-bilder, så `/projects` och `/projects/<slug>` finns som kataloger i bygget. Kontrollera vid lansering i Render att `/projects` och `/projects/fairway` verkligen svarar 301 till tabellens mål (inte 404 eller en omdirigering med avslutande snedstreck). Om inte: lägg till en uttrycklig regel eller flytta bilderna.

| Source | Destination | Action |
|---|---|---|
| `/hemsida-vastervik` | `/hemsidor` | Redirect |
| `/priser` | `/hemsidor/priser` | Redirect |
| `/guide/hemsida-for-lokala-foretag` | `/hemsidor/guide` | Redirect |
| `/services` | `/systemutveckling` | Redirect |
| `/about` | `/systemutveckling/om` | Redirect |
| `/contact` | `/systemutveckling/kontakt` | Redirect |
| `/projects` | `/systemutveckling/projekt` | Redirect |
| `/fullstackutvecklare-vastervik` | `/systemutveckling` | Redirect |
| `/webbutvecklare-vastervik` | `/hemsidor` | Redirect |
| `/en/services` | `/en/software-development` | Redirect |
| `/en/about` | `/en/software-development/about` | Redirect |
| `/en/contact` | `/en/software-development/contact` | Redirect |
| `/en/projects` | `/en/software-development/projects` | Redirect |
| `/en/fullstack-developer-vastervik` | `/en/software-development` | Redirect |
| `/react-utvecklare-vastervik` | `/systemutveckling` | Redirect |
| `/react-laravel-utvecklare` | `/systemutveckling` | Redirect |
| `/laravel-utvecklare` | `/systemutveckling` | Redirect |
| `/konsult-systemutvecklare` | `/systemutveckling` | Redirect |
| `/projects/venueflow` | `/systemutveckling/projekt/venueflow` | Redirect |
| `/en/projects/venueflow` | `/en/software-development/projects/venueflow` | Redirect |
| `/projects/fx-monitor` | `/systemutveckling/projekt/fx-monitor` | Redirect |
| `/en/projects/fx-monitor` | `/en/software-development/projects/fx-monitor` | Redirect |
| `/projects/lordagsgolf` | `/systemutveckling/projekt/lordagsgolf` | Redirect |
| `/en/projects/lordagsgolf` | `/en/software-development/projects/lordagsgolf` | Redirect |
| `/projects/fairway` | `/systemutveckling/projekt/fairway` | Redirect |
| `/en/projects/fairway` | `/en/software-development/projects/fairway` | Redirect |
| `/projects/kommunfotboll` | `/systemutveckling/projekt/kommunfotboll` | Redirect |
| `/en/projects/kommunfotboll` | `/en/software-development/projects/kommunfotboll` | Redirect |
| `/projects/kvitt` | `/systemutveckling/projekt/kvitt` | Redirect |
| `/en/projects/kvitt` | `/en/software-development/projects/kvitt` | Redirect |
| `/projects/flagforge` | `/systemutveckling/projekt/flagforge` | Redirect |
| `/en/projects/flagforge` | `/en/software-development/projects/flagforge` | Redirect |
| `/projects/brod-och-deli` | `/hemsidor/exempel/brod-och-deli` | Redirect |
| `/en/projects/brod-och-deli` | `/hemsidor/exempel/brod-och-deli` | Redirect |
| `/projects/ankarsrums-jsk` | `/hemsidor/exempel/ankarsrums-jsk` | Redirect |
| `/en/projects/ankarsrums-jsk` | `/hemsidor/exempel/ankarsrums-jsk` | Redirect |
