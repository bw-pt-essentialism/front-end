import React from "react";
import { useHistory } from "react-router";

import styled from "styled-components";

import Hero, { BottomImg } from "../../hero/Hero.component";
import {
  CustomButton,
  CustomButtonContainer
} from "../../custom-button/CustomButton";

import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition
} from "../../../globals/styles";

const AboutProjectsBanner = ({ className }) => {
  const history = useHistory();
  return (
    <Layout>
      <div className={className}>
        <h5>
          What you do matters.
          <span>
            Think about the things you are spending your time and energy on.
            From work to family to friends you have demands on being made on
            your time. You may feel like saying yes to everything will get you
            the recognition you crave at work. You want to make everyone happy,
            so you say yes only to regret it later. You're working on so much
            that nothing gets done. Your year of yes has become a year of stress
            and you are ready to do something different.
          </span>{" "}
        </h5>
      </div>
    </Layout>
  );
};
const AboutProjectsBannerWrapper = styled(AboutProjectsBanner)`
  /* background: ${setColor.mainLight};
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  max-width: 60%;
  width: 500px;
  height: 30vh;
  min-height: 260px;
  max-height: 30vh;
  margin-top: 15%;
  margin-left: 0;
  color: ${setColor.mainColor}; */
  background: ${setColor.mainLight};
  margin: 45vh auto 0;
  text-align: center;
  justify-content: center;
  width: 90%;
  max-width: 90%;
  /* height: 400px; */
  min-height: 260px;
  /* max-height: 30vh; */
  color: ${setColor.mainColor};
  ${setLetterSpacing(3)};
  padding: 5%;
 

  h5 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 100;
    span {
      text-transform: capitalize;
      color: ${setColor.offWhite};
      ${fadeIn("100%", "-10%", "0")}
      ${setTransition("all", "1s", "ease-in-out")}
      
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${media.phone` width: 90vw
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    h5 {
      width: 100%;
      font-size: 1.2rem;
    }`}

    /* article {

  display: flex;
  flex-flow: column nowrap
  justify-content: center;
  align-self: center;
    } */
`;

export default AboutProjectsBannerWrapper;

export const AboutButton = styled(CustomButton)`
  border: none;
  margin: 5% auto;
`;

export const AboutButtonContainer = styled(CustomButtonContainer)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const Layout = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const AboutProjectsHero = styled(Hero)``;
