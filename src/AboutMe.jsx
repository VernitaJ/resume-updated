import React from "react";

const AboutMe = props => {
  console.log(props);

  return (
    <div className="resume-block">
      <h2 className="resumeHeading">{props.title}</h2>
      <p className="resumeDetail">{props.children}</p>
      <div />
    </div>
  );
};

export default AboutMe;
