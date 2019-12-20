import styled from "styled-components";
import { setFlex, setBackground } from "../../globals/styles";

const Hero = styled.header`
  height: 500px;
  min-height: 300px;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
`;

export default Hero;
