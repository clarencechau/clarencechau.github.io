import Footer from "../Footer";
import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="sides">
          <div className="picture">
            <img src="../images/megany.png" />
          </div>
          <div className="information">
            <h1>Things I Love</h1>
            <div className="things-i-enjoy">
              <div className="thing">
                <div className="image">
                  <i className="fa fa-futbol"></i>
                </div>
                <div className="image-title">Sports</div>
                <div className="image-description">
                  fsdfsddsfdsf
                </div>
              </div>
              <div className="thing">
                <div className="image">
                  <i className="fa fa-spotify"></i>
                </div>
                <div className="image-title">Music</div>
                <div className="image-description">
                  wertewt sdfs ddfs fsd  sdf sdf fsd f sdf sdf sd sdf dsfs fsdfsd fsd fsd fsdf s s sdf sd
                </div>
              </div>
              <div className="thing">
                <div className="image">
                  <i className="fa fa-glasses"></i>
                </div>
                <div className="image-title">Learning</div>
                <div className="image-description">
                  jghdjghjg
                </div>
              </div>
              <div className="thing">
                <div className="image">
                  <i className="fa fa-city"></i>
                </div>
                <div className="image-title">Going Outside</div>
                <div className="image-description">
                  cvbncv
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
