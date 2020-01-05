import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Header from "./components/header/Header.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";
import HomePage from "./pages/homepage/HomePage.page";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage";
import ChoiceExplanation from "./components/choice-explanation/ChoiceExplanationForm.component";
import Dashboard from "./components/dashboard/Dashboard";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";

function App() {
  console.log(`locale storage.getItem`, localStorage.getItem("token"));
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Globals />
      {/* {token !== null ? <Header /> : <SignInAndUpPage />} */}
      {/* <Switch> */}

      <Route path="/">
        <SignInAndUpPage />
      </Route>

      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      {/* </Switch> */}
      {/* <Switch>
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute
          path="/values-selection"
          component={ValuesSelectionPage}
        />
        <PrivateRoute path="/choice-expl" component={ChoiceExplanation} />
      </Switch> */}
    </Router>
  );
}

export default App;
