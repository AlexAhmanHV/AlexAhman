import { Link } from "react-router-dom";
import Seo from "../Seo";
import CaseCards from "../components/CaseCards";
import { PROJECT_CARDS } from "../projectCards";
import { PACKAGES } from "../packages";
import { HEMSIDOR_CASES, hemsidorCasePath, pagePath } from "../paths";

import { SITE_URL } from "../routes";

const items = PROJECT_CARDS.sv.filter((item) => HEMSIDOR_CASES.includes(item.slug));

export default function HemsidorExempel() {
  return (
    <>
      <Seo
        lang="sv"
        pathname={pagePath("hemsidorExempel")}
        title="Exempel på hemsidor | Alexander Åhman"
        description="Hemsidor jag byggt för företag och föreningar i Västerviks kommun, och exempelsajter för varje paket: hantverkare, café, förening med adminläge och webbutik."
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp pageEditorial" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">Exempel</div>
          <h1 className="h2 pageTitle" style={{ marginTop: 10 }}>
            Hemsidor jag byggt i Västerviks kommun
          </h1>
          <p className="lede">
            Riktiga hemsidor för lokala kunder, och exempelsajter som visar vad du får i varje paket.
          </p>

          <CaseCards lang="sv" items={items} caseHref={hemsidorCasePath} />

          <h2 className="h2 homeSectionTitle homeSectionTitleSingle" style={{ marginTop: 36 }}>
            Exempelsajter för paketen
          </h2>
          <div className="grid cols-2" style={{ marginTop: 18 }}>
            {PACKAGES.map((p) => (
              <div className="card" key={p.id}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{p.name}</h3>
                <p style={{ marginTop: 10 }}>{p.fit}</p>
                <a className="textLink" href={p.demo.href} style={{ marginTop: 14 }}>
                  {p.demo.label}
                </a>
              </div>
            ))}
            <div className="card">
              <h3 style={{ fontSize: 18, fontWeight: 700 }}>Webbutik</h3>
              <p style={{ marginTop: 10 }}>För butiken som vill sälja på nätet: varianter, lager, kassa och admin.</p>
              <a className="textLink" href="/exempel/golfbutik/" style={{ marginTop: 14 }}>
                Se exempel: Tidvatten Golf
              </a>
            </div>
          </div>
          <p className="priceNote">Exemplen är påhittade verksamheter med bilder från Unsplash. Riktiga kunder får sina egna bilder.</p>

          <div className="homeFinal" style={{ marginTop: 28 }}>
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">Vill du ha en hemsida som passar din verksamhet?</h2>
            <p className="lede">Berätta vad du gör och vad kunderna behöver hitta. Jag återkommer med ett förslag på upplägg.</p>
            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pagePath("hemsidorKontakt")}>
                Ta kontakt
              </Link>
              <Link className="btn btn-home-outline" to={pagePath("hemsidorPriser")}>
                Se paket och priser
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
