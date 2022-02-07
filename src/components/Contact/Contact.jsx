import "./Contact.scss";
import mail from "../../assets/images/mail.svg";
import git from "../../assets/images/git.svg";
import linkedin from "../../assets/images/linkedin.svg";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact__grid">
        <a className="contact__grid--link" href="mailto:mr.alin.nita@gmail.com">
          <img src={mail} alt="envelope" />
          <span className="contact__grid--span"> Email</span>
        </a>

        <a
          className="contact__grid--link"
          href="https://www.linkedin.com/in/alin-nita/"
        >
          <img src={linkedin} alt="linkedin" />
          <span className="contact__grid--span"> LinkedIn</span>
        </a>

        <a className="contact__grid--link" href="https://github.com/Alin-Nita">
          <img src={git} alt="git" />
          <span> Github</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
