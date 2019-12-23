import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { SmallBtn } from "../globals/Buttons";
import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder,
  fadeIn
} from "../../globals/styles";

import { hideValue } from "../../store/actions/values.actions";

import { ValueButton, ValueButtonContainer } from "./Value.styles";

const Value = ({
  className,
  info,
  values,
  id,
  index,
  activeIndex,
  goToNextCard
}) => {
  //   console.log(`Value.js: values: `, values, info, id);

  const handleClick = e => {
    values.map((val, i) => {
      val.id === id && console.log("Values.component: handleClick: id: ", val);
    });
    goToNextCard();
  };

  return (
    <article className={className}>
      <div className="card-info">
        <h4>do you value?</h4>
        <p>{info}</p>
        {/* <p>{otherInfo}</p> */}
      </div>
      <ValueButtonContainer>
        <ValueButton onClick={handleClick}>not to me</ValueButton>
        <ValueButton onClick={handleClick}>matters</ValueButton>
      </ValueButtonContainer>
    </article>
  );
};

const mapStateToProps = state => {
  //   console.log(`ValuesList.js: mapStateToProps: state.values: `, state.values);
  return {
    values: state.values.values,
    isLoading: state.isLoading,
    hide: state.hide
  };
};

export default connect(mapStateToProps, { hideValue })(styled(Value)`
background: ${setColor.mainLight};
margin: ${setRem(32)} auto;
min-width: 500px;
max-width: 50%;
color: ${setColor.offWhite};
text-align: center;
margin-top: -125px;
${props =>
  props.index === props.activeIndex ? "display: block" : "display: none"}

p {
  ${fadeIn("100%", "-10%", "0")}
}


}
.card-info {
  padding: ${setRem()};
  h4 {
    text-transform: capitalize;
    ${setLetterSpacing()};
  }
  p {
    ${setLetterSpacing()};
  }
}
${setShadow.light};
${setTransition()};
&:hover {
  ${setShadow.dark};
}
`);

// export default styled(Value)`
//   background: ${setColor.mainLight};
//   margin: ${setRem(32)} auto;
//   min-width: 500px;
//   max-width: 50%;
//   color: ${setColor.offWhite};
//   text-align: center;
//   margin-top: 600px;
//   ${props => props.hidden && "display: none"};

//   p {
//     ${fadeIn("100%", "-10%", "0")}
//   }
//   /* .img-container {
//     background: ${setColor.mainBlack};
//     position: relative;
//     img {
//       width: 100%;
//       display: block;
//       ${setTransition};
//     }
//     &:hover img {
//       opacity: 0.5;
//     } */
//     .other-info {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       color: ${setColor.mainLight};
//       ${setLetterSpacing(5)};
//       font-size: ${setRem(22)};
//       padding: ${setRem(10)} ${setRem(33)};
//       ${setBorder({ color: setColor.mainLight })};
//       opacity: 0;
//       ${setTransition()};
//     }
//     &:hover .other-info {
//       opacity: 1;
//     }
//   }
//   .card-info {
//     padding: ${setRem()};
//     h4 {
//       text-transform: capitalize;
//       ${setLetterSpacing()};
//     }
//     p {
//       ${setLetterSpacing()};
//     }
//   }
//   ${setShadow.light};
//   ${setTransition()};
//   &:hover {
//     ${setShadow.dark};
//   }
// `;
