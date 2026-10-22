import { useEffect } from "react";
import site from "./site.config.js";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Athletics from "./sections/Athletics.jsx";
import Videos from "./sections/Videos.jsx";
import Contact from "./sections/Contact.jsx";
import { useActiveSection, useRevealOnScroll, useTheme } from "./lib/hooks.js";

/** Map of section ids (used in site.config.js `sections`) → component. */
const SECTIONS = {
  about: About,
  experience: Experience,
  projects: Projects,
  athletics: Athletics,
  videos: Videos,
  contact: Contact,
};

const sections = site.sections
  .filter((id) => SECTIONS[id] && site[id])
  .map((id, i) => ({ id, index: i + 1, label: site[id].nav ?? id, Component: SECTIONS[id] }));

export default function App() {
  const theme = useTheme(site.theme.defaultMode);
  const active = useActiveSection(sections.map((s) => s.id));
  useRevealOnScroll(site.theme.animations);

  // Keep the accent in sync with the config while developing (hot reload).
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", site.theme.accent);
  }, []);

  // Browsers try to jump to a #hash before React has rendered — retry once mounted.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    // Jump again after fonts/images settle, since they can shift the layout.
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    jump();
    document.fonts?.ready.then(jump);
    window.addEventListener("load", jump, { once: true });
    return () => window.removeEventListener("load", jump);
  }, []);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav links={sections} active={active} theme={theme} />
      <main id="main">
        <Hero />
        {sections.map(({ id, index, Component }) => (
          <Component key={id} id={id} index={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}
