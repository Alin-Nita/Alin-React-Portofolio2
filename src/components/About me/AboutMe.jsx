import "./AboutMe.scss";
import picture from "../../assets/images/Picture1.jpeg";

const AboutMe = () => {
  return (
    <div id="about" className="about">
      <h1>About me</h1>
      <div className="about__container">
        <img
          className="about__container--img"
          src={picture}
          alt="profilePicture"
        />
        <div>
          <p className="about__container--highlighted">Hello! </p>
          <p>
            I am Software Developer with a passion for problem-solving,coding
            and a positive attitude.
          </p>
          <p>
            I have an Engineering Degree in Environmental Engineering &#38;
            Industrial Systems
          </p>
          <p>I'm also a AWS Certified Cloud Practitioner</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
