import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

function pathFor(lang, path) {
  const base = lang === "en" ? "/en" : "";

  const normalized = path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;

  if (normalized === "/") return base || "/";
  return `${base}${normalized}`;
}

function toggleLangPath(pathname) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const unmatchedLanguagePages = new Map([
    ["/fullstackutvecklare-vastervik", "/en"],
    ["/react-laravel-utvecklare", "/en"],
    ["/konsult-systemutvecklare", "/en"],
    ["/en/fullstack-developer-vastervik", "/"],
  ]);

  if (unmatchedLanguagePages.has(clean)) {
    return unmatchedLanguagePages.get(clean);
  }

  if (clean === "/en") return "/";
  if (clean.startsWith("/en/")) return clean.replace(/^\/en/, "") || "/";
  return clean === "/" ? "/en" : `/en${clean}`;
}

function navLinkClassName({ isActive }) {
  return `navLink${isActive ? " isActive" : ""}`;
}

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
  const navLinksRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });

  const t =
    {
      sv: {
        projects: "Projekt",
        services: "Tjänster",
        about: "Om",
        contact: "Kontakt",
        toggleLabel: "Switch to English",
        logoAlt: "Alex Ahman logotyp",
      },
      en: {
        projects: "Projects",
        services: "Services",
        about: "About",
        contact: "Contact",
        toggleLabel: "Byt till svenska",
        logoAlt: "Alex Ahman logo",
      },
    }[lang] || {};

  useEffect(() => {
    const updateIndicator = () => {
      const navLinksNode = navLinksRef.current;

      if (!navLinksNode) {
        return;
      }

      const activeLink = navLinksNode.querySelector(".navLink.isActive");

      if (!activeLink) {
        setIndicatorStyle({ opacity: 0 });
        return;
      }

      setIndicatorStyle({
        opacity: 1,
        width: `${activeLink.offsetWidth}px`,
        height: `${activeLink.offsetHeight}px`,
        transform: `translate(${activeLink.offsetLeft}px, ${activeLink.offsetTop}px)`,
      });
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [pathname]);

  return (
    <div className="nav">
      <div className="container navInner">
        <Link className="logo" to={pathFor(lang, "/")}>
          <img className="logoImg" src="/favicon.svg" alt={t.logoAlt} />
        </Link>

        <div className="navLinks" ref={navLinksRef}>
          <span className="navIndicator" aria-hidden="true" style={indicatorStyle} />
          <NavLink to={pathFor(lang, "projects")} className={navLinkClassName}>
            {t.projects}
          </NavLink>
          <NavLink to={pathFor(lang, "services")} className={navLinkClassName}>
            {t.services}
          </NavLink>
          <NavLink to={pathFor(lang, "about")} className={navLinkClassName}>
            {t.about}
          </NavLink>
          <NavLink to={pathFor(lang, "contact")} className={navLinkClassName}>
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
