import site from "../site.config.js";
import Icon from "./Icon.jsx";
import Socials from "./Socials.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {site.person.name}
          {site.footer?.note && <span className="footer__note"> · {site.footer.note}</span>}
        </p>
        <div className="footer__right">
          <Socials />
          <a href="#top" className="icon-btn" aria-label="Back to top" title="Back to top">
            <Icon name="arrow-up" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
