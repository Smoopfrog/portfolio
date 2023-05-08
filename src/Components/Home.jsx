import "../Styles/Home.css";
import htmlLogo from "../Assets/html-5.png";
import cssLogo from "../Assets/css.png";
import jsLogo from "../Assets/javascript.png";
import reactLogo from "../Assets/react.png";
import reactNativeLogo from "../Assets/react-native.png";
import reduxLogo from "../Assets/redux.png";
import expoLogo from "../Assets/expo.png";
import sassLogo from "../Assets/sass.png";
import muiLogo from "../Assets/mui.png";
import nodeLogo from "../Assets/nodejs.png";
import firebaseLogo from "../Assets/firebase.png";
import psqlLogo from "../Assets/psql.png";
import gitLogo from "../Assets/git.png";
import me from "../Assets/coding.jpg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-info">
        <div className="home-title">
          <h1>Full-Stack</h1>
          <h1>Web Developer</h1>
        </div>

        <p>
          Hello, I'm Jeff Stinson. A full-stack developer and Lighthouse Labs
          graduate with a background in hospitality management, and a passion
          for creating enjoyable and intuitives apps.
        </p>
        <div className="home_tech-stack">
          {/* <div className="home_tech-stack-title">Tech Stack</div> */}
          <div className="slider">
            <div className="slide-track">
              <div className="slide" title="HTML5">
                <img src={htmlLogo} alt="HTML5" />
              </div>
              <div className="slide" title="CSS">
                <img src={cssLogo} alt="CSS" />
              </div>
              <div className="slide" title="Javascript">
                <img src={jsLogo} alt="Javascript" />
              </div>
              <div className="slide" title="React">
                <img src={reactLogo} alt="React" />
              </div>
              <div className="slide" title="React Native">
                <img src={reactNativeLogo} alt="React Native" />
              </div>
              <div className="slide" title="Redux">
                <img src={reduxLogo} alt="Redux" />
              </div>
              <div className="slide" title="Expo">
                <img src={expoLogo} alt="Expo" />
              </div>
              <div className="slide" title="Sass">
                <img src={sassLogo} alt="Sass" />
              </div>
              <div className="slide" title="Material UI">
                <img src={muiLogo} alt="Material UI" />
              </div>
              <div className="slide" title="NodeJS">
                <img src={nodeLogo} alt="NodeJS" />
              </div>
              <div className="slide" title="Firebase">
                <img src={firebaseLogo} alt="Firebase" />
              </div>
              <div className="slide" title="Psql">
                <img src={psqlLogo} alt="Psql" />
              </div>
              <div className="slide" title="Git">
                <img src={gitLogo} alt="Git" />
              </div>
            </div>
            <div className="slide-track">
              <div className="slide" title="HTML5">
                <img src={htmlLogo} alt="HTML5" />
              </div>
              <div className="slide" title="CSS">
                <img src={cssLogo} alt="CSS" />
              </div>
              <div className="slide" title="Javascript">
                <img src={jsLogo} alt="Javascript" />
              </div>
              <div className="slide" title="React">
                <img src={reactLogo} alt="React" />
              </div>
              <div className="slide" title="React Native">
                <img src={reactNativeLogo} alt="React Native" />
              </div>
              <div className="slide" title="Redux">
                <img src={reduxLogo} alt="Redux" />
              </div>
              <div className="slide" title="Expo">
                <img src={expoLogo} alt="Expo" />
              </div>
              <div className="slide" title="Sass">
                <img src={sassLogo} alt="Sass" />
              </div>
              <div className="slide" title="Material UI">
                <img src={muiLogo} alt="Material UI" />
              </div>
              <div className="slide" title="NodeJS">
                <img src={nodeLogo} alt="NodeJS" />
              </div>
              <div className="slide" title="Firebase">
                <img src={firebaseLogo} alt="Firebase" />
              </div>
              <div className="slide" title="Psql">
                <img src={psqlLogo} alt="Psql" />
              </div>
              <div className="slide" title="Git">
                <img src={gitLogo} alt="Git" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-picture">
        <img
          className="home-picture"
          loading="lazy"
          src={me}
          alt="The most handsome man in the world"
        />
      </div>
    </section>
  );
};

export default Home;
