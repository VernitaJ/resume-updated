import React from "react";

const Social = (site, source) => {
  return (
    <div className="social">
      <a href={`${site}`} target="_blank" alt="this">
        <img id="linkedin" src={`${source}`} alt="vernita linkedin" />
      </a>
    </div>
  );
};

export default Social;
