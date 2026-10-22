import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./styles/global.css";
import App from "./App.jsx";

// The old site used hash routes (clarencechau.com/#/about). Send those
// links to the matching section of the new one-page layout.
const LEGACY_ROUTES = { "/about": "about", "/portfolio": "experience", "/contact": "contact", "/": "top" };
if (window.location.hash.startsWith("#/")) {
  const target = LEGACY_ROUTES[window.location.hash.slice(1)] ?? "top";
  history.replaceState(null, "", target === "top" ? window.location.pathname : `#${target}`);
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
