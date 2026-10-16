// Menydata per spår. Ren JS utan JSX så att Node-test kan importera den.
import { pagePath } from "./paths.js";

export const TRACK_NAV = {
  hemsidor: [
    { label: "Hemsidor", to: pagePath("hemsidor") },
    { label: "Priser", to: pagePath("hemsidorPriser") },
    { label: "Exempel", to: pagePath("hemsidorExempel") },
    { label: "Guide", to: pagePath("hemsidorGuide") },
    { label: "Kontakt", to: pagePath("hemsidorKontakt") },
  ],
  dev: {
    sv: [
      { label: "Projekt", to: pagePath("devProjekt") },
      { label: "Om mig", to: pagePath("devOm") },
      { label: "Kontakt", to: pagePath("devKontakt") },
    ],
    en: [
      { label: "Projects", to: pagePath("devProjekt", "en") },
      { label: "About", to: pagePath("devOm", "en") },
      { label: "Contact", to: pagePath("devKontakt", "en") },
    ],
  },
  // Neutralt skal för sidor som tillhör båda spåren (villkor, integritet, 404):
  // länkar bara till de två spåren.
  neutral: {
    sv: [
      { label: "Hemsidor", to: pagePath("hemsidor") },
      { label: "Systemutveckling", to: pagePath("dev") },
    ],
    en: [
      { label: "Websites (in Swedish)", to: pagePath("hemsidor") },
      { label: "Software development", to: pagePath("dev", "en") },
    ],
  },
};

// Länk till det andra spåret, visas sist i menyn.
export const CROSS_LINK = {
  hemsidor: { label: "Systemutveckling", to: pagePath("dev") },
  dev: {
    sv: { label: "Hemsidor för företag", to: pagePath("hemsidor") },
    en: { label: "Websites (in Swedish)", to: pagePath("hemsidor") },
  },
};
