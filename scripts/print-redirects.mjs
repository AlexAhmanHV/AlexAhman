// Skriver docs/render-redirects.md: checklista för 301-reglerna i Render.
import { writeFileSync, mkdirSync } from "node:fs";
import { REDIRECTS } from "../src/routes.js";

const rows = Object.entries(REDIRECTS).map(([from, to]) => `| \`${from}\` | \`${to}\` | Redirect |`);
const out = [
  "# Omdirigeringar för Render",
  "",
  "Reglerna läggs in i Render (Redirects/Rewrites) vid lansering, inte nu.",
  "",
  "| Source | Destination | Action |",
  "|---|---|---|",
  ...rows,
  "",
].join("\n");

mkdirSync("docs", { recursive: true });
writeFileSync("docs/render-redirects.md", out);
console.log(`Skrev docs/render-redirects.md (${rows.length} regler)`);
