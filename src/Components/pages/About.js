import Footer from "../Footer";
import "./About.css";
import MiniCard from "../MiniCard";

function About() {
  return (
    <>
      <div className="about">
        <div className="sides">
          <img className="picture" src="../images/myself.jpg" />
          <div className="information">
            <h1>Who am I?</h1>
            <div className="who-am-i">
              <h3>
                I am currently a second year University of Toronto student,
                striving for a degree in Computer Science, Mathematics and
                Statistics.{" "}
              </h3>
              <h3>
                One of my greatest strengths is that I love learning new things
                and gaining new skills on a daily basis.{" "}
              </h3>
              <h3>
                While having so many interests in my life, I look forward to
                pursuing a career relating to artificial intelligence, as this
                field strikes a massive interest in myself.
              </h3>
            </div>
            <h1>Things I love to Do</h1>
            <div className="things-i-enjoy">
              <MiniCard
                image="fa fa-futbol"
                title="Sports"
                description="Being a former junior national team member for badminton, sports and keeping physically active has always been a big part of my life."
              />
              <MiniCard
                image="fa fa-spotify"
                title="Music"
                description="I love to listen to music throughout the day, whether I am studying, exercising, or walking around Toronto."
              />
              <MiniCard
                image="fa fa-glasses"
                title="Learning"
                description="Learning new things has always been a big personality trait of mine. I am always ready to discover new things to add to my knowledge!"
              />
              <MiniCard
                image="fa fa-city"
                title="Being Adventurous"
                description="Exploring downtown Toronto and finding new places to eat and hang out with friends is always something I look forward to."
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
