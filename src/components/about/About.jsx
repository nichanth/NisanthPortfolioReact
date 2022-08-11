import React from "react";
import "./about.css";
import AboutMe from "../../Asserts/aboutme.jpg";

const About = () => {
  return (
    <section id="About">
      <h5>Get to know</h5>
      <h2 className="heading">About me</h2>
      <div className="containber about_container">
        <div className="about_me">
          <div className="aboutme_img">
            <img src={AboutMe} alt="my-img"></img>
          </div>
        </div>
        <div className="about_content">
          <p>
            I'am A Civil Engineer Who Had Interest In Web Development. So Doing
            Some Interesting Things In Front End Development And Want To Take
            Oppertunity To Do Great Things.
          </p>
          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
