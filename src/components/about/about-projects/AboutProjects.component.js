import React from "react";
import { useHistory } from "react-router";

import AboutProjectsBannerWrapper, {
  AboutButton,
  AboutProjectsHero
} from "./AboutProjects.styles";

import hero from "../../../images/hero.JPG";
import AboutProjectCard from "../cards/AboutProjectsCard.component";

function AboutProjects() {
  const history = useHistory();
  return (
    <>
      <AboutProjectsHero img={hero}>
        <AboutProjectsBannerWrapper />
      </AboutProjectsHero>
      <div>
        <AboutProjectCard />
        <AboutButton onClick={() => history.push("/project-form")}>
          continue
        </AboutButton>
      </div>
    </>
  );
}

export default AboutProjects;
