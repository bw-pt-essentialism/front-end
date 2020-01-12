import React from "react";
import { useHistory } from "react-router";

import AboutProjectsBannerWrapper, {
  AboutButton,
  AboutProjectsHero
} from "./AboutProjects.styles";

import Hero, { BottomImg } from "../../hero/Hero.component";
import hero from "../../../images/hero.JPG";
import stones from "../../../images/stones.jpeg";
import AboutProjectCard from "../cards/AboutProjectsCard.component";

function AboutProjects() {
  const history = useHistory();
  return (
    <>
      <AboutProjectsHero img={hero}>
        {" "}
        <AboutProjectsBannerWrapper />
      </AboutProjectsHero>
      {/* <BottomImg img={stones} /> */}
      <div>
        <AboutProjectCard />
        <AboutButton onClick={() => history.push("/values-selection")}>
          continue
        </AboutButton>
      </div>
    </>
  );
}

export default AboutProjects;
