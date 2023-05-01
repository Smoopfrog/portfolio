import "../Styles/Header.css";
import { useEffect, useState } from "react";
const Header = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (
          direction !== scrollDirection &&
          (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
        ) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };

      window.addEventListener("scroll", updateScrollDirection); // add event listener
      
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const scrollDirection = useScrollDirection();

  return (
    // <header className="header">
    <header
      className={`header sticky ${
        scrollDirection === "down" ? "-top-24 down" : "top-0"
      } h-24 bg-blue-200`}
    >
      <h1>Jeff Stinson</h1>
      <nav className="header-links">
        <button onClick={() => handleClickScroll("about")}>About</button>
        <button onClick={() => handleClickScroll("projects")}>Projects</button>
        <button onClick={() => handleClickScroll("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
