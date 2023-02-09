import React from "react";
import { useState, useEffect } from "react";
import UsersService from "../services/users-service";
import classes from "./login-form.module.scss";
import LoginButton from "./login-button";

const Form = () => {
  const [users, setUsers] = React.useState([]);

  const handleFetchUsers = async () => {
    const fetchedUsers = await UsersService.fetchAll();
    setUsers(fetchedUsers);
  };

  React.useEffect(() => {
    handleFetchUsers();
  }, []);

  const [email, setEmail] = useState(() => {
    const savedEmail = localStorage.getItem("email");
    const initialValue = JSON.parse(savedEmail);
    return initialValue || "";
  });
  useEffect(() => {
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  const [password, setPassword] = useState(() => {
    const savedPassword = localStorage.getItem("password");
    const initialValue = JSON.parse(savedPassword);
    return initialValue || "";
  });

  useEffect(() => {
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const found = users.find(
      (user) => user.email === email && user.password === password
    );
    if (found) {
      console.log(found.email);
      alert("You have successfully loged in!");
    } else {
      localStorage.clear();
      console.log("Not found");
      alert("The email or the password you provided is incorrect");
    }
  };

  const [touched, setTouched] = React.useState(false);

  let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleClick = () => {
    if (!email || !password || !email.match(validEmail)){
      localStorage.clear();
      console.log("hh")
    }
  }

  return (
    <form onSubmit={handleSubmit} className={classes.loginForm}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        aria-label="email"
        onBlur={() => setTouched(true)}
      />
      {!email && touched && <span>This field connot be empty.</span>}
      {email && !email.match(validEmail) && touched && (
        <span>Incorrect email address</span>
      )}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        aria-label="password"
      />
      {!password && touched && <span>This field cannot be empty.</span>}
      <LoginButton
        type="submit"
        // disabled={!email || !password || !email.match(validEmail)}
        onClick={handleClick}
      >
        Login
      </LoginButton>
    </form>
  );
};

export default Form;
