import React from "react";
import AdventureGame from "../Images/AdventureGame.png";

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

      <a href="../Pages/LanguageMap/Map.html">
        <div className="list" id="dogs">
          <img
            src="../Images/Map.png"
            className="img-thumb"
            alt="LanguageMap"
            id="languageMap"
          />
          <p className="projects">
            Language Map - An interactive map showing the various languages of
            Europe over history.
          </p>
        </div>
      </a>

      <a href="../Pages/Calculator/Calculator.html">
        <div className="list">
          <img
            src="../Images/Calc.png"
            className="img-thumb"
            alt="Calculator"
          />
          <p className="projects">
            Calculator - A functional calculator with addition, subtraction,
            multiplication, division, equals, percent, backspace, and a clear
            option.
          </p>
        </div>
      </a>

      <a href="../Pages/Dog/dog.html">
        <div className="list" id="dogs">
          <img
            src="../Images/Dog2.png"
            className="img-thumb"
            alt="Dog Image Gallery"
            id="dog"
          />
          <p className="projects">
            Dog Image Gallery - Uses an API to select a dog breed and load
            matching images.
          </p>
        </div>
      </a>
    </div>
  );
}

export default Projects;
