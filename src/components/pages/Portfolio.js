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
import Link from "@mui/icons-material/Link";
import Place from "@mui/icons-material/Place";
import Work from "@mui/icons-material/Work";
import ThumbUp from "@mui/icons-material/ThumbUp";
import VideoViews from "../../api/VideoViews";
import VideoLikes from "../../api/VideoLikes";

function Portfolio() {
  const projects = [
    {
      name: "GoTourney (Current Project)",
      category: "NextJS, MongoDB",
      img: "../images/badminton-image.jpg",
      link: "#",
      description:
        "Developing a website that makes life easier for players and tournament hosts to create and advertise local tournaments.",
    },
    {
      name: "Gungeon",
      category: "Java, Greenfoot",
      img: "../images/tech/gungeon.png",
      link: "https://github.com/clarencechau/Gungeon",
      description:
        "Travel through chambers/rooms, shooting enemies and avoiding traps to beat the game with multiple save files and checkpoints.",
    },
    {
      name: "UTimetable",
      category: "Java",
      img: "../images/tech/uoft.png",
      link: "https://github.com/clarencechau/UTimetable",
      description:
        "Application allowing University of Toronto students to compare timetables with their friends in order to find mutual free timeslots.",
    },
    {
      name: "Meepo is You",
      category: "Python",
      img: "../images/tech/meepoisyou.png",
      link: "https://github.com/clarencechau/Meepo-Is-You",
      description:
        "Get Meepo to the finish flag by going through different obstacles and rooms, by moving word blocks that affect the rules of the game.",
    },
    {
      name: "Picture Manipulation",
      category: "Python",
      img: "../images/tech/toronto.jpg",
      link: "https://github.com/clarencechau/picture-manipulation",
      description:
        "Image editing applicataion allowing mirroring photos, changing saturation, and manipulating the loss levels after transformations.",
    },
  ];

  const experience = [
    {
      name: "Data Engineer",
      category: "Python, SQL, Spark, MinIO, Cloud",
      img: "../images/tech/scotiabank.png",
      link: "http://www.aireum.ca/",
      description:
        "Incoming data engineer intern on the Canadian Banking team, focusing on customer insight and data analytics.",
    },
    {
      name: "Software Engineer",
      category: "React, Typescript, Java, SQL",
      img: "../images/tech/moneris.jpg",
      link: "https://www.moneris.com/",
      description:
        "Collaborated with a cross-functional team to architect and rebuild a merchant chargebacks application, improving efficiency, user experience, and code modernity.",
    },
    {
      name: "Full Stack Developer",
      category: "React, Javascript, Firebase",
      img: "../images/tech/aireum2.png",
      link: "http://www.aireum.ca/",
      description:
        "Engineered a full-stack administrative management system, enabling the digital showcasing and publication of Canadian national archive material.",
    },
  ];

  const videos = [
    {
      name: "My First NATIONAL Title",
      img: "../images/tech/youtube1.jpg",
      link: "https://youtu.be/obTF6hIhac8",
      description:
        "I traveled across Canada to Moncton, New Brunswick, vlogging the journey of obtaining my first Canadian national title.",
    },
    {
      name: "Can We Win Nationals AGAIN??",
      img: "../images/tech/youtube2.webp",
      link: "https://youtu.be/470llxjdbwA",
      description:
        "After obtaining my first national title, I flew to Quebec City to try and win my second back-to-back men's doubles national gold.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [activeHover, setActiveHover] = useState(projects[0]);

  const getYouTubeVideoId = (url) => {
    try {
      const urlObj = new URL(url); // Parse the URL
      if (urlObj.hostname === "youtu.be") {
        return urlObj.pathname.slice(1); // Extract the path and remove the leading '/'
      }
      throw new Error("Invalid YouTube short URL");
    } catch (error) {
      console.error("Error extracting video ID:", error.message);
      return null;
    }
  };

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
            <h2 className="title">Experience</h2>

            <div className="cards-section">
              <Grid2 container spacing={2} justifyContent="center">
                {experience.map((experience, index) => (
                  <Grid2 item xs={6} key={index}>
                    <Card sx={{ maxWidth: 360 }}>
                      <CardActionArea href={experience.link} target="_blank">
                        <CardMedia
                          component="img"
                          height="200"
                          image={experience.img}
                          alt={experience.name}
                          sx={{ scale: 1.01 }}
                        />
                        <CardContent sx={{ minHeight: 225 }} className="card">
                          <h2 className="card-header">{experience.name}</h2>
                          <Typography sx={{ color: "grey" }}>
                            {experience.category}
                          </Typography>
                          <p>{experience.description}</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
            </div>
            <h2 className="title">Projects</h2>
            <div className="cards-section">
              <Grid2 container spacing={2} justifyContent="center">
                {projects.map((project, index) => (
                  <Grid2 item xs={6} key={index}>
                    <Card sx={{ maxWidth: 360 }}>
                      <CardActionArea href={project.link} target="_blank">
                        <CardMedia
                          component="img"
                          height="200"
                          image={project.img}
                          alt={project.name}
                        />
                        <CardContent sx={{ minHeight: 210 }}>
                          <h2 className="card-header"> {project.name}</h2>
                          <Typography sx={{ color: "grey" }}>
                            {project.category}
                          </Typography>

                          <p>{project.description}</p>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid2>
                ))}
              </Grid2>
            </div>
            <h2 className="title">Youtube Videos</h2>
            <div className="cards-section">
              <Grid2 container spacing={2} justifyContent="center">
                {videos.map((video, index) => (
                  <Grid2 item xs={6} key={index}>
                    <Card sx={{ maxWidth: 360 }}>
                      <CardActionArea href={video.link} target="_blank">
                        <CardMedia
                          component="img"
                          height="200"
                          image={video.img}
                          alt={video.name}
                        />

                        <CardContent sx={{ minHeight: 100 }}>
                          <h4 className="card-header"> {video.name}</h4>
                          <div className="video-stats">
                            <Typography sx={{ color: "grey" }}>
                              <VideoViews
                                videoId={getYouTubeVideoId(video.link)}
                              />
                            </Typography>
                            <Typography sx={{ color: "grey", display: "flex" }}>
                              <ThumbUp sx={{ marginTop: 2, paddingRight: 1}} />
                              <VideoLikes
                                videoId={getYouTubeVideoId(video.link)}
                              />
                            </Typography>
                          </div>

                          <p>{video.description}</p>
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
            <div className="portfolio-tag">
              &lt; &nbsp; portfolio &nbsp;/ &nbsp;&gt;
            </div>

            <img
              className="headshot-square"
              src="../images/headshot.jpg"
              alt=""
            />
            <div className="github-name">Clarence Chau</div>
            <a
              href="https://github.com/clarencechau"
              target="_blank"
              className="github-link"
            >
              @clarencechau
            </a>
            <a
              href="https://www.clarencechau.com"
              target="_blank"
              className="website-link"
            >
              <Link className="link-icon" />
              <div className="link-name">https://clarencechau.com</div>
            </a>
            <div className="current-place">
              <Place className="place-icon" />
              <div className="place-name">Toronto</div>
            </div>
            <div className="current-work">
              <Work className="work-icon" />
              <div className="work-name">
                Incoming Data Engineer @ Scotiabank
              </div>
            </div>

            <div className="icons-section">
              <a
                className="social-icon-link-black linkedin"
                href="https://ca.linkedin.com/in/clarence-chau-3a827b1b7"
                target="_blank"
                aria-label="LinkedIn"
                rel="noreferrer noopener"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                className="social-icon-link-black github"
                href="https://github.com/clarencechau"
                target="_blank"
                aria-label="GitHub"
                rel="noreferrer noopener"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="social-icon-link-black youtube"
                href="https://www.youtube.com/@clarencechauu"
                target="_blank"
                aria-label="Youtube"
                rel="noreferrer noopener"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="social-icon-link-black instagram"
                href="https://www.instagram.com/clarencechauu/"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer noopener"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Portfolio;
