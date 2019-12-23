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

function UsersTopValues({ usersList, className }) {
  return (
    <>
      {usersList.length > 0 && (
        <section>
          <article className={className} key={Date.now()}>
            <div className="card-info">
              <h4>my values</h4>
              {usersList.map(val => {
                return <p key={val.id}> - {val.value.toLowerCase()}</p>;
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
    usersList: state.values.usersList
  };
};

// export default connect(mapPropsToState)(UsersTopValues);
export default connect(mapPropsToState)(styled(UsersTopValues)`
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
