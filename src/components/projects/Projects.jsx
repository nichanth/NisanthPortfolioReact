import React from "react";
import "./projects.css";
import CRUD from "../../Asserts/CRUD.png";
import Cad1 from "../../Asserts/Cad1.pdf";
import Cad2 from "../../Asserts/Cad2.pdf";
import HOME from "../../Asserts/home.png";
import GAME from "../../Asserts/Game.png";

const Projects = () => {
  return (
    <section id="Projects">
      <h5>What have i Done</h5>
      <h2 className="heading_pro">My Projects</h2>
      <div className="container projects_container">
        <article className="projects_item">
          <div className="projects_item-img">
            <img src={CRUD} alt="crud"></img>
          </div>
          <h3>CRUD-operations</h3>
          <div className="projects_item-cta">
            <a href="https://github.com/nichanth/Form-CRUD" className="btn">
              Github
            </a>
          </div>
        </article>
        <article className="projects_item">
          <div className="projects_item-img">
            <img src={HOME} alt="pdf"></img>
          </div>
          <h3>This is a Residential Building Plan</h3>
          <h5>at Coimbaore</h5>
          <div className="projects_item-cta">
            <a href={Cad1} className="btn">
              View
            </a>
          </div>
        </article>
        <article className="projects_item">
          <div className="projects_item-img">
            <img src={HOME} alt="pdf"></img>
          </div>
          <h3>This is a Residential Building Plan</h3>
          <h5>at Coimbaore</h5>
          <div className="projects_item-cta">
            <a href={Cad2} className="btn">
              View
            </a>
          </div>
        </article>
        <article className="projects_item">
          <div className="projects_item-img">
            <img src={GAME} alt="tictactoe"></img>
          </div>
          <h3>Tic Tac Toe</h3>
          <div className="projects_item-cta">
            <a
              href="https://codesandbox.io/s/black-field-2uh1q4"
              className="btn"
            >
              Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
