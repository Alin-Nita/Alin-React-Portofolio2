import React, { useState } from "react";
import "./Carousel.scss";
import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import Project1 from "../../assets/images/Calculator.png";
import Project2 from "../../assets/images/Game-cover.png";
import Project3 from "../../assets/images/Game.png";
import Project4 from "../../assets/images/Morse-code.png";
import Project5 from "../../assets/images/CRUD-API.png";
import Project6 from "../../assets/images/Client-project.png";

const Carousel = (props) => {
  const imagesArr = [
    {
      photo: Project1,
      text: "Java Script Calculator - This project involved wiring up a simple calculator using Java Script Defining DOM elements as variables so that I could iterate over them and add event listeners IF ELSE statements - used to perform the operations.Add event listeners and looping through different buttons type in order to perform different tasks.Define different functions and call them at a specific time",
    },
    {
      photo: Project2,
      text: "Hangman Game cover - ",
    },
    {
      photo: Project3,
      text: "This project was all about constructing a functional game while strenghtening knowledges about html, css but focusing in particular on the Java Script part. Giving the fact that I had to build everything from scratch gaved me the oportunity to have a better understanding of how important it is to have a solid foundation to build on and also how important the pseudocode is. I found this challenge a bit hard with a lot of problems to overcome but also enjoyed solving them.",
    },
    {
      photo: Project4,
      text: "This is a simple translator from english to morse code written in Java Script ; The lesson itself focuses not only on developing and implementing JS but also on discovering the world of TDD, and how to use and apply it; Tests were written using Jest.",
    },
    {
      photo: Project5,
      text: "To solidify the concepts I have covered in Java, Spring, MySQL, & React I built a full-stack web application which combines these technologies. The application needed to be able to CRUD a particular database and was based on a 'course and students' structure.",
    },
    {
      photo: Project6,
      text: "Client-project",
    },
  ];

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    if (counter === imagesArr.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(imagesArr.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="projects" id="projects">
      <div className="carousel">
        <img
          src={leftArrow}
          alt="left arrow"
          onClick={handleDecrement}
          className="carousel__arrow carousel__arrow--left"
        />

        <img
          src={imagesArr[counter].photo}
          alt=""
          className="carousel__image"
        />

        <img
          src={rightArrow}
          alt="right arrow"
          onClick={handleIncrement}
          className="carousel__arrow carousel__arrow--right"
        />
      </div>
      <div>
        <p className="carousel__text">{imagesArr[counter].text}</p>
      </div>
    </div>
  );
};

export default Carousel;
