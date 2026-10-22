import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import site from "./src/site.config.js";

const escapeHtml = (s = "") =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/** A tiny monogram favicon that follows your accent color. */
const faviconSvg = (initials, accent) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="${accent}"/><text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-size="30" font-weight="700" fill="#fff">${initials}</text></svg>`;

/** Injects values from site.config.js into index.html (title, meta, accent…). */
function siteConfigHtml() {
  return {
    name: "site-config-html",
    transformIndexHtml(html) {
      const values = {
        TITLE: escapeHtml(site.meta.title),
        DESCRIPTION: escapeHtml(site.meta.description),
        URL: escapeHtml(site.meta.url),
        IMAGE: escapeHtml(`${site.meta.url}${site.hero.image}`),
        ACCENT: escapeHtml(site.theme.accent),
        DEFAULT_MODE: escapeHtml(site.theme.defaultMode),
        FAVICON: `data:image/svg+xml,${encodeURIComponent(faviconSvg(site.person.initials, site.theme.accent))}`,
      };
      return html.replace(/%SITE_([A-Z_]+)%/g, (m, key) => values[key] ?? m);
    },
  };
}

export default defineConfig({
  plugins: [react(), siteConfigHtml()],
  // Accept both the new Vite prefix and the old Create-React-App one,
  // so an existing .env with REACT_APP_YOUTUBE_API_KEY keeps working.
  envPrefix: ["VITE_", "REACT_APP_"],
  build: { outDir: "dist" },
});
