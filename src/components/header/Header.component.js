import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const Example = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;

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
