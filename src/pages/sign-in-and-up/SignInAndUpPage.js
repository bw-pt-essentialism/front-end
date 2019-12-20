import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginForm from "../../components/login-form/LoginForm.component";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";

import Hero from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";

import {
  SignUpButtonContainer,
  SignUpLinkLogin
} from "../../components/sign-up-form/SignUpForm.styles";
import { LoginLinkSignUp } from "../../components/login-form/LoginForm.styles";

function SignInAndUpPage() {
  return (
    <Hero img={hero}>
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/">
          <SignUpButtonContainer>
            <SignUpLinkLogin to="/login">Log In</SignUpLinkLogin>
            <LoginLinkSignUp to="/signup">Sign Up</LoginLinkSignUp>
          </SignUpButtonContainer>
        </Route>
      </Switch>
    </Hero>
  );
}

export default SignInAndUpPage;
