import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { setColor } from "../../globals/styles";

import {
  StyledNavBar,
  StyledNavbarBrand,
  StyledNavLink,
  StyledNavbarToggler
} from "./Header.styles";
import { LogOutButton } from "../login-logout-links/LogoutLink.component";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Header = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const localWelcome = JSON.parse(localStorage.getItem("welcome"));

  const history = useHistory();

  const handleClick = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div>
      <StyledNavBar dark>
        <StyledNavbarBrand to="/" onClick={() => history.push("/home")}>
          {localWelcome}
        </StyledNavbarBrand>
        <StyledNavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <StyledNavLink
                to="/edit-values/"
                onClick={() => history.push("/edit-values/")}
              >
                Edit Values
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink
                to="/edit-projects/"
                onClick={() => history.push("/edit-projects/")}
              >
                Edit Projects
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink onClick={handleClick} to="/">
                Log Out
              </StyledNavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </StyledNavBar>
    </div>
  );
};

export default Header;

// import React from "react";
// import { connect } from "react-redux";
// import { useHistory } from "react-router-dom";

// import { StyledHeader } from "./Header.styles";
// import { LogOutButton } from "../login-logout-links/LogoutLink.component";

// function Header({ welcome }) {
//   console.log(`Header.js: welcome: `, welcome);
//   localStorage.setItem("welcome", JSON.stringify(welcome));
//   const localWelcome = JSON.parse(localStorage.getItem("welcome"));

//   const history = useHistory();

//   const handleClick = () => {
//     localStorage.clear("token");
//     window.location.href = "/";
//   };

//   return (
//     <StyledHeader>
//       <p>{welcome || localWelcome}</p>
//       <LogOutButton onClick={handleClick}>Log Out</LogOutButton>
//     </StyledHeader>
//   );
// }

// const mapPropsToState = state => {
//   console.log(`Header.js: mapPropsToState: state: `, state);
//   return {
//     welcome: state.login.welcome
//   };
// };

// export default connect(mapPropsToState)(Header);
