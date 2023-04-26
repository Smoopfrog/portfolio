import "../Styles/Header.css";

const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <h1>Jeff Stinson</h1>
      <nav className="header-links">
        <button onClick={() => handleClickScroll("about")} >About Me</button>
        <button onClick={() => handleClickScroll("projects")}>
          Projects
        </button>
        <button onClick={() => handleClickScroll("skills")}>Skills</button>
        <button onClick={() => handleClickScroll("resume")}>Resume</button>
        <button onClick={() => handleClickScroll("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
