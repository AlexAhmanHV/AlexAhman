import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  kicker: "Lokal webbutveckling",
  title: "Hemsida i Västervik",
  lede:
    "Jag hjälper företag i Västervik att bygga hemsidor som är snabba, tydliga och lätta att förvalta. Du får en lösning som fungerar i vardagen och går att växa med över tid.",
  highlights: [
    ["Tydlig struktur", "Jag planerar innehåll och sidstruktur så att besökaren snabbt hittar rätt."],
    ["Teknisk kvalitet", "Prestanda, mobilanpassning och teknisk SEO byggs in från start."],
    ["Lätt att uppdatera", "Du får en lösning som går att vidareutveckla utan att börja om."],
  ],
  processTitle: "Så jobbar vi",
  process: [
    ["1. Behov & mål", "Vi går igenom målgrupp, innehåll och vad sidan ska leverera."],
    ["2. Bygg & förfining", "Jag bygger lösningen och vi justerar löpande tills allt sitter."],
    ["3. Lansering & nästa steg", "Vi publicerar, följer upp och planerar vidareutveckling vid behov."],
  ],
  ctaTitle: "Vill du diskutera en hemsida i Västervik?",
  ctaText: "Skicka ett meddelande så tar vi ett första, enkelt samtal om ditt upplägg.",
  ctaPrimary: "Ta kontakt",
  ctaSecondary: "Se alla tjänster",
};

export default function HemsidaVastervik() {
  return (
    <>
      <Seo
        lang="sv"
        pathname="/hemsida-vastervik"
        title="Hemsida i Västervik | Webbutveckling med Alexander Åhman"
        description="Behöver du en hemsida i Västervik? Jag bygger snabba, moderna och sökmotorvänliga webbplatser med fokus på kvalitet, prestanda och enkel förvaltning."
        siteUrl={SITE_URL}
        svOnly
      />

      <section className="hero homeHero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="homeHeroPanel fadeUp">
            <div className="kicker">{copy.kicker}</div>
            <h1 className="h2" style={{ marginTop: 10 }}>
              {copy.title}
            </h1>
            <p className="lede">{copy.lede}</p>

            <div className="grid cols-3" style={{ marginTop: 20 }}>
              {copy.highlights.map(([title, text]) => (
                <div className="card" key={title}>
                  <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                  <p style={{ marginTop: 10 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.processTitle}</h2>

          <div className="homeProcessGrid" style={{ marginTop: 16 }}>
            {copy.process.map(([title, text]) => (
              <div className="homeProcessItem" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 26 }}>
        <div className="container">
          <div className="homeFinal">
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.ctaTitle}</h2>
            <p className="lede">{copy.ctaText}</p>

            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to="/contact">
                {copy.ctaPrimary}
              </Link>
              <Link className="btn btn-home-outline" to="/services">
                {copy.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
