import React from "react";
import AdventureGame from "../Images/AdventureGame.png";
import DogImg from "../Images/Dog2.png";
import CalcImg from "../Images/Calc.png";
import MapImg from "../Images/Map.png";
import { Routes, Route, Link } from "react-router-dom";

function Projects() {
  return (
    <div className="list-wrapper">
      <p>A collection of projects I have been working on during my studies.</p>
      <a
        href="https://github.com/Adam-S988/AdventureGame"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="list" id="dogs">
          <img
            src={AdventureGame}
            className="img-thumb"
            alt="AdventureGame"
            id="adventureGame"
          />
          <p className="projects">
            Adventure Game - An old-school text-based Adventure Game.
          </p>
        </div>
      </a>
      {/* <Link to="/projects/languagemap">
        <div className="list" id="languages">
          <img
            src={MapImg}
            className="img-thumb"
            alt="LanguageMap"
            id="language"
          />
          <p className="projects">
            Language Map - An interactive map showing the various languages of
            Europe over history.
          </p>
        </div>
      </Link> */}

      <Link to="/projects/calculator">
        <div className="list" id="dogs">
          <img src={CalcImg} className="img-thumb" alt="Calculator" id="calc" />
          <p className="projects">
            Calculator - A functional calculator with addition, subtraction,
            multiplication, division, equals, percent, backspace, and a clear
            option.
          </p>
        </div>
      </Link>

      <Link to="/projects/dogs">
        <div className="list" id="dogs">
          <img
            src={DogImg}
            className="img-thumb"
            alt="Dog Image Gallery"
            id="dog"
          />
          <p className="projects">
            Dog Image Gallery - Uses an API to select a dog breed and load
            matching images.
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Projects;
