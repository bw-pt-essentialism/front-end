import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Header from "./components/header/Header.component";
import HomePage from "./pages/homepage/HomePage.page";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage";
import ChoiceExplanation from "./components/choice-explanation/ChoiceExplanationForm.component";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";

import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Globals />
      {token ? (
        <PrivateRoute path="/" component={Header} />
      ) : (
        <Route path="/">
          <SignInAndUpPage />
        </Route>
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
