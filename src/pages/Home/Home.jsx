// src/components/Home.js

import React from "react";
import Banner from "./components/Banner";
import About from "./components/AboutMySelf";
import Skill from "./components/Skills"

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skill/>
    </>
  );
};

export default Home;
