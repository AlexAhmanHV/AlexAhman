import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Villkor",
    title: "Användarvillkor",
    lede: "Allt material på sidan tillhör Alex Ahmanse och får inte återanvändas utan tillstånd.",
    items: [
      ["Användning", "Innehållet är endast för informationssyfte."],
      ["Ansvar", "Jag ansvarar inte för externa länkar eller tredjepartsinnehåll."],
      ["Kontakt", "Hör av dig om du vill använda materialet."],
    ],
  },

  en: {
    kicker: "Terms",
    title: "Terms of use",
    lede: "All content on this site belongs to Alex Ahmanse and may not be reused without permission.",
    items: [
      ["Use", "The content is provided for informational purposes only."],
      ["Liability", "I’m not responsible for external links or third-party content."],
      ["Contact", "Get in touch if you’d like to use any of the material."],
    ],
  },
};

export default function Terms({ lang }) {
  const t = copy[lang] || copy.sv;

  const pathname = lang === "en" ? "/en/terms" : "/terms";

  const seoTitle =
    lang === "en"
      ? "Terms of use | Alexander Åhman"
      : "Användarvillkor | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Terms of use for alexahman.se. Information about content usage, liability, and how to request permission."
      : "Användarvillkor för alexahman.se. Information om användning, ansvar och hur du begär tillstånd att använda material.";

  return (
    <>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{t.kicker}</div>
          <h1 className="h2" style={{ marginTop: 10 }}>
            {t.title}
          </h1>
          <p className="lede">{t.lede}</p>

          <div className="grid cols-3" style={{ marginTop: 20 }}>
            {t.items.map(([title, desc]) => (
              <div className="card" key={title}>
                <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
                <p style={{ marginTop: 10 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
