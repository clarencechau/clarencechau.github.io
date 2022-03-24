import Footer from "../Footer";
import "./About.css";
import MiniCard from "../MiniCard";

function About() {
  return (
    <>
      <div className="about">
        <div className="sides">
          <img className="picture" src="../images/megany.png" />
          <div className="information">
            <h1>Things I love to Do</h1>
            {/* <div className="things-i-enjoy">
              <MiniCard image="fa fa-futbol" title="Sports" />
              <MiniCard image="fa fa-spotify" title="Music" />
              <MiniCard image="fa fa-glasses" title="Learning" />
              <MiniCard image="fa fa-city" title="Being Adventurous" />
            </div> */}
            <h3>megan</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
