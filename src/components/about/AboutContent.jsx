import React ,{ useRef }from "react";
import "./about.scss";
import { motion, useScroll, useTransform } from "framer-motion";
const AboutContent = () => {
    const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  return (
    <div className="about_content" style={{ background: "linear-gradient(180deg,rgb(19, 19, 41),#0c0c1d)" }}>
      <motion.h2 style={{marginTop:0}}>
        As a passionate and detail-oriented web developer, I bring a diverse set
        of technical skills and hands-on experience to create dynamic,
        user-centered web applications. My expertise spans front-end and
        back-end technologies, allowing me to design and build complete,
        scalable web solutions
      </motion.h2>
    

      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    
      <div style={{zIndex:3}} >
          <img src="/aboutpage.png" alt=""  />
        </div>
    </div>
  );
};

export default AboutContent;
