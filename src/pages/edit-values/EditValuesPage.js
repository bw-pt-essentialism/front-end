import React from "react";
import { Route } from "react-router-dom";
import EditValuesForm from "../../components/values-components/edit-values/edit-vales-form/EditValuesForm.component";
import ValuesToEdit from "../../components/values-components/values-to-edit/ValuesToEdit";

import hero from "../../images/hero.JPG";

import { Hero } from "./EditValuesPage.styles";

function EditValuesPage() {
  return (
    <>
      <Hero img={hero}></Hero>
      <ValuesToEdit />
      <Route path="/edit-values/:valToEdit">
        <EditValuesForm />
      </Route>
    </>
  );
}

export default EditValuesPage;
