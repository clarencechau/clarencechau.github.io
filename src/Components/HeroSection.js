import React from "react";
import '../App.css';
import { Button } from "./Button";
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/backgroundvideo3.mp4" autoPlay loop muted/>
      <h1>Hello world!</h1>
      <p>Welcome to my website!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          GitHub <i className='fab fa-github' />
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          LinkedIn <i className='fab fa-linkedin' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
