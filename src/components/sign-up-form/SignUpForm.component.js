import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { CustomButton } from "../custom-button/CustomButton";

import "../../globals/form.styles.css";

const SignUpForm = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  //   console.log(props);
  return (
    <div className="form-container">
      <Form className="form-container">
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

        <label className="button">
          Terms and Conditions
          <Field
            className="input"
            component="input"
            type="checkbox"
            checked={values.terms}
            name="terms"
            placeholder="Full Name"
          />
          {touched.terms && errors.terms && (
            <p className="errors">{errors.terms}</p>
          )}
        </label>
        <CustomButton type="submit" disabled={isSubmitting}>
          Submit
        </CustomButton>
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
    email: Yup.string()
      .email("Please Enter A Valid Email")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters or longer")
      .required("Required"),
    verifyPassword: Yup.string()
      .min(8, "Password must be 8 characters or longer and should match")
      .required("Required"),
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
      console.log(`SignUpForm.js: handleSubmit: values: `, values);
      resetForm();
    }
  }
})(SignUpForm);
