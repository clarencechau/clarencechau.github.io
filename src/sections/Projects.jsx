import site from "../site.config.js";
import Section from "../components/Section.jsx";
import Icon from "../components/Icon.jsx";
import Rich from "../lib/rich.jsx";
import "./Projects.css";

const hasLink = (url) => Boolean(url) && url !== "#";

export default function Projects({ id, index }) {
  const p = site.projects;

  return (
    <Section id={id} index={index} eyebrow={p.eyebrow} title={p.title}>
      <ul className="projects">
        {p.items.map((proj) => {
          const linked = hasLink(proj.url);
          const Tag = linked ? "a" : "div";
          const linkProps = linked ? { href: proj.url, target: "_blank", rel: "noreferrer" } : {};
          return (
            <li key={proj.name} className={`reveal ${proj.featured ? "is-featured" : ""}`}>
              <Tag className={`card project ${linked ? "is-link" : ""}`} {...linkProps}>
                {proj.image && (
                  <div className="project__media">
                    <img src={proj.image} alt="" loading="lazy" />
                    {proj.status && <span className="badge">{proj.status}</span>}
                  </div>
                )}
                <div className="project__body">
                  <h3 className="project__title">
                    {proj.name}
                    {linked && <Icon name="arrow-up-right" className="project__arrow" />}
                  </h3>
                  <p>
                    <Rich text={proj.description} />
                  </p>
                  {proj.tags?.length > 0 && (
                    <ul className="tags">
                      {proj.tags.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Tag>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
