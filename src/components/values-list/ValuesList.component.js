import React, { useState } from "react";
import { connect } from "react-redux";

import Value from "../value/Value.component";
import UsersTopValues from "../user-top-values/UsersTopValues.component";
import ValuesBannerWrapper from "../user-top-values/UsersTopValues.styles";
import { StyledSection } from "./ValuesList.styles";

function ValuesList({ usersList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [endOfList, setEndOfList] = useState(null);
  const [narrowDown, setNarrowDown] = useState(true);

  const localValues = JSON.parse(localStorage.getItem("values"));
  const localUsersList = JSON.parse(localStorage.getItem("usersList"));

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = localValues.length - 1;
    if (index === slidesLength) {
      usersList.length > 2 && setNarrowDown(false);
      setEndOfList(true);
    }
    ++index;
    setActiveIndex(index);
  };

  return (
    <StyledSection>
      <UsersTopValues
        endOfList={endOfList}
        setEndOfList={setEndOfList}
        narrowDown={narrowDown}
      />
      <ValuesBannerWrapper
        endOfList={endOfList}
        narrowDown={narrowDown}
        usersList={usersList}
      />
      {localValues &&
        localValues.map((val, index) => {
          return (
            <Value
              key={val.id}
              info={val.name.toLowerCase()}
              id={val.id}
              index={index}
              activeIndex={activeIndex}
              goToNextCard={goToNextCard}
              endOfList={endOfList}
            />
          );
        })}
    </StyledSection>
  );
}

const mapPropsToState = state => {
  return {
    isLoading: state.isLoading,
    usersList: state.values.usersList
  };
};

export default connect(mapPropsToState)(ValuesList);
