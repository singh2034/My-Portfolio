import React from "react";
import "./about.css";
import Business from "../../assets/images/My Image.png";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={Business} alt="Business-profile" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h2>About Me</h2>
            <p>
              I am an enthusiastic individual who recently graduated with a
              B.COM degree and possess a strong foundation in MERN stack
              development. My skill set includes proficiency in HTML, CSS,
              JavaScript, and MERN Stack Development. Despite having limited
              professional experience, I am extremely eager to apply my
              knowledge and skills to real-world projects. I possess a natural
              ability to swiftly learn and adapt to new technologies, enabling
              me to remain current in the ever-evolving field of web
              development. Additionally, I enjoy playing football to uphold a
              well-balanced lifestyle and maintain my fitness.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
