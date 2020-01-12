import React from "react";
import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder
} from "../../../globals/styles";

import { CardsCenter } from "./AboutProjectsCards.styles";

import img from "../../../images/stones.jpeg";

const AboutProjectCard = ({ className }) => {
  return (
    <CardsCenter>
      <article className={className}>
        <div className="img-container">
          <img src={img} alt="single AboutProjectCard" />
        </div>
        <div className="card-info">
          <h4>What am I doing?</h4>
          <p>card info</p>
          <p>other card info</p>
        </div>
      </article>
      <article className={className}>
        <div className="img-container">
          <img src={img} alt="single AboutProjectCard" />
        </div>
        <div className="card-info">
          <h4>How does it align with my values?</h4>
          <p>card info</p>
          <p>other card info</p>
        </div>
      </article>
      <article className={className}>
        <div className="img-container">
          <img src={img} alt="single AboutProjectCard" />
        </div>
        <div className="card-info">
          <h4>What will I have to disinvest in?</h4>
          <p>card info</p>
          <p>other card info</p>
        </div>
      </article>
    </CardsCenter>
  );
};

export default styled(AboutProjectCard)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover img {
      opacity: 0.5;
    }
    .other-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainWhite })};
      opacity: 0;
      ${setTransition()};
    }
    &:hover .other-info {
      opacity: 1;
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
`;
