import { Link, NavLink, useLocation } from "react-router-dom";

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";

  // Normalize so both "services" and "/services" work, and avoid double slashes
  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;

  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

function toggleLangPath(pathname) {
  // Normalize trailing slash
  const clean = pathname.replace(/\/+$/, "") || "/";

  if (clean === "/en") return "/";
  if (clean.startsWith("/en/")) return clean.replace(/^\/en/, "") || "/";
  return clean === "/" ? "/en" : `/en${clean}`;
}

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "var(--accent-3)" : "var(--muted)",
  textDecoration: "none",
});

function UKFlagIcon() {
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true">
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0L60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
      <rect x="24" width="12" height="40" fill="#fff" />
      <rect y="14" width="60" height="12" fill="#fff" />
      <rect x="26" width="8" height="40" fill="#C8102E" />
      <rect y="16" width="60" height="8" fill="#C8102E" />
    </svg>
  );
}

function SwedenFlagIcon() {
  return (
    <svg viewBox="0 0 60 40" aria-hidden="true">
      <rect width="60" height="40" fill="#006AA7" />
      <rect x="16" width="8" height="40" fill="#FECC00" />
      <rect y="16" width="60" height="8" fill="#FECC00" />
    </svg>
  );
}

export default function Nav({ lang }) {
  const { pathname } = useLocation();

  const t =
    {
      sv: {
        services: "Tjänster",
        about: "Om",
        contact: "Kontakt",
        // Swedish UI → English label
        toggleLabel: "Switch to English",
        logoAlt: "Alex Ahman logotyp",
      },
      en: {
        services: "Services",
        about: "About",
        contact: "Contact",
        // English UI → Swedish label
        toggleLabel: "Byt till svenska",
        logoAlt: "Alex Ahman logo",
      },
    }[lang] || {};

  return (
    <div className="nav">
      <div className="container navInner">
        <Link className="logo" to={pathFor(lang, "/")}>
          <img className="logoImg" src="/favicon.svg" alt={t.logoAlt} />
        </Link>

        <div className="navLinks">
          <NavLink to={pathFor(lang, "services")} style={navLinkStyle}>
            {t.services}
          </NavLink>
          <NavLink to={pathFor(lang, "about")} style={navLinkStyle}>
            {t.about}
          </NavLink>
          <NavLink to={pathFor(lang, "contact")} style={navLinkStyle}>
            {t.contact}
          </NavLink>

          <Link
            className="langToggle"
            to={toggleLangPath(pathname)}
            aria-label={t.toggleLabel}
            title={t.toggleLabel}
          >
            <span className="flagToggle" aria-hidden="true">
              {lang === "sv" ? <UKFlagIcon /> : <SwedenFlagIcon />}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
