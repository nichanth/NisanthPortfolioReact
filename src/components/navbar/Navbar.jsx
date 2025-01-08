import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        <br/>
       
        <div className="social">
          <a href="https://www.facebook.com/nisanth.bayamariyan">
            <img src="/facebook.png" alt="facebook logo"></img>
          </a>
          <a href="https://www.instagram.com/__nichanth__/">
            <img src="/instagram.png" alt="instagram logo"></img>
          </a>
          <a href="https://www.linkedin.com/in/nisanth-b-864133138/">
            <img src="/linkedin.png" alt="linkedin logo"></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
