import React from "react";
import AdamPic from "../Images/Adam.jpg";

function Main() {
  console.log("Main component rendering");
  return (
    <div className="App">
      <h1>Hello, I'm Adam!</h1>
      <h2>A coding portfolio</h2>
    <div className="AboutPage">
      <p className="about-text">
        <img src={AdamPic} id="aboutPic" alt="Adam" />
        I'm a recent graduate from software development at Keyin College in St. John's,
        Newfoundland. This site showcases some of the projects I've built so
        far. Some of these programs are school projects while others are
        based on various tutorials I've followed, with unique twists to make them my own.<br/>I
        have learned a lot about web design and have continued learning with the goal to 
        create modern, easy-to-use websites. I also have experience with SQL and NoSQL databases.<br/>Outside of school, I aspire to
        learn more about how to incorporate my interests of video games and
        languages into my projects.
      </p>
    </div>
    </div>
  );
}

export default Main;
