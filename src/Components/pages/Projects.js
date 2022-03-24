import CardItem from "../CardItem";
import Footer from "../Footer";

function Projects() {
  return (
    <>
      <div className="projects">
        <div className="cards">
          <h1>Check out some of my projects!</h1>
          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src="images/gungeon.png "
                  text="Gungeon"
                  label="Java"
                  path={{ pathname: "https://github.com/clarencechau/Gungeon" }}
                  target="_blank"
                  minitext="A remake of a popular 2-D first person shooter with a few modifications. The player must travel between dungeons while shooting enemies, and defeating boss monsters to beat the game. "
                />
                <CardItem
                  src="images/threemusketeers.png"
                  text="Three Musketeers Simulator"
                  label="Java"
                  path={{
                    pathname: "https://github.com/clarencechau/ThreeMusketeers",
                  }}
                  target="_blank"
                  minitext="A 5x5 grid board game, which can be run on both an interface or through the console. This game can be played with multiplayer or single player, with numerous computer AI difficulties."
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src="images/badmintonzone.png"
                  text="Badminton Zone"
                  label="HTML"
                  path={{ pathname: "http://www.badmintonzone.ca/" }}
                  target="_blank"
                  minitext="Co-Founder of an upcoming Canadian badminton site, where anyone interested in Canadian badminton at the highest level can find all the information needed here."
                />
                <CardItem
                  src="images/taskmanagerapp.png"
                  text="Task Manager Application"
                  label="React Native"
                  path={{
                    pathname:
                      "https://github.com/clarencechau/Task-Application",
                  }}
                  target="_blank"
                  minitext="Used open-source platform Expo to create an application to manage tasks, which can be checked off once the task has been completed. The users can also go back to check their completed tasks."
                />
                <CardItem
                  src="images/meepoisyou.png"
                  text="Meepo is You"
                  label="Python"
                  path={{
                    pathname: "https://github.com/clarencechau/Meepo-Is-You",
                  }}
                  target="_blank"
                  minitext="A remake of a popular game Baba is You. The player controls a figure to push blocks around to make action commands out of words, which then alters the rules and actions of the game."
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
