import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import PrivateRoute from "./PrivateRoute";

import Header from "./components/header/Header.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";
import HomePage from "./pages/homepage/HomePage.page";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage";
import ChoiceExplanation from "./components/choice-explanation/ChoiceExplanationForm.component";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";

function App() {
  const { user } = useSelector(state => ({ user: state.user.user }));

  return (
    <Router>
      <Globals />
      {user.length || localStorage.token ? <Header /> : <SignInAndUpPage />}
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
