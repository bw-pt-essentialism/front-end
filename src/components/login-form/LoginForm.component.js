import React, { useState } from "react";

import { CustomButton } from "../custom-button/CustomButton";

function LoginForm() {
  const [credentials, setCredentials] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const handleChange = e => {
    setCredentials({
      credentials: {
        ...credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const handleSubmit = () => {
    console.log(`LoginForm.js: handleSubmit: credentials: `, credentials);
    setCredentials({
      credentials: {
        username: "",
        password: ""
      }
    });
    localStorage.setItem("token", "temp_token");
  };

  console.log(`LoginForm.js: credentials: `, credentials.credentials);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <CustomButton to="/home" type="submit">
          Log in
        </CustomButton>
      </form>
    </div>
  );
}

export default LoginForm;
