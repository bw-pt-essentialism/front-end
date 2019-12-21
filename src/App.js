import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import HomePage from "./pages/homepage/HomePage.page";

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
        <Route path="/sign">
          <SignInAndUpPage />
        </Route>
        <PrivateRoute path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
