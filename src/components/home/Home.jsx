import { motion } from "framer-motion";
import "./home.scss";
import CV from "../../../public/CV.pdf"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 450,
  },
  animate: {
    x: "-200%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};
const Home = () => {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Nisanth Basuvaiyan</motion.h2>
          <motion.h1 variants={textVariants}>Node Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href={CV}>Resume</a>
            </motion.button>
            <motion.img
              src="/scroll.png"
              alt="scroll"
              variants={textVariants}
              animate="scrollButton"
            />
          </motion.div>

          <motion.div
            className="slidingTextContainer"
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            style={{marginBottom:"100px"}}
          >
            Software Developer
          </motion.div>
        </motion.div>
        {/* <div className="imageContainer">
          <img src="/profileimg.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
