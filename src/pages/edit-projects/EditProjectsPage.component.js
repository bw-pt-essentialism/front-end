import React from "react";
import { Route } from "react-router-dom";
import EditProjectsForm from "../../components/edit-forms/edit-projects/EditProjectsForm.component";
import ProjectToEdit from "../../components/project-to-edit/ProjectToEdit.component";

import hero from "../../images/hero.JPG";

import { Hero } from "./EditProjectsPage.styles";

function EditProjectsPage() {
  return (
    <>
      <Hero img={hero}></Hero>
      <ProjectToEdit />
      <Route path="/edit-projects/:projToEdit">
        <EditProjectsForm />
      </Route>
    </>
  );
}

export default EditProjectsPage;
