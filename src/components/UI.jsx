import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

export function Arrow({ direction = "up", className = "" }) {
  return (
    <svg
      className={`arrow ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={
          direction === "down"
            ? "M12 4v16m-7-7 7 7 7-7"
            : "M5 19 19 5M5 5h14v14"
        }
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionHeading({ number, label, title, to, linkText }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {to && (
        <Link className="text-link" to={to}>
          {linkText}
          <Arrow />
        </Link>
      )}
    </div>
  );
}

export function ContactActions({ large = false }) {
  const [status, setStatus] = useState("");
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copyEmail() {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText("work.godlykm@gmail.com");
      setStatus("Email copied.");
    } catch {
      setStatus("Couldn’t copy. Use the email link or select the address.");
    }
    timer.current = setTimeout(() => setStatus(""), 5000);
  }
  return (
    <div className={`contact-actions ${large ? "contact-actions-large" : ""}`}>
      <div className="email-row">
        <a href="mailto:work.godlykm@gmail.com">
          work.godlykm@gmail.com
          <Arrow />
        </a>
        <button
          className="copy-button"
          type="button"
          onClick={copyEmail}
          aria-label="Copy email address"
        >
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect
              x="8"
              y="8"
              width="12"
              height="12"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M15 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      <p className="copy-status" role="status">
        {status}
      </p>
    </div>
  );
}

export function ContactSection() {
  return (
    <section className="contact-section" aria-labelledby="contact-title">
      <div>
        <p className="eyebrow">
          <span>Say hello</span> / Let’s make something useful
        </p>
        <h2 id="contact-title">
          Have something
          <br />
          <em>in mind?</em>
        </h2>
      </div>
      <div className="contact-section-details">
        <p>
          For project enquiries, opportunities,
          <br />
          or a conversation about open source.
        </p>
        <ContactActions />
        <div className="social-links">
          <a href="https://github.com/godlykmathews">
            GitHub <Arrow />
          </a>
          <a href="https://linkedin.com/in/godly-k-mathews">
            LinkedIn <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
