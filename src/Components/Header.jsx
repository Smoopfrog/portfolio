import "../Styles/Header.css";

const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <h1>Jeff Stinson</h1>
      <div className="header-links">
        <button href="About">About Me</button>
        <button href="Projects" onClick={() => handleClickScroll("projects")}>
          Projects
        </button>
        <button href="Skills">Skills</button>
        <button href="Resume">Resume</button>
        <button href="Contact">Contact</button>
      </div>
    </header>
  );
};

export default Header;
