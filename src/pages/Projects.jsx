import { Link } from "react-router-dom";
import Seo from "../Seo";
import CaseCards from "../components/CaseCards";
import { PROJECT_CARDS } from "../projectCards";
import { DEV_CASES, devCasePath, pagePath } from "../paths";

import { SITE_URL } from "../routes";

const copy = {
  sv: {
    kicker: "Case archive",
    title: "Projekt som visar systemtänk i praktiken",
    lede:
      "Sju leveranser där värdet sitter i mer än ytan: bokningslogik, datapipelines, innehållsflöden, drift och gränssnitt som går att använda.",
    ctaTitle: "Vill du se hur ditt projekt skulle brytas ner?",
    ctaText:
      "Skicka nuläge, mål och det som är oklart. Jag återkommer med ett konkret första steg och vad som bör byggas först.",
    ctaPrimary: "Kontakta mig",
    ctaSecondary: "Se tjänster",
  },
  en: {
    kicker: "Case archive",
    title: "Projects that show systems thinking in practice",
    lede:
      "Seven deliveries where the value is more than the surface: booking logic, data pipelines, content flows, deployment, and interfaces people can use.",
    ctaTitle: "Want to see how your project would be broken down?",
    ctaText:
      "Send the current state, goal, and what is unclear. I will respond with a concrete first step and what should be built first.",
    ctaPrimary: "Contact me",
    ctaSecondary: "View services",
  },
};

export default function Projects({ lang }) {
  const t = copy[lang] || copy.sv;
  const pathname = pagePath("devProjekt", lang);
  const items = (PROJECT_CARDS[lang] || PROJECT_CARDS.sv).filter((item) => DEV_CASES.includes(item.slug));

  const seoTitle =
    lang === "en"
      ? "Projects | Case Studies | Alexander Ahman"
      : "Projekt | Case | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Selected full-stack project work covering booking systems, data pipelines, React interfaces, Laravel, PostgreSQL, Python, and deployment."
      : "Utvalda fullstackprojekt inom bokningssystem, datapipelines, React-gränssnitt, Laravel, PostgreSQL, Python och drift.";

  return (
    <>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp pageEditorial" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{t.kicker}</div>
          <h1 className="h2 pageTitle" style={{ marginTop: 10 }}>
            {t.title}
          </h1>
          <p className="lede">{t.lede}</p>

          <CaseCards lang={lang} items={items} caseHref={(slug) => devCasePath(slug, lang)} />

          <div className="homeFinal" style={{ marginTop: 28 }}>
            <h2 className="h2 homeSectionTitle homeSectionTitleSingle">{t.ctaTitle}</h2>
            <p className="lede">{t.ctaText}</p>
            <div className="row" style={{ marginTop: 14 }}>
              <Link className="btn" to={pagePath("devKontakt", lang)}>
                {t.ctaPrimary}
              </Link>
              <Link className="btn btn-home-outline" to={pagePath("dev", lang)}>
                {t.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
