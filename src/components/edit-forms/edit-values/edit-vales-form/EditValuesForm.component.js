import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
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
  const history = useHistory();

  // const userValues = useSelector(state => state.values.userValues)

  const { valToEdit } = useParams();

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  useEffect(() => {
    const userValues = JSON.parse(localStorage.getItem("userValues"));
  }, [userValues]);

  const handleClick = id => {
    const updatedValues = userValues.map(val => {
      console.log(values);
      const valToUpdate = JSON.parse(localStorage.getItem("updatingVal"));
      if (val.id === id) {
        dispatch(
          putValues(id, {
            id: valToUpdate.id,
            name: values.value || valToUpdate.name,
            description: values.description || valToUpdate.description
          })
        );
        return {
          id: valToUpdate.id,
          name: values.value || valToUpdate.name,
          description: values.description || valToUpdate.description
        };
      } else {
        return val;
      }
    });
    history.push("/home");
    localStorage.setItem("userValues", JSON.stringify(updatedValues));
  };

  return (
    <>
      {/* <Sizer> */}
      {userValues &&
        userValues.map(val => {
          console.log(`This is val.id: `, val.id);
          if (val.id === parseInt(valToEdit)) {
            localStorage.setItem("updatingVal", JSON.stringify(val));
            // console.log(`This is updatingVal: `, val);
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
    const val = JSON.parse(localStorage.getItem("updatingVal"));
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
})(EditValuesForm);
