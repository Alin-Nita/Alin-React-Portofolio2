import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faReact,
  faJava,
  faGithub,
  faJs,
  faAws,
  faFigma,
  faHtml5,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h1>Skills</h1>

      <div className="skills__grid">
        <FontAwesomeIcon icon={faAws} className="skill__grid__faAws" />
        <FontAwesomeIcon icon={faReact} className="skill__grid__faReact" />
        <FontAwesomeIcon icon={faGithub} />
        <FontAwesomeIcon icon={faHtml5} />
        <FontAwesomeIcon icon={faJava} />
        <FontAwesomeIcon icon={faJs} />
        <FontAwesomeIcon icon={faCss3} />
        <FontAwesomeIcon icon={faFigma} />
        <FontAwesomeIcon icon={faSass} />
      </div>
    </div>
  );
};

export default Skills;
