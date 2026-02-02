import { useState } from "react";
import Seo from "../Seo";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://example.com";

const copy = {
  sv: {
    kicker: "Kontakt",
    title: "Kontakt",
    lede: "Jag söker junior roll inom systemutveckling/IT och är öppen för arbete.",
    formTitle: "Skicka ett meddelande",
    formLead: "Jag återkommer så snart jag kan.",
    name: "Namn",
    email: "Email",
    message: "Meddelande",
    button: "Skicka",
    sending: "Skickar...",
    success: "Tack! Ditt meddelande är skickat.",
    error: "Något gick fel. Försök igen eller maila mig direkt.",
    setupError: "Formuläret är inte kopplat ännu. Lägg till ditt Formspree-ID först.",
    locationLabel: "Plats",
  },

  en: {
    kicker: "Contact",
    title: "Contact",
    lede: "I’m looking for junior roles in software development/IT and I’m open to work.",
    formTitle: "Send a message",
    formLead: "I’ll get back to you as soon as I can.",
    name: "Name",
    email: "Email",
    message: "Message",
    button: "Send",
    sending: "Sending...",
    success: "Thanks! Your message was sent.",
    error: "Something went wrong. Please try again or email me directly.",
    setupError: "The form is not connected yet. Add your Formspree ID first.",
    locationLabel: "Location",
  },
};

const envFormId = import.meta.env.VITE_FORMSPREE_FORM_ID || "";
const formId =
  !envFormId || envFormId === "XXXXXXXX" ? "mkozqlqp" : envFormId;
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

  const pathname = lang === "en" ? "/en/contact" : "/contact";

  const seoTitle =
    lang === "en"
      ? "Contact | Alexander Åhman"
      : "Kontakt | Alexander Åhman";

  const seoDescription =
    lang === "en"
      ? "Get in touch with Alexander Åhman, a software developer in Västervik. Available for junior roles and selected freelance projects."
      : "Kontakta Alexander Åhman, systemutvecklare i Västervik. Tillgänglig för juniora roller och utvalda uppdrag.";

  const [status, setStatus] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      <section className="section fadeUp" style={{ borderTop: "none" }}>
        <div className="container split">
          <div>
            <div className="kicker">{t.kicker}</div>
            <h1 className="h2" style={{ marginTop: 10 }}>
              {t.title}
            </h1>
            <p className="lede">{t.lede}</p>

            <div className="card" style={{ marginTop: 18 }}>
              <p>
                <b>Email:</b> Alex@AlexAhman.se
              </p>
              <p style={{ marginTop: 8 }}>
                <b>{t.locationLabel}:</b> Västervik, Sweden
              </p>

              <div className="row" style={{ marginTop: 12, gap: 10 }}>
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
              </div>
            </div>
          </div>

          <form className="card" action={formAction} method="POST" onSubmit={handleSubmit}>
            <h3 style={{ fontSize: 18, fontWeight: 700 }}>{t.formTitle}</h3>
            <p style={{ marginTop: 8, marginBottom: 16 }}>{t.formLead}</p>

            <label className="kicker">{t.name}</label>
            <input name="name" required style={inputStyle} />

            <label className="kicker" style={{ marginTop: 12, display: "block" }}>
              {t.email}
            </label>
            <input type="email" name="email" required style={inputStyle} />

            <label className="kicker" style={{ marginTop: 12, display: "block" }}>
              {t.message}
            </label>
            <textarea name="message" rows="6" required style={inputStyle} />

            {status.text ? (
              <p
                className={`formNotice ${status.type === "success" ? "isSuccess" : "isError"}`}
                role="status"
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
      </section>
    </>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 8,
  padding: "12px 12px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  outline: "none",
  font: "inherit",
  background: "#fff",
};
