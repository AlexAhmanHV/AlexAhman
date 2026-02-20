import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HemsidaVastervik from "./pages/HemsidaVastervik";
import Projects from "./pages/Projects";

function AppRoutes({ lang }) {
  return (
    <>
      <Nav lang={lang} />
      <Routes>
        <Route index element={<Home lang={lang} />} />
        <Route path="services" element={<Services lang={lang} />} />
        <Route path="about" element={<About lang={lang} />} />
        <Route path="contact" element={<Contact lang={lang} />} />
        <Route path="projects" element={<Projects lang={lang} />} />
        <Route path="privacy" element={<Privacy lang={lang} />} />
        <Route path="terms" element={<Terms lang={lang} />} />
        {lang === "sv" ? <Route path="hemsida-vastervik" element={<HemsidaVastervik />} /> : null}
        <Route path="*" element={<NotFound lang={lang} />} />
      </Routes>
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
