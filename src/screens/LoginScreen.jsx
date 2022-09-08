import React from "react";
import Login from "../components/L&R/Login";
import Register from "../components/L&R/Register";
import LoginHeader from "../components/Headers/LoginHeader";

function LoginScreen(props) {
  return (
    <div>
      <LoginHeader />
      <div className="log-container">
        <Login logFunction={props.logFunction} />
        <Register />
      </div>
    </div>
  );
}

export default LoginScreen;
