import "../Styles/About.css";
import codingImg from "../Assets/me.jpeg";
import frontEnd from "../Assets/front-end.svg";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img
          className="coding-img"
          src={codingImg}
          alt="coding"
          title="https://www.freepik.com/free-vector/hand-drawn-web-developers_12063795.htm#query=programmer%20illustration&position=9&from_view=keyword&track=ais"
        />
        {/* <div className="about-hire">
          <img className="background-img" src={frontEnd} alt="" /> Hire me
          <br /> Im desperate
        </div> */}
      </div>
      <div className="about-info">
        <h1>About me</h1>
        <p>
          A full-stack developer, with a background in hospitality management,
          keen to dive into the world of web development. Graduated from
          Lighthouse Labs where I became proficient with front and backend
          technologies such as HTML, CSS, Sass, Javascript, React, and Express,
          along with many other skills. Seeking opportunities, virtually or in
          Vancouver.
          <br />
          <br />
          Let's connect!
          <br />
          <br />
          P.S. I bake cookies for my coworkers.
        </p>
      </div>
    </section>
  );
};

export default About;
