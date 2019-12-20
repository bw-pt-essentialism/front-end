import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Globals } from "./globals/GlobalStyles";

import "./App.css";

import LoginForm from "./components/login-form/LoginForm.component";

function App() {
  return (
    <Router>
      <Globals />
      {/* need to change this route to /login */}
      <Route path="/">
        <LoginForm />
      </Route>
    </Router>
  );
}

export default App;
