import Project from "./Project";
import "../../Styles/ProjectFeed.css";
import { useState } from "react";
import next from "../../Assets/next.png";
import back from "../../Assets/back.png";

const projects = [
  { title: "Initiative" },
  { title: "Betbook" },
  { title: "Frame Fitness" },
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
            className="arrow"
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
                  <Project title={project.title} key={index} />
                )}
              </div>
            );
          })}
          <img
            onClick={nextSlide}
            src={next}
            alt="next"
            className="arrow"
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
