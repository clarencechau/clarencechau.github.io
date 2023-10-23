import { React, useEffect, useRef, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import MyButton from "../component/Button";
import { motion } from "framer-motion";

const Home = () => {
  const [buttons, setButtons] = useState(false);
  const showButtons = () => {
    if (window.innerWidth <= 960) {
      setButtons(true);
    } else {
      setButtons(false);
    }
  };

  window.addEventListener("resize", showButtons);

  const videoRef = useRef(null);

  useEffect(() => {
    showButtons();
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
  }, []);

  return (
    <motion.div
      className="homepage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <video
        src="/videos/backgroundvideo2.mp4"
        ref={videoRef}
        autoPlay
        loop
        muted
        style={{ position: "absolute" }}
      />
      <div className="darken-video" />
      <Navbar />
      <div className="homepage-text">
        <div className="title-text">
          {/* <i className="fas fa-wave-square" /> */}
          <br />
          <div>HELLO WORLD</div>
          <div>WELCOME TO MY PORTFOLIO;</div>
        </div>
      </div>
      {buttons && (
        <div className="mobile-buttons">
          <MyButton className="explore-button" newWindow="" link="/portfolio">
            Explore <FontAwesomeIcon icon={faArrowRight} />
          </MyButton>
          <div className="small-buttons">
            <MyButton className="about-button" newWindow="" link="/about">
              About <FontAwesomeIcon icon={faArrowTrendUp} />
            </MyButton>
            <MyButton className="contact-button" newWindow="" link="/contact">
              Contact <FontAwesomeIcon icon={faArrowTrendUp} />
            </MyButton>
          </div>

          <div class="ring-container">
            <div class="ringring"></div>
            <div class="circle"></div>
          </div>
          <h>Currently in Toronto, ON</h>
        </div>
      )}
      <Footer />
    </motion.div>
  );
};

export default Home;
