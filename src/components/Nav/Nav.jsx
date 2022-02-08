import "./Nav.scss";
import menu from "../../assets/images/menu-icon.png";
import NavMenu from "../NavMenu/NavMenu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent);

  //   return () => window.removeEventListener("scroll", listenScrollEvent);
  // }, []);

  console.log(showNav);
  return (
    <>
      {showNav && <NavMenu toggleNav={toggleNav} />}

      <img onClick={toggleNav} className="nav" src={menu} alt="menu" />

      <div className={border}>
        <ul className="nav__content__links">
          <li className="nav__content__links__list">
            <Link className="nav__content__links--link" to="/">
              Home
            </Link>
          </li>
          <li className="nav__content__links__list">
            <Link className="nav__content__links--link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav__content__links__list">
            <Link className="nav__content__links--link" to="/AboutMe">
              About me
            </Link>
          </li>
          <li className="nav__content__links__list">
            <Link className="nav__content__links--link" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav__content__links__list">
            <Link className="nav__content__links--link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
