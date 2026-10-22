import site from "../site.config.js";
import Icon from "./Icon.jsx";
import Rich from "../lib/rich.jsx";
import Socials from "./Socials.jsx";
import "./Hero.css";

function Backdrop() {
  const { heroBackground, heroVideo } = site.theme;
  if (heroBackground === "none") return null;
  if (heroBackground === "video" && heroVideo) {
    return (
      <div className="hero__bg hero__bg--video" aria-hidden="true">
        <video src={heroVideo} autoPlay loop muted playsInline />
      </div>
    );
  }
  return (
    <div className={`hero__bg hero__bg--${heroBackground}`} aria-hidden="true">
      <div className="hero__grid" />
      {heroBackground === "aurora" && (
        <>
          <div className="hero__blob hero__blob--1" />
          <div className="hero__blob hero__blob--2" />
        </>
      )}
    </div>
  );
}

export default function Hero() {
  const { hero, person } = site;

  return (
    <section id="top" className="hero">
      <Backdrop />
      <div className="container hero__inner">
        <div className="hero__copy">
          {person.status && (
            <p className="status-pill">
              <span className="pulse" aria-hidden="true" />
              {person.status}
            </p>
          )}
          <p className="hero__greeting">{hero.greeting}</p>
          <h1 className="hero__headline">
            <Rich text={hero.headline} />
          </h1>
          <p className="hero__tagline">
            <Rich text={hero.tagline} />
          </p>

          <div className="hero__buttons">
            {hero.buttons.map((b) => (
              <a key={b.label} href={b.href} className={`btn ${b.primary ? "btn--primary" : "btn--ghost"}`}>
                {b.label}
                {b.primary && <Icon name="arrow-right" />}
              </a>
            ))}
            {person.resume && (
              <a href={person.resume} className="btn btn--ghost" target="_blank" rel="noreferrer">
                <Icon name="resume" /> Résumé
              </a>
            )}
          </div>

          <Socials />
        </div>

        {hero.image && (
          <div className="hero__visual">
            <div className="hero__photo">
              <img src={hero.image} alt={hero.imageAlt ?? ""} fetchPriority="high" />
            </div>
            {hero.highlights?.map((h, i) => (
              <div key={h.title} className={`hero__chip hero__chip--${i % 2}`}>
                <span className="hero__chip-icon">
                  <Icon name={h.icon} size={18} />
                </span>
                <span>
                  <strong>{h.title}</strong>
                  <small>{h.subtitle}</small>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
