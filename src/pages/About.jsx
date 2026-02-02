import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Om",
    title: "Teknisk profil",
    intro: "Jag är systemutvecklare med en bred verktygslåda inom den digitala världen.",
    photoAlt: "Porträtt av Alexander Åhman",
    highlights: [
      [
        "Helhetsperspektiv",
        "Jag trivs i gränslandet mellan front-end och back-end, tar snabbt ansvar och bygger lösningar som är enkla att förstå och förvalta.",
      ],
      [
        "Strukturerat arbetssätt",
        "Oavsett om det handlar om nyutveckling eller förbättring av en befintlig produkt arbetar jag strukturerat med fokus på prestanda och kvalitet.",
      ],
      [
        "Snabb anpassning",
        "Jag sätter mig snabbt in i nya kodbaser, verktyg och arbetssätt och bidrar där behovet är som störst.",
      ],
      [
        "Stabil leverans",
        "Målet är alltid att leverera något som fungerar stabilt i vardagen, både för användare och för teamet som fortsätter utveckla det.",
      ],
    ],
  },

  en: {
    kicker: "About",
    title: "Technical profile",
    intro: "I’m a software developer with a broad toolbox across modern web development.",
    photoAlt: "Portrait of Alexander Ahman",
    highlights: [
      [
        "End-to-end perspective",
        "I enjoy working across the front end and back end, take ownership quickly, and build solutions that are easy to understand and maintain.",
      ],
      [
        "Structured execution",
        "Whether it’s a new build or improvements to an existing product, I work in a structured way—focusing on performance and quality.",
      ],
      [
        "Fast adaptation",
        "I ramp up quickly in new codebases, tools, and workflows, and contribute where the need is greatest.",
      ],
      [
        "Stable delivery",
        "My goal is always to deliver solutions that work reliably day to day—for both users and the team that continues to develop them.",
      ],
    ],
  },
};

export default function About({ lang }) {
  const t = copy[lang] || copy.sv;

  const pathname = lang === "en" ? "/en/about" : "/about";

  const seoTitle =
    lang === "en"
      ? "About | Alexander Åhman"
      : "Om mig | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Software developer in Västervik with a broad full-stack profile. I build solutions that are easy to maintain, fast, and reliable."
      : "Systemutvecklare i Västervik med bred fullstackprofil. Jag bygger lösningar som är lättförvaltade, snabba och stabila.";

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

          <div className="aboutTop" style={{ marginTop: 16 }}>
            <div className="card">
              <p>{t.intro}</p>
            </div>
            <figure className="aboutPhotoCard">
              <img className="aboutPhoto" src="/Alex.jpg" alt={t.photoAlt} loading="lazy" />
            </figure>
          </div>

          <div className="grid cols-2" style={{ marginTop: 18 }}>
            {t.highlights.map(([title, text]) => (
              <div className="card" key={title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
