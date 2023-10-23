import { React, useEffect, useRef, useState } from "react";
import MyButton from "../component/Button";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = [
    {
      name: "UTimetable",
      category: "Java",
      img: "../images/tech/uoft.png",
      link: "https://github.com/clarencechau/UTimetable",
    },
    {
      name: "Three Musketeers",
      category: "Java",
      img: "../images/tech/3musketeers.png",
      link: "https://github.com/clarencechau/ThreeMusketeers",
    },
    {
      name: "Task Application",
      category: "React Native",
      img: "../images/tech/taskmanagerapp.png",
      link: "https://github.com/clarencechau/Task-Application",
    },
    {
      name: "Meepo is You",
      category: "Python",
      img: "../images/tech/meepoisyou.png",
      link: "https://github.com/clarencechau/Meepo-Is-You",
    },
    {
      name: "Gungeon",
      category: "Java",
      img: "../images/tech/gungeon.png",
      link: "https://github.com/clarencechau/Gungeon",
    },
    {
      name: "Picture Manipulation",
      category: "Python",
      img: "../images/tech/toronto.jpg",
      link: "https://github.com/clarencechau/picture-manipulation",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);
  const [activeProject, setActiveProject] = useState();

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

  const handleProjectHover = (project) => {
    setActiveProject(project);
  };

  const handleClick = (site) => {
    window.open(site, "_blank");
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
              onMouseEnter={() => handleProjectHover(project)}
              onMouseLeave={() => handleProjectHover(null)}
              onClick={() => handleClick(project.link)}
            >
              <hr />
              <div className="project-item-text">
                <div className="subtext-name">{project.name}</div>
                <div className="subtext-skill">{project.category}</div>
              </div>
            </div>
          ))}
        </div>
        {!isMobile && (
          <div className="project-image-container">
            {projects.map((project, index) => (
              <motion.img
                key={index}
                className="hover-image"
                src={project.img}
                alt={project.name}
                initial={{ opacity: 0 }}
                animate={{
                  opacity:
                    activeProject && project.name === activeProject.name
                      ? 1
                      : 0,
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Portfolio;
