import "../../Styles/Project.css"

const Project = () => {
  return (
    <article className="project">
      <h1>Project Name</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium,
        blanditiis? Corporis harum cupiditate nulla iusto impedit explicabo vel
        quo nobis, provident natus, distinctio maxime tenetur cumque aliquid
        ullam perferendis laudantium.
      </p>
      <ul className="tech-stack">
        <li>Stack</li>
        <li>React</li>
        <li>Express</li>
        <li>Sass</li>
        <li>Redux</li>
        <li>Something</li>
      </ul>
      <div className="project-btns">
        <button>Live Demo</button>
        <button>View Source</button>
      </div>
    </article>
  );
};

export default Project;
