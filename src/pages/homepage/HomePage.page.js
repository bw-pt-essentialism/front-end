import React from "react";
import { useSelector } from "react-redux";
import ValuesSelectionPage from "../values-selection/ValuesSelectionPage";
import ConfirmedValues from "../../components/confirmed-values/Confirmed-Values.component";
import ProjectList from "../../components/project-list/ProjectList.component";
import ProjectListComponent from "../../components/project-list/ProjectList.component";

function HomePage() {
  const localUserValues = JSON.parse(localStorage.getItem("userValues"));
  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));

  if (localUserValues && localUserValues.length > 0) {
    return (
      confirmed && (
        <>
          <ConfirmedValues /> <ProjectList />
        </>
      )
    );
    // return <h2>Hello from Home Page</h2>;
  } else {
    return <ValuesSelectionPage />;
  }
}

export default HomePage;
