import { useEffect, useState } from "react";
import site from "../site.config.js";
import Icon from "./Icon.jsx";
import { useScrolled } from "../lib/hooks.js";
import "./Nav.css";

export default function Nav({ links, active, theme }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const { person, socials } = site;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`nav ${scrolled || open ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <img src={person.avatar} alt="" width="32" height="32" />
          <span>{person.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? "is-active" : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          {site.theme.showThemeToggle && (
            <button
              type="button"
              className="icon-btn"
              onClick={theme.toggle}
              aria-label={`Switch to ${theme.mode === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme.mode === "dark" ? "light" : "dark"} mode`}
            >
              <Icon name={theme.mode === "dark" ? "sun" : "moon"} size={18} />
            </button>
          )}
          <button
            type="button"
            className="icon-btn nav__menu"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} size={20} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="nav__panel" hidden={!open}>
        <nav className="container" aria-label="Mobile">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
              <Icon name="arrow-right" />
            </a>
          ))}
          <div className="nav__panel-socials">
            {socials.map((s) => (
              <a key={s.url} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="icon-btn">
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
