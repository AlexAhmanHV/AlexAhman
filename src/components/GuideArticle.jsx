import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";
import { SITE_URL } from "../routes";
import { pagePath } from "../paths";

// Enkel artikelmall för guiderna under /hemsidor/guide/. Samma klasser som
// huvudguiden, men utan bild och checklista.
const num = (i) => String(i + 1).padStart(2, "0");

export default function GuideArticle({ path, published, modified, copy, sections, related, cta }) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: copy.title,
    description: copy.seoDescription,
    inLanguage: "sv",
    datePublished: published,
    dateModified: modified ?? published,
    mainEntityOfPage: `${SITE_URL}${path}`,
    author: { "@type": "Person", name: "Alexander Åhman", url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#business` },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <Seo
        lang="sv"
        pathname={path}
        title={copy.seoTitle}
        description={copy.seoDescription}
        siteUrl={SITE_URL}
        svOnly
        type="article"
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
            </header>

            {sections.map((s, i) => (
              <section className="guideSection" id={s.id} key={s.id}>
                <div className="guideSectionHead">
                  <span className="guideNum" aria-hidden="true">
                    {num(i)}
                  </span>
                  <h2>{s.title}</h2>
                </div>
                <div className="guideSectionIntro">
                  <div className="guideSectionText">
                    {s.paras.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
                {s.points ? (
                  <dl className={`guideLines guideLinesWide guideLinesCols${Math.min(s.points.length, 3)}`}>
                    {s.points.map(([term, text]) => (
                      <div key={term}>
                        <dt>{term}</dt>
                        <dd>{text}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {s.after ? (
                  <p className="guideAfter">
                    {s.after}
                    {s.afterLink ? (
                      <>
                        {" "}
                        <a className="textLink" href={s.afterLink.href}>
                          {s.afterLink.label}
                        </a>
                      </>
                    ) : null}
                  </p>
                ) : null}
              </section>
            ))}

            {related?.length ? (
              <section className="guideSection">
                <h2>Läs också</h2>
                <ul className="guideRelated">
                  {related.map((r) => (
                    <li key={r.to}>
                      <Link className="textLink" to={r.to}>
                        {r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="homeFinal" style={{ marginTop: 36 }}>
              <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{cta.title}</h2>
              <p className="lede">{cta.text}</p>
              <div className="row" style={{ marginTop: 14 }}>
                <Link className="btn" to={pagePath("hemsidorKontakt")}>
                  Ta kontakt
                </Link>
                <Link className="btn btn-home-outline" to={cta.secondaryTo}>
                  {cta.secondaryLabel}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
