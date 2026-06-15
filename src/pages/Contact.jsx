import { useState } from "react";
import { Link } from "react-router-dom";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";
const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "";

const copy = {
  sv: {
    kicker: "Kontakt",
    title: "Skriv kort vad du bygger, så tar vi det därifrån",
    lede:
      "Hör av dig om du behöver en utvecklare för ett konkret projekt, ett konsultuppdrag eller en roll där någon behöver kunna röra sig mellan produkt, frontend och backend.",
    formTitle: "Skicka ett meddelande",
    formLead: "Skriv nuläge, mål och vad som bromsar. Det räcker som start.",
    responseTimeLabel: "svar",
    responseTimeValue: "vanligtvis inom 24h vardagar",
    introCallLabel: "samtal",
    introCallValue: "15-20 min, kostnadsfritt",
    bookingCta: "Boka ett första samtal",
    name: "Namn",
    email: "Email",
    message: "Meddelande",
    button: "Skicka",
    sending: "Skickar...",
    success: "Tack! Ditt meddelande är skickat.",
    error: "Något gick fel. Försök igen eller maila mig direkt.",
    locationLabel: "plats",
    locationValue: "Västervik / remote",
    emailLabel: "email",
    fitTitle: "Bra skäl att höra av sig",
    fitItems: [
      "Ni behöver få en idé eller halvfärdig lösning till körbar produkt.",
      "Ni har ett systemflöde som behöver bli tydligare, snabbare eller lättare att förvalta.",
      "Ni söker en fullstackutvecklare som kan bidra praktiskt utan lång startsträcka.",
    ],
    photoAlt: "Porträtt av Alexander Åhman",
    relatedLabel: "Läs vidare",
  },

  en: {
    kicker: "Contact",
    title: "Send the short version of what you are building",
    lede:
      "Reach out if you need a developer for a concrete project, consulting work, or a role where someone needs to move between product, frontend, and backend.",
    formTitle: "Send a message",
    formLead: "Write the current state, goal, and what is slowing things down. That is enough to start.",
    responseTimeLabel: "response",
    responseTimeValue: "usually within 24h on weekdays",
    introCallLabel: "call",
    introCallValue: "15-20 min, free",
    bookingCta: "Book an intro call",
    name: "Name",
    email: "Email",
    message: "Message",
    button: "Send",
    sending: "Sending...",
    success: "Thanks! Your message was sent.",
    error: "Something went wrong. Please try again or email me directly.",
    locationLabel: "location",
    locationValue: "Västervik / remote",
    emailLabel: "email",
    fitTitle: "Good reasons to get in touch",
    fitItems: [
      "You need to turn an idea or unfinished solution into a runnable product.",
      "You have a system flow that needs to become clearer, faster, or easier to maintain.",
      "You are looking for a full-stack developer who can contribute practically without a long ramp-up.",
    ],
    photoAlt: "Portrait of Alexander Ahman",
    relatedLabel: "Continue",
  },
};

const envFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || "";
const formId = !envFormId || envFormId === "XXXXXXXX" ? "mkozqlqp" : envFormId;
const formAction = `https://formspree.io/f/${formId}`;

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

