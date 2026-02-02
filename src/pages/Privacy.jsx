import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Integritet",
    title: "Integritetspolicy",
    lede: "Denna webbplats samlar bara in uppgifter som du skickar via kontaktformuläret.",
    items: [
      ["Vad som samlas in", "Namn, e-post och meddelandeinnehåll."],
      ["Varför", "För att kunna svara på din förfrågan."],
      ["Lagring", "Uppgifter sparas endast så länge som behövs."],
    ],
  },

  en: {
    kicker: "Privacy",
    title: "Privacy policy",
    lede: "This website only collects information you submit through the contact form.",
    items: [
      ["What is collected", "Name, email, and message content."],
      ["Why", "To respond to your inquiry."],
      ["Retention", "Data is kept only as long as needed."],
    ],
  },
};

export default function Privacy({ lang }) {
  const t = copy[lang] || copy.sv;

  const pathname = lang === "en" ? "/en/privacy" : "/privacy";

  const seoTitle =
    lang === "en"
      ? "Privacy policy | Alexander Åhman"
      : "Integritetspolicy | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Privacy policy for alexahman.se. This site only collects information you submit through the contact form."
      : "Integritetspolicy för alexahman.se. Sidan samlar endast in uppgifter som du skickar via kontaktformuläret.";

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
