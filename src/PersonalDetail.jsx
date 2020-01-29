import React from "react";

const PersonalDetail = props => {
  console.log(props);

  return (
    <div>
      <h5 className="resume">{props.title}</h5>
      <p className="resume-indent">{props.children}</p>
    </div>
  );
};

export default PersonalDetail;
