import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import {
  toggleValue,
  removeToggledValue
} from "../../store/actions/values.actions";

import ValuesList from "../values-list/ValuesList.component";

import styled from "styled-components";
import { NarrowDownButton } from "./UsersTopValues.styles";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  fadeIn
} from "../../globals/styles";

function UsersTopValues({
  usersList,
  className,
  narrowDown,
  toggleValue,
  removeToggledValue,
  endOfList,
  setEndOfList
  //   ,
  //   remove
}) {
  const handleClick = id => {
    console.log(`YOU CLICKED TOGGLE VALUE`);
    toggleValue(id);
  };

  if (endOfList === true && usersList.length === 0) {
    //   setEndOfList(false);
    return <ValuesList />;
  }

  return (
    <>
      {usersList.length > 0 && (
        <section>
          <article className={className} key={Date.now()}>
            <div className="card-info">
              <h4>
                {narrowDown === false ? "What's essential?" : "my values"}
              </h4>
              {narrowDown === false && (
                <span>
                  <p>Cross off all but 3 of these values</p>
                  <NarrowDownButton onClick={removeToggledValue}>
                    remove values
                  </NarrowDownButton>
                </span>
              )}
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
            </div>
            {/* <ValueButtonContainer>
          <ValueButton onClick={handleNo}>no</ValueButton>
          <ValueButton onClick={handleYes}>yes</ValueButton>
        </ValueButtonContainer> */}
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

// export default connect(mapPropsToState)(UsersTopValues);
export default connect(mapPropsToState, {
  toggleValue,
  removeToggledValue
})(styled(UsersTopValues)`
background: ${setColor.mainLight};
margin: ${setRem(32)} auto;
min-width: 500px;
max-width: 50%;
color: ${setColor.offWhite};
text-align: center;
margin-top: 5%;
${props =>
  props.index === props.activeIndex ? "display: block" : "display: none"}

p {
  /* ${fadeIn("100%", "-10%", "0")} */
}

span {
    font-size: 1rem;
    margin-bottom: 2%;
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
`);
