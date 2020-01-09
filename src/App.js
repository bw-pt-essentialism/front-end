import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { postValues } from "./store/actions/values.actions";
import { values } from "./dummy-data";

import PrivateRoute from "./PrivateRoute";

import Header from "./components/header/Header.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";
import HomePage from "./pages/homepage/HomePage.page";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage";
import ChoiceExplanation from "./components/choice-explanation/ChoiceExplanationForm.component";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";

function App() {
  const welcome = useSelector(state => state.login.welcome);

  console.log(welcome);

  // const dispatch = useDispatch();
  // console.log(`App.js: values: `, values[0].value);
  // values.map(val => dispatch(postValues(val.value)));
  // dispatch(postValues(values[0].value));
  return (
    <Router>
      <Globals />
      {welcome || localStorage.getItem("token") ? (
        <Header />
      ) : (
        <SignInAndUpPage />
      )}
      <Switch>
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute
          path="/values-selection"
          component={ValuesSelectionPage}
        />
        <PrivateRoute path="/choice-expl" component={ChoiceExplanation} />
      </Switch>
    </Router>
  );
}

export default App;
