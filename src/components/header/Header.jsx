import React from "react";
import "./header.css";
import Cv from "./Cv";
import me from "../../Asserts/nish.png";
import HeaderSocial from "./HeaderSocial";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Header = () => {
  return (
    <header>
      <div className="container container_header" id="Home">
        <h5>Hello I'm</h5>
        <h1>Nisanth</h1>
        <h5 className="text-light">Front-end Developer</h5>

        <HeaderSocial />
        <a href="#Contact" className="scroll-down">
          <MdOutlineDoubleArrow className="down_arrow" />
        </a>
        <div className="me">
          <img className="nish" src={me} alt="me" />
        </div>
        <Cv />
      </div>
    </header>
  );
};

export default Header;
