import { useState } from "react";
import site from "../site.config.js";
import Section from "../components/Section.jsx";
import Icon from "../components/Icon.jsx";
import Socials from "../components/Socials.jsx";
import Rich from "../lib/rich.jsx";
import "./Contact.css";

function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <div className="email">
      <a href={`mailto:${email}`} className="email__link">
        <Icon name="mail" size={18} />
        {email}
      </a>
      <button type="button" className="icon-btn" onClick={copy} aria-label="Copy email address" title="Copy">
        <Icon name={copied ? "check" : "copy"} size={16} />
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </div>
  );
}

function ContactForm({ formId }) {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data?.errors?.map((x) => x.message).join(", ") || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error — please try again, or email me directly.");
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="form form--sent" role="status">
        <span className="form__check">
          <Icon name="check" size={24} />
        </span>
        <h3>Message sent!</h3>
        <p>Thanks for reaching out — I'll get back to you soon.</p>
        <button type="button" className="btn btn--ghost btn--sm" onClick={() => setStatus("idle")}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" placeholder="Your name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Say hello…" required />
      </div>
      {status === "error" && (
        <p className="form__error" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
        {status === "sending" ? (
          <>
            <Icon name="spinner" className="spin" /> Sending…
          </>
        ) : (
          <>
            Send message <Icon name="send" />
          </>
        )}
      </button>
    </form>
  );
}

export default function Contact({ id, index }) {
  const c = site.contact;
  return (
    <Section id={id} index={index} eyebrow={c.eyebrow} title={c.title}>
      <div className="contact card reveal">
        <div className="contact__info">
          <p className="contact__blurb">
            <Rich text={c.blurb} />
          </p>
          <CopyEmail email={site.person.email} />
          <p className="contact__location">
            <Icon name="pin" /> {site.person.location}
          </p>
          <Socials />
        </div>
        {c.formspreeId && <ContactForm formId={c.formspreeId} />}
      </div>
    </Section>
  );
}
