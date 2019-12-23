import React, { useState } from "react";
import { connect } from "react-redux";
import Value from "../value/Value.component";

import { hideValue } from "../../store/actions/values.actions";

function ValuesList({ values, hideValue, hide }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const gotToSlide = index => {
    setActiveIndex(index);
  };

  const goToPrevSlide = e => {
    e.preventDefault();
    let index = activeIndex;
    let slidesLength = values.length;
    if (index < 1) {
      index = slidesLength;
    }
    --index;
    setActiveIndex(index);
  };
  const goToNextSlide = () => {
    let index = activeIndex;
    let slidesLength = values.length - 1;
    if (index === slidesLength) {
      index = -1;
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
            goToPrevSlide={goToPrevSlide}
            goToNextSlide={goToNextSlide}
          />
        );
      })}
    </h4>
  );
}

const mapStateToProps = state => {
  console.log(`ValuesList.js: mapStateToProps: state.values: `, state.values);
  return {
    values: state.values.values,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(ValuesList);
//getValues
