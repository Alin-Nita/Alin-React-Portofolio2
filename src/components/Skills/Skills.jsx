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
        <div class="cube" id="react"></div>
        <div class="cube" id="javascript"></div>
        <div class="cube" id="html"></div>
        <div class="cube" id="css"></div>
        <div class="cube" id="java"></div>
        <div class="cube" id="aws"></div>
        <div class="cube" id="github"></div>
        <div class="cube" id="figma"></div>
        <div class="cube" id="sass"></div>

        {/* //       <FontAwesomeIcon icon={faAws} className="skill__grid__faAws" />
    //       <FontAwesomeIcon icon={faReact} className="skill__grid__faReact" />
    //       <FontAwesomeIcon icon={faGithub} />
    //       <FontAwesomeIcon icon={faHtml5} />
    //       <FontAwesomeIcon icon={faJava} />
    //       <FontAwesomeIcon icon={faJs} />
    //       <FontAwesomeIcon icon={faCss3} />
    //       <FontAwesomeIcon icon={faFigma} />
    //       <FontAwesomeIcon icon={faSass} /> */}
      </div>
    </div>
  );
};

export default Skills;
