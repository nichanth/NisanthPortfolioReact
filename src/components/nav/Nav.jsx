import React from "react";
import "./nav.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineContacts,
} from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { GiNotebook } from "react-icons/gi";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
const Nav = () => {
  return (
    <div>
      <nav>
        <a href="#">
          <AiOutlineHome />
        </a>
        <a href="#About">
          <AiOutlineUser />
        </a>
        <a href="#Experience">
          <BiBook />
        </a>
        <a href="#Projects">
          <HiOutlinePresentationChartLine />
        </a>
        <a href="#Skills">
          <GiNotebook />
        </a>
        <a href="#Contact">
          <AiOutlineContacts />
        </a>
        {/* <a href="#About"></a> */}
      </nav>
    </div>
  );
};

export default Nav;
