import { useEffect, useLayoutEffect } from "react";
import { Routes, Route, Navigate, useLocation, useNavigationType } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { REDIRECTS } from "./routes";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import useMotionEffects from "./hooks/useMotionEffects";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HemsidaVastervik from "./pages/HemsidaVastervik";
import Projects from "./pages/Projects";
import ProjectCase from "./pages/ProjectCase";
import ServiceLanding from "./pages/ServiceLanding";

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

function AppRoutes({ lang }) {
  const location = useLocation();
  const routeKey = location.pathname;

  useMotionEffects(routeKey);
  useScrollToTopOnNavigate();

  return (
    <>
      <ScrollProgress />
      <Nav lang={lang} />
      <main key={routeKey} className="pageShell routeTransition" data-page-shell>
        <Routes>
          <Route index element={<Home lang={lang} />} />
          <Route path="services" element={<Services lang={lang} />} />
          <Route path="about" element={<About lang={lang} />} />
          <Route path="contact" element={<Contact lang={lang} />} />
          <Route path="projects" element={<Projects lang={lang} />} />
          <Route path="projects/venueflow" element={<ProjectCase lang={lang} slug="venueflow" />} />
          <Route path="projects/fx-monitor" element={<ProjectCase lang={lang} slug="fx-monitor" />} />
          <Route path="projects/lordagsgolf" element={<ProjectCase lang={lang} slug="lordagsgolf" />} />
          <Route path="projects/fairway" element={<ProjectCase lang={lang} slug="fairway" />} />
          <Route path="projects/kommunfotboll" element={<ProjectCase lang={lang} slug="kommunfotboll" />} />
          <Route path="projects/kvitt" element={<ProjectCase lang={lang} slug="kvitt" />} />
          <Route path="projects/flagforge" element={<ProjectCase lang={lang} slug="flagforge" />} />
          <Route path="projects/brod-och-deli" element={<ProjectCase lang={lang} slug="brod-och-deli" />} />
          <Route path="projects/ankarsrums-jsk" element={<ProjectCase lang={lang} slug="ankarsrums-jsk" />} />
          {lang === "sv" ? (
            <>
              <Route path="fullstackutvecklare-vastervik" element={<ServiceLanding lang={lang} slug="fullstackutvecklare-vastervik" />} />
              <Route path="webbutvecklare-vastervik" element={<ServiceLanding lang={lang} slug="webbutvecklare-vastervik" />} />
              {Object.entries(REDIRECTS).map(([from, to]) => (
                <Route key={from} path={from.slice(1)} element={<Navigate to={to} replace />} />
              ))}
            </>
          ) : (
            <Route path="fullstack-developer-vastervik" element={<ServiceLanding lang={lang} slug="fullstack-developer-vastervik" />} />
          )}
          <Route path="privacy" element={<Privacy lang={lang} />} />
          <Route path="terms" element={<Terms lang={lang} />} />
          {lang === "sv" ? <Route path="hemsida-vastervik" element={<HemsidaVastervik />} /> : null}
          <Route path="*" element={<NotFound lang={lang} />} />
        </Routes>
      </main>
      <Footer lang={lang} />
    </>
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
  return (
    <Routes>
      <Route path="/en/*" element={<AppRoutes lang="en" />} />
      <Route path="/*" element={<AppRoutes lang="sv" />} />
    </Routes>
  );
}
