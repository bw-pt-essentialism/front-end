import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { postProjects } from "../../store/actions/projects.actions";

import Hero from "../hero/Hero.component";
import hero from "../../images/hero.JPG";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer
} from "../choice-explanation/ChoiceExplanations.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const EditProjectForm = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  const dispatch = useDispatch();

  const history = useHistory();

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  const goToNextCard = () => {
    dispatch(postProjects(values));
  };
  const handleClick = () => {
    dispatch(postProjects(values));
    localStorage.setItem("projects-confirmed", JSON.stringify(true));
    history.push("/home");
  };
  return (
    <Sizer>
      <Hero img={hero} />
      <div>
        <FormContainer className="form">
          <h4>What are you working on?</h4>
          <Field
            className="input"
            component="input"
            type="text"
            name="project"
            placeholder="Tell us what you're working on..."
          />
          {touched.project && errors.project && (
            <p className="errors">{errors.project}</p>
          )}
          <Field
            className="input"
            component="input"
            type="textarea"
            name="notes"
            placeholder="Make some notes..."
          />
          {touched.notes && errors.notes && (
            <p className="errors">{errors.notes}</p>
          )}
          <Field name="value" as="select">
            <option value="" label="Value" />
            {userValues &&
              userValues.map(val => {
                return (
                  <option key={val.id} value={val.name}>
                    {val.name}
                  </option>
                );
              })}
          </Field>
          <SignUpButtonContainer>
            <ConfirmExplanationButton
              type="submit"
              onClick={handleClick}
              disabled={isSubmitting}
            >
              submit
            </ConfirmExplanationButton>
            <ConfirmExplanationButton
              type="submit"
              onClick={goToNextCard}
              disabled={isSubmitting}
            >
              do more
            </ConfirmExplanationButton>
          </SignUpButtonContainer>
        </FormContainer>
      </div>
    </Sizer>
  );
};

export default withFormik({
  mapPropsToValues({ project, value, notes }) {
    return {
      value: value,
      project: project || "",
      notes: notes
    };
  },
  validationSchema: Yup.object().shape({
    project: Yup.string().required("Required")
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditProjectForm);