export default function Contact({ lang }) {
  const t = copy[lang] || copy.sv;
  const hasBooking = Boolean(BOOKING_URL);
  const pathname = lang === "en" ? "/en/contact" : "/contact";

  const seoTitle = lang === "en" ? "Contact | Alexander Ahman" : "Kontakt | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Contact Alexander Ahman in Västervik about full-stack development, consulting work, React, Laravel, APIs, data flows, and product-facing systems."
      : "Kontakta Alexander Åhman i Västervik om fullstackutveckling, konsultuppdrag, React, Laravel, API:er, dataflöden och produktnära system.";

  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", text: "" });
    const form = event.currentTarget;

    try {
      setIsSubmitting(true);
      const formData = new FormData(form);
      const response = await fetch(formAction, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        const formspreeError = data?.errors?.[0]?.message;
        throw new Error(formspreeError || "Submit failed");
      }
      form.reset();
      setStatus({ type: "success", text: t.success });
    } catch (error) {
      setStatus({
        type: "error",
        text: error?.message ? `${t.error} (${error.message})` : t.error,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Seo
        lang={lang === "en" ? "en" : "sv"}
        pathname={pathname}
        title={seoTitle}
        description={seoDescription}
        siteUrl={SITE_URL}
      />

      <section className="section fadeUp pageEditorial" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="kicker">{t.kicker}</div>
          <h1 className="h2 pageTitle" style={{ marginTop: 10 }}>
            {t.title}
          </h1>
          <p className="lede">{t.lede}</p>

          <div className="contactEditorialGrid">
            <aside className="homeSignalCard contactSignal">
              <div className="terminalHeader" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <dl className="homeMetaList">
                <div className="homeMetaRow">
                  <dt>{t.emailLabel}</dt>
                  <dd>Alex@AlexAhman.se</dd>
                </div>
                <div className="homeMetaRow">
                  <dt>{t.locationLabel}</dt>
                  <dd>{t.locationValue}</dd>
                </div>
                <div className="homeMetaRow">
                  <dt>{t.responseTimeLabel}</dt>
                  <dd>{t.responseTimeValue}</dd>
                </div>
                <div className="homeMetaRow">
                  <dt>{t.introCallLabel}</dt>
                  <dd>{t.introCallValue}</dd>
                </div>
              </dl>

              <div className="contactFit">
                <h2>{t.fitTitle}</h2>
                {t.fitItems.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              {hasBooking ? (
                <div className="row" style={{ marginTop: 16 }}>
                  <a className="btn btn-home-outline" href={BOOKING_URL} target="_blank" rel="noreferrer">
                    {t.bookingCta}
                  </a>
                </div>
              ) : null}

              <div className="row contactSocialRow">
                <a
                  className="socialIcon socialIconDark"
                  href="https://www.linkedin.com/in/alexander-%C3%A5hman/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
                <a
                  className="socialIcon socialIconDark"
                  href="https://www.instagram.com/AlexAhman"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                >
                  <InstagramIcon />
                </a>
              </div>

              <figure className="contactPhotoCard contactPhotoEditorial">
                <img
                  className="contactPhoto"
                  src="/Alex-680.jpg"
                  srcSet="/Alex-340.jpg 340w, /Alex-680.jpg 680w, /Alex-1200.jpg 1200w"
                  sizes="(max-width: 760px) 100vw, 340px"
                  alt={t.photoAlt}
                  loading="lazy"
                  decoding="async"
                  width="680"
                  height="907"
                />
              </figure>
            </aside>

            <form className="card contactFormCard contactFormEditorial" action={formAction} method="POST" onSubmit={handleSubmit}>
              <h2>{t.formTitle}</h2>
              <p style={{ marginTop: 8, marginBottom: 16 }}>{t.formLead}</p>

              <div className={`inputGroup${focusedField === "name" ? " isFocused" : ""}`}>
                <label className="kicker" htmlFor="contact-name">{t.name}</label>
                <input
                  id="contact-name"
                  className="formInput"
                  name="name"
                  required
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField("")}
                />
              </div>

              <div className={`inputGroup${focusedField === "email" ? " isFocused" : ""}`}>
                <label className="kicker" htmlFor="contact-email">{t.email}</label>
                <input
                  id="contact-email"
                  className="formInput"
                  type="email"
                  name="email"
                  required
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                />
              </div>

              <div className={`inputGroup${focusedField === "message" ? " isFocused" : ""}`}>
                <label className="kicker" htmlFor="contact-message">{t.message}</label>
                <textarea
                  id="contact-message"
                  className="formInput formTextarea"
                  name="message"
                  rows="6"
                  required
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                />
              </div>

              {status.text ? (
                <p
                  className={`formNotice formNoticeAnimated ${status.type === "success" ? "isSuccess" : "isError"}`}
                  role="status"
                  aria-live="polite"
                  style={{ marginTop: 12 }}
                >
                  {status.text}
                </p>
              ) : null}

              <button
                className="btn"
                type="submit"
                style={{ marginTop: 14, width: "100%" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? t.sending : t.button}
              </button>
            </form>
          </div>

          <div className="relatedStrip">
            <p>{t.relatedLabel}</p>
            <div className="row">
              <Link className="textLink" to={lang === "en" ? "/en/projects" : "/projects"}>
                {lang === "en" ? "Projects" : "Projekt"}
              </Link>
              <Link className="textLink" to={lang === "en" ? "/en/services" : "/services"}>
                {lang === "en" ? "Services" : "Tjänster"}
              </Link>
              <Link className="textLink" to={lang === "en" ? "/en/about" : "/about"}>
                {lang === "en" ? "About" : "Om mig"}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
