import React, { useState, useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  const [footer, setFooter] = useState(false);
  const [links, setLinks] = useState(false);

  const showFooter = () => {
    if (window.innerWidth <= 960) {
      setFooter(false);
    } else {
      setFooter(true);
    }
  };

  const showLinks = () => {
    if (window.innerWidth <= 1200) {
      setLinks(false);
    } else {
      setLinks(true);
    }
  };

  useEffect(() => {
    showLinks();
    showFooter();
  }, []);

  window.addEventListener("resize", showFooter);
  window.addEventListener("resize", showLinks);

  return (
    footer && (
      <div className="footer">
        <div className="footer-container">
          <img className="headshot" src="../images/headshot.jpg" alt="" />
          <div className="footer-text">
            Clarence Chau <br />
            Software Developer
          </div>
          <ul className="skills-text">
            <li className="skills">UX</li>
            <li className="skills">React</li>
            <li className="skills">Typescript</li>
            <li className="skills">Java</li>
          </ul>
        </div>
        {links && (
          <div className="social-icons">
            <div className="location">
              <div class="ring-container">
                <div class="ringring"></div>
                <div class="circle"></div>
              </div>
              <h>Currently in Toronto, ON</h>
            </div>
            <a
              className="social-icon-link linkedin"
              href="https://ca.linkedin.com/in/clarence-chau-3a827b1b7"
              target="_blank"
              aria-label="LinkedIn"
              rel="noreferrer noopener"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="social-icon-link github"
              href="https://github.com/clarencechau"
              target="_blank"
              aria-label="GitHub"
              rel="noreferrer noopener"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        )}
      </div>
    )
  );
};

export default Footer;
