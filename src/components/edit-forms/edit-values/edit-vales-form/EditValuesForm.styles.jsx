import styled from "styled-components";
import { Form, Field } from "formik";
import { CustomButton } from "../../../custom-button/CustomButton";
import { CustomLink } from "../../../custom-link/CustomLink.styles";

import { setFlex, setBackground, setColor } from "../../../../globals/styles";

export const ConfirmExplanationButton = styled(CustomButton)`
  /* background: transparent; */
  margin: 10% auto 0;
  border: none;
`;

export const FormContainer = styled(Form)`
  border: 1px solid pink;
  min-width: 60vw;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  input {
    min-height: 15vh;
  }
  input::placeholder {
    text-align: center;
  }
  .value-input {
    max-height: 5vh;
  }
`;

export const StyledSection = styled.section`
  border: 1px solid red;
  max-width: 30vw;
  width: 200px;
  display: flex;
  align-items: flex-start;
  margin: auto 0;
`;

export const StyledValueField = styled(Field)`
  max-height: 30px;
`;
