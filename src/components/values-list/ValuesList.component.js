import React, { useState } from "react";
import { connect } from "react-redux";

import Value from "../value/Value.component";
import UsersTopValues from "../user-selected-values/UsersTopValues.component";
import ValuesBannerWrapper from "../user-selected-values/UsersTopValues.styles";

function ValuesList({ usersList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [endOfList, setEndOfList] = useState(null);
  const [narrowDown, setNarrowDown] = useState(true);

  const localValues = JSON.parse(localStorage.getItem("values"));

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
    <>
      <ValuesBannerWrapper
        endOfList={endOfList}
        narrowDown={narrowDown}
        usersList={usersList}
      />
      <h4>
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
        <UsersTopValues
          endOfList={endOfList}
          setEndOfList={setEndOfList}
          narrowDown={narrowDown}
        />
      </h4>
    </>
  );
}

const mapPropsToState = state => {
  return {
    isLoading: state.isLoading,
    usersList: state.values.usersList
  };
};

export default connect(mapPropsToState)(ValuesList);
