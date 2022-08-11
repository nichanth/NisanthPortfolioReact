import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a
        href="https://www.linkedin.com/in/nisanth-b-864133138/"
        target="blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/nichanth" target="blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a
        href="https://www.instagram.com/__nichanth__/?hl=en"
        target="blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
