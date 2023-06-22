import "../Styles/Header.css";
import { useEffect, useState } from "react";
const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [showAside, setShowAside] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 576) {
      setMobileView(true);
    }
  }, []);

  const handleScrollToTop = () => {
    if (mobileView) {
      setShowAside(false);
    }
    
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    if (element) {
      if (mobileView) {
        setShowAside(false);
      }

      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const useScrollDirection = () => {
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
  };

  const scrollDirection = useScrollDirection();

  const toggleNav = () => {
    setShowAside(!showAside);
  };

  return (
    <header
      id="header"
      className={`header sticky ${
        scrollDirection === "down" && !mobileView ? "down" : ""
      }`}
    >
      <button onClick={() => handleScrollToTop()}>
        <h1>Jeff Stinson</h1>
      </button>
      {mobileView ? (
        <button onClick={toggleNav} className="menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            id="menu-bar"
          >
            <rect width="24" height="24" fill="none"></rect>
            <path
              d="M18.2,12.7H5.8C5.3,12.7,5,12.4,5,12s0.3-0.7,0.7-0.7h12.5c0.4,0,0.7,0.3,0.7,0.7S18.7,12.7,18.2,12.7z M19,7.8
		C19,7.3,18.7,7,18.3,7H5.8C5.3,7,5,7.4,5,7.8s0.3,0.7,0.7,0.7h12.5C18.7,8.5,19,8.2,19,7.8z M19,16.2c0-0.4-0.3-0.7-0.7-0.7H5.8
		c-0.4,0-0.7,0.3-0.7,0.7C5,16.6,5.4,17,5.8,17h12.5C18.7,17,19,16.7,19,16.2z"
            ></path>
          </svg>
        </button>
      ) : (
        <nav className="header-links">
          <button onClick={() => handleClickScroll("about")}>About</button>
          <button onClick={() => handleClickScroll("projects")}>
            Projects
          </button>
          <button onClick={() => handleClickScroll("contact")}>Contact</button>
          <button>
            <a
              href="https://flowcv.com/resume/3q4wpjg9ja"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </nav>
      )}
      {mobileView && (
        <aside
          className={`header-links ${showAside ? "show-nav" : "hide-nav"}`}
        >
          <button onClick={() => handleClickScroll("about")}>About</button>
          <button onClick={() => handleClickScroll("projects")}>
            Projects
          </button>
          <button onClick={() => handleClickScroll("contact")}>Contact</button>
          <button>
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vTqtrwCZIbWVwJQdFUo4jv7ZHw-DpTDhVrCntPZ7mOTKhYeIYPKF0VMs6TPjjZoYKdZ8TsqeWIz0KW_/pub"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </button>
        </aside>
      )}
    </header>
  );
};

export default Header;
