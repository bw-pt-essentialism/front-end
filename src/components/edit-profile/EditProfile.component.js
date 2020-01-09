import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  SignUpButton,
  SignUpButtonContainer
} from "../sign-up-form/SignUpForm.styles";

import { putUser, deleteUser } from "../../store/actions/user.actions";

import "../../globals/form.styles.css";

const EditProfile = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  const history = useHistory();

  const dispatch = useDispatch();

  const id = JSON.parse(Number(localStorage.getItem("id")));

  console.log(id);

  const handleUpdate = () => {
    dispatch(
      putUser(
        {
          name: values.name,
          username: values.username,
          password: values.password,
          email: values.email
        },
        id
      )
    ).then(() => history.push("/in"));
  };

  const handleDelete = () => dispatch(deleteUser(id));

  return (
    <div className="form-container">
      <Form className="form">
        <Field
          className="input"
          component="input"
          type="text"
          name="name"
          placeholder="Full Name"
        />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <Field
          className="input"
          component="input"
          type="email"
          name="email"
          placeholder="email@example.com"
        />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <Field
          className="input"
          component="input"
          type="text"
          name="username"
          placeholder="username"
        />
        {touched.username && errors.username && (
          <p className="errors">{errors.username}</p>
        )}
        <Field
          className="input"
          component="input"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="errors">{errors.password}</p>
        )}
        <Field
          className="input"
          component="input"
          type="password"
          name="verifyPassword"
          placeholder="Verify Password"
        />
        {touched.verifyPassword && errors.verifyPassword && (
          <p className="errors">{errors.verifyPassword}</p>
        )}

        <SignUpButtonContainer>
          <SignUpButton
            type="submit"
            onClick={handleDelete}
            disabled={isSubmitting}
          >
            delete me
          </SignUpButton>
          <SignUpButton
            type="submit"
            onClick={handleUpdate}
            disabled={isSubmitting}
          >
            Update
          </SignUpButton>
        </SignUpButtonContainer>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ name, email, password, verifyPassword, terms, username }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      verifyPassword: verifyPassword || "",
      terms: terms || false,
      username: username || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Please Enter A Valid Email"),
    password: Yup.string().min(8, "Password must be 8 characters or longer"),
    verifyPassword: Yup.string().min(
      8,
      "Password must be 8 characters or longer and should match"
    ),
    name: Yup.string().required("Required"),
    terms: Yup.boolean()
      .required("Required")
      .oneOf([true], "Must Accept Terms and Conditions"),
    username: Yup.string().required()
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.password !== values.verifyPassword) {
      setErrors({ verifyPassword: "Passwords do not match" });
      setSubmitting(false);
    } else {
      resetForm();
    }
  }
})(EditProfile);
