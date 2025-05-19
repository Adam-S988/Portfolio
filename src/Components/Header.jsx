import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <a href="/Portfolio/Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
    </div>
  );
}

export default Header;
