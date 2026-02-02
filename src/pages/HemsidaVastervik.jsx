import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

export default function HemsidaVastervik() {
  return (
    <>
      <Seo
        lang="sv"
        pathname="/hemsida-vastervik"
        title="Hemsida i Västervik | Webbutveckling med Alex Åhman"
        description="Behöver du en hemsida i Västervik? Jag bygger snabba, moderna och sökmotorvänliga webbplatser med fokus på kvalitet, prestanda och enkel förvaltning."
        siteUrl={SITE_URL}
        svOnly
      />

      <section className="section fadeUp" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">Lokal webbutveckling</div>

          <h1 className="h2" style={{ marginTop: 10 }}>
            Hemsida i Västervik
          </h1>

          <p className="lede">
            Jag hjälper företag och organisationer i Västervik med moderna hemsidor som är snabba,
            tydliga och enkla att uppdatera. Fokus är alltid kvalitet, prestanda och en teknisk
            grund som håller över tid.
          </p>

          <div className="grid cols-3" style={{ marginTop: 20 }}>
            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Ny hemsida</h3>
              <p style={{ marginTop: 10 }}>
                Från idé till lanserad webbplats – med tydlig struktur och ett bra innehållsflöde.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>
                Förbättring av befintlig sida
              </h3>
              <p style={{ marginTop: 10 }}>
                Jag optimerar design, prestanda och SEO på din nuvarande webbplats.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Teknisk partner</h3>
              <p style={{ marginTop: 10 }}>
                Flexibel utvecklingshjälp för vidareutveckling, support och nya funktioner.
              </p>
            </div>
          </div>

          <div className="row" style={{ marginTop: 20 }}>
            <Link className="btn" to="/contact">
              Ta kontakt
            </Link>
            <Link className="btn btn-outline" to="/services">
              Se tjänster
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
