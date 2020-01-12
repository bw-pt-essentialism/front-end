import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import {
  addValueDescription,
  putValues
} from "../../../../store/actions/values.actions";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer,
  Hero,
  StyledValueField
} from "./EditValuesForm.styles";
import { SignUpButtonContainer } from "../../../sign-up-form/SignUpForm.styles";

const EditValuesForm = ({
  errors,
  touched,
  isSubmitting,
  // isValidating,
  values
}) => {
  const dispatch = useDispatch();

  // const userValues = useSelector(state => state.values.userValues)

  const { valToEdit } = useParams();

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  const handleClick = id => {
    const updatedValues = userValues.map(val => {
      if (val.id === id) {
        return (val = { ...val, values });
      }
      localStorage.setItem("userValues", JSON.stringify(updatedValues));
    });
  };
  return (
    <>
      {/* <Sizer> */}
      {userValues &&
        userValues.map(val => {
          console.log(`This is val.id: `, val.id);
          if (val.id === parseInt(valToEdit)) {
            localStorage.setItem("update", JSON.stringify(val));
            console.log(JSON.parse(localStorage.getItem("update")));
            return (
              <div key={val.id}>
                <FormContainer className="form">
                  <h4>You change, your values change, and that's ok.</h4>
                  <StyledValueField
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
  mapPropsToValues({ description, val, value }) {
    return {
      value: value,
      description: description
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required("Required")
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(EditValuesForm);
