import React, { useState } from "react";
import { connect } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import Hero from "../hero/Hero.component";
import hero from "../../images/hero.JPG";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer,
  ConfirmExplanationLink
} from "./ChoiceExplanations.styles";
import { SignUpButtonContainer } from "../sign-up-form/SignUpForm.styles";

const ChoiceExplanation = ({
  errors,
  touched,
  isSubmitting,
  isValidating,
  values
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const userValues = JSON.parse(localStorage.getItem("userValues"));

  console.log(`ChoiceExplanation: userValues: `, userValues);

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = userValues.length - 1;
    if (index === slidesLength) {
      console.log(`ChoiceExplanation: goToNextCard: index: `, index);
      console.log(
        `ChoiceExplanation: goToNextCard: slidesLength: `,
        slidesLength
      );
      // index = -1;
      //   userValues.length > 2 && setNarrowDown(false);
      // setEndOfList(true);
    }
    ++index;
    setActiveIndex(index);
  };
  const handleClick = () => {
    console.log(`HANDLE CLICK ON VALUES EXPL FORM HAS BEEN REACHED`);
    return goToNextCard();
  };
  return (
    <Sizer>
      <Hero img={hero} />
      {userValues &&
        userValues.map((val, index) => {
          // console.log(`ChoiceExplForm.js: userValues.map: val: `, val);
          return (
            <div key={val.id}>
              <FormContainer
                className="form"
                index={index}
                active={activeIndex}
              >
                <h4>You selected: {val.name}</h4>
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
    </Sizer>
  );
};

const mapPropsToState = state => {
  console.log(`ChoiceExplanation.component: mapPropsToState: state: `, state);
  return {
    userValues: state.values.userValues,
    remove: state.values.userValues.remove
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
