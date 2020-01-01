import React from "react";
import { connect } from "react-redux";

import { StyledHeader } from "./Header.styles";
import { LogOutButton } from "../login-logout-links/LogoutLink.component";

function Header({ user }) {
  console.log(`Header.js: user: `, user);
  return (
    <StyledHeader>
      <p>username</p>
    </StyledHeader>
  );
}

const mapPropsToState = state => {
  console.log(`Header.js: mapPropsToState: state: `, state);
  return {
    user: state.user
  };
};

export default connect(mapPropsToState)(Header);
