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
      text: "calculator",
    },
    {
      photo: Project2,
      text: "Game",
    },
    {
      photo: Project3,
      text: "Still game",
    },
    {
      photo: Project4,
      text: "Morse code",
    },
    {
      photo: Project5,
      text: "CRUD-API",
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
    <div className="carousel">
      <img
        src={leftArrow}
        alt="left arrow"
        onClick={handleDecrement}
        className="carousel__arrow carousel__arrow--left"
      />

      <img clasName="carousel__image" src={imagesArr[counter].photo} alt="" />
      <p>{imagesArr[counter].text}</p>

      <img
        src={rightArrow}
        alt="right arrow"
        onClick={handleIncrement}
        className="carousel__arrow carousel__arrow--right"
      />
    </div>
  );
};

export default Carousel;
