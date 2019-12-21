import React from "react";
import { withFormik, Form, Field } from "formik";
import { Redirect } from "react-router-dom";
import * as Yup from "yup";

import { LoginButton, LoginLinkSignUp } from "./LoginForm.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const LoginForm = ({ errors, touched, isSubmitting, isValidating, values }) => {
  //   console.log(props);
  return (
    <div className="form-container">
      <Form className="form">
        <h4>Welcome back</h4>
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
        <SignUpButtonContainer>
          <LoginButton type="submit" disabled={isSubmitting}>
            Log In
          </LoginButton>
          <LoginLinkSignUp to="/sign/up" disabled={isSubmitting}>
            Sign Up
          </LoginLinkSignUp>
        </SignUpButtonContainer>
      </Form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues({ password, username }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Required")
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(`LoginForm.js: handleSubmit: values: `, values);
    localStorage.setItem("token", "temp_token");
    resetForm();
    window.location.href = "/home";
  }
})(LoginForm);
