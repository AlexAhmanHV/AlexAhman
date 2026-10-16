import { test } from "node:test";
import assert from "node:assert/strict";
import { pagePath, devCasePath, hemsidorCasePath, langAlternates, toggleLangPath } from "../src/paths.js";
import { TRACK_NAV } from "../src/tracks.js";
import { ROUTES } from "../src/routes.js";

test("pagePath ger svensk adress som standard och engelsk när den finns", () => {
  assert.equal(pagePath("devOm"), "/systemutveckling/om");
  assert.equal(pagePath("devOm", "en"), "/en/software-development/about");
  assert.equal(pagePath("hemsidorPriser", "en"), "/hemsidor/priser");
});

test("casadresser per spår", () => {
  assert.equal(devCasePath("fairway"), "/systemutveckling/projekt/fairway");
  assert.equal(devCasePath("fairway", "en"), "/en/software-development/projects/fairway");
  assert.equal(hemsidorCasePath("brod-och-deli"), "/hemsidor/exempel/brod-och-deli");
});

test("langAlternates parar utvecklarsidor och lämnar hemsidor utan engelska", () => {
  assert.deepEqual(langAlternates("/systemutveckling/om"), { sv: "/systemutveckling/om", en: "/en/software-development/about" });
  assert.deepEqual(langAlternates("/en/software-development/projects/kvitt"), { sv: "/systemutveckling/projekt/kvitt", en: "/en/software-development/projects/kvitt" });
  assert.deepEqual(langAlternates("/hemsidor/priser"), { sv: "/hemsidor/priser", en: null });
  assert.deepEqual(langAlternates("/"), { sv: "/", en: "/en" });
});

test("toggleLangPath växlar språk och faller tillbaka till /en eller /", () => {
  assert.equal(toggleLangPath("/systemutveckling/projekt"), "/en/software-development/projects");
  assert.equal(toggleLangPath("/en/software-development"), "/systemutveckling");
  assert.equal(toggleLangPath("/hemsidor/priser"), "/en");
  assert.equal(toggleLangPath("/hemsidor/exempel/lordagsgolf"), "/en");
  assert.equal(toggleLangPath("/en"), "/");
  assert.equal(toggleLangPath("/systemutveckling/om/"), "/en/software-development/about");
});

test("alla menylänkar pekar på adresser som förrenderas", () => {
  const all = [...TRACK_NAV.hemsidor, ...TRACK_NAV.dev.sv, ...TRACK_NAV.dev.en];
  for (const item of all) assert.ok(ROUTES.includes(item.to), item.to);
});
