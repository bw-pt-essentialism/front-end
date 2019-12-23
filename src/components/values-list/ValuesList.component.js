import React, { useState } from "react";
import { connect } from "react-redux";

import Value from "../value/Value.component";
import UsersTopValues from "../user-selected-values/UsersTopValues.component";

function ValuesList({ values }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // const goToPrevSlide = e => {
  //   e.preventDefault();
  //   let index = activeIndex;
  //   let slidesLength = values.length;
  //   if (index < 1) {
  //     index = slidesLength;
  //   }
  //   --index;
  //   setActiveIndex(index);
  // };
  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = values.length - 1;
    if (index === slidesLength) {
      // index = -1;
      alert("End of list");
    }
    ++index;
    setActiveIndex(index);
  };
  return (
    <h4>
      {values.map((val, index) => {
        return (
          <Value
            key={val.id}
            info={val.value.toLowerCase()}
            id={val.id}
            index={index}
            activeIndex={activeIndex}
            // goToPrevSlide={goToPrevSlide}
            goToNextCard={goToNextCard}
          />
        );
      })}
      <UsersTopValues />
    </h4>
  );
}

const mapPropsToState = state => {
  console.log(`ValuesList.js: mapPropsToState: state.values: `, state.values);
  return {
    values: state.values.values,
    isLoading: state.isLoading
  };
};

export default connect(mapPropsToState)(ValuesList);
//getValues
