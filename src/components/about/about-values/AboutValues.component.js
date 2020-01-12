import React from "react";

import AboutValuesBannerWrapper, { Layout } from "./AboutValues.styles";

import Hero, { BottomImg } from "../../hero/Hero.component";
import hero from "../../../images/hero.JPG";
import stones from "../../../images/stones.jpeg";

function About() {
  return (
    <>
      <Hero img={hero}>
        {" "}
        <AboutValuesBannerWrapper />
      </Hero>
      <BottomImg img={stones} />
    </>
  );
}

export default About;
