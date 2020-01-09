import React from "react";
import { connect } from "react-redux";

import { confirmTopTempList } from "../../store/actions/values.actions";

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

const Value = ({
  className,
  info,
  values,
  id,
  goToNextCard,
  confirmTopTempList
}) => {
  const handleYes = () => {
    values.map(val => {
      return val.id === id && confirmTopTempList(val);
    });
    goToNextCard();
  };

  const handleNo = () => {
    values.map(val => {
      return val.id === id;
    });

    goToNextCard();
  };

  return (
    <section className={className}>
      <article>
        <div className="card-info">
          <h4>do you value</h4>
          <p>{info}?</p>
        </div>
        <ValueButtonContainer className="btn-div">
          <ValueButton onClick={handleNo}>no</ValueButton>
          <ValueButton onClick={handleYes}>yes</ValueButton>
        </ValueButtonContainer>
      </article>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    values: state.values.values,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { confirmTopTempList })(styled(Value)`
  background: ${setColor.mainLight};
  margin: ${setRem(32)} auto;
  max-width: 90%;
  width: 700px;
  height: 22.5vh;
  min-height: 290px;
  max-height: 33vh;
  font-size: 1.8rem;
  color: ${setColor.offWhite};
  text-align: center;
  margin-top: -37.5vh;
  ${props =>
    props.index === props.activeIndex ? "display: block" : "display: none"}
  ${props => props.endOfList && "display: none"}
  

    p {
    ${fadeIn("100%", "-10%", "0")}
  }

  .card-info {
    padding: ${setRem()};
    h4 {
      text-transform: capitalize;
      ${setLetterSpacing()};
    }
    p {
      ${setLetterSpacing()};
      font-size: 1.2rem;
      margin: 0 auto;
    }
  }
  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }

  article {
    width: 100%;
    height: 22.5vh;
    max-height: 33vh;
    min-height: 290px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
`);
