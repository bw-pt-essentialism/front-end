// import React, { useState } from "react";

// import { CustomButton } from "../custom-button/CustomButton";

// function LoginForm() {
//   const [credentials, setCredentials] = useState({
//     credentials: {
//       username: "",
//       password: ""
//     }
//   });

//   const handleChange = e => {
//     setCredentials({
//       credentials: {
//         ...credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(`LoginForm.js: handleSubmit: credentials: `, credentials);
//     setCredentials({
//       credentials: {
//         username: "",
//         password: ""
//       }
//     });
//     localStorage.setItem("token", "temp_token");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="username"
//           value={credentials.username}
//           onChange={handleChange}
//         />
//         <input
//           type="password"
//           name="password"
//           value={credentials.password}
//           onChange={handleChange}
//         />
//         <CustomButton to="/home" type="submit">
//           Log in
//         </CustomButton>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;

import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import { CustomButton } from "../custom-button/CustomButton";

const LoginForm = ({ errors, touched, isSubmitting, isValidating, values }) => {
  //   console.log(props);
  return (
    <Form className="form">
      <Field
        component="input"
        type="text"
        name="username"
        placeholder="username"
      />
      {touched.username && errors.username && (
        <p className="errors">{errors.username}</p>
      )}
      <Field
        component="input"
        type="password"
        name="password"
        placeholder="Password"
      />
      {touched.password && errors.password && (
        <p className="errors">{errors.password}</p>
      )}

      <CustomButton type="submit" disabled={isSubmitting}>
        Submit
      </CustomButton>
    </Form>
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
  }
})(LoginForm);
