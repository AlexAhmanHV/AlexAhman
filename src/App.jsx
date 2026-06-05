import { Routes, Route, useLocation } from "react-router-dom";
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

function AppRoutes({ lang }) {
  const location = useLocation();
  const routeKey = location.pathname;

  useMotionEffects(routeKey);

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
          {lang === "sv" ? (
            <>
              <Route path="fullstackutvecklare-vastervik" element={<ServiceLanding lang={lang} slug="fullstackutvecklare-vastervik" />} />
              <Route path="webbutvecklare-vastervik" element={<ServiceLanding lang={lang} slug="webbutvecklare-vastervik" />} />
              <Route path="react-utvecklare-vastervik" element={<ServiceLanding lang={lang} slug="react-utvecklare-vastervik" />} />
              <Route path="react-laravel-utvecklare" element={<ServiceLanding lang={lang} slug="react-laravel-utvecklare" />} />
              <Route path="laravel-utvecklare" element={<ServiceLanding lang={lang} slug="laravel-utvecklare" />} />
              <Route path="konsult-systemutvecklare" element={<ServiceLanding lang={lang} slug="konsult-systemutvecklare" />} />
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
