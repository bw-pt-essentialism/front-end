import React from "react";

import AboutBannerWrapper, { Layout } from "./About.styles";

import Hero, { BottomImg } from "../hero/Hero.component";
import hero from "../../images/hero.JPG";
import stones from "../../images/stones.jpeg";

function About() {
  return (
    <>
      <Hero img={hero}>
        {" "}
        <AboutBannerWrapper />
      </Hero>
      <BottomImg img={stones} />
    </>
  );
}

export default About;
