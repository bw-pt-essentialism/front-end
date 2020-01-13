import styled from "styled-components";
import { Form } from "formik";
import { CustomButton } from "../custom-button/CustomButton";
import { CustomLink } from "../custom-link/CustomLink.styles";

import { setFlex, setBackground, setColor } from "../../globals/styles";

export const Hero = styled.header`
  height: 300px;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
  margin-bottom: 10%;
`;

export const BottomImg = styled.header`
  height: 50vh;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.17)" })};
  ${setFlex()};
`;

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
  input::placeholder {
    text-align: center;
  }
`;

export const Sizer = styled.section``;
