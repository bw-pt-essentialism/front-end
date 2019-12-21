import React from "react";
import { Route, Switch, useParams } from "react-router-dom";

import LoginForm from "../../components/login-form/LoginForm.component";
import SignUpForm from "../../components/sign-up-form/SignUpForm.component";

import Hero from "../../components/hero/Hero.component";
import hero from "../../images/hero.JPG";
import Banner from "../../components/banner/Banner.component";

function SignInAndUpPage() {
  return (
    <section>
      <Hero img={hero}>
        <Switch>
          <Route path={`/in`}>
            <LoginForm />
          </Route>
          <Route path="/up">
            <SignUpForm />
          </Route>
          <Route path="/">
            <Banner />
          </Route>
        </Switch>
      </Hero>
    </section>
  );
}

export default SignInAndUpPage;
