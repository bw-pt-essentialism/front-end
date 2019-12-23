import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  fadeIn
} from "../../globals/styles";

import { ValueButton, ValueButtonContainer } from "./Value.styles";

const Value = ({ className, info, values, id, goToNextCard }) => {
  //   console.log(`Value.js: values: `, values, info, id);

  const handleClick = () => {
    values.map(val => {
      val.id === id && console.log("Values.component: handleClick: id: ", val);
    });
    goToNextCard();
  };

  return (
    <article className={className}>
      <div className="card-info">
        <h4>do you value?</h4>
        <p>{info}</p>
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
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(styled(Value)`
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
