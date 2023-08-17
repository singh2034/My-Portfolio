import React from "react";
import "./workexp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
    <>
      <div className="work" id="work-exp">
        <div className="container work-exp">
          <h2 className="col-12 mt-3 mb-1 text-center">Work Exprience</h2>
          <hr />
          <VerticalTimeline lineColor="#000">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#fff", color: "#000" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="Jan, 2023 - Jun, 2023"
              iconStyle={{ background: "#ff0090", color: "#fff" }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">
                Front-End Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                LBYH, Lucknow, UttarPradesh
              </h4>
              <p>
                I undertook the role of an imaginative Front-End Developer
                Intern, focusing on crafting websites with exceptional user
                interfaces. My internship involved contributing to an
                educational website where I dedicated significant effort towards
                fulfilling dynamic requirements.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default WorkExp;
