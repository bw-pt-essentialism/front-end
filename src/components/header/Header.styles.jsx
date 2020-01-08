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
  color: ${setColor.offWhite};
`;

export const StyledNavbarToggler = styled(NavbarToggler)`
  /* background: ${setColor.offWhite}; */
  color: ${setColor.offWhite};
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  color: ${setColor.offWhite};
`;

export const StyledNavLink = styled(NavbarBrand)`
  color: ${setColor.offWhite};
  font-size: 1.2rem;
`;
