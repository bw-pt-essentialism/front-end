import React, { useEffect } from "react";
// import { connect } from "react-redux";

import {
  SignUpButtonContainer,
  SignUpLinkLogin
} from "../../components/sign-up-form/SignUpForm.styles";
import { LoginLinkSignUp } from "../../components/login-form/LoginForm.styles";
import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media,
  fadeIn
} from "../../globals/styles";

const ValuesBanner = ({ className }) => {
  return (
    <div className={className}>
      <h2>
        Now{" "}
        <span>
          take some time to reflect on the values you've selected. Which ones
          really mean the most to you? Narrow your selection down to your
          essential three.
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
  margin-top: -13%;
  margin-bottom: 20%;
  color: ${setColor.mainColor};
  padding: ${setRem(10)} ${setRem(10)};
  ${setLetterSpacing(3)}
  ${props =>
    props.endOfList === true ? "display: flex" : "display: none"}
  
  h2 {
    text-transform: uppercase;
    font-size: ${setRem(38)};
    span {
      text-transform: capitalize;
      color: ${setColor.offWhite};
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

  h2 {
    ${fadeIn("100%", "-10%", "0")}
  }
  .info {
    ${fadeIn("-100%", "10%", "0")}
  }
`;

// const mapStateToProps = state => {
//   console.log(
//     `ValuesBannerWrapper.component.js: mapStateToProps: state.zen: `,
//     state.zen
//   );
//   return {
//     quote: state.zen.quote,
//     isLoading: state.zen.isLoading
//   };
// };

export default ValuesBannerWrapper;
