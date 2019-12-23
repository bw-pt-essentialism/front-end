import React, { useState } from "react";
import { connect } from "react-redux";
import Value from "../value/Value.component";

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
