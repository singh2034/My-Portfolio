import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { useTheme } from "../../context/ThemeContext";
import Resume from "../../assets/docs/FSWD Resume.pdf";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsFiletypePdf,
} from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
  const [theme, setTheme] = useTheme();
  // handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill color="#fff" size={20} />
          ) : (
            <BsFillSunFill color="#fff" size={20} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi, 👋 I'm a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Web Developer !",
                    "MERN Stack Developer !",
                    "React-Native Developer !",
                  ],
                  autoStart: true,
                  delay: 50,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://github.com/singh2034"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillGithub size={30} /> My GitHub
              </a>
              <a
                href={Resume}
                download="Aayush_Resume.pdf"
                className="btn btn-cv"
              >
                <BsFiletypePdf size={25} />
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
