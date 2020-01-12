import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import ValuesSelectionPage from "../values-selection/ValuesSelectionPage.component";
import ConfirmedValues from "../../components/confirmed-values/Confirmed-Values.component";
import ProjectList from "../../components/project-list/ProjectList.component";

import {
  StyledSection,
  StyledConfirmedValues,
  StyledProjectList
} from "./HomePage.styles";

function HomePage() {
  const localUserValues = JSON.parse(localStorage.getItem("userValues"));
  const confirmed = JSON.parse(localStorage.getItem("explanations-confirmed"));
  const history = useHistory();

  if (confirmed) {
    if (localUserValues) {
      return (
        <StyledSection>
          <StyledConfirmedValues /> <StyledProjectList />
        </StyledSection>
      );
    } else return history.push("/project-form");
  } else {
    return <Redirect to="/values-selection" />;
  }
}

export default HomePage;
