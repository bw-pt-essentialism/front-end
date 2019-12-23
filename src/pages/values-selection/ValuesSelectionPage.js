import React from "react";

import Hero from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";
import ValuesList from "../../components/values-list/ValuesList.component";

function ValuesSelectionPage() {
  return (
    <>
      <h2>Hello from Values Selection Page</h2>
      <Hero img={hero} />
      <ValuesList />
    </>
  );
}

export default ValuesSelectionPage;
