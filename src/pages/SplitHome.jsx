import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Seo from "../Seo";
import { pagePath, toggleLangPath } from "../paths";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import useMediaQuery from "../hooks/useMediaQuery";
import { SwedenFlagIcon, UKFlagIcon } from "../components/FlagIcons";
import Terminal from "../components/split/Terminal";
import DeviceShowcase from "../components/split/DeviceShowcase";
import BackgroundVideo from "../components/split/BackgroundVideo";

import { SITE_URL } from "../routes";

// Delad startsida utan meny och sidfot: hemsidor till vänster, systemutveckling
// till höger. Ett klick låter halvan fylla skärmen innan navigeringen sker.
const EXPAND_MS = 500;

const copy = {
  sv: {
    title: "Alexander Åhman – hemsidor och systemutveckling i Västervik",
    description: "Hemsidor för företag och föreningar i Västervik, och systemutveckling med React, Laravel och PostgreSQL.",
    toggleLabel: "Switch to English",
    logoAlt: "Alex Ahman logotyp",
    hemsidor: {
      kicker: "Hemsidor",
      heading: "Hemsidor för företag i Västervik",
      meta: "Fast pris · klart på ca 2 veckor",
      cta: "Se paket",
    },
    dev: {
      kicker: "Systemutveckling",
      heading: "Systemutvecklare",
      meta: "Fullstack · React, Laravel, TypeScript, Python",
      cta: "Se projekt",
    },
    terminalLabel: "Terminal som pushar kod, kör 68 gröna tester i FX Monitor och driftsätter projektet på Render.",
  },
  en: {
    title: "Alexander Ahman – websites and software development in Västervik",
    description: "Websites for local businesses in Västervik, and software development with React, Laravel, and PostgreSQL.",
    toggleLabel: "Byt till svenska",
    logoAlt: "Alex Ahman logo",
    hemsidor: {
      kicker: "Websites",
      heading: "Websites for local businesses",
      meta: "In Swedish · Västervik",
      cta: "View packages",
    },
    dev: {
      kicker: "Software development",
      heading: "Software developer",
      meta: "Fullstack · React, Laravel, TypeScript, Python",
      cta: "View projects",
    },
    terminalLabel: "Terminal that pushes code, runs 68 passing tests in FX Monitor and deploys the project to Render.",
  },
};

const TERMINAL_LINES = [
  { text: "$ git push origin main", tone: "cmd" },
  { text: "$ npm test", tone: "cmd" },
  { text: "✓ 68 tests passed  (fx-monitor)", tone: "ok" },
  { text: "$ render deploy fx-monitor", tone: "cmd" },
  { text: "✓ live on onrender.com", tone: "ok" },
];
// På mobil hoppas den första raden över, så att terminalen blir kortare.
const TERMINAL_LINES_SHORT = TERMINAL_LINES.slice(1);

