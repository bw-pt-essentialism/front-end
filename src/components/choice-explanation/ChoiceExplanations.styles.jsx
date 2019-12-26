import styled from "styled-components";
import { Form } from "formik";
import { CustomButton } from "../custom-button/CustomButton";
import { CustomLink } from "../custom-link/CustomLink.styles";

export const ConfirmExplanationButton = styled(CustomButton)`
  /* background: transparent; */
  margin: 10% auto 0;
  border: none;
`;

export const ConfirmExplanationLink = styled(CustomLink)`
  background: transparent;
  margin: 10% auto 0;
  border: none;
`;
export const FormContainer = styled(Form)`
  margin: 0 auto;
  text-align: center;
  max-height: 45%;
  height: 45%;
  ${props =>
    props.index === props.active ? "display: block" : "display: none"}
  input {
    min-height: 15vh;
  }
`;

export const Sizer = styled.section``;
