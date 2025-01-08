import React, { useRef } from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutContent from "./AboutContent";

const AboutParallex = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "300%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <div
        className="about"
        style={{ background: "linear-gradient(180deg, #111132,#0c0c1d)" }}
      >
        <motion.h1 style={{ y: yText }}>About me</motion.h1>

        <motion.div className="mountains"></motion.div>
        <motion.div style={{ y: yBg }} className="planets"></motion.div>
      
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      
      </div>
     
    </>
  );
};

export default AboutParallex;
