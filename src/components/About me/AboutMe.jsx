import "./AboutMe.scss";
import picture from "../../assets/images/Picture1.png";

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
        <div className="about__container--highlighted">
          <h4>Hello!</h4>
          <p>
            I am a Junior Software Developer with a passion for problem-solving,
            coding and a positive attitude.
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
