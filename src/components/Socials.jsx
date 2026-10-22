import site from "../site.config.js";
import Icon from "./Icon.jsx";

export default function Socials({ className = "" }) {
  return (
    <ul className={`socials ${className}`}>
      {site.socials.map((s) => (
        <li key={s.url}>
          <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} title={s.label} className="icon-btn">
            <Icon name={s.icon} size={18} />
          </a>
        </li>
      ))}
    </ul>
  );
}
