import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import HomePage from "./pages/homepage/HomePage.page";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";

import LoginForm from "./components/login-form/LoginForm.component";
import SignUpForm from "./components/sign-up-form/SignUpForm.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";

function App() {
  return (
    <Router>
      <Globals />
      <Switch>
        <PrivateRoute path="/home" component={HomePage} />
        <PrivateRoute
          path="/values-selection"
          component={ValuesSelectionPage}
        />
        <Route path="/">
          <SignInAndUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
