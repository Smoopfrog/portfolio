import Project from "./Project";
import "../../Styles/ProjectFeed.css";
import { useState } from "react";

const projects = [
  { name: "Initiative" },
  { name: "Betbook" },
  { name: "Frame Fitness" },
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
  console.log("currentIndex", currentIndex);
  return (
    <section className="projects-container" id="projects">
      <div className="div-container">
        <h1 className="section-title">Projects</h1>
        <button onClick={prevSlide}>left</button>
        {/* <Project /> */}
        {projects.map((project, index) => {
          console.log("map project", project);
          return (
            <div key={index}>
              {index === currentIndex && <Project name={project.name} />}
            </div>
          );
        })}
        <button onClick={nextSlide}>right</button>
      </div>
    </section>
  );
};

export default ProjectFeed;
