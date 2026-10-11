import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";
import { SITE_URL } from "../routes";
import { HOSTING, PACKAGES, formatKr } from "../packages";

const PATH = "/priser";

const faq = [
  [
    "Vad betyder ”från”?",
    "Priset gäller paketet så som det beskrivs här. Behöver ni något mer, till exempel fler sidor eller en engelsk version, får ni ett fast pris i offerten innan jag börjar.",
  ],
  [
    "Varför tillkommer ingen moms?",
    "Jag driver en momsbefriad enskild firma, så priset är slutpriset. Det gäller även för föreningar och företag som inte kan dra av moms.",
  ],
  [
    "Vem äger hemsidan och domänen?",
    "Ni. Domänen registreras i ert namn och ni får tillgång till koden och kontona, så att ni aldrig är låsta till mig.",
  ],
  [
    "Måste vi ha driften hos dig?",
    "Nej. Driftavtalet är frivilligt, men då slipper ni tänka på hosting, säkerhetskopior och uppdateringar.",
  ],
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hemsidor för företag och föreningar i Västervik",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: { "@type": "City", name: "Västervik" },
  serviceType: "Webbutveckling och hemsidor",
  url: `${SITE_URL}${PATH}`,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hemsidepaket",
    itemListElement: PACKAGES.map((p) => ({
      "@type": "Offer",
      name: p.name,
      description: `${p.fit} ${p.includes.join(", ")}.`,
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: p.price,
        priceCurrency: "SEK",
        valueAddedTaxIncluded: true,
      },
    })),
  },
};

export default function Priser() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceJsonLd)}</script>
      </Helmet>

      <Seo
        lang="sv"
        pathname={PATH}
        title="Paket och priser för hemsida i Västervik | Alexander Åhman"
        description={`Hemsida för företag och föreningar i Västervik från ${formatKr(PACKAGES[0].price)}. Tre paket med fast pris, ingen moms tillkommer. Drift och underhåll från ${formatKr(HOSTING[0].price)}/mån.`}
        siteUrl={SITE_URL}
        svOnly
      />

      <section className="section fadeUp pricePage" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">Hemsidor</div>
          <h1 className="h2 pricePageTitle">Paket och priser</h1>
          <p className="lede pricePageLede">
            Tre paket för företag och föreningar i Västervik med omnejd. Fast pris, och ingen moms tillkommer.
          </p>

          <div className="priceGrid">
            {PACKAGES.map((p) => (
              <article className={`priceCard${p.featured ? " isFeatured" : ""}`} key={p.id}>
                {p.featured ? <span className="priceBadge">Vanligast</span> : null}
                <h2 className="priceName">{p.name}</h2>
                <p className="priceFit">{p.fit}</p>
                <p className="priceAmount">
                  <span className="priceFrom">från</span> {formatKr(p.price)}
                </p>
                <ul className="priceIncludes">
                  {p.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="priceDelivery">Leverans {p.delivery}</p>
                <div className="priceActions">
                  <Link className="btn priceCta" to="/contact">
                    Välj {p.name}
                  </Link>
                  <a className="textLink priceExample" href={p.demo.href}>
                    {p.demo.label}
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="priceNote">Exemplen är påhittade verksamheter med bilder från Unsplash. Riktiga kunder får sina egna bilder.</p>

          <section className="priceHosting" aria-labelledby="drift">
            <h2 id="drift" className="priceSectionTitle">
              Drift och underhåll
            </h2>
            <p className="priceHostingLede">
              Vill ni slippa tänka på tekniken efter lanseringen? Välj ett driftavtal per månad.
            </p>
            <div className="priceHostingGrid">
              {HOSTING.map((h) => (
                <div className="priceHostingItem" key={h.name}>
                  <p className="priceHostingName">
                    {h.name} <span>från {formatKr(h.price)}/mån</span>
                  </p>
                  <p>{h.includes}</p>
                </div>
              ))}
            </div>
            <p className="priceNote">
              Sidor med inloggning kräver server och databas, så där blir driften lite dyrare. Domänen betalar ni
              själva, oftast 100–250 kr per år.
            </p>
          </section>

          <div className="homeFinal priceReview">
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">Osäker på vad ni behöver?</h2>
            <p className="lede">
              Jag tittar gratis på er nuvarande hemsida i 15 minuter och säger vad jag skulle förbättra, oavsett om ni
              anlitar mig eller inte.
            </p>
            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to="/contact">
                Boka en gratis genomgång
              </Link>
              <Link className="btn btn-home-outline" to="/hemsida-vastervik">
                Så jobbar jag
              </Link>
            </div>
          </div>

          <section className="priceFaq" aria-labelledby="fragor">
            <h2 id="fragor" className="priceSectionTitle">
              Vanliga frågor om priserna
            </h2>
            <dl className="priceFaqList">
              {faq.map(([q, a]) => (
                <div key={q}>
                  <dt>{q}</dt>
                  <dd>{a}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>
    </>
  );
}
