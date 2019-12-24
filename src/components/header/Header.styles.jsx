import styled from "styled-components";

import { setColor } from "../../globals/styles";

export const StyledHeader = styled.header`
  height: 5vh;
  min-height: 60px;
  background: ${setColor.mainColor};
  color: ${setColor.offWhite};
  padding: 1rem;
`;
