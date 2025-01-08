import React from "react";
import "./education.scss";
import { motion } from "framer-motion";
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <motion.div className="education">
      <motion.div className="titleContainer">
        <div className="title">
          <h1>Education</h1>
        
        </div>
      </motion.div>

      <motion.div className="listContainer">
        <div className="box">
          <div className="iconWrapper">
            <MdCastForEducation className="education_icon" />
          </div>
          <h2>HSC</h2>
          <p>Ambal Matric Hr.Sec School</p>
          <p>Sirumugai</p>
        </div>
        <div className="box">
          <div className="iconWrapper">
            <MdCastForEducation className="education_icon" />
          </div>
          <h2>Bachelor of Engineering</h2>
          <p>P.P.G Institute of Technology</p>
          <p>Coimbatore</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
