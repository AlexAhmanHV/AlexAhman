import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";
import { SITE_URL } from "../routes";

const PATH = "/guide/hemsida-for-lokala-foretag";
const PUBLISHED = "2026-10-04";
const CHECKLIST_KEY = "guide-hemsida-checklista";

const copy = {
  kicker: "Guide",
  title: "Hemsida för lokala företag: vad den ska innehålla",
  lede:
    "En praktisk genomgång för företag och föreningar i Västervik med omnejd: vad kunderna letar efter, vad som gör att du syns på Google och vad det kostar att ha en hemsida. Längst ner finns en checklista att bocka av.",
  byline: "Alexander Åhman, webbutvecklare i Västervik · Oktober 2026",
  seoTitle: "Hemsida för lokala företag: vad den ska innehålla | Alexander Åhman",
  seoDescription:
    "Guide för företag och föreningar i Västervik: vad en hemsida ska innehålla, hur du syns på Google lokalt, mobil och laddningstid, löpande kostnader och en checklista.",
};

const sections = [
  {
    id: "behover-du-en-hemsida",
    title: "Behöver ditt företag en hemsida?",
    short: "Säljer du något som kunden funderar på före köpet? Då tjänar du på en egen hemsida.",
    rule: {
      label: "Tumregel",
      text: "Säljer du något som kunden funderar på innan köpet, som ett hantverksjobb, en tårta till ett kalas eller ett medlemskap, tjänar du på en hemsida. Behöver kunden bara veta om du har öppet räcker ofta Google-profilen.",
    },
    paras: [
      "Många lokala företag klarar sig långt med en Google Företagsprofil och ett Instagramkonto. Profilen visar dig på kartan med öppettider och recensioner, och sociala medier visar vad som händer just nu.",
      "En egen hemsida behövs när kunderna vill veta mer än så innan de hör av sig: vad du erbjuder, hur det går till och om du verkar seriös. Den är också det enda du helt äger. Ett socialt konto kan få nya regler, tappa räckvidd eller stängas, men hemsidan och domänen ligger kvar.",
    ],
  },
  {
    id: "det-kunderna-letar-efter",
    title: "Det kunderna letar efter först",
    short: "Vad du gör, öppettider, adress, kontakt och erbjudande ska synas direkt i mobilen.",
    paras: [
      "De flesta besök är korta och sker i mobilen. Besökaren vill få svar på några få frågor och sedan gå vidare. Lägg det här högst upp eller ett klick bort:",
    ],
    list: [
      "Vad du gör, i en mening, med ortsnamnet",
      "Öppettider, och avvikande tider vid helger",
      "Adress och karta, eller vilket område du jobbar i",
      "Telefon och e-post som går att klicka på",
      "Vad du erbjuder: sortiment, meny eller tjänster, gärna med bilder",
      "Ett tydligt nästa steg: ring, boka, beställ eller be om offert",
    ],
    after: "Allt annat, som företagets historia, är bra att ha men kommer i andra hand.",
  },
  {
    id: "mobil-och-laddningstid",
    title: "Mobil och laddningstid",
    short: "Sidan ska ladda på någon sekund i mobilen. För stora bilder är den vanligaste bromsen.",
    rule: {
      label: "Målet",
      text: "En bra hemsida för ett lokalt företag laddar på någon sekund även på mobilnät, och knappar och text går att använda med tummen utan att zooma.",
    },
    paras: [
      "En hemsida som är långsam eller krånglig i mobilen tappar besökare innan de hunnit läsa något. Google tar också hänsyn till hur sidan fungerar i mobilen när den rangordnar sökresultaten.",
      "Det som oftast gör sidor långsamma är för stora bilder, tunga teman och tillägg som laddar mer än sidan behöver.",
    ],
  },
  {
    id: "synas-i-vastervik",
    title: "Att synas när någon söker i Västervik",
    short: "Google Företagsprofil, samma uppgifter överallt och recensioner hjälper mest.",
    paras: [
      "När någon söker efter ett bageri, en elektriker eller en förening i Västervik visar Google ofta först en karta med lokala företag och sedan vanliga sökresultat. Tre saker hjälper mest för att synas där:",
    ],
    points: [
      ["Google Företagsprofil", "Den är gratis, och det är den som syns på kartan. Välj rätt kategori, fyll i öppettider och lägg upp egna bilder."],
      ["Samma uppgifter överallt", "Namn, adress och telefon ska stå exakt likadant på hemsidan, i Google-profilen och i kataloger som Hitta och Eniro."],
      ["Recensioner", "Be nöjda kunder lämna ett omdöme, och svara på dem, även på de kritiska."],
    ],
    after:
      "Hemsidan bidrar genom att tydligt säga vad du gör och var: en egen titel per sida, ortsnamnet i texten och strukturerad data som talar om för Google att det är ett företag i Västervik.",
  },
  {
    id: "lopande-kostnader",
    title: "Vad en hemsida kostar löpande",
    short: "Domän, hosting och e-post är små löpande kostnader. Domänen ska stå i ditt namn.",
    rule: {
      label: "Viktigast",
      text: "Se till att domänen registreras i ditt eget namn och att du har tillgång till kontona. Då kan du alltid byta leverantör utan att förlora adressen.",
    },
    paras: [
      "Bortsett från själva bygget har en hemsida några löpande kostnader. De flesta är små men lätta att glömma, eftersom de dras automatiskt en gång om året. Det som kostar mest över tid är oftast ändringarna, inte tekniken. Det här är posterna:",
    ],
    points: [
      ["Domän", "Din adress, till exempel dittforetag.se. En årlig avgift till den som registrerar domänen."],
      ["Hosting", "Där sidan ligger. För en vanlig företagssida är det ofta en liten månadskostnad, och ibland ingen alls."],
      ["E-post på egen domän", "Om du vill ha adresser som namn@dittforetag.se."],
      ["Uppdateringar", "Antingen gör du dem själv i ett enkelt adminläge, eller så tar du hjälp när något ska ändras."],
    ],
  },
];

