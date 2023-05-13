import "../Styles/Home.css";
import htmlLogo from "../Assets/html-5.webp";
import cssLogo from "../Assets/css.webp";
import jsLogo from "../Assets/javascript.webp";
import reactLogo from "../Assets/react.webp";
import reactNativeLogo from "../Assets/react-native.webp";
import reduxLogo from "../Assets/redux.webp";
import expoLogo from "../Assets/expo.webp";
import sassLogo from "../Assets/sass.webp";
import muiLogo from "../Assets/mui.webp";
import nodeLogo from "../Assets/nodejs.webp";
import firebaseLogo from "../Assets/firebase.webp";
import psqlLogo from "../Assets/psql.webp";
import gitLogo from "../Assets/git.webp";
import me from "../Assets/coding.webp";

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
      <img
        className="home-picture"
        src={me}
        alt="The most handsome man in the world"
      />
    </section>
  );
};

export default Home;
