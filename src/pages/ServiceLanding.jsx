import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

import { SITE_URL } from "../routes";

const pages = {
  "fullstackutvecklare-vastervik": {
    sv: {
      kicker: "Utvecklare och konsult i Västervik",
      title: "Fullstackutvecklare och konsult i Västervik för webbappar, API:er och system",
      seoTitle: "Fullstackutvecklare och konsult i Västervik | Alexander Åhman",
      seoDescription:
        "Fullstackutvecklare och konsult i Västervik: React- och Laravel-webbappar, API:er, PostgreSQL, dataflöden och teknisk uppstart för företag och team, på plats eller remote.",
      lede:
        "Jag hjälper företag i och runt Västervik, samt remote-team, att gå från behov till fungerande digitala system. Ofta handlar det om webbappar, API:er, databaser och gränssnitt som behöver byggas snabbt men seriöst.",
      sections: [
        ["När jag passar in", "När ni behöver någon som kan förstå affären, bygga gränssnittet, hantera backendlogik och ta ansvar för hur lösningen faktiskt ska fungera i vardagen."],
        ["Frontend med React", "Komponentbaserade gränssnitt i React och TypeScript med routing, formulär och tillstånd, byggda runt användarens faktiska flöde och kopplade till API:er från början."],
        ["Backend med Laravel", "API:er, validering, behörighet, bokningsregler, adminvyer och datamodeller i Laravel och PostgreSQL, där affärslogiken går att testa och förvalta."],
        ["Som konsult i ert team", "Jag tar uppdrag där teamet behöver någon som snabbt förstår systemet, hittar nästa rimliga steg och bidrar i koden utan lång startsträcka."],
        ["Hur jag arbetar", "Jag börjar med nuläge och risker, bryter ner första rimliga versionen och bygger så att systemet går att testa, drifta och fortsätta utveckla."],
      ],
      stack: ["React", "TypeScript", "Laravel", "PHP", "PostgreSQL", "Python", "API", "CI/CD"],
      ctaTitle: "Behöver du en utvecklare eller konsult i Västervik?",
      ctaText: "Skicka vad du bygger och vad som finns i dag. Jag svarar med ett konkret nästa steg.",
    },
  },
  "webbutvecklare-vastervik": {
    sv: {
      kicker: "Webbutvecklare Västervik",
      title: "Webbutvecklare i Västervik för hantverkare, butiker, restauranger och föreningar",
      seoTitle: "Webbutvecklare Västervik | Hemsidor för lokala företag | Alexander Åhman",
      seoDescription:
        "Webbutvecklare i Västervik som bygger hemsidor efter branschens behov: hantverkare, butiker, caféer, restauranger och föreningar. Förfrågningar, öppettider, meny, kalender och nyheter.",
      lede:
        "Olika verksamheter behöver olika saker av sin hemsida. En hantverkare behöver förfrågningar, ett café behöver öppettider och sortiment, och en förening behöver nyheter och en kalender som styrelsen kan uppdatera själv. Jag bygger hemsidan runt det som ska hända när en kund hittar dig.",
      sections: [
        ["Hantverkare och tjänsteföretag", "Tydliga tjänster, bilder från riktiga jobb, området du jobbar i och ett formulär som gör det lätt att be om offert. Byggt för att synas när någon söker efter din tjänst i Västervik."],
        ["Butiker, caféer och restauranger", "Öppettider, adress och karta, sortiment eller meny med bilder, och en sida som laddar snabbt i mobilen. Bröd & Deli på Allén i Västervik är ett exempel."],
        ["Föreningar och klubbar", "Nyheter, kalender, medlemsinformation och ett enkelt adminläge där styrelsen själv lägger in det som händer, utan att koda. Ankarsrums Jaktskytteklubb är ett exempel."],
        ["Det som alla behöver", "Mobilanpassning, snabb laddning, teknisk SEO och uppgifter som stämmer med din Google-profil, på en grund som går att bygga vidare på."],
      ],
      examples: [
        ["Case: Bröd & Deli", "/projects/brod-och-deli"],
        ["Case: Ankarsrums Jaktskytteklubb", "/projects/ankarsrums-jsk"],
        ["Så jobbar jag med hemsidor", "/hemsida-vastervik"],
      ],
      stack: ["Responsiv webb", "Teknisk SEO", "Kontaktformulär", "Öppettider och karta", "Adminläge", "Next.js", "React"],
      ctaTitle: "Vill du ha en hemsida som passar din verksamhet?",
      ctaText: "Berätta vad du gör och vad kunderna behöver hitta. Jag återkommer med ett förslag på upplägg.",
    },
  },
};

