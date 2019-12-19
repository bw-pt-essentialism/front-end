import React from "react";

import { Globals } from "./globals/GlobalStyles";
import { CustomLink } from "./components/custom-link/CustomLink.styles";
import "./App.css";

function App() {
  return (
    <>
      <Globals />
      <h1>Hello From App.js</h1>
      <CustomLink to="/test">Test</CustomLink>
    </>
  );
}

export default App;
