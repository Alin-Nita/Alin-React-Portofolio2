import "./Nav.scss";
import menu from "../../assets/images/menu-icon.png";
import NavMenu from "../NavMenu/NavMenu";
import { useEffect, useState } from "react";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const [border, setBorder] = useState("nav__content noborder");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setBorder("nav__content noborder");
    } else if (window.scrollY > 70) {
      return setBorder("nav__content border");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  console.log(showNav);
  return (
    <>
      {showNav && <NavMenu toggleNav={toggleNav} />}

      <img onClick={toggleNav} className="nav" src={menu} alt="menu" />

      <div className={border}>
        <ul className="nav__content__links">
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#home">
              Home
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#about">
              About me
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav__content__links__list">
            <a className="nav__content__links--link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
