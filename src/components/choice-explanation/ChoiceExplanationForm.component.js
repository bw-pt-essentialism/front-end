// import React, { useState } from "react";
// import { connect } from "react-redux";
// import { withFormik, Form, Field } from "formik";
// import * as Yup from "yup";

// import Hero from "../hero/Hero.component";
// import hero from "../../images/hero.JPG";

// import {
//   ConfirmExplanationButton,
//   ConfirmExplanationLink
// } from "./ChoiceExplanations.styles";
// import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

// const ChoiceExplanation = ({
//   errors,
//   touched,
//   isSubmitting,
//   isValidating,
//   values,
//   usersList
// }) => {
//   //   console.log(props);
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [endOfList, setEndOfList] = useState(null);
//   const [narrowDown, setNarrowDown] = useState(true);

//   const goToNextCard = () => {
//     let index = activeIndex;
//     let slidesLength = usersList.length - 1;
//     if (index === slidesLength) {
//       // index = -1;
//       //   usersList.length > 2 && setNarrowDown(false);
//       setEndOfList(true);
//     }
//     ++index;
//     setActiveIndex(index);
//   };
//   const handleClick = () => {
//     console.log(`HANDLE CLICK ON VALUES EXPL FORM HAS BEEN REACHED`);
//     return goToNextCard();
//   };
//   return (
//     <>
//       <Hero img={hero} />
//       {usersList.map(val => {
//         console.log(`ChoiceExplForm.js: usersList.map: val: `, val);
//         return (
//           <div className="form-container expl-form" key={val.id}>
//             <Form className="form">
//               <h4>Welcome back</h4>
//               <Field
//                 className="input"
//                 component="input"
//                 type="text"
//                 name="value"
//                 value={val.value}
//               />
//               {/* {touched.username && errors.username && (
//                 <p className="errors">{errors.username}</p>
//               )} */}
//               <Field
//                 className="input"
//                 component="input"
//                 type="textarea"
//                 name="expl"
//                 placeholder="Why?"
//               />
//               {/* {touched.password && errors.password && (
//                 <p className="errors">{errors.password}</p>
//               )} */}
//               <SignUpButtonContainer>
//                 <ConfirmExplanationButton
//                   onClick={handleClick}
//                   type="submit"
//                   disabled={isSubmitting}
//                 >
//                   confirm
//                 </ConfirmExplanationButton>
//                 {/* <LoginLinkSignUp to="/up" disabled={isSubmitting}>
//             Sign Up
//           </LoginLinkSignUp> */}
//               </SignUpButtonContainer>
//             </Form>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const mapPropsToState = state => {
//   console.log(`ChoiceExplanation.component: mapPropsToState: state: `, state);
//   return {
//     usersList: state.values.usersList,
//     remove: state.values.usersList.remove
//   };
// };

// export default withFormik({
//   mapPropsToValues({ expl, value }) {
//     return {
//       value: value || "",
//       expl: expl || ""
//     };
//   },
//   validationSchema: Yup.object().shape({
//     password: Yup.string()
//       .min(8, "Password must be 8 characters or longer")
//       .required("Required")
//   }),
//   handleSubmit(values, { resetForm, setSubmitting }) {
//     console.log(`ChoiceExplanation.js: handleSubmit: values: `, values);
//   }
// })(connect(mapPropsToState)(ChoiceExplanation));

import React, { useState } from "react";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

import Hero from "../hero/Hero.component";
import hero from "../../images/hero.JPG";

import styled from "styled-components";
import {
  FormContainer,
  ConfirmExplanationButton,
  ConfirmExplanationLink
} from "./ChoiceExplanations.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const ChoiceExplanation = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values,
  usersList
}) => {
  //   console.log(props);
  const [activeIndex, setActiveIndex] = useState(0);
  const [endOfList, setEndOfList] = useState(null);
  const [narrowDown, setNarrowDown] = useState(true);

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = usersList.length - 1;
    if (index === slidesLength) {
      // index = -1;
      //   usersList.length > 2 && setNarrowDown(false);
      setEndOfList(true);
    }
    ++index;
    setActiveIndex(index);
  };
  const handleClick = () => {
    console.log(`HANDLE CLICK ON VALUES EXPL FORM HAS BEEN REACHED`);
    return goToNextCard();
  };
  return (
    <>
      <Hero img={hero} />
      {usersList.map((val, index) => {
        // console.log(`ChoiceExplForm.js: usersList.map: val: `, val);
        return (
          <div key={val.id}>
            <FormContainer className="form" index={index} active={activeIndex}>
              <h4>You selected: {val.value}</h4>
              <Field
                // className="input"
                component="input"
                type="text"
                name="val"
                placeholder="Why?"
                value="{val.id}"
                hidden={true}
              />
              <Field
                className="input"
                component="input"
                type="textarea"
                name="expl"
                placeholder="Why?"
              />
              {touched.expl && errors.expl && (
                <p className="errors">{errors.expl}</p>
              )}
              <SignUpButtonContainer>
                <ConfirmExplanationButton
                  onClick={handleClick}
                  disabled={isSubmitting}
                >
                  confirm
                </ConfirmExplanationButton>
                {/* <LoginLinkSignUp to="/up" disabled={isSubmitting}>
            Sign Up
          </LoginLinkSignUp> */}
              </SignUpButtonContainer>
            </FormContainer>
          </div>
        );
      })}
    </>
  );
};

const mapPropsToState = state => {
  console.log(`ChoiceExplanation.component: mapPropsToState: state: `, state);
  return {
    usersList: state.values.usersList,
    remove: state.values.usersList.remove
  };
};

export default withFormik({
  mapPropsToValues({ expl, val, value }) {
    console.log(`ChoiceExplForm: withFormik: mapPropsToValues: value: `, val);
    return {
      val: value,
      expl: expl || ""
    };
  },
  validationSchema: Yup.object().shape({
    expl: Yup.string().required("Required")
  }),
  handleSubmit(values, { resetForm, setSubmitting }) {
    console.log(`ChoiceExplanation.js: handleSubmit: values: `, values);
    resetForm();
  }
})(connect(mapPropsToState)(ChoiceExplanation));
