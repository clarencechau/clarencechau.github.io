import { React, useEffect, useRef, useState } from "react";
import MyButton from "../component/Button";
import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Grid2 } from "@mui/material";

function Portfolio() {
  const projects = [
    {
      name: "GoTourney (Current Project)",
      category: "NextJS, MongoDB",
      img: "../images/badminton-image.jpg",
      description:
        "As a national level badminton player who plays many types of tournaments, I am developing a website that makes life easier for players and tournament hosts to create and advertise local tournaments.",
    },
    {
      name: "Gungeon",
      category: "Java",
      img: "../images/tech/gungeon.png",
      link: "https://github.com/clarencechau/Gungeon",
      description:
        "Gungeon is a remake of the classic Gungeon. The player travels through chambers/rooms, shooting enemies and avoiding traps to beat the game with multiple save files and checkpoints. It contains a store feature to allow the player to purchase stronger weapons, health refills, and ammo. Enter the Gungeon!",
    },
    {
      name: "UTimetable",
      category: "Java",
      img: "../images/tech/uoft.png",
      link: "https://github.com/clarencechau/UTimetable",
      description:
        "Application allowing University of Toronto students to compare timetables with their friends in order to find mutual free timeslots. You can use this program to find time to study with friends, create meetings for school clubs, or anything to do with collaborating with other students.",
    },
    {
      name: "Meepo is You",
      category: "Python",
      img: "../images/tech/meepoisyou.png",
      link: "https://github.com/clarencechau/Meepo-Is-You",
      description:
        'A project in Python based on a popular puzzle game "Baba is You". The goal of the game is to get Meepo to the finish flag by going through different obstacles and rooms, by moving word blocks that affect the rules of the game.',
    },
    {
      name: "Picture Manipulation",
      category: "Python",
      img: "../images/tech/toronto.jpg",
      link: "https://github.com/clarencechau/picture-manipulation",
      description:
        "A project I made with the purpose of recreating some of the basic features Adobe Photoshop provides, such as mirroring photos, changing saturation, and manipulating the loss level of the picture after the transformation has been completed.",
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
      <div className="portfolio-container">
        <div className="projects-container">
          <div className="projects">
            <div className="title">Projects</div>
            <div className="cards-section">
              <Grid2 container spacing={2} justifyContent="center">
                {projects.map((project, index) => (
                  <Grid2 item xs={6} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardActionArea href={project.link} target="_blank">
                        <CardMedia
                          component="img"
                          height="250"
                          image={project.img}
                          alt={project.name}
                        />
                        <CardContent sx={{ minHeight: 175 }}>
                          <Typography
                            gutte
                            rBottom
                            variant="h5"
                            component="div"
                          >
                            {project.name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                          >
                            {project.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
            </div>
          </div>
        </div>
        <div className="profile-container">
          <div className="profile">
            <img className="headshot-square" src="../images/headshot.jpg" alt="" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
