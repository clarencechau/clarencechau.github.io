import site from "../site.config.js";
import Section from "../components/Section.jsx";
import Icon from "../components/Icon.jsx";
import Rich from "../lib/rich.jsx";
import "./About.css";

export default function About({ id, index }) {
  const a = site.about;
  const photos = (a.photos ?? []).slice(0, 4);

  return (
    <Section id={id} index={index} eyebrow={a.eyebrow} title={a.title}>
      <div className="about">
        <div className="about__copy reveal">
          {a.lead && (
            <p className="about__lead">
              <Rich text={a.lead} />
            </p>
          )}
          {a.paragraphs?.map((p, i) => (
            <p key={i}>
              <Rich text={p} />
            </p>
          ))}

          {a.facts?.length > 0 && (
            <dl className="facts">
              {a.facts.map((f) => (
                <div key={f.label} className="fact">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {photos.length > 0 && (
          <div className={`collage collage--${photos.length} reveal`}>
            {photos.map((p, i) => (
              <figure key={p.src} className={`collage__item collage__item--${i}`}>
                <img src={p.src} alt={p.alt ?? ""} loading="lazy" />
              </figure>
            ))}
          </div>
        )}
      </div>

      {a.skills?.length > 0 && (
        <div className="skills reveal">
          <h3 className="subheading">{a.skillsTitle}</h3>
          <ul className="skills__list">
            {a.skills.map((s) => {
              const inner = (
                <>
                  {s.icon && <Icon name={s.icon} size={16} />}
                  {s.name}
                </>
              );
              return (
                <li key={s.name}>
                  {s.url ? (
                    <a href={s.url} target="_blank" rel="noreferrer" className="chip">
                      {inner}
                    </a>
                  ) : (
                    <span className="chip">{inner}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </Section>
  );
}
