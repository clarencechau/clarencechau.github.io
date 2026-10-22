import site from "../site.config.js";
import Section from "../components/Section.jsx";
import Icon from "../components/Icon.jsx";
import Rich from "../lib/rich.jsx";
import "./Experience.css";

export default function Experience({ id, index }) {
  const e = site.experience;

  return (
    <Section id={id} index={index} eyebrow={e.eyebrow} title={e.title}>
      <ol className="timeline">
        {e.items.map((job) => (
          <li key={`${job.company}-${job.role}`} className="job reveal">
            <div className="job__logo">
              {job.logo ? <img src={job.logo} alt="" loading="lazy" /> : <span>{job.company[0]}</span>}
            </div>
            <div className="job__body">
              <div className="job__head">
                <h3 className="job__title">
                  {job.role}
                  <span className="job__at"> @ </span>
                  {job.url ? (
                    <a href={job.url} target="_blank" rel="noreferrer" className="job__company">
                      {job.company}
                      <Icon name="arrow-up-right" size={14} />
                    </a>
                  ) : (
                    <span className="job__company">{job.company}</span>
                  )}
                </h3>
                {job.period && <span className="job__period">{job.period}</span>}
              </div>
              <p className="job__desc">
                <Rich text={job.description} />
              </p>
              {job.tags?.length > 0 && (
                <ul className="tags">
                  {job.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
