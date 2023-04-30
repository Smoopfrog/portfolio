import Project from "./Project";
import "../../Styles/ProjectFeed.css";
import { useState } from "react";
import next from "../../Assets/next.png";
import back from "../../Assets/back.png";
import initiative from "../../Assets/initiative.png";
import betbook from "../../Assets/betbook-feed.jpg";

const projects = [
  {
    title: "Initiative",
    description:
      "Create characters, find monsters using D&D 5e API, and track initiative and stats for Dungeons and Dragons encounters.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux Toolkit",
      "Express",
      "PSQL",
      "Axios",
      "Bcrypt",
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
      "Moment",
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
      "HTML",
      "React",
      "SASS",
      "Material UI",
      "Express",
      "Psql",
      "Axios",
      "Socket.io",
    ],
    url: null,
    github: "https://github.com/Smoopfrog/frame-fitness ",
  },
];

const ProjectFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = projects.length;

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const changeIndex = (index) => {
    setCurrentIndex(index);
  };

  console.log("currentIndex", currentIndex);
  return (
    <section className="projects-container" id="projects">
      <div className="div-container">
        <h1 className="section-title">Projects</h1>
        <div className="carousel">
          <img
            onClick={prevSlide}
            src={back}
            alt="next"
            className="arrow arrow-left"
          ></img>
          {projects.map((project, index) => {
            console.log("map project", project);
            return (
              <div
                key={index}
                className={
                  index === currentIndex ? "current-project" : "hidden-project"
                }
              >
                {index === currentIndex && (
                  <Project project={project} key={index} />
                )}
              </div>
            );
          })}
          <img
            onClick={nextSlide}
            src={next}
            alt="next"
            className="arrow arrow-right"
          ></img>
        </div>
        <div className="carousel-btns">
          {projects.map((project, index) => {
            console.log("map project", project);
            return (
              <div
                className="circle-container"
                key={index}
                onClick={() => changeIndex(index)}
              >
                <svg
                  className={
                    index === currentIndex ? " circle black" : "circle grey"
                  }
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" />
                </svg>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectFeed;
