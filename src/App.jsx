import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigationType } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { REDIRECTS } from "./routes";
import { DEV_CASES, HEMSIDOR_CASES, devCasePath, hemsidorCasePath, pagePath } from "./paths";
import TrackLayout from "./components/TrackLayout";
import ScrollProgress from "./components/ScrollProgress";
import useMotionEffects from "./hooks/useMotionEffects";

import SplitHome from "./pages/SplitHome";
import DevHome from "./pages/DevHome";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HemsidaVastervik from "./pages/HemsidaVastervik";
import HemsidorExempel from "./pages/HemsidorExempel";
import GuideHemsida from "./pages/GuideHemsida";
import Priser from "./pages/Priser";
import Projects from "./pages/Projects";
import ProjectCase from "./pages/ProjectCase";

// React Router behåller scrollpositionen mellan sidor. Nya sidor ska börja
// högst upp (eller vid #ankaret); bakåt/framåt återställer positionen sidan
// hade. Webbläsarens egen återställning slår fel i en SPA, så den stängs av.
const scrollPositions = new Map();
const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

// Scrollpositionen läses av när en navigering startar (klick eller
// bakåt/framåt), innan React byter DOM och webbläsaren klämmer window.scrollY
// mot den nya, kortare sidan. Lyssnarna registreras före React Routers.
let lastScrollY = 0;
if (typeof window !== "undefined") {
  const remember = () => {
    lastScrollY = window.scrollY;
  };
  window.addEventListener("click", remember, true);
  window.addEventListener("popstate", remember);
}

// Sidan kan vara kortare än den sparade positionen tills bilderna laddats,
// så försök igen en stund tills positionen nås.
function restoreScroll(y, attempt = 0) {
  window.scrollTo(0, y);
  if (Math.abs(window.scrollY - y) > 2 && attempt < 20) {
    setTimeout(() => restoreScroll(y, attempt + 1), 50);
  }
}

function useScrollToTopOnNavigate() {
  const { key, pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  useIsomorphicLayoutEffect(() => () => scrollPositions.set(key, lastScrollY), [key]);

  useIsomorphicLayoutEffect(() => {
    if (navigationType === "POP" && scrollPositions.has(key)) {
      restoreScroll(scrollPositions.get(key));
      return;
    }
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
      return;
    }
    window.scrollTo(0, 0);
  }, [key, pathname, hash, navigationType]);
}

// Utvecklarspåret per språk. Layoutrouten saknar egen adress, så även
// /privacy, /terms och okända adresser (NotFound) får utvecklarspårets meny.
function devTrackRoutes(lang) {
  return (
    <Route key={lang} element={<TrackLayout lang={lang} track="dev" />}>
      <Route path={pagePath("dev", lang)} element={<DevHome lang={lang} />} />
      <Route path={pagePath("devProjekt", lang)} element={<Projects lang={lang} />} />
      {DEV_CASES.map((slug) => (
        <Route key={slug} path={devCasePath(slug, lang)} element={<ProjectCase lang={lang} slug={slug} track="dev" />} />
      ))}
      <Route path={pagePath("devOm", lang)} element={<About lang={lang} />} />
      <Route path={pagePath("devKontakt", lang)} element={<Contact lang={lang} track="dev" />} />
      <Route path={pagePath("privacy", lang)} element={<Privacy lang={lang} />} />
      <Route path={pagePath("terms", lang)} element={<Terms lang={lang} />} />
      <Route path={lang === "en" ? "/en/*" : "*"} element={<NotFound lang={lang} />} />
    </Route>
  );
}

function NotFound({ lang }) {
  return (
    <div className="container section">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <h1 className="h2">{lang === "en" ? "Not found" : "Sidan hittades inte"}</h1>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();

  useMotionEffects(pathname);
  useScrollToTopOnNavigate();

  return (
    <>
      <ScrollProgress />
      <Routes>
        {/* Startsidorna har ingen meny eller sidfot. key gör att / och /en monteras om vid byte. */}
        <Route path={pagePath("home")} element={<SplitHome key="sv" lang="sv" />} />
        <Route path={pagePath("home", "en")} element={<SplitHome key="en" lang="en" />} />

        {/* Hemsidespåret, bara på svenska */}
        <Route element={<TrackLayout lang="sv" track="hemsidor" />}>
          <Route path={pagePath("hemsidor")} element={<HemsidaVastervik />} />
          <Route path={pagePath("hemsidorPriser")} element={<Priser />} />
          <Route path={pagePath("hemsidorExempel")} element={<HemsidorExempel />} />
          {HEMSIDOR_CASES.map((slug) => (
            <Route key={slug} path={hemsidorCasePath(slug)} element={<ProjectCase lang="sv" slug={slug} track="hemsidor" />} />
          ))}
          <Route path={pagePath("hemsidorGuide")} element={<GuideHemsida />} />
          <Route path={pagePath("hemsidorKontakt")} element={<Contact lang="sv" track="hemsidor" />} />
        </Route>

        {devTrackRoutes("sv")}
        {devTrackRoutes("en")}

        {/* Gamla adresser. 301:an sätts i Render, här omdirigerar React Router vid klientnavigering. */}
        {Object.entries(REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<Navigate to={to} replace />} />
        ))}
      </Routes>
    </>
  );
}
