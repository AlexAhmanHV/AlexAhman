import GuideArticle from "../components/GuideArticle";
import { pagePath } from "../paths";
import { HOSTING, PACKAGES, formatKr } from "../packages";

const [start, foretag, admin] = PACKAGES;
const [drift, omsorg] = HOSTING;

const copy = {
  kicker: "Guide",
  title: "Vad kostar en hemsida för ett litet företag?",
  byline: "Alexander Åhman, webbutvecklare i Västervik · Oktober 2026",
  lede:
    "Priset på en hemsida varierar mycket, och det är svårt att jämföra offerter. Här går jag igenom vad som styr priset, vilka löpande kostnader som tillkommer och vad du bör fråga efter innan du bestämmer dig.",
  seoTitle: "Vad kostar en hemsida för ett litet företag? | Alexander Åhman",
  seoDescription: `Vad en hemsida för ett litet företag kostar, vad som styr priset och vilka löpande kostnader som tillkommer. Fasta paket från ${formatKr(start.price)} i Västervik.`,
};

const sections = [
  {
    id: "kortsvaret",
    title: "Kortsvaret",
    paras: [
      "En enkel hemsida för ett litet företag kostar oftast några tusenlappar upp till ett par tiotusen kronor om du anlitar en frilansare, och mer om du går via en byrå. Det som avgör är hur mycket innehåll och hur många funktioner sidan ska ha, inte hur den ser ut.",
      `Mina egna paket är ett exempel på hur det kan se ut: ${start.name} från ${formatKr(start.price)}, ${foretag.name} från ${formatKr(foretag.price)} och ${admin.name} från ${formatKr(admin.price)}. Priset är fast och ingen moms tillkommer.`,
    ],
  },
  {
    id: "vad-styr-priset",
    title: "Vad som styr priset",
    paras: ["Fyra saker påverkar priset mest:"],
    points: [
      ["Antal sidor", "En sida med det viktigaste går snabbt. Varje egen sida för tjänster, meny eller sortiment tar tid att skriva och bygga."],
      ["Innehåll och bilder", "Har du färdiga texter och bra bilder går det fortare. Ska jag skriva texterna eller ta fram bilderna blir det mer arbete."],
      ["Funktioner", "Bokning, formulär, inloggning för att uppdatera själv, flera språk eller en webbutik kräver mer utveckling och ofta en server."],
      ["Integrationer", "Kopplingar till andra system, som bokningstjänster, betalning eller kassasystem, kräver extra arbete och tester."],
    ],
  },
  {
    id: "lopande-kostnader",
    title: "Löpande kostnader",
    paras: [
      "Utöver själva bygget finns några kostnader som återkommer. Fråga alltid efter dem innan du bestämmer dig, så att du inte blir överraskad efter lanseringen.",
    ],
    points: [
      ["Domän", "Adressen, till exempel dittforetag.se, kostar oftast 100–250 kr per år och registreras i ditt namn."],
      ["Drift", `Hosting, säkerhetskopior och SSL. Hos mig ${drift.name.toLowerCase()} från ${formatKr(drift.price)}/mån, eller ${omsorg.name.toLowerCase()} med småändringar från ${formatKr(omsorg.price)}/mån.`],
      ["Ändringar", "Nya texter, priser eller sidor. Ingår ibland i ett driftavtal, annars per timme eller per ändring."],
    ],
  },
  {
    id: "gor-det-sjalv",
    title: "Göra själv eller anlita någon?",
    paras: [
      "Med verktyg som Wix eller Squarespace kan du bygga en sida själv för en månadsavgift. Det fungerar bra om du har tid, gillar att pyssla med det och klarar dig med mallarnas upplägg.",
      "Att anlita någon lönar sig när du hellre lägger tiden på verksamheten, vill synas bättre på Google lokalt eller behöver något som mallarna inte klarar. Fråga vem som äger sidan och domänen efteråt. Du ska aldrig vara låst till den som byggde den.",
    ],
  },
  {
    id: "jamfor-offerter",
    title: "Så jämför du offerter",
    paras: ["Två offerter med samma slutsumma kan innehålla helt olika saker. Kontrollera att det står:"],
    points: [
      ["Vad som ingår", "Antal sidor, antal ändringsrundor och om texter och bilder ingår."],
      ["Fast pris eller timpris", "Fast pris ger trygghet. Med timpris bör det finnas ett tak."],
      ["Moms", "Står priset med eller utan moms? Det skiljer 25 procent."],
      ["Ägande", "Att domän, kod och konton är dina."],
      ["Löpande avgifter", "Vad drift och ändringar kostar per månad eller år."],
    ],
  },
];

export default function GuideKostnad() {
  return (
    <GuideArticle
      path={pagePath("hemsidorGuideKostnad")}
      published="2026-10-19"
      copy={copy}
      sections={sections}
      related={[
        { to: pagePath("hemsidorGuide"), label: "Hemsida för lokala företag: vad den ska innehålla" },
        { to: pagePath("hemsidorGuideWebbutik"), label: "Webbutik för en lokal butik: vad behövs?" },
      ]}
      cta={{
        title: "Vill du ha ett fast pris för din hemsida?",
        text: "Berätta vad verksamheten gör och vad sidan ska klara, så får du ett förslag och ett fast pris.",
        secondaryTo: pagePath("hemsidorPriser"),
        secondaryLabel: "Se paket och priser",
      }}
    />
  );
}
