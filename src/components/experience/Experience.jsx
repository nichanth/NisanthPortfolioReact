import React from "react";
import "./experience.scss";
import { motion } from "framer-motion";
import { MdWorkOutline } from "react-icons/md";

const Experience = () => {
  
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        staggerChildren: 0.3, 
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(255, 255, 255, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      className="experience"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="titleContainer">
        <motion.div
          className="title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Experience</h1>
          <motion.div
            className="underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      <motion.div className="listContainer" variants={containerVariants}>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
        >
          <h2>Software Engineer</h2>
          <div className="iconWrapper">
            <MdWorkOutline className="experience_icon" />
          </div>
          <p>TsquaredC</p>
          <p>Dec2022 - Present</p>
          <p>Developed scalable web applications.</p>
        </motion.div>
        <motion.div
          className="box"
          variants={boxVariants}
          whileHover="hover"
        >
          <h2>Junior Developer</h2>
          <div className="iconWrapper">
            <MdWorkOutline className="experience_icon" />
          </div>
          <p>Cornerstohn Solutions</p>
          <p>Jun2022 - Dec2022</p>
          <p>Worked on UI development and APIs.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
