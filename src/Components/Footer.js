import React from "react";
import { Button } from "./Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";

function Footer() {
  const [state, handleSubmit] = useForm("xgedzjbn");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="footer-container">
      <div className="footer-row">
        <section className="footer-contact">
          <p className="footer-subscription-heading">
            If you would like to contact me, enter your email and any comments
            below.
          </p>
          <p className="footer-subscription-text">
            Thanks for stopping by my website!
          </p>
          <div className="input-area">
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xgedzjbn"
              method="post"
              className="form"
            >
              <label htmlFor="email">Email Address</label>
              <input placeholder="Email" id="email" type="email" className="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <textarea placeholder="Comments" id="message" className="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <button type="submit" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>HELLOOOO</h2>
              <Link to="/sign-up">How it works</Link>
              <Link to="/">Testimonials</Link>
            </div>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <i className="fas fa-wave-square" /> Clarence Chau
            </Link>
          </div>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to={{ pathname: "https://www.facebook.com/clementjm86" }}
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to={{
                pathname: "https://www.instagram.com/clarence.chauu/?hl=en",
              }}
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              className="social-icon-link linkedin"
              to={{
                pathname: "https://ca.linkedin.com/in/clarence-chau-3a827b1b7",
              }}
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link
              className="social-icon-link github"
              to={{ pathname: "https://github.com/clarencechau" }}
              target="_blank"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
