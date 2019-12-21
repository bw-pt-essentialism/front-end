import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getZen } from "../../store/actions/zen.quotes.actions";
import styled, { css, keyframes } from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setBorder,
  media
} from "../../globals/styles";

const fadeIn = (start, point, end) => {
  const animation = keyframes`
0%{
 opacity:0;
 transform:translateY(${start})
}
50%{
 opacity:0.5;
 transform:translateY(${point})
}
100%{
 opacity:1;
 transform:translateY(${end})
}
`;
  return css`
    animation: ${animation} 3s ease-in-out;
  `;
};
const Banner = ({ className, quote, getZen }) => {
  useEffect(() => {
    getZen();
  }, []);

  return (
    <div className={className}>
      <h1>
        Remember <span>{quote}</span>{" "}
      </h1>
      <div className="info"></div>
    </div>
  );
};
const BannerWrapper = styled(Banner)`
  background: ${setColor.mainLight};
  text-align: center;
  /* align-self: flex-end;
  margin-bottom: 10%; */
  padding: ${setRem(10)} ${setRem(10)};
  ${setLetterSpacing(3)}
  /* color: ${setColor.mainWhite}; */
  h1 {
    text-transform: capitalize;
    font-size: ${setRem(48)};
    /* color: hotpink; */
    span {
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
   
  
  h1 {
   ${fadeIn("100%", "-10%", "0")}
    /* animation */
  }
  .info {
      ${fadeIn("-100%", "10%", "0")}

    /* animation */
  }
`;
const mapStateToProps = state => {
  console.log(
    `BannerWrapper.component.js: mapStateToProps: state.zen: `,
    state.zen
  );
  return {
    quote: state.zen.quote,
    isLoading: state.zen.isLoading
  };
};

export default connect(mapStateToProps, { getZen })(BannerWrapper);
