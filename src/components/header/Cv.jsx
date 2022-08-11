import React from "react";
import CV from "../../Asserts/CV.pdf";

const Cv = () => {
  return (
    <div className="cv">
      <a className="btn btn-primary" href={CV}>
        Download Cv
      </a>
    </div>
  );
};

export default Cv;
