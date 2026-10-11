import { SITE_URL } from "./routes";

// Namn, ort och kontaktväg ska vara exakt samma på sajten, i JSON-LD och i en
// framtida Google Företagsprofil — ändra här, inte på flera ställen.
export const BUSINESS = {
  name: "Alexander Åhman – Webbutveckling",
  owner: "Alexander Åhman",
  email: "alex@alexahman.se",
  phone: "072-302 99 29",
  phoneE164: "+46723029929",
  city: "Västervik",
  region: "Kalmar län",
  areaServed: ["Västervik", "Vimmerby", "Oskarshamn", "Kalmar"],
  sameAs: [
    "https://www.linkedin.com/in/alexander-%C3%A5hman/",
    "https://www.instagram.com/AlexAhman",
    "https://github.com/AlexAhmanHV",
    "https://share.google/yniRyqonsNftpZaSt",
  ],
};

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS.name,
  description:
    "Hemsidor och webbutveckling för företag och föreningar i Västervik med omnejd: nya hemsidor, modernisering, teknisk SEO och webbappar.",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  image: `${SITE_URL}/Alex-1200.jpg`,
  email: BUSINESS.email,
  telephone: BUSINESS.phoneE164,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: "SE",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Västerviks kommun" },
    ...BUSINESS.areaServed.map((name) => ({ "@type": "City", name })),
  ],
  founder: { "@type": "Person", name: BUSINESS.owner },
  sameAs: BUSINESS.sameAs,
};
