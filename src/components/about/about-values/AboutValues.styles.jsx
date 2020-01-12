import React from "react";
import { useHistory } from "react-router";

import styled from "styled-components";

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

const AboutValuesBanner = ({ className }) => {
  const history = useHistory();
  return (
    <div className={className}>
      <h5>
        Enter Essentialism.
        <span>
          In a world with everything shouting for your attention, the
          disciplined pursuit of less has never been more needed. The Way of the
          Essentialist involves doing less, but better, so you can make the
          highest possible contribution. It’s not about getting more done in
          less time or getting less done. It’s about getting only the right
          things done. It’s about regaining control of our own choices about
          where to spend our time and energies instead of giving others implicit
          permission to choose for us. The first step to essentialism is
          identifying your values.
        </span>{" "}
      </h5>
      <div className="info">
        <AboutButton onClick={() => history.push("/values-selection")}>
          continue
        </AboutButton>
      </div>
    </div>
  );
};
const AboutValuesBannerWrapper = styled(AboutValuesBanner)`
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
      width: 75%;
      font-size: 1.2rem;
    }`}

    /* article {

  display: flex;
  flex-flow: column nowrap
  justify-content: center;
  align-self: center;
    } */
`;

export default AboutValuesBannerWrapper;

export const AboutButton = styled(CustomButton)`
  border: none;
  margin: 5% auto;
`;

export const AboutButtonContainer = styled(CustomButtonContainer)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const Layout = styled.img``;
