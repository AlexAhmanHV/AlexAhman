function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";

  // Normalize the incoming path so both "privacy" and "/privacy" work
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;

  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5.37 3.5A1.87 1.87 0 1 0 5.37 7.24a1.87 1.87 0 0 0 0-3.74ZM3.82 8.72h3.1V20h-3.1V8.72Zm5.07 0h2.98v1.54h.04c.41-.79 1.43-1.63 2.94-1.63 3.14 0 3.72 2.06 3.72 4.74V20h-3.1v-5.85c0-1.4-.03-3.19-1.94-3.19-1.94 0-2.24 1.52-2.24 3.09V20h-3.1V8.72Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.9A3.85 3.85 0 0 0 3.9 7.75v8.5a3.85 3.85 0 0 0 3.85 3.85h8.5a3.85 3.85 0 0 0 3.85-3.85v-8.5a3.85 3.85 0 0 0-3.85-3.85h-8.5Zm9.05 1.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z" />
    </svg>
  );
}

export default function Footer({ lang }) {
  const year = new Date().getFullYear();

  const text = lang === "en" ? "All rights reserved." : "Alla rättigheter förbehållna.";

  // More natural + standard labels in English.
  // Swedish kept close to your original, but slightly more standard.
  const privacyLabel = lang === "en" ? "Privacy policy" : "Integritetspolicy";
  const termsLabel = lang === "en" ? "Terms of service" : "Villkor";

  return (
    <footer className="footer">
      <div className="container row" style={{ justifyContent: "space-between" }}>
        <div>© {year} Alexander Åhman. {text}</div>

        <div className="row" style={{ gap: 12 }}>
          <a
            className="socialIcon"
            href="https://www.linkedin.com/in/alexander-%C3%A5hman/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>

          <a
            className="socialIcon"
            href="https://www.instagram.com/AlexAhman"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <InstagramIcon />
          </a>

          <a href={pathFor(lang, "privacy")}>{privacyLabel}</a>
          <a href={pathFor(lang, "terms")}>{termsLabel}</a>
        </div>
      </div>
    </footer>
  );
}
