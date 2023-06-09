import Project from "./Project";
import "../../Styles/ProjectFeed.css";
import { useState } from "react";
import next from "../../Assets/next.webp";
import back from "../../Assets/back.webp";
import initiative from "../../Assets/game-example.webp";
import betbook from "../../Assets/betbook-example.webp";
import frameFitness from "../../Assets/homepage-still.webp";
import portfolio from "../../Assets/portfolio.webp";
import frontEnd from "../../Assets/front-end-example.webp";

const projects = [
  {
    title: "Betbook",
    description:
      "Keep track of your personal bets and stats with this easy to use React Native mobile app",
    tech: [
      "React Native",
      "React Navigation",
      "Redux Toolkit",
      "Expo",
      "Firebase",
    ],
    image: betbook,
    url: null,
    github: "https://github.com/Smoopfrog/bet-book",
  },
  {
    title: "Initiative",
    description:
      "My first project out of bootcamp to help run my DnD games. Create characters, find monsters using D&D 5e API, and track initiative and stats for Dungeons and Dragons encounters.",
    tech: ["React", "Redux Toolkit", "PSQL"],
    url: "https://initiative.herokuapp.com/",
    github: "https://github.com/Smoopfrog/Initiative",
    image: initiative,
  },

  {
    title: "Frame Fitness",
    description:
      "An app focusing on creating a manageable and flexible workout plan for users by providing a catalog of exercises from ExerciseDB api with an intuitive and responsive design.",
    tech: ["React", "Material UI", "Psql", "Axios", "Socket.io"],
    image: frameFitness,
    url: null,
    github: "https://github.com/Smoopfrog/frame-fitness ",
  },
  {
    title: "Front-End Mentorship",
    description:
      "A collection of Front-end Mentorship projects all made with vanilla HTML, CSS and Javascript.",
    tech: ["HTML", "CSS", "Javascript"],
    image: frontEnd,
    url: "https://splitterjss.netlify.app/",
    github: "https://github.com/Smoopfrog/tip-calculator-app",
  },
  {
    title: "Portfolio",
    description: "This page! Built with react and sass to showcase myself.",
    tech: ["HTML", "Sass", "React"],
    image: portfolio,
    url: "https://jeffstinson.netlify.app/",
    github: "https://github.com/Smoopfrog/portfolio ",
  },
];

const ProjectFeed = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const length = projects.length;

  const handleClickScroll = (index) => {
    const element = document.getElementById(index);

    if (element) {
      setCarouselIndex(index);

      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleNextScroll = () => {
    const element = document.getElementById(carouselIndex + 1);

    if (element) {
      setCarouselIndex(carouselIndex + 1);
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleBackScroll = () => {
    const element = document.getElementById(carouselIndex - 1);

    if (element) {
      setCarouselIndex(carouselIndex - 1);
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  const handleScroll = () => {
    console.log("scroll");
  };
  return (
    <section className="projects" id="projects">
      <h1 className="section-title">Projects</h1>
      <button
        onClick={handleBackScroll}
        className={`arrow arrow-left ${carouselIndex === 0 && "disabled"}`}
      >
        <img src={back} alt="back" />
      </button>
      <button
        onClick={handleNextScroll}
        className={`arrow arrow-right ${
          carouselIndex === length - 1 && "disabled"
        }`}
      >
        <img src={next} alt="next" />
      </button>
      <div className="projects-container" onScroll={handleScroll}>
        {projects.map((project, index) => {
          return (
            <Project
              setCarouselIndex={setCarouselIndex}
              id={index}
              project={project}
              key={index}
            />
          );
        })}
      </div>
      <div className="carousel-btns">
        {projects.map((project, index) => {
          return (
            <svg
              className={
                index === carouselIndex ? " circle black" : "circle grey"
              }
              key={index}
              onClick={() => handleClickScroll(index)}
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="50" />
            </svg>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectFeed;
