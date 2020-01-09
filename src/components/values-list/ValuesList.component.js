import React, { useState } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import Value from "../value/Value.component";
import UsersTopValues from "../user-selected-values/UsersTopValues.component";
import ValuesBannerWrapper from "../user-selected-values/UsersTopValues.styles";

function ValuesList({ values, usersList }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [endOfList, setEndOfList] = useState(null);
  const [narrowDown, setNarrowDown] = useState(true);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(`ValuesList.js: values: `, values.value);
  //   values.map(value => dispatch(postValues(value.value)));
  // }, []);

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
  // let endOfList = "";

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = values.length - 1;
    if (index === slidesLength) {
      // index = -1;
      usersList.length > 2 && setNarrowDown(false);
      setEndOfList(true);
    }
    ++index;
    setActiveIndex(index);
  };

  //filters the values array to remove options user has already selected - not currently being used
  // const valuesArr = values;
  // const usersListArr = usersList;
  // const filteredValuesArr = valuesArr.filter(
  //   val => !usersListArr.includes(val)
  // );
  // console.log(`ValuesList.js: filterdValuesArr: `, filteredValuesArr);
  // console.log(`ValuesList.js: rerenderList: `, rerenderList);

  return (
    <>
      <ValuesBannerWrapper
        endOfList={endOfList}
        narrowDown={narrowDown}
        usersList={usersList}
        usersList={usersList}
        // setEndOfList={setEndOfList}
      />
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
  console.log(`ValuesList.js: mapPropsToState: state: `, state);
  return {
    values: state.values.values,
    isLoading: state.isLoading,
    usersList: state.values.usersList
  };
};

export default connect(mapPropsToState)(ValuesList);
//getValues
