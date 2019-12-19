import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Globals } from "./globals/GlobalStyles";
import { CustomLink } from "./components/custom-link/CustomLink.styles";
import "./App.css";

function App() {
  return (
    <Router>
      <Globals />
      <h1>Hello From App.js</h1>
      <CustomLink to="/test">Test</CustomLink>
    </Router>
  );
}

export default App;
