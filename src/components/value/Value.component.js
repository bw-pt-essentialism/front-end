import React from "react";
import { connect } from "react-redux";

import { confirmTopList } from "../../store/actions/values.actions";

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
  confirmTopList
}) => {
  //   console.log(`Value.js: confirmTopList: `, confirmTopList);

  const handleYes = e => {
    console.log(`Value.js: handleClick: e.target.value: `, e.target);
    values.map(val => {
      return val.id === id && confirmTopList(val);
    });
    goToNextCard();
  };

  const handleNo = e => {
    console.log(`Value.js: handleClick: e.target.value: `, e.target);
    values.map(val => {
      return (
        val.id === id &&
        console.log(`Value.js: handleNo: values.map: val: `, val)
      );
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
  //   console.log(`ValuesList.js: mapStateToProps: state.values: `, state.values);
  return {
    values: state.values.values,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps, { confirmTopList })(styled(Value)`
  background: ${setColor.mainLight};
  margin: ${setRem(32)} auto;
  min-width: 500px;
  max-width: 80%;
  height: 22.5vh;
  min-height: 260px;
  max-height: 30vh;
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

    /* .btn-div {
      border: 1px solid white;
    } */

    article {
      min-width: 500px;
      width: 100%;
      height: 22.5vh;
      max-height: 30vh;
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
    }

`);
