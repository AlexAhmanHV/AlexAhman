// Skriver docs/render-redirects.md: checklista för 301-reglerna i Render.
import { writeFileSync, mkdirSync } from "node:fs";
import { REDIRECTS } from "../src/routes.js";

const rows = Object.entries(REDIRECTS).map(([from, to]) => `| \`${from}\` | \`${to}\` | Redirect |`);
const out = [
  "# Omdirigeringar för Render",
  "",
  "Reglerna läggs in i Render (Redirects/Rewrites) vid lansering, inte nu.",
  "",
  "Kontrollera i Render vid lansering att även varianten med avslutande snedstreck av varje källa (t.ex. /projects/fairway/) matchar, och lägg till en regel om Render inte gör det.",
  "",
  "Gamla regler som ska ersättas, inte kompletteras: de fyra befintliga Render-reglerna för `/react-utvecklare-vastervik`, `/react-laravel-utvecklare`, `/laravel-utvecklare` och `/konsult-systemutvecklare` pekade tidigare någon annanstans och ska nu peka på `/systemutveckling`. Ta bort de gamla reglerna och lägg in tabellens, annars får adresserna två regler.",
  "",
  "`public/projects/<slug>/` innehåller case-bilder, så `/projects` och `/projects/<slug>` finns som kataloger i bygget. Kontrollera vid lansering i Render att `/projects` och `/projects/fairway` verkligen svarar 301 till tabellens mål (inte 404 eller en omdirigering med avslutande snedstreck). Om inte: lägg till en uttrycklig regel eller flytta bilderna.",
  "",
  "| Source | Destination | Action |",
  "|---|---|---|",
  ...rows,
  "",
].join("\n");

mkdirSync("docs", { recursive: true });
writeFileSync("docs/render-redirects.md", out);
console.log(`Skrev docs/render-redirects.md (${rows.length} regler)`);
