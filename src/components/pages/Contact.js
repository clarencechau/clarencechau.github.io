import React, { useState, useEffect } from "react";
import MyButton from "../component/Button";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import { motion } from "framer-motion";
import Formspree from "../component/Formspree";

function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  const showMobile = () => {
    if (window.innerWidth <= 960) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    showMobile();
  }, []);

  window.addEventListener("resize", showMobile);

  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="back-button-container">
        <MyButton className="back-button" link="/">
          <div className="back-text">Back</div>
          <div className="back-icon">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </MyButton>
      </div>

      <div className="contact-container">
        {!isMobile && (
          <div className="contact-pictures">
            <img
              className="contact-picture"
              src="../../images/pic1.jpg"
              alt=""
            />
            <img
              className="contact-picture"
              src="../../images/pic4.jpg"
              alt=""
            />
            <img
              className="contact-picture"
              src="../../images/pic3.jpg"
              alt=""
            />
          </div>
        )}
        <div className="contact-content">
          <div className="contact-tag">
            &lt; &nbsp; contact &nbsp;/ &nbsp;&gt;
          </div>
          <div className="contact-text">
            <div className="lets-connect">Let's Connect</div>
            <p>
              Feel free to shoot me a quick message, as I am always happy to
              meet new people and opportunites! You can contact me via email at:
            </p>

            <a href="mailto:clarence.comsci@gmail.com" className="connect-email">
              clarence.comsci@gmail.com
            </a>

            <p>or fill out the form below as well. Thanks for visiting! 😊</p>
            <Formspree />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
