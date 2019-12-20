import styled from "styled-components";
import { setFlex, setBackground } from "../../globals/styles";

const Hero = styled.header`
  min-height: 60vh;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0)" })};
  ${setFlex()};
`;

export default Hero;
