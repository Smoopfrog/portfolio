import Project from "./Project";
import "../../Styles/ProjectFeed.css";
import { useState } from "react";
import next from "../../Assets/next.png";
import back from "../../Assets/back.png";
import initiative from "../../Assets/game-example.png";
import betbook from "../../Assets/login-example.png";
import frameFitness from "../../Assets/homepage-still.png";
import portfolio from "../../Assets/portfolio.png";


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
      "Redux Toolkit",
      "Expo",
      "Firebase",
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
  {
    title: "Front-end Mentorship things",
    description: "A collection of Front-end Mentorship Projects",
    tech: ["HTML", "CSS", "Javascript"],
    image: frameFitness,
    url: null,
    github: "https://github.com/Smoopfrog/frame-fitness ",
  },
  {
    title: "Portfolio",
    description: "The page you're currently on!",
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
          return <Project id={index} project={project} key={index} />;
        })}
      </div>
      <div className="carousel-btns">
        {projects.map((project, index) => {
          return (
            <div
              className="circle-container"
              key={index}
              onClick={() => handleClickScroll(index)}
            >
              <svg
                className={
                  index === carouselIndex ? " circle black" : "circle grey"
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
    </section>
  );
};

export default ProjectFeed;
