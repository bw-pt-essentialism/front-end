import styled from "styled-components";
import { Form, Field } from "formik";
import { CustomButton } from "../../components/custom-button/CustomButton";
import { CustomLink } from "../../components/custom-link/CustomLink.styles";

import { setFlex, setBackground, setColor } from "../../globals/styles";

// import ConfirmedTopValues from "../../confirmed-values/Confirmed-Values.component";

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
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.15)" })};
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

export const Sizer = styled.section`
  border: 1px solid red;
  width: 100%;
  display: flex;
  align-content: center;
`;

export const FormContainer = styled(Form)`
  border: 1px solid pink;
  min-width: 60vw;
  margin: 0 auto;
  text-align: center;
  height: 100%;
  display: flex;
  /* ${props =>
    props.index === props.active ? "display: block" : "display: none"} */
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
  /* flex-flow: column nowrap; */
  align-items: flex-start;
  margin: auto 0;
  /* margin-bottom: 5vh; */
`;

export const StyledValueField = styled(Field)`
  border: 1px solid hotpink;
  max-height: 30px;
`;
