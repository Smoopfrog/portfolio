import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
// import Body from "./Components/Body";
import Header from "./Components/Header";
// import Project from "./Components/Projects/Project";
import ProjectFeed from "./Components/Projects/ProjectFeed";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <ProjectFeed />
      <Contact />
    </div>
  );
};

export default App;
