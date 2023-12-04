import { React, useEffect, useRef, useState } from "react";
import MyButton from "../component/Button";
import {
  faArrowTrendUp,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      name: "Gungeon",
      category: "Java",
      img: "../images/tech/gungeon.png",
      link: "https://github.com/clarencechau/Gungeon",
    },
    {
      name: "UTimetable",
      category: "Java",
      img: "../images/tech/uoft.png",
      link: "https://github.com/clarencechau/UTimetable",
    },
    {
      name: "Meepo is You",
      category: "Python",
      img: "../images/tech/meepoisyou.png",
      link: "https://github.com/clarencechau/Meepo-Is-You",
    },
    {
      name: "Picture Manipulation",
      category: "Python",
      img: "../images/tech/toronto.jpg",
      link: "https://github.com/clarencechau/picture-manipulation",
    },
  ];

  const experience = [
    {
      name: "Moneris",
      category: "React, Typescript, Java, SQL",
      img: "../images/tech/moneris.jpg",
      link: "https://www.moneris.com/",
    },
    {
      name: "Aireum",
      category: "React, Javascript, Firebase",
      img: "../images/tech/aireum.jpg",
      link: "http://www.aireum.ca/",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeHover, setActiveHover] = useState(projects[0]);
  const [isProject, setIsProject] = useState(true);
  console.log(activeHover);

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
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.3;
    }
    const videoElement = document.getElementById("bgvid");
    if (videoElement) {
      videoElement.play();
    }
  }, []);

  const handleHoverProject = (project) => {
    setActiveHover(project);
    setIsProject(true);
  };

  const handleHoverExperience = (experience) => {
    setActiveHover(experience);
    setIsProject(false);
  };

  const handleClick = (site) => {
    window.open(site, "_blank");
    console.log("opened");
  };

  return (
    <motion.div
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="back-button-container">
        <MyButton className="back-button" link="/">
          <div className="back-text-portfolio">BACK</div>
          <div className="back-icon-portfolio">
            <FontAwesomeIcon icon={faArrowTrendUp} />
          </div>
        </MyButton>
      </div>

      <video
        src="/videos/backgroundvideo2.mp4"
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{ position: "absolute", zIndex: "-1" }}
      />
      <div className="darken-video" />
      <div className="project-list-container">
        <div className="project-list">
          <div className="project-title">PROJECTS</div>
          {projects.map((project, index) => (
            <div
              className="project-item"
              key={index}
              onMouseEnter={() => handleHoverProject(project)}
              onClick={() => handleClick(project.link)}
            >
              <hr />

              <div className="project-item-text">
                <div className="subtext-name">
                  <i
                    className="fab fa-github"
                    style={{
                      "padding-right": "10px",
                    }}
                  ></i>{" "}
                  {project.name}
                </div>
                <div className="subtext-skill">{project.category}</div>
              </div>
            </div>
          ))}

          <div className="experience-title">EXPERIENCE</div>
          {experience.map((experience, index) => (
            <div
              className="project-item"
              key={index}
              onMouseEnter={() => handleHoverExperience(experience)}
              onClick={() => handleClick(experience.link)}
            >
              <hr />
              <div className="project-item-text">
                <div className="subtext-name">
                  <FontAwesomeIcon
                    icon={faEarthAmericas}
                    style={{
                      "padding-right": "10px",
                    }}
                  />{" "}
                  {experience.name}
                </div>
                <div className="subtext-skill">{experience.category}</div>
              </div>
            </div>
          ))}
        </div>
        {!isMobile && (
          <div className="project-image-container">
            {isProject
              ? projects.map((project, index) => (
                  <motion.img
                    key={index}
                    className="hover-image"
                    src={project.img}
                    alt={project.name}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity:
                        activeHover && project.name === activeHover.name
                          ? 1
                          : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                ))
              : experience.map((experience, index) => (
                  <div>
                    <motion.img
                      key={index}
                      className="hover-image"
                      src={experience.img}
                      alt={experience.name}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity:
                          activeHover && experience.name === activeHover.name
                            ? 1
                            : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Portfolio;
