import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header_social">
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
