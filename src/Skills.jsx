import React from "react";

const Skills = ({ title, value }) => {
  console.log(title, value);

  return (
    <div className="progressBar">
      <h4>{title}</h4>
      <div className="progressBarContainer">
        <div className={`progressBarValue value-${value}`} />
      </div>
    </div>
  );
};

export default Skills;
