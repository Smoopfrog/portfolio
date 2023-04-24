import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Jeff Stinson</h1>
      <div className="header-links">
        <a href="About">About Me</a>
        <a href="Projects">Projects</a>
        <a href="Skills">Skills</a>
        <a href="Resume">Resume</a>
        <a href="Contact">Contact</a>
      </div>
    </header>
  );
};

export default Header;
