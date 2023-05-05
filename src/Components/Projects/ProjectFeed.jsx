import Project from "./Project";
import "../../Styles/ProjectFeed.css";
import { useState } from "react";
// import next from "../../Assets/next.png";
// import back from "../../Assets/back.png";
import initiative from "../../Assets/game-example.png";
import betbook from "../../Assets/login-example.png";
import frameFitness from "../../Assets/homepage-still.png";

const projects = [
  {
    title: "Initiative",
    description:
      "Create characters, find monsters using D&D 5e API, and track initiative and stats for Dungeons and Dragons encounters.",
    tech: [
      // "HTML",
      // "CSS",
      // "Javascript",
      "React",
      "Redux Toolkit",
      // "Express",
      "PSQL",
      // "Axios",
      // "Bcrypt",
    ],
    url: "https://initiative.herokuapp.com/",
    github: "https://github.com/Smoopfrog/Initiative",
    image: initiative,
  },
  {
    title: "Betbook",
    description:
      "Keep track of your bets and stats with this easy to use React Native mobile app",
    tech: [
      "React Native",
      "React Navigation",
      "Expo",
      "Firebase",
      "Redux Toolkit",
      // "Moment",
    ],
    image: betbook,
    url: null,
    github: "https://github.com/Smoopfrog/bet-book",
  },
  {
    title: "Frame Fitness",
    description:
      "Signup or login to choose from a library of 1300+ exercises categorized by chest, arms, legs, forearms, lower legs, back, shoulders, neck, and waist!",
    tech: [
      // "HTML",
      "React",
      // "SASS",
      "Material UI",
      // "Express",
      "Psql",
      "Axios",
      "Socket.io",
    ],
    image: frameFitness,
    url: null,
    github: "https://github.com/Smoopfrog/frame-fitness ",
  },
];

const ProjectFeed = () => {
  return (
    <section className="projects-container" id="projects">
      <div className="div-container">
        <h1 className="section-title">Projects</h1>
        {projects.map((project, index) => {
          return <Project project={project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default ProjectFeed;