const checklist = [
  "Det framgår direkt vad du gör och var",
  "Öppettider, adress och kontaktuppgifter syns utan att leta",
  "Telefon och e-post går att klicka på i mobilen",
  "Sidan laddar snabbt och fungerar i mobilen",
  "Det finns bilder från din egen verksamhet, inte bara bildbanker",
  "Varje sida har ett tydligt nästa steg",
  "Namn, adress och telefon stämmer med Google-profilen",
  "Varje sida har en egen titel och beskrivning",
  "Domänen står i ditt namn",
  "Någon ansvarar för att öppettider och erbjudanden hålls aktuella",
];

const examples = [
  {
    title: "Bröd & Deli",
    text: "Bageri och deli på Allén i Västervik. Sortimentet visas i bilder, och öppettider, adress och karta ligger samlade på kontaktsidan.",
    to: "/projects/brod-och-deli",
  },
  {
    title: "Ankarsrums Jaktskytteklubb",
    text: "Föreningssida där styrelsen själv lägger in nyheter och banbokningar i ett adminläge, så att sidan hålls aktuell utan att någon behöver koda.",
    to: "/projects/ankarsrums-jsk",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: copy.title,
  description: copy.seoDescription,
  inLanguage: "sv",
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Person", name: "Alexander Åhman", url: SITE_URL },
  publisher: { "@id": `${SITE_URL}/#business` },
};

const num = (i) => String(i + 1).padStart(2, "0");

function Rule({ rule }) {
  return (
    <p className="guideRule">
      <span className="guideRuleLabel">{rule.label}</span>
      {rule.text}
    </p>
  );
}

function loadChecklist() {
  try {
    const saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY));
    if (Array.isArray(saved) && saved.length === checklist.length) return saved;
  } catch {
    // No storage (prerender, private mode) or corrupt data: start empty.
  }
  return checklist.map(() => false);
}

