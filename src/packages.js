// Website packages and prices. Used by the pricing page, the teaser on
// /hemsida-vastervik and the structured data, so a price changes in one place.
// Prices are final: the business is VAT-exempt (momsbefriad), no VAT is added.

export const PACKAGES = [
  {
    id: "start",
    name: "Start",
    price: 5900,
    fit: "För verksamheten som behöver synas och bli hittad.",
    includes: [
      "1–3 sidor",
      "Vad ni gör, öppettider, kontakt och karta",
      "Mobilanpassad och snabb",
      "Grundläggande synlighet på Google",
      "1 ändringsrunda",
    ],
    delivery: "ca 2 veckor",
    demo: { label: "Se exempel: Tallmo Snickeri", href: "/exempel/snickare/" },
    customer: null,
  },
  {
    id: "foretag",
    name: "Företag",
    price: 11900,
    featured: true,
    fit: "För butiken, caféet eller hantverkaren med ett utbud att visa.",
    includes: [
      "Upp till 8 sidor",
      "Sortiment, meny eller tjänster med bilder",
      "Lokal synlighet: Googles företagsdata, sitemap och Search Console",
      "Bilder som laddar snabbt i mobilen",
      "2 ändringsrundor",
    ],
    delivery: "ca 3–4 veckor",
    demo: { label: "Se exempel: Café Ankarlänken", href: "/exempel/cafe/" },
    customer: { label: "Riktig kund: Bröd & Deli", to: "/projects/brod-och-deli" },
  },
  {
    id: "admin",
    name: "Företag + admin",
    price: 19000,
    fit: "För föreningen eller företaget som vill uppdatera själva.",
    includes: [
      "Allt i Företag",
      "Inloggning där ni själva lägger in nyheter, öppettider eller bokningar",
      "Genomgång så att ni kommer igång",
      "2 ändringsrundor",
    ],
    delivery: "ca 4–6 veckor",
    demo: { label: "Se exempel och testa adminläget", href: "/exempel/forening/" },
    customer: { label: "Riktig kund: Ankarsrums JSK", to: "/projects/ankarsrums-jsk" },
  },
];

export const HOSTING = [
  {
    name: "Drift",
    price: 149,
    includes: "Hosting, SSL, säkerhetskopior och koll på att sidan är uppe.",
  },
  {
    name: "Drift + omsorg",
    price: 349,
    includes: "Allt i Drift, plus 30 minuter småändringar varje månad och en SEO-koll per år.",
  },
];

export const formatKr = (amount) => `${amount.toLocaleString("sv-SE")} kr`;

export const LOWEST_PRICE = Math.min(...PACKAGES.map((p) => p.price));