const enPages = {
  "fullstack-developer-vastervik": {
    en: {
      kicker: "Full-stack developer Västervik",
      title: "Full-stack developer in Västervik for web apps, APIs, and system flows",
      seoTitle: "Full-stack developer Västervik | Alexander Ahman",
      seoDescription:
        "Full-stack developer in Västervik building web apps, APIs, databases, Laravel, React, PostgreSQL, and product-facing systems.",
      lede:
        "I help companies in and around Västervik, as well as remote teams, move from need to working digital systems across web apps, APIs, databases, and interfaces.",
      sections: [
        ["Where I fit", "When you need someone who can understand the business, build the interface, handle backend logic, and take responsibility for how the solution works day to day."],
        ["What I build", "React interfaces, Laravel backends, APIs, PostgreSQL databases, data pipelines, admin views, and public web flows."],
        ["How I work", "I start with current state and risks, break down the first reasonable version, and build so the system can be tested, operated, and continued."],
      ],
      stack: ["React", "Laravel", "TypeScript", "PHP", "PostgreSQL", "Python", "API", "GitHub Actions"],
      ctaTitle: "Need a full-stack developer in Västervik?",
      ctaText: "Send what you are building and what exists today. I will respond with a concrete next step.",
    },
  },
};

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;
  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

export default function ServiceLanding({ lang, slug }) {
  const page = lang === "en" ? enPages[slug]?.en : pages[slug]?.sv;
  const t = page || pages["fullstackutvecklare-vastervik"].sv;
  const pathname = lang === "en" ? `/en/${slug}` : `/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.kicker,
    serviceType: t.kicker,
    description: t.seoDescription,
    url: `${SITE_URL}${pathname}`,
    areaServed: { "@type": "City", name: "Västervik" },
    provider: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={t.seoTitle}
        description={t.seoDescription}
        siteUrl={SITE_URL}
        svOnly={lang !== "en"}
        alternateSvPath={lang === "en" ? null : undefined}
        alternateEnPath={lang === "en" ? pathname : undefined}
        xDefaultPath={pathname}
      />

      <section className="section fadeUp pageEditorial" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{t.kicker}</div>
          <h1 className="h2 pageTitle" style={{ marginTop: 10 }}>
            {t.title}
          </h1>
          <p className="lede">{t.lede}</p>

          <div className="serviceList">
            {t.sections.map(([title, text], index) => (
              <article className="serviceRow" key={title}>
                <div className="serviceRowHeader">
                  <span className="caseIndex">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="caseMeta">{t.kicker}</p>
                    <h2>{title}</h2>
                  </div>
                </div>
                <div className="serviceRowBody">
                  <div>
                    <span>{lang === "en" ? "Context" : "Kontext"}</span>
                    <p>{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {t.examples ? (
            <div className="row exploreButtonRow" style={{ marginTop: 18 }}>
              {t.examples.map(([label, to]) => (
                <Link className="btn btn-outline exploreButton" to={to} key={to}>
                  {label}
                </Link>
              ))}
            </div>
          ) : null}

          <section className="sectionCompact toolsBand">
            <div>
              <div className="kicker">{lang === "en" ? "Stack" : "Teknik"}</div>
              <h2>{lang === "en" ? "Relevant technology" : "Relevant teknik"}</h2>
            </div>
            <div className="projectStack">
              {t.stack.map((tool) => (
                <span className="projectStackChip" key={tool}>{tool}</span>
              ))}
            </div>
          </section>

          <div className="homeFinal" style={{ marginTop: 28 }}>
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{t.ctaTitle}</h2>
            <p className="lede">{t.ctaText}</p>
            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pathFor(lang, "contact")}>
                {lang === "en" ? "Contact me" : "Kontakta mig"}
              </Link>
              <Link className="btn btn-home-outline" to={pathFor(lang, "projects")}>
                {lang === "en" ? "View projects" : "Se projekt"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
