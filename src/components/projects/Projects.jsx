import React, { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Love without Reason",
    img: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    desc: "This is a surgery management and screening application primarily designed for children affected by lip and palate disorders",
  },
  {
    id: 2,
    title: "Microservice",
    img: "https://www.mindinventory.com/blog/wp-content/uploads/2023/05/Microservices-Architecture.webp",
    desc: "Developed a communication microservice to manage and streamline communication across all projects within the organization. This service will ensure consistent messaging, enhance collaboration, and provide a centralized platform for handling notifications, alerts, and updates in real-time. It will be scalable and adaptable to meet the diverse communication needs of various teams and projects",
  },
  {
    id: 3,
    title: "Flames Product",
    img: "https://cdn.mindmajix.com/blog/images/soql-of-salesforce-050819.png",
    desc: "Flames is a student, hostel, and university management application where I have implemented Salesforce Apex API integration in Node.js along with payment gateway integrations",
  },
  {
    id: 4,
    title: "Kennovate Product",
    img: "https://www.mindinventory.com/blog/wp-content/uploads/2023/05/Microservices-Architecture.webp",
    desc: " I worked on microservices with a state manager, admin panel, and payment integrations in the Node.js layer, where the state manager provides configurations based on client-specific needs. The microservices architecture allowed for scalability and flexibility, enabling efficient handling of various administrative tasks, user management, and payment processing. The admin panel was designed for ease of use, allowing administrators to monitor and manage user activity, payment transactions, and system configurations. Additionally, the integration with external payment gateways ensured secure and seamless transactions for users",
  },
  {
    id: 5,
    title: "BAM Product",
    img: "https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png",
    desc: "BAM is a cinema-based product where users can create their own portfolios. It enables efficient searching for individuals based on specific requirements, online auditions, and AI/ML integrations for script analysis. The platform also features dynamic search for created requirements, network pages, news feeds, community sections, and more, enhancing collaboration and engagement within the industry.",
  },
  {
    id: 6,
    title: "Portfolio",
    img: "https://i.ytimg.com/vi/1vKiPwEYbyk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDmHbgmd8TiJMinJdqKSQ8S1L5DqQ",
    desc: "I created my own portfolio using React.js, Framer Motion, and SCSS. The portfolio showcases my skills and projects with smooth animations and a responsive design. I utilized Framer Motion to add interactive elements and transitions, enhancing the user experience. The layout is fully customizable and optimized for both desktop and mobile views. The styling is managed with SCSS for better maintainability and scalability. This project highlights my proficiency in front-end development and my ability to create dynamic, visually appealing user interfaces",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="single" ref={ref}>
      <motion.div className="container">
        <motion.div className="imageContainer">
          <motion.img src={item.img} alt={item.title} />
        </motion.div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