// The checklist remembers what the visitor ticked, in their own browser only.
function Checklist() {
  const [done, setDone] = useState(loadChecklist);

  const update = (next) => {
    setDone(next);
    try {
      localStorage.setItem(CHECKLIST_KEY, JSON.stringify(next));
    } catch {
      // Ticks still work for this visit.
    }
  };

  const count = done.filter(Boolean).length;

  return (
    <>
      <div className="guideProgress" aria-live="polite">
        <span>
          <strong>{count}</strong> av {checklist.length} klara
        </span>
        {count > 0 ? (
          <button type="button" className="guideReset" onClick={() => update(checklist.map(() => false))}>
            Börja om
          </button>
        ) : null}
      </div>
      <div className="guideProgressBar" aria-hidden="true">
        <span style={{ width: `${(count / checklist.length) * 100}%` }} />
      </div>
      <ul className="guideChecklist">
        {checklist.map((item, i) => (
          <li key={item}>
            <label className={done[i] ? "isDone" : undefined}>
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => update(done.map((d, j) => (j === i ? !d : d)))}
              />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function GuideHemsida() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <Seo
        lang="sv"
        pathname={PATH}
        title={copy.seoTitle}
        description={copy.seoDescription}
        siteUrl={SITE_URL}
        svOnly
      />

      <article className="section fadeUp guideArticle" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="guideColumn">
            <header className="guideHero">
              <div className="guideHeroText">
                <div className="kicker">{copy.kicker}</div>
                <h1 className="h2 guideTitle">{copy.title}</h1>
                <p className="guideByline">{copy.byline}</p>
                <p className="lede">{copy.lede}</p>
              </div>
              <img
                className="guideFigure"
                src="/guide/butik-och-hemsida.webp"
                width="1376"
                height="768"
                alt="Tecknad butik med randig markis bredvid en mobil som visar samma butik som hemsida, med karta och öppettider."
              />
            </header>

            <nav className="guideSummary" aria-label="Kortversionen">
              <p className="kicker">Kortversionen</p>
              <ol>
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>
                      <span className="guideSummaryNum">{num(i)}</span>
                      <span>{s.short}</span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="guideSummaryLinks">
                <a className="btn" href="#checklista">
                  Hoppa till checklistan ↓
                </a>
                <a className="textLink" href="#exempel">
                  Exempel från Västervik
                </a>
              </div>
            </nav>

            {sections.map((s, i) => (
              <section className="guideSection" id={s.id} key={s.id}>
                <div className="guideSectionHead">
                  <span className="guideNum" aria-hidden="true">
                    {num(i)}
                  </span>
                  <h2>{s.title}</h2>
                </div>
                <div className={`guideSectionIntro${s.rule ? " hasRule" : ""}`}>
                  {s.rule ? <Rule rule={s.rule} /> : null}
                  <div className="guideSectionText">
                    {s.paras.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                {s.list ? (
                  <ol className="guideLines guideLinesWide">
                    {s.list.map((item, j) => (
                      <li key={item}>
                        <span className="guideLinesNum">{j + 1}</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {s.points ? (
                  <dl className={`guideLines guideLinesWide guideLinesCols${s.points.length}`}>
                    {s.points.map(([term, text]) => (
                      <div key={term}>
                        <dt>{term}</dt>
                        <dd>{text}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {s.after ? <p className="guideAfter">{s.after}</p> : null}
              </section>
            ))}

            <section className="guideSection guideChecklistSection" id="checklista">
              <h2>Checklista</h2>
              <p>Gå igenom din nuvarande hemsida, eller planen för en ny, och bocka av:</p>
              <Checklist />
            </section>

            <section className="guideSection" id="exempel">
              <h2>Exempel från Västervik</h2>
              <div className="grid cols-2" style={{ marginTop: 14 }}>
                {examples.map((ex) => (
                  <div className="card" key={ex.title}>
                    <h3 style={{ fontSize: 18, fontWeight: 700 }}>{ex.title}</h3>
                    <p style={{ marginTop: 10 }}>{ex.text}</p>
                    <Link className="textLink" to={ex.to} style={{ marginTop: 14 }}>
                      Läs caset
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <div className="homeFinal" style={{ marginTop: 36 }}>
              <h2 className="h2 homeSectionTitle homeSectionTitleSingle">Vill du ha hjälp att gå igenom din hemsida?</h2>
              <p className="lede">
                Skicka adressen till din nuvarande sida, eller berätta vad du behöver. Jag går igenom den mot
                checklistan och återkommer med konkreta förbättringar.
              </p>
              <div className="row" style={{ marginTop: 14 }}>
                <Link className="btn" to="/contact">
                  Ta kontakt
                </Link>
                <Link className="btn btn-home-outline" to="/hemsida-vastervik">
                  Hemsida i Västervik
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
