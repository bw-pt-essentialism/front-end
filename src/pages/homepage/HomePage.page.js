import React from "react";
import { useSelector } from "react-redux";
import ValuesSelectionPage from "../values-selection/ValuesSelectionPage";
import ConfirmedValues from "../../components/confirmed-values/Confirmed-Values.component";
import ProjectList from "../../components/project-list/ProjectList.component";

import { StyledSection } from "./HomePage.styles";

function HomePage() {
  const localUserValues = JSON.parse(localStorage.getItem("userValues"));
  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));

  if (localUserValues && localUserValues.length > 0) {
    return (
      confirmed && (
        <StyledSection>
          <ConfirmedValues /> <ProjectList />
        </StyledSection>
      )
    );
  } else {
    return <ValuesSelectionPage />;
  }
}

export default HomePage;
