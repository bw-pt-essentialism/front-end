import styled from "styled-components";

import { setColor } from "../../globals/styles";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

export const StyledNavBar = styled(Navbar)`
  background: ${setColor.mainColor};
`;

export const StyledNavbarToggler = styled(NavbarToggler)`
  /* background: ${setColor.offWhite}; */
  /* color: ${setColor.mainColor}; */
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  background: ${setColor.mainColor};
  color: ${setColor.mainColor};
`;
