import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Om",
    title: "Teknisk profil",
    intro: "Jag är systemutvecklare med en bred verktygslåda inom digitala produkter, och jag trivs bäst när jag får ta ansvar för både implementation och teknisk helhet.",
    highlights: [
      [
        "Helhetsperspektiv",
        "Jag trivs i gränslandet mellan front-end och back-end, tar snabbt ansvar och bygger lösningar som är enkla att förstå, förvalta och vidareutveckla.",
      ],
      [
        "Teknisk struktur",
        "Jag tänker inte bara på hur något ska byggas, utan också på hur data, integrationer och systemdelar ska hänga ihop på ett hållbart sätt.",
      ],
      [
        "Snabb anpassning",
        "Jag sätter mig snabbt in i nya kodbaser, verktyg och arbetssätt och bidrar där behovet är som störst.",
      ],
      [
        "Stabil leverans",
        "Målet är alltid att leverera något som fungerar stabilt i vardagen, både för användare och för teamet som fortsätter utveckla systemet.",
      ],
    ],
  },

  en: {
    kicker: "About",
    title: "Technical profile",
    intro: "I’m a software developer with a broad toolbox across digital products, and I do my best work when I can take responsibility for both implementation and the wider technical picture.",
    highlights: [
      [
        "End-to-end perspective",
        "I enjoy working across the front end and back end, take ownership quickly, and build solutions that are easy to understand, maintain, and extend.",
      ],
      [
        "Technical structure",
        "I do not only think about how to build a feature, but also how data, integrations, and system parts should fit together over time.",
      ],
      [
        "Fast adaptation",
        "I ramp up quickly in new codebases, tools, and workflows, and contribute where the need is greatest.",
      ],
      [
        "Stable delivery",
        "My goal is always to deliver solutions that work reliably day to day, for both users and the team that continues to develop the system.",
      ],
    ],
  },
};

export default function About({ lang }) {
  const t = copy[lang] || copy.sv;

  const pathname = lang === "en" ? "/en/about" : "/about";

  const seoTitle = lang === "en" ? "About | Alexander Åhman" : "Om mig | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Software developer in Västervik with a broad full-stack profile and an end-to-end mindset around systems, architecture, maintainability, and delivery."
      : "Systemutvecklare i Västervik med bred fullstackprofil och helhetstänk kring system, arkitektur, förvaltning och leverans.";

  return (
    <>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{t.kicker}</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            {t.title}
          </h1>

          <div className="card" style={{ marginTop: 16 }}>
            <p>{t.intro}</p>
          </div>

          <div className="grid cols-2" style={{ marginTop: 18 }}>
            {t.highlights.map(([title, text]) => (
              <div className="card" key={title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{text}</p>
              </div>
            ))}
          </div>

          <div className="card" style={{ marginTop: 18 }}>
            <p>{lang === "en" ? "Related pages:" : "Relaterade sidor:"}</p>
            <div className="row" style={{ marginTop: 12 }}>
              <Link className="btn btn-outline" to={lang === "en" ? "/en/services" : "/services"}>
                {lang === "en" ? "Services" : "Tjänster"}
              </Link>
              <Link className="btn btn-outline" to={lang === "en" ? "/en/contact" : "/contact"}>
                {lang === "en" ? "Contact" : "Kontakt"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
