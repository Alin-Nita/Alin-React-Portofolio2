import "./App.scss";
import React from "react";
import Carousel from "./components/Carousel/Carousel";
import Home from "./components/Home/Home";
import AboutMe from "./components/About me/AboutMe";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Alin-React-Portofolio2" element={<Home />} />
          <Route path="/projects" element={<Carousel />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
