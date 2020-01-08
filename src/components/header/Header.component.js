import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import { setColor } from "../../globals/styles";

import { StyledNavBar } from "./Header.styles";
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

  const welcome = useSelector(state => state.login.welcome);
  console.log(`Header: welcome: `, welcome);
  // // console.log(`Header.js: welcome: `, welcome);
  // localStorage.setItem("welcome", JSON.stringify(welcome));
  const localWelcome = JSON.parse(localStorage.getItem("welcome"));

  const history = useHistory();

  const handleClick = () => {
    localStorage.clear("token");
    window.location.href = "/";
  };

  return (
    <div>
      <StyledNavBar color="#3d4566" light>
        <NavbarBrand href="/" className="mr-auto">
          {localWelcome}
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={handleClick} to="/">
                Log Out
              </NavLink>
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
