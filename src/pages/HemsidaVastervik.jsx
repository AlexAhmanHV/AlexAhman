import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";

import { SITE_URL } from "../routes";

const copy = {
  kicker: "Lokal webbutveckling",
  title: "Hemsida i Västervik för företag som vill synas bättre",
  lede:
    "Jag hjälper företag i Västervik att bygga hemsidor som är snabba, tydliga och lätta att förvalta. Oavsett om du behöver en ny hemsida, vill modernisera en befintlig webbplats eller förbättra synligheten lokalt, får du en lösning som fungerar i vardagen och går att växa med över tid.",
  highlights: [
    ["Tydlig struktur", "Jag planerar innehåll och sidstruktur så att besökaren snabbt hittar rätt."],
    ["Teknisk kvalitet", "Prestanda, mobilanpassning och teknisk SEO byggs in från start."],
    ["Lätt att uppdatera", "Du får en lösning som går att vidareutveckla utan att börja om."],
  ],
  audienceTitle: "Vem jag hjälper",
  audience: [
    [
      "Ny hemsida",
      "För företag i Västervik som behöver en professionell hemsida från grunden med tydlig struktur, rätt innehåll och en modern teknisk lösning.",
    ],
    [
      "Befintlig webbplats",
      "För dig som redan har en hemsida i Västervik men vill förbättra design, innehåll, laddningstid eller mobilupplevelse.",
    ],
    [
      "Lokal synlighet",
      "För verksamheter som vill synas bättre lokalt och få en webbplats som stödjer både förtroende, kontakt och långsiktig synlighet i sökresultat.",
    ],
  ],
  localNeedsTitle: "Vanliga behov jag hjälper till med",
  localNeeds: [
    "Ny hemsida för ett företag i Västervik eller närområdet",
    "Modernisering av en befintlig webbplats som känns gammal eller svår att uppdatera",
    "Bättre mobilupplevelse, snabbare laddning och tydligare innehåll",
    "Starkare lokal synlighet när kunder söker efter tjänster i Västervik",
  ],
  valueTitle: "Det här får du",
  values: [
    [
      "En lösning som går att förvalta",
      "Jag bygger inte bara något som ser bra ut vid lansering, utan något som är enkelt att förstå, uppdatera och vidareutveckla.",
    ],
    [
      "Teknisk kvalitet från start",
      "Prestanda, mobilanpassning, metadata, sidstruktur och teknisk SEO finns med från början i stället för att läggas på i efterhand.",
    ],
    [
      "Lokal och personlig kontakt",
      "Behöver du hjälp med hemsida i Västervik får du en direkt kontakt med utvecklaren som faktiskt bygger lösningen.",
    ],
  ],
  examplesTitle: "Hemsidor jag byggt i Västerviks kommun",
  examples: [
    {
      title: "Bröd & Deli",
      text: "Hemsida för ett bageri och deli på Allén i Västervik, med sortimentet i bilder, öppettider och karta.",
      casePath: "/projects/brod-och-deli",
      href: "https://brodochdeli.se/",
    },
    {
      title: "Ankarsrums Jaktskytteklubb",
      text: "Ny hemsida för skytteklubben vid Tjursbo utanför Ankarsrum, med nyheter, kalender för banbokningar och ett adminläge där styrelsen uppdaterar själv.",
      casePath: "/projects/ankarsrums-jsk",
      href: "https://ankarsrums-jaktskytteklubb.onrender.com/",
    },
  ],
  includedTitle: "Det här ingår",
  included: [
    "Struktur och texter planerade utifrån vad dina kunder söker efter",
    "Mobilanpassad design som laddar snabbt",
    "Teknisk SEO: titlar, beskrivningar, sitemap och strukturerad data",
    "Kontaktformulär eller förfrågningsformulär",
    "Hjälp med domän, hosting och Google Företagsprofil",
    "Adminläge för nyheter, kalender eller öppettider när det behövs",
  ],
  processTitle: "Så jobbar vi",
  process: [
    ["1. Behov & mål", "Vi går igenom målgrupp, innehåll och vad sidan ska leverera, och sätter en tidsplan för utkast och lansering."],
    ["2. Bygg & förfining", "Jag bygger lösningen och vi justerar löpande tills allt sitter."],
    ["3. Lansering & nästa steg", "Vi publicerar, följer upp och planerar vidareutveckling vid behov."],
  ],
  faqTitle: "Vanliga frågor om hemsida i Västervik",
  faq: [
    [
      "Kan du hjälpa både med ny hemsida och vidareutveckling?",
      "Ja. Jag kan både bygga en ny hemsida från grunden och hjälpa dig förbättra en befintlig webbplats i Västervik, till exempel med struktur, innehåll, prestanda eller teknisk SEO.",
    ],
    [
      "Passar det här bara små företag?",
      "Nej. Jag hjälper både mindre verksamheter och team som behöver avlastning i ett webbprojekt, särskilt när det behövs en bred utvecklare som kan tänka både innehåll, teknik och förvaltning.",
    ],
    [
      "Vad får jag för typ av lösning?",
      "Du får en snabb, modern och lättförvaltad webbplats med tydlig struktur, mobilanpassning och en teknisk grund som går att bygga vidare på över tid.",
    ],
    [
      "Kan jag uppdatera hemsidan själv?",
      "Ja, om du vill. Behöver du ofta lägga in nyheter, öppettider eller evenemang bygger jag ett enkelt adminläge, som för Ankarsrums Jaktskytteklubb. Ändras innehållet sällan kan jag sköta uppdateringarna åt dig.",
    ],
    [
      "Vem äger hemsidan och domänen?",
      "Du. Domänen registreras i ditt namn och du får tillgång till koden och kontona, så att du aldrig är låst till mig.",
    ],
    [
      "Hjälper du till med Google?",
      "Ja. Hemsidan byggs med teknisk SEO från start, och jag hjälper dig att sätta upp Google Företagsprofil och Search Console så att uppgifterna stämmer överallt.",
    ],
    [
      "Vad händer efter lanseringen?",
      "Vi följer upp hur sidan används och vad som behöver justeras. Jag finns kvar för ändringar och vidareutveckling när verksamheten förändras.",
    ],
    [
      "Jobbar du bara i Västervik?",
      "Jag bor i Västervik och hjälper gärna verksamheter i hela kommunen, från Gamleby till Ankarsrum. Vi kan träffas på plats eller ta allt digitalt, och jag tar även uppdrag utanför kommunen.",
    ],
  ],
  ctaTitle: "Vill du ha hjälp med hemsida i Västervik?",
  ctaText: "Skicka ett meddelande så tar vi ett första, enkelt samtal om vad du behöver och vilken lösning som passar bäst.",
  ctaPrimary: "Ta kontakt",
  ctaSecondary: "Se alla tjänster",
};

