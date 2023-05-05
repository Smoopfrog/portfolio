import "../Styles/About.css";
import codingImg from "../Assets/coding.jpg"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-image">
        <img src={codingImg} alt="coding" title="https://www.freepik.com/free-vector/hand-drawn-web-developers_12063795.htm#query=programmer%20illustration&position=9&from_view=keyword&track=ais" />
      </div>
      <div className="about-info">
        <h1>About me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          distinctio iure nam dolore architecto natus eius cum asperiores sequi
          rerum quas corrupti id, tempore inventore nostrum ducimus eum animi
          harum?
        </p>
      </div>
    </section>
  );
};

export default About;
