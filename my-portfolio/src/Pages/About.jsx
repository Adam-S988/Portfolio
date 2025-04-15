import React from "react";
import AdamPic from "../Images/Adam.jpg";

function About() {
  return (
    <div>
      <h1 class="aboutTitle">Hello, I'm Adam!</h1>
      <p className="about">
        <img src={AdamPic} id="aboutPic" alt="Adam" />
        I'm a software development student at Keyin College in St. John's,
        Newfoundland. This site showcases some of the projects I've built so
        far. Some of these programs are from school projects while others are
        based on various tutorials, with unique twists to make them my own. I
        have learned a lot about web design and aspire to continue learning and
        create modern, easy-to-use websites. Outside of school, I aspire to
        learn more about how to incorporate my interests of video games and
        languages into practice.
      </p>
    </div>
  );
}

export default About;
