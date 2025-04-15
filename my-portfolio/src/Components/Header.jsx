import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  console.log("App component rendering");
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Projects">Projects</Link>
    </div>
  );
}

export default Header;
