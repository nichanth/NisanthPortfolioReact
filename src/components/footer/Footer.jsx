import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="footer_social">
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
      <div className="made_react">
        <small>Made with React</small>
      </div>
    </footer>
  );
};

export default Footer;