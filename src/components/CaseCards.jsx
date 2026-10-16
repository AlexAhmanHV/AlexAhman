import { Link } from "react-router-dom";

const LABELS = {
  sv: {
    problem: "Problem",
    solution: "Lösning",
    stack: "Teknik",
    signal: "Vad projektet visar",
    details: "Detaljer",
    readCase: "Läs case",
  },
  en: {
    problem: "Problem",
    solution: "Solution",
    stack: "Tech",
    signal: "What it shows",
    details: "Details",
    readCase: "Read case",
  },
};

// Kortlistan med projektsammanfattningar, delad av Projects och HemsidorExempel.
// caseHref(slug) ger adressen till caset i det spår listan visas i.
export default function CaseCards({ lang, items, caseHref }) {
  const labels = LABELS[lang] || LABELS.sv;

  return (
    <div className="selectedWorkList projectArchive">
      {items.map((item, index) => (
        <article className="selectedCase" key={item.slug}>
          <header className="selectedCaseHeader">
            <span className="caseIndex">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="caseMeta">{item.meta}</p>
              <h2>{item.title}</h2>
            </div>
            <Link className="textLink selectedCaseLink" to={caseHref(item.slug)}>
              {labels.readCase}
            </Link>
          </header>

          <div className="caseScanGrid caseScanGridWide">
            <div>
              <span>{labels.problem}</span>
              <p>{item.problem}</p>
            </div>
            <div>
              <span>{labels.solution}</span>
              <p>{item.solution}</p>
            </div>
            <div>
              <span>{labels.signal}</span>
              <p>{item.signal}</p>
            </div>
            <div>
              <span>{labels.details}</span>
              <div className="detailList">
                {item.details.map((detail) => (
                  <small key={`${item.title}-${detail}`}>{detail}</small>
                ))}
              </div>
            </div>
            <div className="caseStackBlock">
              <span>{labels.stack}</span>
              <div className="projectStack">
                {item.stack.map((token) => (
                  <span className="projectStackChip" key={`${item.title}-${token}`}>
                    {token}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
