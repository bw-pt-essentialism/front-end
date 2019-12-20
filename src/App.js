import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";

import LoginForm from "./components/login-form/LoginForm.component";
import SignUpForm from "./components/sign-up-form/SignUpForm.component";
import SignInAndUpPage from "./pages/sign-in-and-up/SignInAndUpPage";

function App() {
  return (
    <Router>
      <Globals />
      {/* need to change this route to /login */}
      {/* <Route path="/">
        <LoginForm />
      </Route>
      <Route path="/">
        <SignUpForm />
      </Route> */}
      <SignInAndUpPage />
    </Router>
  );
}

export default App;
