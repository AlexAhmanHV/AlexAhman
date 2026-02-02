const copy = {
  sv: {
    kicker: "Portfolio",
    title: "Projekt pa vag in.",
    lede:
      "Har samlar jag mina projekt, case och experiment. Sidan fylls pa efter hand.",
    soonTitle: "Snart pa plats",
    soonText: "Nya projekt publiceras har nar de ar klara.",
    cardTitle: "Kommande projekt",
    cardText: "Plats for screenshots, beskrivning och teknikstack.",
  },
  en: {
    kicker: "Portfolio",
    title: "Projects coming soon.",
    lede:
      "This is where I will share my projects, case studies, and experiments. Updates on the way.",
    soonTitle: "Coming soon",
    soonText: "New work will appear here as I finish and ship it.",
    cardTitle: "Upcoming project",
    cardText: "Space for screenshots, description, and tech stack.",
  },
};

export default function Projects({ lang }) {
  const t = copy[lang];

  return (
    <section className="section fadeUp" style={{ borderTop: "none" }}>
      <div className="container">
        <div className="kicker">{t.kicker}</div>
        <h1 className="h2" style={{ marginTop: 10 }}>{t.title}</h1>
        <p className="lede">{t.lede}</p>

        <div className="projectGrid">
          {[1, 2, 3].map((item) => (
            <div className="projectCard" key={item}>
              <div className="projectThumb" aria-hidden="true" />
              <div className="projectBody">
                <span className="projectBadge">{t.soonTitle}</span>
                <h3 style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>{t.cardTitle}</h3>
                <p style={{ marginTop: 8 }}>{t.cardText}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card" style={{ marginTop: 20 }}>
          <p style={{ fontWeight: 700 }}>{t.soonTitle}</p>
          <p style={{ marginTop: 8 }}>{t.soonText}</p>
        </div>
      </div>
    </section>
  );
}
