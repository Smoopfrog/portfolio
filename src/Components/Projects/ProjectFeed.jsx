import Project from "./Project";
import "../../Styles/ProjectFeed.css";

const ProjectFeed = () => {
  return (
    <section className="projects-container" id="projects">
      <h1 className="section-title">Projects</h1>
      <Project />
      <Project />
      <Project />
    </section>
  );
};

export default ProjectFeed;
