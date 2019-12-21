import React from "react";
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
// import PropTypes from "prop-types";
const Value = ({ className, info, key }) => {
  //   const {
  //     title = "What is essential to you?",
  //     info = "",
  //     otherInfo = ""
  //   } = card;
  return (
    <article className={className} key={key}>
      <div className="img-container">
        {/* <img src={img} alt="single card" /> */}
      </div>
      <div className="card-info">
        <h4>What do you value?</h4>
        <p>{info}</p>
        {/* <p>{otherInfo}</p> */}
        {/* <SmallBtn>Hello</SmallBtn> */}
      </div>
    </article>
  );
};

export default styled(Value)`
  background: ${setColor.mainLight};
  margin: ${setRem(32)} auto;
  min-width: 500px;
  max-width: 50%;
  color: ${setColor.offWhite};
  text-align: center;
  margin-top: 600px;

  p {
    ${fadeIn("100%", "-10%", "0")}
  }
  /* .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover img {
      opacity: 0.5;
    } */
    .other-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainLight};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      padding: ${setRem(10)} ${setRem(33)};
      ${setBorder({ color: setColor.mainLight })};
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

// Value.propTypes = {
//   card: PropTypes.shape({
//     img: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     info: PropTypes.string.isRequired,
//     otherInfo: PropTypes.string.isRequired
//   })
// };
