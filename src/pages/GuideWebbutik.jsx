import GuideArticle from "../components/GuideArticle";
import { pagePath } from "../paths";

const copy = {
  kicker: "Guide",
  title: "Webbutik för en lokal butik: vad behövs?",
  byline: "Alexander Åhman, webbutvecklare i Västervik · Oktober 2026",
  lede:
    "Att sälja på nätet kan ge en lokal butik fler kunder, men en webbutik är mer än en hemsida med priser. Här går jag igenom vad som behövs, vad som kostar och vad du som butiksägare behöver sköta själv.",
  seoTitle: "Webbutik för en lokal butik: vad behövs? | Alexander Åhman",
  seoDescription:
    "Guide för lokala butiker som funderar på att sälja på nätet: sortiment, lager, betalning, frakt och upphämtning, köpvillkor, plattform eller egenbyggt och vad det kostar.",
};

const sections = [
  {
    id: "lonar-det-sig",
    title: "När lönar sig en webbutik?",
    paras: [
      "En webbutik passar när kunderna redan frågar om de kan beställa, när du har varor som går att skicka eller hämta, och när du har tid att packa och svara på frågor. Den passar sämre om sortimentet byts hela tiden eller om varorna är svåra att visa på bild.",
      "Ett bra första steg för många lokala butiker är \"beställ online, hämta i butiken\". Då slipper du frakt och returer i början, och kunden får ändå handla när det passar.",
    ],
  },
  {
    id: "vad-som-behovs",
    title: "Det här behöver en webbutik",
    paras: ["Utöver det en vanlig hemsida har behöver en webbutik:"],
    points: [
      ["Sortiment med varianter", "Produkter med bilder, beskrivning och pris, och varianter som storlek och färg."],
      ["Lager", "Lagersaldo per variant, så att du inte säljer något som är slut."],
      ["Varukorg och kassa", "Tydliga steg, rabattkoder om du vill, och en bekräftelse till kunden."],
      ["Betalning", "Kort, Swish och faktura via en betalleverantör. Pengarna hanteras av leverantören, inte av sidan."],
      ["Frakt och upphämtning", "Fraktsätt och priser, eller hämta i butiken."],
      ["Admin", "En plats där du ser ordrar, ändrar priser och fyller på lager."],
    ],
  },
  {
    id: "regler",
    title: "Regler du behöver känna till",
    paras: [
      "När du säljer till privatpersoner på nätet har kunden normalt 14 dagars ångerrätt enligt distansavtalslagen. Det ska framgå av dina köpvillkor, tillsammans med hur retur och reklamation går till, vad frakten kostar och vilka betalsätt som finns.",
      "Du behöver också en integritetspolicy som beskriver hur kunduppgifter hanteras. Prata med din redovisningskonsult om moms om du inte redan är momsregistrerad.",
    ],
  },
  {
    id: "plattform-eller-egen",
    title: "Färdig plattform eller egenbyggd?",
    paras: [
      "Färdiga plattformar som Shopify kommer igång snabbt och sköter mycket åt dig, mot en månadsavgift och avgifter per köp. De passar bra om sortimentet är vanligt och du vill hålla det enkelt.",
      "En egenbyggd butik passar när du vill ha full kontroll över utseende och flöde, slippa löpande plattformsavgifter eller koppla ihop butiken med system du redan har. Den kräver mer arbete i början.",
    ],
  },
  {
    id: "kostnad",
    title: "Vad kostar det?",
    paras: [
      "En webbutik kostar mer än en vanlig hemsida, eftersom den har fler delar och behöver testas noga. Priset beror främst på antal produkter och varianter, betalning och frakt, och om butiken ska kopplas till något kassasystem.",
      "Räkna också med löpande kostnader: drift, avgifter till betalleverantören per köp och tid för att sköta ordrar och lager. Jag sätter priset i en offert efter vad du behöver.",
    ],
    after: "Vill du se hur det kan se ut? Tidvatten Golf är en exempelbutik med varukorg, kassa och admin som du kan testa fritt.",
    afterLink: { href: "/exempel/golfbutik/", label: "Öppna Tidvatten Golf" },
  },
];

export default function GuideWebbutik() {
  return (
    <GuideArticle
      path={pagePath("hemsidorGuideWebbutik")}
      published="2026-10-19"
      copy={copy}
      sections={sections}
      related={[
        { to: pagePath("hemsidorGuideKostnad"), label: "Vad kostar en hemsida för ett litet företag?" },
        { to: pagePath("hemsidorGuide"), label: "Hemsida för lokala företag: vad den ska innehålla" },
      ]}
      cta={{
        title: "Funderar du på att sälja på nätet?",
        text: "Berätta om butiken och sortimentet, så går vi igenom vad som behövs och vad det skulle kosta.",
        secondaryTo: pagePath("hemsidorPriser"),
        secondaryLabel: "Se paket och priser",
      }}
    />
  );
}
