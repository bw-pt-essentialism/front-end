import React from "react";

import { ValuesSelectionHero } from "./ValuesSelectionPage.styles";
import hero from "../../images/hero.JPG";
import ValuesList from "../../components/values-list/ValuesList.component";

function ValuesSelectionPage() {
  return (
    <>
      <ValuesSelectionHero img={hero} />
      <ValuesList />
    </>
  );
}

export default ValuesSelectionPage;
