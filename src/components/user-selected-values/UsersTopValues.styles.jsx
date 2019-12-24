import React from "react";

import { CustomButton } from "../custom-button/CustomButton";

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

const ValuesBanner = ({ className, narrowDown }) => {
  return (
    <div className={className}>
      <h2>
        Now:
        <span>
          {narrowDown === false
            ? `take some time to reflect on the values you've selected. Which ones
          really mean the most to you? Narrow your selection down to your
          essential three.`
            : `you've already got a great start at recognizing what's essential! take some time to reflect on the values you've selected. tell us why these are the things that matter to you`}
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
  margin-top: -33%;
  margin-bottom: 35%;
  color: ${setColor.mainColor};
  padding: ${setRem(10)} ${setRem(10)};
  ${setLetterSpacing(3)};
  ${props => (props.endOfList === true ? "display: flex" : "display: none")};

  
  h2 {
    text-transform: uppercase;
    font-size: ${setRem(28)};
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

export const NarrowDownButton = styled(CustomButton)``;