const SHOTS = {
  sv: {
    desktop: [
      { src: "/split/brod-och-deli-desktop.webp", alt: "Bröd & Deli, hemsida för ett bageri i Västervik" },
      { src: "/split/snickare-desktop.webp", alt: "Tallmo Snickeri, exempelsida för en hantverkare" },
      { src: "/split/ankarsrums-jsk-desktop.webp", alt: "Ankarsrums JSK, hemsida för en jaktskytteklubb" },
      { src: "/split/cafe-desktop.webp", alt: "Café Ankarlänken, exempelsida för ett café" },
      { src: "/split/forening-desktop.webp", alt: "Skärgårdens Paddelklubb, exempelsida för en förening" },
    ],
    mobile: [
      { src: "/split/snickare-mobile.webp", alt: "Tallmo Snickeri i mobilen" },
      { src: "/split/cafe-mobile.webp", alt: "Café Ankarlänken i mobilen" },
      { src: "/split/forening-mobile.webp", alt: "Skärgårdens Paddelklubb i mobilen" },
    ],
  },
  en: {
    desktop: [
      { src: "/split/brod-och-deli-desktop.webp", alt: "Bröd & Deli, website for a bakery in Västervik" },
      { src: "/split/snickare-desktop.webp", alt: "Tallmo Snickeri, example site for a carpenter" },
      { src: "/split/ankarsrums-jsk-desktop.webp", alt: "Ankarsrums JSK, website for a shooting club" },
      { src: "/split/cafe-desktop.webp", alt: "Café Ankarlänken, example site for a café" },
      { src: "/split/forening-desktop.webp", alt: "Skärgårdens Paddelklubb, example site for a club" },
    ],
    mobile: [
      { src: "/split/snickare-mobile.webp", alt: "Tallmo Snickeri on a phone" },
      { src: "/split/cafe-mobile.webp", alt: "Café Ankarlänken on a phone" },
      { src: "/split/forening-mobile.webp", alt: "Skärgårdens Paddelklubb on a phone" },
    ],
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alexander Åhman",
  url: SITE_URL,
  inLanguage: ["sv", "en"],
};

export default function SplitHome({ lang }) {
  const t = copy[lang] || copy.sv;
  const shots = SHOTS[lang] || SHOTS.sv;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const reducedMotion = usePrefersReducedMotion();
  const isWide = useMediaQuery("(min-width: 768px)");
  const [expanding, setExpanding] = useState(null);
  // Halvan med hover eller tangentbordsfokus. Styr 62/38 och nedtoningen.
  const [active, setActive] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const halves = [
    { track: "hemsidor", to: pagePath("hemsidor"), text: t.hemsidor },
    { track: "dev", to: pagePath("dev", lang), text: t.dev },
  ];

  // Bara riktig hover: på pekskärmar ska ett tryck navigera direkt.
  function handlePointerEnter(track) {
    if (window.matchMedia("(hover: hover)").matches) setActive(track);
  }

  function handleFocus(event, track) {
    if (event.target.matches(":focus-visible")) setActive(track);
  }

  function clearActive(track) {
    setActive((current) => (current === track ? null : current));
  }

  function handleClick(event, half) {
    // Ny flik, nytt fönster eller minskad rörelse: låt länken göra som vanligt.
    if (reducedMotion || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    if (expanding) return;
    setExpanding(half.track);
    timerRef.current = setTimeout(() => navigate(half.to), EXPAND_MS);
  }

  return (
    <main
      className="splitHome"
      data-page-shell
      data-expanding={expanding || undefined}
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(webSiteJsonLd)}</script>
      </Helmet>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pagePath("home", lang)}
        title={t.title}
        description={t.description}
        siteUrl={SITE_URL}
      />

      <h1 className="srOnly">{t.title}</h1>

      <div className="splitTopbar routeTransition">
        <Link className="splitLogo" to={pagePath("home", lang)}>
          <img src="/favicon.svg" alt={t.logoAlt} width="28" height="28" />
        </Link>
        <Link className="splitLang" to={toggleLangPath(pathname)} aria-label={t.toggleLabel} title={t.toggleLabel}>
          <span className="flagToggle" aria-hidden="true">
            {lang === "sv" ? <UKFlagIcon /> : <SwedenFlagIcon />}
          </span>
        </Link>
      </div>

      <div className="splitHalves routeTransition" data-active={active || undefined}>
        {halves.map((half) => (
          <Link
            key={half.track}
            to={half.to}
            className="splitHalf"
            data-track={half.track}
            data-expanding={expanding === half.track || undefined}
            aria-labelledby={`split-${half.track}-heading split-${half.track}-meta`}
            onClick={(event) => handleClick(event, half)}
            onPointerEnter={() => handlePointerEnter(half.track)}
            onPointerLeave={() => clearActive(half.track)}
            onFocus={(event) => handleFocus(event, half.track)}
            onBlur={() => clearActive(half.track)}
          >
            <BackgroundVideo name={half.track} reducedMotion={reducedMotion} />

            <div className="splitInner">
              <div className="splitStage">
                {half.track === "dev" ? (
                  <Terminal lines={isWide ? TERMINAL_LINES : TERMINAL_LINES_SHORT} reducedMotion={reducedMotion} label={t.terminalLabel} />
                ) : (
                  <DeviceShowcase desktop={shots.desktop} mobile={shots.mobile} reducedMotion={reducedMotion} />
                )}
              </div>

              <div className="splitText">
                <p className="splitKicker">{half.text.kicker}</p>
                <h2 className="splitHeading" id={`split-${half.track}-heading`}>
                  {half.text.heading}
                </h2>
                <p className="splitMeta" id={`split-${half.track}-meta`}>
                  {half.text.meta}
                </p>
                <span className="splitCta">
                  {half.text.cta}
                  <span className="splitCtaArrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>
        ))}

        <p className="splitSeam" aria-hidden="true">
          Alexander Åhman
        </p>
      </div>
    </main>
  );
}
