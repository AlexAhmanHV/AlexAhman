import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const pages = {
  "fullstackutvecklare-vastervik": {
    sv: {
      kicker: "Fullstackutvecklare Västervik",
      title: "Fullstackutvecklare i Västervik för webbappar, API:er och systemflöden",
      seoTitle: "Fullstackutvecklare Västervik | Alexander Åhman",
      seoDescription:
        "Fullstackutvecklare i Västervik för webbappar, API:er, databaser, Laravel, React, PostgreSQL och produktnära systemutveckling.",
      lede:
        "Jag hjälper företag i och runt Västervik, samt remote-team, att gå från behov till fungerande digitala system. Ofta handlar det om webbappar, API:er, databaser och gränssnitt som behöver byggas snabbt men seriöst.",
      sections: [
        ["När jag passar in", "När ni behöver någon som kan förstå affären, bygga gränssnittet, hantera backendlogik och ta ansvar för hur lösningen faktiskt ska fungera i vardagen."],
        ["Vad jag bygger", "React-baserade gränssnitt, Laravel-backends, API:er, PostgreSQL-databaser, datapipelines, adminvyer och publika webbflöden."],
        ["Hur jag arbetar", "Jag börjar med nuläge och risker, bryter ner första rimliga versionen och bygger så att systemet går att testa, drifta och fortsätta utveckla."],
      ],
      stack: ["React", "Laravel", "TypeScript", "PHP", "PostgreSQL", "Python", "API", "GitHub Actions"],
      ctaTitle: "Behöver du en fullstackutvecklare i Västervik?",
      ctaText: "Skicka vad du bygger och vad som finns i dag. Jag svarar med ett konkret nästa steg.",
    },
  },
  "react-laravel-utvecklare": {
    sv: {
      kicker: "React / Laravel",
      title: "React- och Laravel-utvecklare för produktnära webbsystem",
      seoTitle: "React- och Laravel-utvecklare | Alexander Åhman",
      seoDescription:
        "React- och Laravel-utvecklare som bygger webbappar, API:er, adminflöden och databaser med tydlig koppling mellan frontend och backend.",
      lede:
        "React och Laravel passar bra när ett projekt behöver både ett snabbt, tydligt gränssnitt och en backend som hanterar regler, data och integrationer på ett begripligt sätt.",
      sections: [
        ["Frontend med React", "Komponentstruktur, routing, formulär, tillstånd, responsiva vyer och gränssnitt som är byggda runt användarens faktiska flöde."],
        ["Backend med Laravel", "API:er, validering, behörighet, datamodeller, adminvyer, mailflöden och affärslogik som inte göms i frontend."],
        ["Varför kombinationen fungerar", "React gör upplevelsen snabb och flexibel. Laravel ger en stabil plats för regler, data och drift. Tillsammans blir det ett system, inte två lösa delar."],
      ],
      stack: ["React", "Vite", "TypeScript", "Laravel", "PHP", "PostgreSQL", "Blade", "Alpine.js"],
      ctaTitle: "Har du ett React/Laravel-projekt som behöver fart?",
      ctaText: "Beskriv mål, kodläge och vad som stoppar er. Jag kan hjälpa till med både byggande och tekniska vägval.",
    },
  },
  "konsult-systemutvecklare": {
    sv: {
      kicker: "Konsult systemutvecklare",
      title: "Konsult inom systemutveckling när ni behöver praktiskt ansvar snabbt",
      seoTitle: "Konsult systemutvecklare | Fullstack | Alexander Åhman",
      seoDescription:
        "Konsult inom systemutveckling och fullstackutveckling för team som behöver hjälp med React, Laravel, API:er, databaser, dataflöden och teknisk uppstart.",
      lede:
        "Jag tar konsultuppdrag där teamet behöver någon som kan komma in, förstå systemet, hitta nästa rimliga steg och bidra i koden utan lång startsträcka.",
      sections: [
        ["Uppdrag där jag gör nytta", "Nyutveckling, vidareutveckling, teknisk uppstart, API- och backendarbete, frontendflöden, datamodellering och mindre produktteam som behöver extra kapacitet."],
        ["Så minskar jag startsträckan", "Jag läser nuläge, användarflöden, data och begränsningar först. Sedan prioriterar jag konkret leverans framför stora abstrakta planer."],
        ["Vad ni får", "En utvecklare som kan ta egna beslut, kommunicera tradeoffs och lämna efter sig kod som teamet kan fortsätta arbeta med."],
      ],
      stack: ["Fullstack", "React", "Laravel", "API", "SQL", "PostgreSQL", "Python", "CI/CD"],
      ctaTitle: "Behöver teamet en konsult som kan komma igång snabbt?",
      ctaText: "Skicka kort om uppdraget, tidsramen och teknisk miljö. Jag återkommer med om jag är rätt match.",
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
    "@type": "ProfessionalService",
    name: "Alexander Åhman",
    url: `${SITE_URL}${pathname}`,
    areaServed: lang === "en" ? "Västervik, Sweden and remote" : "Västervik, Sverige och remote",
    serviceType: t.kicker,
    description: t.seoDescription,
    founder: {
      "@type": "Person",
      name: "Alexander Åhman",
      jobTitle: lang === "en" ? "Full-stack developer" : "Fullstackutvecklare",
    },
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