export default function HemsidaVastervik() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hemsida i Västervik",
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "City", name: "Västervik" },
    serviceType: "Webbutveckling och hemsidor",
    description:
      "Hjälp med hemsida i Västervik: ny hemsida, vidareutveckling, teknisk SEO, prestanda och struktur för företag som vill synas bättre online.",
    url: `${SITE_URL}/hemsida-vastervik`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <Seo
        lang="sv"
        pathname="/hemsida-vastervik"
        title="Hemsida Västervik | Webbutveckling och hemsidor | Alexander Åhman"
        description="Behöver du hjälp med hemsida i Västervik? Jag bygger snabba, moderna och sökmotorvänliga hemsidor för företag i Västervik med fokus på kvalitet, prestanda och enkel förvaltning."
        siteUrl={SITE_URL}
        svOnly
      />

      <section className="hero homeHero localWebsiteHero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="homeHeroPanel localWebsiteHeroPanel fadeUp" data-parallax="hero">
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
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.examplesTitle}</h2>

          <div className="grid cols-2" style={{ marginTop: 18 }}>
            {copy.examples.map((example) => (
              <div className="card" key={example.title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{example.title}</h3>
                <p style={{ marginTop: 10 }}>{example.text}</p>
                <div className="row" style={{ marginTop: 14 }}>
                  <Link className="btn btn-outline exploreButton" to={example.casePath}>
                    Läs caset
                  </Link>
                  <a className="btn btn-outline exploreButton" href={example.href} target="_blank" rel="noreferrer">
                    Besök sajten
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.audienceTitle}</h2>

          <div className="grid cols-3" style={{ marginTop: 18 }}>
            {copy.audience.map(([title, text]) => (
              <div className="card" key={title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.localNeedsTitle}</h2>

          <div className="localNeedsList" style={{ marginTop: 18 }}>
            {copy.localNeeds.map((item) => (
              <div className="localNeedsItem" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.valueTitle}</h2>

          <div className="grid cols-3" style={{ marginTop: 18 }}>
            {copy.values.map(([title, text]) => (
              <div className="card" key={title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.includedTitle}</h2>

          <div className="localNeedsList" style={{ marginTop: 18 }}>
            {copy.included.map((item) => (
              <div className="localNeedsItem" key={item}>
                {item}
              </div>
            ))}
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

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{copy.faqTitle}</h2>

          <div className="grid cols-3" style={{ marginTop: 18 }}>
            {copy.faq.map(([question, answer]) => (
              <div className="card" key={question}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{question}</h3>
                <p style={{ marginTop: 10 }}>{answer}</p>
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

          <div className="card localRelatedCard" style={{ marginTop: 18 }}>
            <p>Relaterade sidor för mer information:</p>
            <div className="row exploreButtonRow" style={{ marginTop: 12 }}>
              <Link className="btn btn-outline exploreButton" to="/about">
                Läs om utvecklaren
              </Link>
              <Link className="btn btn-outline exploreButton exploreButtonLocal" to="/contact">
                Starta hemsideprojektet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
