import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import ExperienceDest from "../../containers/experience/ExperienceDest";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

function Experience(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade bottom duration={2000} distance="40px">
          <div className="heading-div">
            <div className="heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Experience
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                {experience.description}
              </h3>
            </div>
          </div>
        </Fade>
        <ExperienceDest theme={props.theme} />
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Experience;
