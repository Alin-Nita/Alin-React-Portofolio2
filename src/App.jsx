import "./App.scss";
import React from "react";
import Carousel from "./components/Carousel/Carousel";
import Home from "./components/Home/Home";
import AboutMe from "./components/About me/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <Home />
      <Carousel />
      <AboutMe />
      <Skills />
      <Contact />
    </>
  );
};
export default App;
