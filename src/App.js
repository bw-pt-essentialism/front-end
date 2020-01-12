import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  getValues,
  postValues,
  deleteValues
} from "./store/actions/values.actions";

import PrivateRoute from "./PrivateRoute";

import Header from "./components/header/Header.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";
import HomePage from "./pages/homepage/HomePage.page";
import AboutValues from "./components/about/about-values/AboutValues.component";
import AboutProjects from "./components/about/about-projects/AboutProjects.component";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage.component";
import ChoiceExplanation from "./components/choice-explanation/ChoiceExplanationForm.component";
import ProjectForm from "./components/project-form/ProjectForm.component";
import EditProfile from "./components/edit-forms/EditProfile.component";
import EditValuesPage from "./pages/edit-values/EditValuesPage";

import { Globals } from "./globals/GlobalStyles";
import { values } from "./dummy-data";

import "./App.css";
function App() {
  const welcome = useSelector(state => state.login.welcome);

  const dispatch = useDispatch();

  useEffect(() => {
    //local solution to setting values to local state from dummy data
    localStorage.setItem("values", JSON.stringify(values));

    //server-side solution to setting values to local state
    // values.map(val => dispatch(postValues({ name: val.value })));
    // dispatch(deleteValues(1));
    // dispatch(deleteValues(2));
  }, []);

  return (
    <Router>
      <Globals />
      {welcome || localStorage.getItem("token") ? (
        <Header />
      ) : (
        <SignInAndUpPage />
      )}
      <Switch>
        <PrivateRoute
          path="/values-selection"
          component={ValuesSelectionPage}
        />
        <PrivateRoute path="/choice-expl" component={ChoiceExplanation} />
        <PrivateRoute path="/project-form" component={ProjectForm} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <PrivateRoute path="/edit-values" component={EditValuesPage} />
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute path="/about-values" component={AboutValues} />
        <PrivateRoute path="/about-projects" component={AboutProjects} />
      </Switch>
    </Router>
  );
}

export default App;
