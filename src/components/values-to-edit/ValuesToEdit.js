import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  toggleValue
  //   ,
  //   removeToggledValue,
  //   confirmTopList
} from "../../store/actions/values.actions";

// import ValuesList from "../values-list/ValuesList.component";

import styled from "styled-components";
// import { NarrowDownButton, NarDwnBtnContainer } from "./UsersTopValues.styles";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow
} from "../../globals/styles";

function ValuesToEdit({ className }) {
  let history = useHistory();

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));

  const handleClick = id => {
    history.push(`/edit-values/${id}`);
  };
  return (
    <section>
      <div className={className} key={Date.now()}>
        <div className="card-info">
          <h4>current values</h4>
          <div className="values">
            {userValues.map(val => {
              return (
                <div key={val.id} onClick={() => handleClick(val.id)}>
                  <p className={`${val.remove === true && "toggle"}`}>
                    {" "}
                    <strong>{val.name}</strong> because{" "}
                    <strong>{val.description}</strong>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const mapPropsToState = state => {
  return {
    usersList: state.values.usersList,
    remove: state.values.usersList.remove
  };
};

export default connect(
  mapPropsToState,
  {}
)(styled(ValuesToEdit)`
  background: ${setColor.mainLight};
  margin: ${setRem(32)} auto;
  /* max-width: 90%; */
  width: 100%;
  color: ${setColor.offWhite};
  text-align: center;
  margin-top: -10%;
  font-size: 1.8rem;
  /* ${props =>
    props.index === props.activeIndex ? "display: block" : "display: none"} */

  /* p {
    font-size: 1.2rem;
    border-right: 1px solid ${setColor.offWhite};
    border-left: 1px solid ${setColor.offWhite};
    max-width: 90%;
    margin: 0 auto;
  } */

  strong {
    text-transform: capitalize;
  }

  span {
    font-size: 1rem;
    margin-bottom: 2%;
    margin-top: 2%;
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

  .toggle {
    text-decoration: line-through;
  }

  .values {
    border: 1px solid green;
    display: flex;
    justify-content: space-evenly;
    div {
        width: 30%;
    }
    p {
    font-size: 1.2rem;
    border-right: 1px solid ${setColor.offWhite};
    border-left: 1px solid ${setColor.offWhite};
    margin: 0 auto;
    padding: 1%;
  }
  }

  ${setShadow.light};
  ${setTransition()};
  &:hover {
    ${setShadow.dark};
  }

  .btns p {
    margin-top: 5%;
    color: ${setColor.mainColor};
  }
`);
