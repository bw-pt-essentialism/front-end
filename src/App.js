import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { getValues } from "./store/actions/values.actions";

import PrivateRoute from "./PrivateRoute";

import Header from "./components/header/Header.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";
import HomePage from "./pages/homepage/HomePage.page";
import ValuesSelectionPage from "./pages/values-selection/ValuesSelectionPage";
import ChoiceExplanation from "./components/choice-explanation/ChoiceExplanationForm.component";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";
import EditProfile from "./components/edit-profile/EditProfile.component";
function App() {
  const welcome = useSelector(state => state.login.welcome);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getValues());
  });

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
        <PrivateRoute path="/edit-profile" component={EditProfile} />
      </Switch>
    </Router>
  );
}

export default App;
