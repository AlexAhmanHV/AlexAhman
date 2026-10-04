import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";
import { SITE_URL } from "../routes";

const PATH = "/guide/hemsida-for-lokala-foretag";
const PUBLISHED = "2026-10-04";

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
    paras: [
      "Många lokala företag klarar sig långt med en Google Företagsprofil och ett Instagramkonto. Profilen visar dig på kartan med öppettider och recensioner, och sociala medier visar vad som händer just nu.",
      "En egen hemsida behövs när kunderna vill veta mer än så innan de hör av sig: vad du erbjuder, hur det går till och om du verkar seriös. Den är också det enda du helt äger. Ett socialt konto kan få nya regler, tappa räckvidd eller stängas, men hemsidan och domänen ligger kvar.",
      "Tumregeln: säljer du något som kunden funderar på innan köpet, som ett hantverksjobb, en tårta till ett kalas eller ett medlemskap, tjänar du på en hemsida. Behöver kunden bara veta om du har öppet räcker ofta Google-profilen.",
    ],
  },
  {
    id: "det-kunderna-letar-efter",
    title: "Det kunderna letar efter först",
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
    paras: [
      "En hemsida som är långsam eller krånglig i mobilen tappar besökare innan de hunnit läsa något. Google tar också hänsyn till hur sidan fungerar i mobilen när den rangordnar sökresultaten.",
      "Det som oftast gör sidor långsamma är för stora bilder, tunga teman och tillägg som laddar mer än sidan behöver. En bra hemsida för ett lokalt företag laddar på någon sekund även på mobilnät, och knappar och text går att använda med tummen utan att zooma.",
    ],
  },
  {
    id: "synas-i-vastervik",
    title: "Att synas när någon söker i Västervik",
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
    paras: ["Bortsett från själva bygget har en hemsida några löpande kostnader som är bra att känna till:"],
    points: [
      ["Domän", "Din adress, till exempel dittforetag.se. En årlig avgift till den som registrerar domänen."],
      ["Hosting", "Där sidan ligger. För en vanlig företagssida är det ofta en liten månadskostnad, och ibland ingen alls."],
      ["E-post på egen domän", "Om du vill ha adresser som namn@dittforetag.se."],
      ["Uppdateringar", "Antingen gör du dem själv i ett enkelt adminläge, eller så tar du hjälp när något ska ändras."],
    ],
    after:
      "Se till att domänen registreras i ditt eget namn och att du har tillgång till kontona. Då kan du alltid byta leverantör utan att förlora adressen.",
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
            <div className="kicker">{copy.kicker}</div>
            <h1 className="h2 guideTitle">{copy.title}</h1>
            <p className="guideByline">{copy.byline}</p>
            <p className="lede">{copy.lede}</p>

            <nav className="guideToc" aria-label="Innehåll">
              <p className="kicker">Innehåll</p>
              <ol>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
                <li>
                  <a href="#checklista">Checklista</a>
                </li>
                <li>
                  <a href="#exempel">Exempel från Västervik</a>
                </li>
              </ol>
            </nav>

            {sections.map((s) => (
              <section className="guideSection" id={s.id} key={s.id}>
                <h2>{s.title}</h2>
                {s.paras.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list ? (
                  <ul className="guideList">
                    {s.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                {s.points ? (
                  <dl className="guidePoints">
                    {s.points.map(([term, text]) => (
                      <div key={term}>
                        <dt>{term}</dt>
                        <dd>{text}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {s.after ? <p>{s.after}</p> : null}
              </section>
            ))}

            <section className="guideSection" id="checklista">
              <h2>Checklista</h2>
              <p>Gå igenom din nuvarande hemsida, eller planen för en ny, och bocka av:</p>
              <div className="localNeedsList" style={{ marginTop: 14 }}>
                {checklist.map((item) => (
                  <div className="localNeedsItem" key={item}>
                    {item}
                  </div>
                ))}
              </div>
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
