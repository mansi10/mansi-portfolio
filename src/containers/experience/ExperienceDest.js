import React from "react";
import "./Experience.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { experience } from "../../portfolio";
import { Fade } from "react-reveal";

function ExperienceDest(props) {
  const theme = props.theme;
  console.log(experience);
  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="educations-header" style={{ color: theme.text }}>
            Full-Time Work Experiences
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {experience.experiences.map((degree) => {
          return <DegreeCard degree={degree} theme={theme} />;
        })}
      </div>
    </div>
  );
}

export default ExperienceDest;
