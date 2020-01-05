import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import {
  SignUpButton,
  SignUpButtonContainer,
  SignUpLinkLogin
} from "./SignUpForm.styles";

import {
  postUser,
  getUser,
  deleteUser
} from "../../store/actions/user.actions";

import "../../globals/form.styles.css";

const SignUpForm = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values,
  postUser,
  getUser,
  deleteUser
}) => {
  const history = useHistory();

  // useEffect(() => {
  //   deleteUser(78);
  //   // getUser(1);
  // }, []);

  const handleClick = () => {
    postUser({
      name: values.name,
      username: values.username,
      password: values.password,
      email: values.email
    }).then(() => {
      console.log(localStorage.token);
      history.push("/values-selection");
    });
  };

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

        <span className="terms">
          <label>
            <Field
              className="checkbox"
              component="input"
              type="checkbox"
              checked={values.terms}
              name="terms"
              placeholder="Full Name"
            />
            {touched.terms && errors.terms && (
              <p className="errors">{errors.terms}</p>
            )}
            <span className="terms-text">Terms and Conditions</span>
          </label>
        </span>
        <SignUpButtonContainer>
          <SignUpLinkLogin to="/in" disabled={isSubmitting}>
            Log In
          </SignUpLinkLogin>
          <SignUpButton
            type="submit"
            onClick={handleClick}
            disabled={isSubmitting}
          >
            SignUp
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
})(connect(null, { postUser, getUser, deleteUser })(SignUpForm));

// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { connect } from "react-redux";

// import {
//   postUser,
//   getUser,
//   deleteUser
// } from "../../store/actions/user.actions";

// // import "./signup.styles.css";

// const SignUpForm = ({ postUser }) => {
//   const [localUserName, setLocalUserName] = useState("");
//   const { handleSubmit, register, errors } = useForm();
//   const onSubmit = values => {
//     console.log(`username: `, values);
//     postUser(values);
//   };
//   return (
//     <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
//       <p>NOT FUNCTIONAL</p>
//       <input
//         className="input"
//         aria-label="select name"
//         name="name"
//         placeholder="Select Name"
//         ref={register({
//           required: "Required",
//           pattern: {
//             value: "",
//             message: "Name must be more than one character"
//           }
//         })}
//       />
//       {errors.name && errors.name.message}
//       <input
//         className="input"
//         aria-label="select user name"
//         name="username"
//         placeholder="Select User Name"
//         ref={register({
//           required: "Required",
//           pattern: {
//             value: "",
//             message: "Name must be more than one character"
//           }
//         })}
//       />
//       {errors.username && errors.username.message}
//       <input
//         className="input"
//         aria-label="Email"
//         name="email"
//         type="email"
//         placeholder="Email"
//         ref={register({
//           required: "Required",
//           pattern: {
//             value: "",
//             message: "Name must be more than one character"
//           }
//         })}
//       />
//       {errors.username && errors.username.message}
//       <input
//         className="input"
//         width="400px"
//         aria-label="choose a password"
//         name="password"
//         type="password"
//         placeholder="Choose A Password"
//         ref={register({
//           required: "Required",
//           pattern: {
//             ninLength: 2,
//             maxLength: 15,
//             message:
//               "Password length must be between 7 and 20 characters, include at least one letter and one number character"
//           }
//         })}
//       />
//       {errors.password && errors.password.message}

//       <button to="/protected" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default connect(null, { postUser })(SignUpForm);
