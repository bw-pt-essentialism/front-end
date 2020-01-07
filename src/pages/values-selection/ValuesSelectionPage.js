import React from "react";

import Hero from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";
import ValuesList from "../../components/values-list/ValuesList.component";

function ValuesSelectionPage() {
  return (
    <>
      <Hero img={hero} />
      <ValuesList />
    </>
  );
}

export default ValuesSelectionPage;
