import React from "react";
import { connect } from "react-redux";

import { StyledHeader } from "./Header.styles";
import { LogOutButton } from "../login-logout-links/LogoutLink.component";

function Header({ user }) {
  // const user = JSON.parse(localStorage.getItem("user"));
  console.log(`Header.js: user: `, user);
  const thisUser = user[0];
  return (
    <StyledHeader>
      <p>{thisUser.username}</p>
      <LogOutButton onClick={() => localStorage.removeItem("token")}>
        Log Out
      </LogOutButton>
    </StyledHeader>
  );
}

const mapPropsToState = state => {
  console.log(`Header.js: mapPropsToState: state: `, state);
  return {
    user: state.user.user
  };
};

export default connect(mapPropsToState)(Header);
