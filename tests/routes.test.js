import { test } from "node:test";
import assert from "node:assert/strict";
import { ROUTES, REDIRECTS } from "../src/routes.js";

test("ROUTES har inga dubbletter och inga gamla adresser", () => {
  assert.equal(new Set(ROUTES).size, ROUTES.length);
  for (const old of ["/services", "/about", "/contact", "/projects", "/priser", "/hemsida-vastervik", "/en/projects"]) {
    assert.ok(!ROUTES.includes(old), old);
  }
});

test("ROUTES innehåller spårens adresser", () => {
  for (const p of ["/", "/en", "/hemsidor", "/hemsidor/exempel/lordagsgolf", "/systemutveckling/projekt/lordagsgolf", "/en/software-development/projects/fairway"]) {
    assert.ok(ROUTES.includes(p), p);
  }
  assert.ok(!ROUTES.includes("/hemsidor/exempel/fairway"));
});

test("varje omdirigering landar direkt på en adress som finns", () => {
  for (const [from, to] of Object.entries(REDIRECTS)) {
    assert.ok(ROUTES.includes(to), `${from} -> ${to}`);
    assert.ok(!(to in REDIRECTS), `kedja: ${from} -> ${to}`);
    assert.ok(!ROUTES.includes(from), `förrenderas fortfarande: ${from}`);
  }
});

test("gamla nyckeladresser omdirigeras rätt", () => {
  assert.equal(REDIRECTS["/hemsida-vastervik"], "/hemsidor");
  assert.equal(REDIRECTS["/projects/brod-och-deli"], "/hemsidor/exempel/brod-och-deli");
  assert.equal(REDIRECTS["/projects/fairway"], "/systemutveckling/projekt/fairway");
  assert.equal(REDIRECTS["/en/about"], "/en/software-development/about");
  assert.equal(REDIRECTS["/laravel-utvecklare"], "/systemutveckling");
});
