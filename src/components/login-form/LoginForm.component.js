import React from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { getUser } from "../../store/actions/user.actions";

import { LoginButton, LoginLinkSignUp } from "./LoginForm.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const LoginForm = ({
  getUser,
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
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
          <LoginButton
            type="submit"
            onClick={() => {
              getUser(values);
            }}
            disabled={isSubmitting}
          >
            Log In
          </LoginButton>
          <LoginLinkSignUp to="/up" disabled={isSubmitting}>
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
    // console.log(`LoginForm.js: handleSubmit: values: `, values);
    // localStorage.setItem("token", "temp_token");
    resetForm();
  }
})(connect(null, { getUser })(LoginForm));
