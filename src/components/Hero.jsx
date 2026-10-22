import { useEffect, useRef, useState } from "react";
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

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

/**
 * A floating card on the hero photo. When `draggable`, visitors can grab it and
 * move it anywhere inside the hero (mouse, pen or touch). Double-click resets it.
 */
function HighlightCard({ highlight, index, draggable, boundsRef }) {
  const ref = useRef(null);
  const drag = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  // If the layout width changes (rotate phone, resize window), snap back home.
  useEffect(() => {
    if (!draggable) return;
    let width = window.innerWidth;
    const onResize = () => {
      if (window.innerWidth !== width) {
        width = window.innerWidth;
        setOffset({ x: 0, y: 0 });
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [draggable]);

  const onPointerDown = (e) => {
    if (!draggable || (e.pointerType === "mouse" && e.button !== 0)) return;
    const card = ref.current.getBoundingClientRect();
    const area = boundsRef.current.getBoundingClientRect();
    const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-height")) || 0;
    const pad = 8;
    // How far the card may travel in each direction before leaving the hero.
    drag.current = {
      startX: e.clientX,
      startY: e.clientY,
      x: offset.x,
      y: offset.y,
      minX: area.left + pad - card.left,
      maxX: area.right - pad - card.right,
      minY: Math.max(area.top, navHeight) + pad - card.top,
      maxY: area.bottom - pad - card.bottom,
    };
    ref.current.setPointerCapture(e.pointerId);
    setDragging(true);
    e.preventDefault();
  };

  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    setOffset({
      x: d.x + clamp(e.clientX - d.startX, d.minX, d.maxX),
      y: d.y + clamp(e.clientY - d.startY, d.minY, d.maxY),
    });
  };

  const onPointerUp = () => {
    drag.current = null;
    setDragging(false);
  };

  const classes = [
    "hero__chip",
    `hero__chip--${index % 4}`,
    draggable && "is-draggable",
    dragging && "is-dragging",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      className={classes}
      style={{ translate: `${offset.x}px ${offset.y}px` }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDoubleClick={draggable ? () => setOffset({ x: 0, y: 0 }) : undefined}
      title={draggable ? "Drag me around \u2014 double-click to reset" : undefined}
    >
      <span className="hero__chip-icon">
        <Icon name={highlight.icon} size={18} />
      </span>
      <span>
        <strong>{highlight.title}</strong>
        {highlight.subtitle && <small>{highlight.subtitle}</small>}
      </span>
    </div>
  );
}

export default function Hero() {
  const { hero, person } = site;
  const heroRef = useRef(null);

  return (
    <section id="top" className="hero" ref={heroRef}>
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
            <div className="hero__photo" style={hero.imageAspect ? { aspectRatio: hero.imageAspect } : undefined}>
              <img
                src={hero.image}
                alt={hero.imageAlt ?? ""}
                fetchPriority="high"
                style={hero.imagePosition ? { objectPosition: hero.imagePosition } : undefined}
              />
            </div>
            {hero.highlights?.map((h, i) => (
              <HighlightCard
                key={h.title}
                highlight={h}
                index={i}
                draggable={Boolean(hero.draggableHighlights)}
                boundsRef={heroRef}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
