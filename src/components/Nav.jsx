import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { pagePath, toggleLangPath } from "../paths";

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

// Startsidorna för spåren ska inte vara aktiva på undersidorna.
const END_PATHS = new Set([pagePath("hemsidor"), pagePath("dev")]);

export default function Nav({ lang, items, crossLink, showLangToggle = true }) {
  const { pathname } = useLocation();
  const navLinksRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });

  const t =
    {
      sv: { toggleLabel: "Switch to English", logoAlt: "Alex Ahman logotyp" },
      en: { toggleLabel: "Byt till svenska", logoAlt: "Alex Ahman logo" },
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

      const navRect = navLinksNode.getBoundingClientRect();
      const activeRect = activeLink.getBoundingClientRect();

      setIndicatorStyle({
        opacity: 1,
        width: `${activeRect.width}px`,
        height: `${activeRect.height}px`,
        transform: `translate(${activeRect.left - navRect.left}px, ${activeRect.top - navRect.top}px)`,
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
        <Link className="logo" to={pagePath("home", lang)}>
          <img className="logoImg" src="/favicon.svg" alt={t.logoAlt} />
        </Link>

        <div className="navLinks" ref={navLinksRef}>
          <span className="navIndicator" aria-hidden="true" style={indicatorStyle} />
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} end={END_PATHS.has(item.to)} className={navLinkClassName}>
              {item.label}
            </NavLink>
          ))}
          {crossLink ? (
            <Link className="navCross" to={crossLink.to}>
              {crossLink.label}
            </Link>
          ) : null}

          {showLangToggle ? (
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
