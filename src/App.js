import "./App.css";
import About from "./Components/About";
// import Body from "./Components/Body";
import Header from "./Components/Header";
// import Project from "./Components/Projects/Project";
import ProjectFeed from "./Components/Projects/ProjectFeed";

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectFeed />
    </div>
  );
};

export default App;
