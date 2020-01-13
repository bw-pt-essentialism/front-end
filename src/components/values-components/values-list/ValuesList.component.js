import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import Value from "../value/Value.component";
import UsersTopValues from "../user-top-values/UsersTopValues.component";
import ValuesBannerWrapper from "../user-top-values/UsersTopValues.styles";
import { AboutValuesHero } from "../../about/about-values/AboutValues.styles";
import { BottomImg } from "./ValuesList.styles";
import hero from "../../../images/hero.JPG";
import stones from "../../../images/stones.jpeg";

function ValuesList() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [endOfList, setEndOfList] = useState(null);
  const [narrowDown, setNarrowDown] = useState(true);

  const localValues = JSON.parse(localStorage.getItem("values"));
  const localUsersList = JSON.parse(localStorage.getItem("usersList"));
  const history = useHistory();
  const usersList = useSelector(state => state.values.usersList);

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = localValues.length - 1;
    if (index === slidesLength) {
      usersList.length > 2 && setNarrowDown(false);
      setEndOfList(true);
      history.push(`/values-selection/values-confirmation`);
    }
    ++index;
    setActiveIndex(index);
  };

  const valueOnboardingComplete = JSON.parse(
    localStorage.getItem("valueOnboardingComplete")
  );
  console.log("I AM THE USERIST OF LISTS, ", usersList);

  return (
    <>
      <AboutValuesHero img={hero} />
      {usersList && (
        <ValuesBannerWrapper
          endOfList={endOfList}
          narrowDown={narrowDown}
          usersList={usersList}
        />
      )}
      {valueOnboardingComplete === false ? (
        <Route path={`/values-selection/values-confirmation`}>
          <BottomImg img={stones}>
            <UsersTopValues
              endOfList={endOfList}
              setEndOfList={setEndOfList}
              narrowDown={narrowDown}
            />
          </BottomImg>
        </Route>
      ) : (
        <Redirect to="/choice-expl" />
      )}
      {
        <BottomImg img={stones}>
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
        </BottomImg>
      }
    </>
  );
}

export default ValuesList;
