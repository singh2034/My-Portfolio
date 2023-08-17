import React from "react";
import "./techstack.css";
import Fade from "react-reveal/Fade";
import { TechStackList } from "../../utils/techstacklist/TechStackList";

const TechStack = () => {
  return (
    <>
      <div className="container techstack" id="skills">
        <Fade>
          <h2 className="col-12 mt-3 mb-1 text-center">Technologies Stack</h2>
          <hr />
          <p className="pb-3 text-center">
            👉🏽 Including Programming Languages, Frameworks, DataBases, front-end
            and back-end tools and APIs.
            <span className="text-danger"> *In Learning Phase/**Basics</span>
          </p>
        </Fade>
        <div className="row">
          {TechStackList.map((tech) => (
            <Fade right>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h6>{tech.name}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechStack;
