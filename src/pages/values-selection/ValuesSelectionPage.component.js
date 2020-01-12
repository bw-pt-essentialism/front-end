import React from "react";

import { ValuesSelectionHero } from "./ValuesSelectionPage.styles";
import hero from "../../images/hero.JPG";
import ValuesList from "../../components/values-components/values-list/ValuesList.component";
// import ValuesSelection from "../../components/va"

function ValuesSelectionPage() {
  return (
    <>
      <ValuesSelectionHero img={hero} />
      {/* <ValuesSelection /> */}
      <ValuesList />
    </>
  );
}

export default ValuesSelectionPage;
