import React from "react";
import classes from "./login-button.module.scss";

const LoginButton = ({ type, disabled, onClick }) => {
  return (
    <button className={classes.btn} type={type} disabled={disabled} onClick={onClick}>
      Login
    </button>
  );
};

export default LoginButton;
