import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { putProjects } from "../../../store/actions/projects.actions";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer,
  Hero,
  StyledValueField
} from "./EditProjectsForm.styles";
import { SignUpButtonContainer } from "../../sign-up-form/SignUpForm.styles";

const EditProjectsForm = ({
  errors,
  touched,
  isSubmitting,
  // isValidating,
  values
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  // const userProjects = useSelector(state => state.values.userProjects)

  const { projToUpdate } = useParams();

  const userProjects = JSON.parse(localStorage.getItem("userProjects"));

  useEffect(() => {
    const userProjects = JSON.parse(localStorage.getItem("userProjects"));
  }, [userProjects]);

  const handleClick = id => {
    const updatedValues = userProjects.map(val => {
      console.log(values);
      const projToUpdate = JSON.parse(localStorage.getItem("updatingProj"));
      if (val.id === id) {
        dispatch(
          putProjects(id, {
            id: projToUpdate.id,
            project: values.value || projToUpdate.name,
            description: values.description || projToUpdate.description
          })
        );
        return {
          id: projToUpdate.id,
          name: values.value || projToUpdate.name,
          description: values.description || projToUpdate.description
        };
      } else {
        return val;
      }
    });
    history.push("/home");
    localStorage.setItem("userProjects", JSON.stringify(updatedValues));
  };

  return (
    <>
      {/* <Sizer> */}
      {userProjects &&
        userProjects.map(val => {
          console.log(`This is val.id: `, val.id);
          if (val.id === parseInt(projToUpdate)) {
            localStorage.setItem("updatingProj", JSON.stringify(val));
            // console.log(`This is updatingProj: `, val);
            return (
              <div key={val.id}>
                <FormContainer className="form">
                  <h4>You change, your values change, and that's ok.</h4>

                  <Field
                    className="input"
                    component="input"
                    type="textarea"
                    name="valueID"
                    value={val.id}
                    hidden
                  />
                  <StyledValueField
                    id="value"
                    className="input"
                    component="input"
                    type="text"
                    name="value"
                    placeholder={val.name}
                  />
                  <Field
                    className="input"
                    component="input"
                    type="textarea"
                    name="description"
                    placeholder={val.description}
                  />
                  {touched.description && errors.description && (
                    <p className="errors">{errors.description}</p>
                  )}
                  <SignUpButtonContainer>
                    <ConfirmExplanationButton
                      onClick={() => handleClick(val.id)}
                      disabled={isSubmitting}
                    >
                      update
                    </ConfirmExplanationButton>
                  </SignUpButtonContainer>
                </FormContainer>
              </div>
            );
          }
        })}
      {/* </StyledSection> */}
      {/* </Sizer> */}
    </>
  );
};

export default withFormik({
  mapPropsToValues({ description, value }) {
    const val = JSON.parse(localStorage.getItem("updatingProj"));
    return {
      value: value,
      description: description
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string()
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditProjectsForm);
