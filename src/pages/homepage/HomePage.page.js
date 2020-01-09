import React from "react";
import { useSelector } from "react-redux";
import ValuesSelectionPage from "../values-selection/ValuesSelectionPage";

function HomePage() {
  const userValues = useSelector(state => state.values.userValues);
  // const localUserValues = localStorage.getItem("userValues")
  console.log("HOMEPAGE: USERVALUES: ", userValues);

  if (userValues.length > 0) {
    return <h2>Hello from Home Page</h2>;
  } else {
    return <ValuesSelectionPage />;
  }
}

export default HomePage;
