import React from "react";

import LoginForm from "../../components/login-form/LoginForm.component";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";

import Hero from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";

function SignInAndUpPage() {
  return (
    <Hero img={hero}>
      <div>
        <LoginForm />
        <SignUpForm />
      </div>
    </Hero>
  );
}

export default SignInAndUpPage;
