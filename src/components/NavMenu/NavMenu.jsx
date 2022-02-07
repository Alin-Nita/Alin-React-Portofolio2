import "./NavMenu.scss";
import cross from "../../assets/images/white-cross.png";

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
              <a className="nav-menu__links--link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-menu__links__list">
              <a className="nav-menu__links--link" href="#carousel">
                Projects
              </a>
            </li>
            <li className="nav-menu__links__list">
              <a className="nav-menu__links--link" href="#AboutMe">
                About me
              </a>
            </li>
            <li className="nav-menu__links__list">
              <a className="nav-menu__links--link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-menu__links__list">
              <a className="nav-menu__links--link" href="./contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
