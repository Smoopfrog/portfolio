import "../Styles/About.css";
import codingImg from "../Assets/me.webp";

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
      </div>
      <div className="about-info">
        <h1>About me</h1>

        <p>
          For my professional life, I've spent the last decade in hospitality in
          a wide variety of roles but decided to delve into the world of
          computer science over the last few years. It started with Code
          Academy, part-time classes at Langara College, then deciding to fully
          immerse myself and taking an intensize web development bootcamp at
          Lighthouse labs over the Summer of 2022.
        </p>
        <p>
          Outside of coding, I spend my time enjoying any form of basketball (2x
          fantasy champion), baking cookies and bread, shredding the ski hills,
          DMing for my dungeon & dragons campaign, and discovering new places to
          eat.
        </p>
        <p>P.S. I bake cookies for my coworkers.</p>
      </div>
    </section>
  );
};

export default About;
