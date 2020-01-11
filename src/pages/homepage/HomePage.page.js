import React from "react";
import { useSelector } from "react-redux";
import ValuesSelectionPage from "../values-selection/ValuesSelectionPage";
import ConfirmedValues from "../../components/confirmed-values/Confirmed-Values.component";

function HomePage() {
  const userProjects = useSelector(state => state.projects.projects);

  localStorage.getItem("projects", JSON.stringify(userProjects));
  const localUserValues = JSON.parse(localStorage.getItem("userValues"));
  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));

  if (localUserValues && localUserValues.length > 0) {
    return confirmed && <ConfirmedValues />;
    // return <h2>Hello from Home Page</h2>;
  } else {
    return <ValuesSelectionPage />;
  }
}

export default HomePage;
