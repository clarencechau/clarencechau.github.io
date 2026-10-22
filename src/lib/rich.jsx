import { Fragment } from "react";

/**
 * Renders config strings with light markup:
 *   **bold**   → <strong>
 *   *accent*   → highlighted in the accent color
 */
export default function Rich({ text }) {
  if (!text) return null;
  const parts = String(text).split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
      return <span key={i} className="accent-text">{part.slice(1, -1)}</span>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}
