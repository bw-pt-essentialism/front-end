import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { withFormik, Field } from "formik";
import * as Yup from "yup";

import { addValueDescription } from "../../store/actions/values.actions";

import Hero from "../hero/Hero.component";
import hero from "../../images/hero.JPG";
import ConfirmedTopValues from "../confirmed-values/Confirmed-Values.component";

import {
  FormContainer,
  ConfirmExplanationButton,
  Sizer
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

  const dispatch = useDispatch();

  const history = useHistory();

  const userValues = JSON.parse(localStorage.getItem("userValues"));
  // console.log(userValues.description)

  const goToNextCard = () => {
    let index = activeIndex;
    let slidesLength = userValues.length - 1;
    if (index === slidesLength) {
      // console.log(`ChoiceExplanation: goToNextCard: index: `, index);
      // console.log(
      //   `ChoiceExplanation: goToNextCard: slidesLength: `,
      //   slidesLength
      // );
      localStorage.setItem("explanations-confirmed", JSON.stringify(true));
      history.push("/project-form");
    }
    ++index;
    setActiveIndex(index);
  };
  const handleClick = id => {
    console.log(`HANDLE CLICK ON VALUES EXPL FORM HAS BEEN REACHED`);
    dispatch(addValueDescription(id, values.description));
    const updatedValues = userValues.map(val => {
      if (val.id === id) {
        return { ...val, description: values.description };
      } else {
        return val;
      }
    });
    localStorage.setItem("userValues", JSON.stringify(updatedValues));
    return goToNextCard();
  };
  return (
    <Sizer>
      <Hero img={hero}>
        <ConfirmedTopValues />
      </Hero>

      {userValues &&
        userValues.map((val, index) => {
          return (
            <div key={val.id}>
              <FormContainer
                className="form"
                index={index}
                active={activeIndex}
              >
                <h4>You selected: {val.name}</h4>
                <Field
                  component="input"
                  type="text"
                  name="val"
                  // value={val.id}
                  hidden={true}
                />
                <Field
                  className="input"
                  component="input"
                  type="textarea"
                  name="description"
                  placeholder="Why?"
                />
                {touched.description && errors.description && (
                  <p className="errors">{errors.description}</p>
                )}
                <SignUpButtonContainer>
                  <ConfirmExplanationButton
                    onClick={() => handleClick(val.id)}
                    disabled={isSubmitting}
                  >
                    confirm
                  </ConfirmExplanationButton>
                </SignUpButtonContainer>
              </FormContainer>
            </div>
          );
        })}
    </Sizer>
  );
};

const mapPropsToState = state => {
  return {
    userValues: state.values.userValues,
    remove: state.values.userValues.remove
  };
};

export default withFormik({
  mapPropsToValues({ description, val, value }) {
    return {
      val: value,
      description: description || ""
    };
  },
  validationSchema: Yup.object().shape({
    description: Yup.string().required("Required")
  }),
  handleSubmit(values, { resetForm }) {
    resetForm();
  }
})(connect(mapPropsToState)(ChoiceExplanation));
