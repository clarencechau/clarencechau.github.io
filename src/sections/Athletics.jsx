import site from "../site.config.js";
import Section from "../components/Section.jsx";
import Icon from "../components/Icon.jsx";
import Rich from "../lib/rich.jsx";
import "./Athletics.css";

export default function Athletics({ id, index }) {
  const a = site.athletics;

  return (
    <Section id={id} index={index} eyebrow={a.eyebrow} title={a.title}>
      <div className="athletics">
        {a.image && (
          <figure className="athletics__media reveal">
            <img src={a.image} alt={a.imageAlt ?? ""} loading="lazy" />
            {a.stat && (
              <figcaption className="stat">
                <span className="stat__value">{a.stat.value}</span>
                <span className="stat__label">{a.stat.label}</span>
              </figcaption>
            )}
          </figure>
        )}

        <div className="athletics__copy reveal">
          {a.intro && (
            <p className="athletics__intro">
              <Rich text={a.intro} />
            </p>
          )}
          <ul className="achievements">
            {a.achievements?.map((x) => (
              <li key={`${x.year}-${x.title}`} className="achievement">
                <span className="achievement__icon">
                  <Icon name={x.icon ?? "trophy"} size={18} />
                </span>
                <span className="achievement__text">
                  <strong>{x.title}</strong>
                  <small>{x.detail}</small>
                </span>
                {x.year && <span className="achievement__year">{x.year}</span>}
              </li>
            ))}
          </ul>
          {a.outro && (
            <p className="athletics__outro">
              <Rich text={a.outro} />
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
