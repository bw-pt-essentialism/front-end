import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import {
  toggleValue,
  removeToggledValue,
  confirmTopList
} from "../../store/actions/values.actions";

import ValuesList from "../values-list/ValuesList.component";
// import ChoiceExplanation from "../choice-explanation/ChoiceExplanationForm.component";

import styled from "styled-components";
import { NarrowDownButton, NarDwnBtnContainer } from "./UsersTopValues.styles";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  fadeIn,
  media
} from "../../globals/styles";

function UsersTopValues({
  usersList,
  className,
  narrowDown,
  toggleValue,
  removeToggledValue,
  endOfList
}) {
  let history = useHistory();
  const handleClick = id => {
    console.log(`YOU CLICKED TOGGLE VALUE`);
    toggleValue(id);
  };

  const handleConfirm = usersList => {
    //the put/post action belongs here
    console.log(`UsersTopValues.js: handleConfirm: usersList: `, usersList);
    // return <Redirect to="/choice-expl" />;
    confirmTopList(usersList);
    history.push("/choice-expl");
  };

  const handleEdit = () => {
    console.log(`UsersTopValues.js: handleEdit: usersList: `, usersList);
  };

  if (endOfList === true && usersList.length === 0) {
    return <ValuesList />;
  }

  return (
    <>
      {usersList.length > 0 && (
        <section>
          <article className={className} key={Date.now()}>
            <div className="card-info">
              <h4>
                {narrowDown === false && usersList.length > 3
                  ? "What's essential?"
                  : "my values"}
              </h4>

              {usersList.map(val => {
                console.log(
                  `UserTopValues.js: usersList.map: val.remove: `,
                  val.remove
                );

                return (
                  <div key={val.id} onClick={() => handleClick(val.id)}>
                    <p className={`${val.remove === true && "toggle"}`}>
                      {" "}
                      - {val.value.toLowerCase()}
                    </p>
                  </div>
                );
              })}
              {narrowDown === false && usersList.length > 3 ? (
                <span className="btns">
                  <p>Cross off all but 3 of these values</p>
                  <NarrowDownButton onClick={removeToggledValue}>
                    remove
                  </NarrowDownButton>
                </span>
              ) : (
                endOfList === true && (
                  <NarDwnBtnContainer>
                    <span className="btns">
                      {/* <p>Confirm your selections</p> */}
                      <NarrowDownButton
                        onClick={() => handleConfirm(usersList)}
                      >
                        confirm
                      </NarrowDownButton>
                    </span>
                    <span className="btns">
                      {/* <p>Edit your selections</p> */}
                      <NarrowDownButton onClick={handleEdit}>
                        edit
                      </NarrowDownButton>
                    </span>
                  </NarDwnBtnContainer>
                )
              )}
            </div>
          </article>
        </section>
      )}
    </>
  );
}

const mapPropsToState = state => {
  console.log(
    `UsersTopValues.component: mapPropsToState: state: `,
    state.values.usersList
  );
  return {
    usersList: state.values.usersList,
    remove: state.values.usersList.remove
  };
};

export default connect(mapPropsToState, {
  toggleValue,
  removeToggledValue,
  confirmTopList
})(styled(UsersTopValues)`
background: ${setColor.mainLight};
margin: ${setRem(32)} auto;
min-width: 500px;
max-width: 50%;
color: ${setColor.offWhite};
text-align: center;
margin-top: 7.75vh;
font-size: 1.8rem;
${props =>
  props.index === props.activeIndex ? "display: block" : "display: none"}

  h4 {

  }

p {
  font-size: 1.2rem;
  /* ${fadeIn("100%", "-10%", "0")} */
}

span {
    font-size: 1rem;
    margin-bottom: 2%;
    margin-top: 2%;
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

.toggle {
    text-decoration: line-through;
}
${setShadow.light};
${setTransition()};
&:hover {
  ${setShadow.dark};
}

.btns p {
  margin-top: 5%;
  color: ${setColor.mainColor}
}

${media.phone` width: 90%;`}
`);
