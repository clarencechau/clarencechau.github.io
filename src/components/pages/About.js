import React, { useState, useEffect } from "react";
import MyButton from "../component/Button";
import { faArrowTrendUp, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css";
import Block from "../component/Blocks";
import { motion } from "framer-motion";

function About() {
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
      className="about"
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
      <div className="about-container">
        {!isMobile && (
          <div className="about-pictures">
            <img className="about-picture" src="../../images/pic2.jpg" alt="" />
            <img className="about-picture" src="../../images/pic5.jpg" alt="" />
            <img className="about-picture" src="../../images/pic6.jpg" alt="" />
          </div>
        )}

        <div className="about-content">
          <div className="about-tag">&lt; &nbsp; about &nbsp;/ &nbsp;&gt;</div>
          <div className="header">
            <img className="head" src="../images/headshot.jpg" alt="" />
            <div className="header-content">
              <div className="header-name">Clarence Chau</div>
              <div class="ring-container-about">
                <div class="ringring-about"></div>
                <div class="circle-about"></div>
              </div>
              <h className="location-about">Currently in Toronto, ON</h>
            </div>
          </div>
          <div className="about-text">
            <h3>
              Software engineer with a passion for designing and programming
              full-stack websites / applications.
            </h3>
            <p>
              👋 Hello! I'm Clarence, a Software Engineer with proficiency in
              React, TypeScript, and Java, based in Toronto, Ontario. I am also
              a student at the University of Toronto, pursuing a degree in
              Computer Science, Mathematics, and Statistics.
            </p>
            <p>
              But there's more to me than just academics and coding. On the
              athletic side, I'm a nationally-ranked badminton player. I've had
              the privilege of representing Canada on the junior national team
              and currently hold the second-place ranking in the country for
              Under-23 Men's Doubles.
            </p>
            <p>
              Both my academic and athletic experiences have armed me with
              indispensable qualities like discipline, punctuality, and
              leadership, and I'm eager to bring them into any team setting.
            </p>

            <h4>Experience</h4>
            <p>
              Over my lasts couple years of studying, I have had the opportunity
              to work as a software engineer at Aireum and Moneris. Both these
              organizations have given me valuable experiences in full-stack
              development, allowing me to work and grow my skillset while
              working with different team dynamics.
            </p>
            <p>
              I can say that after working at my previous occupations, my adept
              skills and technology I acquired from them notably lie in:
            </p>
            <div className="block-items">
              <Block
                src="../images/tech/react.png"
                path="https://react.dev/"
                target="_blank"
                className="block-image-30"
              />
              <Block
                src="../images/tech/typescript.png"
                path="https://www.typescriptlang.org/"
                target="_blank"
                className="block-image-35"
              />
              <Block
                src="../images/tech/java.png"
                path="https://www.java.com/en/"
                target="_blank"
                className="block-image-45"
              />
              <Block
                src="../images/tech/sql.png"
                path="https://www.mysql.com/"
                target="_blank"
                className="block-image-40"
              />
              <Block
                src="../images/tech/firebase.png"
                path="https://firebase.google.com/"
                target="_blank"
                className="block-image-70"
              />
              <Block
                src="../images/tech/javascript.png"
                path="https://www.javascript.com/"
                target="_blank"
                className="block-image-70"
              />
              <Block
                src="../images/tech/postman.png"
                path="https://www.postman.com/"
                target="_blank"
                className="block-image-30"
              />
              <Block
                src="../images/tech/ssms.png"
                path="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16"
                target="_blank"
                className="block-image-60"
              />
              <Block
                src="../images/tech/html.png"
                path="https://html.com/"
                target="_blank"
                className="block-image-70"
              />
              <Block
                src="../images/tech/css.png"
                path="https://www.css3.com/"
                target="_blank"
                className="block-image-70"
              />
            </div>
            <h4>Athletic Career</h4>
            <p>
              Having been a top national athlete since the age of 13, badminton
              has always been a big part of my life. I have gained so much
              competitive experience, friends, and transferable skills from this
              sport, I am proud to have met many accomplishments that I would
              like to share:
            </p>
            <ul>
              <li>Currently ranked 2nd in Canada for U23 boys doubles</li>
              <li>Former member of the Canadian junior national team</li>
              <li>Ranked 2nd in Canada for U17 boys doubles</li>
              <li>Ranked 4th in Canada for U17 boys singles</li>
              <li>U17 boys doubles Ontario provincial champion</li>
            </ul>
            <p>
              These accomplishments were forged through countless hours in the
              gym, where I relentlessly pursued self-improvement to become the
              best player I can be. This mentality is seamlessly transferable to
              my approach to coding. I invest substantial time and effort into
              learning and honing my skills, striving continually to evolve as a
              programmer.
            </p>
            <h4>Get in Touch</h4>
            <p>
              Thanks for reading some of the important things in my life! If you
              would like to know more about me, or to get in touch, don't be shy
              to send me an email at
            </p>
            <a href="mailto:clarence.comsci@gmail.com" className="about-email">
              clarence.comsci@gmail.com
            </a>
          </div>
          <MyButton className="connect-button" newWindow="" link="/contact">
            Let's Connect{" "}
            <FontAwesomeIcon className="chat-icon" icon={faComment} />
          </MyButton>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
