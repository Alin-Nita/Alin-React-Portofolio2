import "./Home.scss";
import Nav from "../Nav/Nav";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";
import Morning from "../container/Morning";
import Afternoon from "../container/Afternoon";
import Evening from "../container/Evening";

const Home = (props) => {
  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = Morning();

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = Afternoon();
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = Evening();
  }

  return (
    <>
      <div className="home">
        <Nav />
        <header className="greeting">
          <img src={greetingImg} className="greeting__img" alt={greetingTime} />
          <h1 className="greeting__heading">
            {greetingTime} <br />
          </h1>
        </header>
        <section className="presentation">
          <h1 className="presentation__heading">
            {" "}
            I'm <span> Alin</span>
          </h1>
          <h1 className="presentation__subheading">
            a <span>Junior Full-Stack Developer</span>
          </h1>
        </section>
      </div>
    </>
  );
};

export default Home;
