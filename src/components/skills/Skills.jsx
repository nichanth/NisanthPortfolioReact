import React from "react";
import "./skills.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Skills = () => {
  return (
    <section id="Skills">
      <div className="  bg-img ">
        <h5>Skills that I have</h5>
        <h2>My Skills</h2>
      </div>

      <div className="container  skills_container">
        <div className="skills_frontend">
          <h3>Frontend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills_backend">
          <h3>Backend Development</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Node</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Mongoose</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="skills_civil">
          <h3>Civil Engineering</h3>
          <div className="skills_content">
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>AutoCAD</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>staadPRO</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>SketchUp</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills_details">
              <BsPatchCheckFill className="skills_details-icon" />
              <div>
                <h4>Rivit Architecture</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
