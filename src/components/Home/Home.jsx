import "./Home.scss";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

const Home = (props) => {
  const { user } = props;

  const currentHour = new Date().getHours();
  let greetingImg = sunrise;
  let greetingTime = "Morning!";

  if (currentHour >= 12) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  }

  if (currentHour >= 18) {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <>
      <div className="home">
        <header className="greeting">
          <img src={greetingImg} className="greeting__img" alt={greetingTime} />
          <h1 className="greeting__heading">
            Good {greetingTime} <br />
          </h1>
        </header>
        <section>
          <h1 className="heading"> I'm Alin </h1>
          <br />
          <h2 className="subheading"> a Junior Full-Stack Developer </h2>
        </section>
      </div>
    </>
  );
};

export default Home;
