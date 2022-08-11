import React from "react";
import "./experience.css";
import { FaAward } from "react-icons/fa";

const Experience = () => {
  return (
    <section id="Experience">
      <div className="container experience_container">
        <p>Experience I have</p>
        <h2 className="heading-exp">My Experience</h2>
        <div className="experience_cards">
          <article className="experience_card">
            <FaAward className="experience_icon" />
            <h5>Residential Buildings</h5>
            <small>4+ year's</small>
          </article>
          <article className="experience_card">
            <FaAward className="experience_icon" />
            <h5>Pre Engineered Buildings</h5>
            <small>1 year</small>
          </article>
          <article className="experience_card">
            <FaAward className="experience_icon" />
            <h5>QA/Qc-Residential</h5>
            <small>2 year's</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Experience;
