import styled from "styled-components";
import { setFlex, setBackground, setColor } from "../../globals/styles";

const Hero = styled.header`
  height: 500px;
  min-height: 300px;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
`;

export default Hero;

export const BottomImg = styled.header`
  height: 60vh;
  min-height: 300px;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0.15)" })};
  ${setFlex()};
`;
//change setColor to this to reveal stones "rgba(255, 255, 255,.175)"
