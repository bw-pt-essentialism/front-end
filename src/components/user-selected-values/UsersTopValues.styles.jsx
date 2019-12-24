import React from "react";

import {
  CustomButton,
  CustomButtonContainer
} from "../custom-button/CustomButton";

import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn,
  setTransition
} from "../../globals/styles";

const ValuesBanner = ({ className, narrowDown, usersList }) => {
  return (
    <div className={className}>
      <h2>
        Now
        <span>
          {narrowDown === false && usersList.length > 3
            ? ` take some time to reflect on your values. Which ones
          really mean the most to you? Narrow your selection down to your
          essential three.`
            : ` you know what's essential. after you confirm your choices, take some time to reflect on your values and tell us why these are the things that matter to you`}
        </span>{" "}
      </h2>
      <div className="info"></div>
    </div>
  );
};
const ValuesBannerWrapper = styled(ValuesBanner)`
  background: ${setColor.mainLight};
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  min-width: 500px;
  /* max-width: 80%; */
  max-width: 750px;
  height: 22.5vh;
  min-height: 260px;
  max-height: 30vh;
  margin-top: -37.5vh;
  /* margin-bottom: 35%; */
  color: ${setColor.mainColor};
  padding: ${setRem(10)} ${setRem(10)};
  ${setLetterSpacing(3)};
  ${props => (props.endOfList === true ? "display: flex" : "display: none")};

  
  h2 {
    text-transform: uppercase;
  font-size: 2.25rem;
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
  ${media.tablet` width: 70vw;
    ${setBorder({ width: "6px", color: setColor.mainColor })};
    p {
      width: 75%;
    }`}

  /* h2 {
    ${fadeIn("100%", "-10%", "0")}
  }
  .info {
    ${fadeIn("-100%", "10%", "0")}
  } */
`;

export default ValuesBannerWrapper;

export const NarrowDownButton = styled(CustomButton)`
  border: none;
  margin: 5% auto;
`;

export const NarDwnBtnContainer = styled(CustomButtonContainer)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;
