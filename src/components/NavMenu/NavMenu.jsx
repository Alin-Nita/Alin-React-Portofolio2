import "./NavMenu.scss";
import cross from "../../assets/images/white-cross.png";
import { Link } from "react-router-dom";

const NavMenu = (props) => {
  const { toggleNav } = props;

  return (
    <>
      <div className="nav-menu">
        <div className="nav-menu__content">
          <img
            src={cross}
            alt="Close menu"
            className="nav-menu__cross"
            onClick={toggleNav}
          />
          <ul onClick={toggleNav} className="nav-menu__links">
            <li className="nav-menu__links__list">
              <Link className="nav-menu__links--link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-menu__links__list">
              <Link className="nav-menu__links--link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-menu__links__list">
              <Link className="nav-menu__links--link" to="/AboutMe">
                About me
              </Link>
            </li>
            <li className="nav-menu__links__list">
              <Link className="nav-menu__links--link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-menu__links__list">
              <Link className="nav-menu__links--link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
