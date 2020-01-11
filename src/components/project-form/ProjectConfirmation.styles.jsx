import styled from "styled-components";

export const Hero = styled.header`
  height: 300px;
  ${props => setBackground({ img: props.img, color: "rgba(0,0,0,.2)" })};
  ${setFlex()};
  border-bottom: 6px solid ${setColor.mainColor};
  margin-bottom: 5%;
`;
