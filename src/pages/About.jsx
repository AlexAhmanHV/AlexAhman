import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Om",
    title: "Jag är utvecklaren som gärna börjar i det röriga",
    intro:
      "Jag heter Alexander Åhman och bygger digitala system från Västervik. Min styrka är att snabbt förstå vad som behöver fungera, göra tekniken begriplig och få fram en körbar version som går att förbättra.",
    meta: [
      ["roll", "fullstackutvecklare"],
      ["bas", "Västervik / remote"],
      ["trivs med", "produktnära system"],
      ["fokus", "React, Laravel, data, API"],
    ],
    principlesKicker: "Profil",
    principlesTitle: "Det här brukar vara mitt bidrag i ett team",
    principles: [
      {
        index: "01",
        title: "Jag översätter otydliga behov till byggbara delar",
        text: "Jag ställer hellre en extra fråga tidigt än bygger vidare på ett antagande som blir dyrt senare.",
      },
      {
        index: "02",
        title: "Jag rör mig mellan gränssnitt och backend",
        text: "Jag gillar att förstå hela kedjan: vad användaren gör, vilka regler som styr, hur datan sparas och hur systemet ska drivas.",
      },
      {
        index: "03",
        title: "Jag prioriterar första fungerande versionen",
        text: "Den ska vara liten nog att få klar, men seriös nog att visa om riktningen håller.",
      },
      {
        index: "04",
        title: "Jag lämnar efter mig kod som går att fortsätta på",
        text: "Namn, struktur, felhantering och små tekniska beslut spelar roll när nästa person ska förstå systemet.",
      },
    ],
    toolsKicker: "Verktyg",
    toolsTitle: "Teknik jag ofta arbetar med",
    tools: ["React", "TypeScript", "JavaScript", "Laravel", "PHP", "PostgreSQL", "SQL", "Python", "GitHub Actions", "Vite"],
    ctaTitle: "Vill du se vad jag har byggt?",
    ctaText: "Börja med projekten. Där syns hur jag tänker kring bokningslogik, dataflöden och publika webbupplevelser.",
    ctaPrimary: "Se projekt",
    ctaSecondary: "Kontakta mig",
  },

  en: {
    kicker: "About",
    title: "I am the developer who is comfortable starting in the messy part",
    intro:
      "My name is Alexander Ahman and I build digital systems from Västervik. My strength is understanding what needs to work, making the technical direction clear, and getting a runnable version into shape.",
    meta: [
      ["role", "full-stack developer"],
      ["base", "Västervik / remote"],
      ["best fit", "product-facing systems"],
      ["focus", "React, Laravel, data, API"],
    ],
    principlesKicker: "Profile",
    principlesTitle: "What I usually contribute to a team",
    principles: [
      {
        index: "01",
        title: "I turn unclear needs into buildable parts",
        text: "I would rather ask one more question early than keep building on an assumption that gets expensive later.",
      },
      {
        index: "02",
        title: "I move between interface and backend",
        text: "I like understanding the full chain: what the user does, which rules apply, how data is stored, and how the system is operated.",
      },
      {
        index: "03",
        title: "I prioritize the first working version",
        text: "It should be small enough to finish, but serious enough to show whether the direction holds.",
      },
      {
        index: "04",
        title: "I leave behind code that can be continued",
        text: "Names, structure, error handling, and small technical decisions matter when the next person needs to understand the system.",
      },
    ],
    toolsKicker: "Tools",
    toolsTitle: "Technology I often work with",
    tools: ["React", "TypeScript", "JavaScript", "Laravel", "PHP", "PostgreSQL", "SQL", "Python", "GitHub Actions", "Vite"],
    ctaTitle: "Want to see what I have built?",
    ctaText: "Start with the projects. They show how I think about booking logic, data flows, and public web experiences.",
    ctaPrimary: "View projects",
    ctaSecondary: "Contact me",
  },
};

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;
  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

export default function About({ lang }) {
  const t = copy[lang] || copy.sv;
  const pathname = lang === "en" ? "/en/about" : "/about";

  const seoTitle = lang === "en" ? "About | Alexander Ahman" : "Om mig | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "About Alexander Ahman, a full-stack developer in Västervik focused on product-facing systems, React, Laravel, APIs, data, and practical delivery."
      : "Om Alexander Åhman, fullstackutvecklare i Västervik med fokus på produktnära system, React, Laravel, API:er, data och praktisk leverans.";

  return (
    <>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp pageEditorial" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="aboutHero">
            <div>
              <div className="kicker">{t.kicker}</div>
              <h1 className="h2 pageTitle" style={{ marginTop: 10 }}>
                {t.title}
              </h1>
              <p className="lede">{t.intro}</p>
            </div>

            <aside className="homeSignalCard aboutSignal">
              <div className="terminalHeader" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <dl className="homeMetaList">
                {t.meta.map(([label, value]) => (
                  <div className="homeMetaRow" key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>

          <section className="sectionCompact">
            <div className="sectionIntroLine">
              <div>
                <div className="kicker">{t.principlesKicker}</div>
                <h2 className="h2 homeSectionTitle" style={{ marginTop: 10 }}>
                  {t.principlesTitle}
                </h2>
              </div>
            </div>

            <div className="principleList">
              {t.principles.map((item) => (
                <article className="principleRow" key={item.title}>
                  <span className="caseIndex">{item.index}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="sectionCompact toolsBand">
            <div>
              <div className="kicker">{t.toolsKicker}</div>
              <h2>{t.toolsTitle}</h2>
            </div>
            <div className="projectStack">
              {t.tools.map((tool) => (
                <span className="projectStackChip" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </section>

          <div className="homeFinal" style={{ marginTop: 28 }}>
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{t.ctaTitle}</h2>
            <p className="lede">{t.ctaText}</p>
            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pathFor(lang, "projects")}>
                {t.ctaPrimary}
              </Link>
              <Link className="btn btn-home-outline" to={pathFor(lang, "contact")}>
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
