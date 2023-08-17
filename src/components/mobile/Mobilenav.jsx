import React, { useState } from "react";
import "./mobilenav.css";
import { Link } from "react-scroll";
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import {
  FcHome,
  FcAbout,
  FcPortraitMode,
  FcBiohazard,
  FcReading,
  FcVideoProjector,
} from "react-icons/fc";

const Mobilenav = () => {
  const [open, setOpen] = useState(false);

  // handleOpen

  const handleOpen = () => {
    setOpen(!open);
  };

  // handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          {open ? (
            <AiOutlineMenuFold
              className="mobile-nav-icon"
              size={25}
              onClick={handleOpen}
            />
          ) : (
            <AiOutlineMenuUnfold
              className="mobile-nav-icon"
              size={25}
              onClick={handleOpen}
            />
          )}
          <span className="mobile-nav-title">I am Aayush</span>
        </div>
        {open && (
          <>
            <div className="mobile-nav-menu">
              <div className="nav-items">
                <div className="nav-item">
                  <div className="nav-link">
                    <Link
                      to="home"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcHome />
                      Home
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcAbout />
                      About
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcReading />
                      Education
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcBiohazard />
                      Tech Stack
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcVideoProjector />
                      Projects
                    </Link>
                  </div>
                  <div className="nav-link">
                    <Link
                      to="work-exp"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={100}
                      onClick={handleMenuClick}
                    >
                      <FcPortraitMode />
                      Work Experience
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Mobilenav;
