import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/backgroundvideo.mp4" autoPlay loop muted />
      <h1>Hello world!</h1>
      <p>Welcome to my website!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link={{ pathname: "https://github.com/clarencechau"}}
          target="_blank"
        >
          GitHub <i className="fab fa-github" />
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link={{ pathname: "https://ca.linkedin.com/in/clarence-chau-3a827b1b7"}}
          target="_blank"
        >
          LinkedIn <i className="fab fa-linkedin" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
