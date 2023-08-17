import React from "react";
import "./project.css";
import Fade from "react-reveal/Fade";
import ecom from "../../assets/images/e-commerce.png";

const Project = () => {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center">Projects</h2>
        <hr />
        <p className="pb-3 text-center">
          👉🏽 Here are my top 3 recent projects with live links and source code
        </p>
        {/* card design */}
        <Fade>
          <div className="row" id="ads">
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={ecom} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-2">
                  <span className="card-details-badge">MongoDB</span>
                  <span className="card-details-badge">Express.js</span>
                  <span className="card-details-badge">React.js</span>
                  <span className="card-details-badge">Node.js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">E-commerce WebApp</h6>
                  </div>
                  <a className="ad-btn" href="/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={ecom} alt="project2" />
                </div>
                <div className="card-image-overly m-auto mt-2">
                  <span className="card-details-badge">MongoDB</span>
                  <span className="card-details-badge">Express.js</span>
                  <span className="card-details-badge">React.js</span>
                  <span className="card-details-badge">Node.js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Blog WebApp</h6>
                  </div>
                  <a className="ad-btn" href="/">
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img src={ecom} alt="project3" />
                </div>
                <div className="card-image-overly m-auto mt-2">
                  <span className="card-details-badge">MongoDB</span>
                  <span className="card-details-badge">Express.js</span>
                  <span className="card-details-badge">React.js</span>
                  <span className="card-details-badge">Node.js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">E-commerce WebApp</h6>
                  </div>
                  <a className="ad-btn" href="/">
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Project;
