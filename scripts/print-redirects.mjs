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
  "| Source | Destination | Action |",
  "|---|---|---|",
  ...rows,
  "",
].join("\n");

mkdirSync("docs", { recursive: true });
writeFileSync("docs/render-redirects.md", out);
console.log(`Skrev docs/render-redirects.md (${rows.length} regler)`);
