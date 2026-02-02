import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

export default function HemsidaVastervik() {
  return (
    <>
      <Seo
        lang="sv"
        pathname="/hemsida-vastervik"
        title="Hemsida i Vastervik | Webbutveckling med Alex Ahman"
        description="Behov av hemsida i Vastervik? Jag bygger snabba, moderna och sokmotorvanliga hemsidor med fokus pa kvalitet, prestanda och enkel forvaltning."
        siteUrl={SITE_URL}
        svOnly
      />

      <section className="section fadeUp" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">Lokal webbutveckling</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            Hemsida i Vastervik
          </h1>
          <p className="lede">
            Jag hjalper foretag och organisationer i Vastervik med moderna hemsidor som ar snabba,
            tydliga och enkla att uppdatera. Fokus ar alltid kvalitet, prestanda och en teknisk
            grund som haller over tid.
          </p>

          <div className="grid cols-3" style={{ marginTop: 20 }}>
            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Ny hemsida</h3>
              <p style={{ marginTop: 10 }}>
                Fran ide till lanserad webbplats, med tydlig struktur och bra innehallsflode.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Forbattring av befintlig sida</h3>
              <p style={{ marginTop: 10 }}>
                Jag optimerar design, prestanda och SEO pa din nuvarande webbplats.
              </p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Teknisk partner</h3>
              <p style={{ marginTop: 10 }}>
                Flexibel utvecklingshjalp for vidareutveckling, support och nya funktioner.
              </p>
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <Link className="btn" to="/contact">
              Ta kontakt
            </Link>
            <Link className="btn btn-outline" to="/services">
              Se tjanster
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
