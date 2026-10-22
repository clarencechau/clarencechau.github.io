import Rich from "../lib/rich.jsx";

/** Shared section wrapper: "01 — about" eyebrow + title, then content. */
export default function Section({ id, index, eyebrow, title, aside, className = "", children }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <header className="section__header reveal">
          <div>
            <p className="eyebrow">
              <span className="eyebrow__num">{String(index).padStart(2, "0")}</span>
              <span className="eyebrow__line" aria-hidden="true" />
              {eyebrow}
            </p>
            <h2 className="section__title">
              <Rich text={title} />
            </h2>
          </div>
          {aside}
        </header>
        {children}
      </div>
    </section>
  );
}
