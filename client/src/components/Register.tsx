import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  checkUsername,
  checkPassword,
  checkEmail,
  samePassword,
} from "../regex/credentials";
import "../styles/components/register.css";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repassword, setRepassword] = useState<string>("");

  const [warnUser, setWarnUser] = useState<boolean>();
  const [warnEmail, setWarnEmail] = useState<boolean>();
  const [warnPassword, setWarnPassword] = useState<boolean>();
  const [warnRepassword, setWarnRepassword] = useState<boolean>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "repassword":
        setRepassword(e.target.value);
        break;
    }
  };

  useEffect(() => {
    if (username) {
      setWarnUser(checkUsername(username));
    }
  }, [username]);
  useEffect(() => {
    if (email) {
      setWarnEmail(checkEmail(email));
    }
  }, [email]);
  useEffect(() => {
    if (password) {
      setWarnPassword(checkPassword(password));
    }
  }, [password]);
  useEffect(() => {
    if (repassword) {
      setWarnRepassword(samePassword(password, repassword));
    }
  }, [repassword]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="register__container">
        <form onSubmit={handleSubmit}>
          <div className="register__container-option">
            <div className="register__container-text">Username</div>
            <input
              type="text"
              value={username}
              onChange={handleChange}
              name="username"
              className={
                !warnUser && username ? "register__container-input-warn" : ""
              }
            />
            <span
              className={`register__container-warn ${
                !warnUser && username ? "register__container-warn-visible" : ""
              }`}
            >
              Username must be alphanumeric and contain 5-12 characters.
            </span>
          </div>
          <div className="register__container-option">
            <div className="register__container-text">Email</div>
            <input
              type="text"
              value={email}
              onChange={handleChange}
              name="email"
              className={
                !warnEmail && email ? "register__container-input-warn" : ""
              }
            />
            <span
              className={`register__container-warn ${
                !warnEmail && email ? "register__container-warn-visible" : ""
              }`}
            >
              Email must be a valid address, e.g. me@example.com
            </span>
          </div>
          <div className="register__container-option">
            <div className="register__container-text">Password</div>
            <input
              type="password"
              value={password}
              onChange={handleChange}
              name="password"
              className={
                !warnPassword && password
                  ? "register__container-input-warn"
                  : ""
              }
            />
            <span
              className={`register__container-warn ${
                !warnPassword && password
                  ? "register__container-warn-visible"
                  : ""
              }`}
            >
              Password must be alphanumeric (@ _ ! \ ? and - are also allowed)
              and contain between 8-30 characters.
            </span>
          </div>
          <div className="register__container-option">
            <div className="register__container-text">Retype password</div>
            <input
              type="password"
              value={repassword}
              onChange={handleChange}
              name="repassword"
              className={
                !warnRepassword && repassword
                  ? "register__container-input-warn"
                  : ""
              }
            />
            <span
              className={`register__container-warn ${
                !warnRepassword && repassword
                  ? "register__container-warn-visible"
                  : ""
              }`}
            >
              Passwords must match!
            </span>
          </div>
          <button type="submit">Register</button>
        </form>
        <div className="register__container-headToLog">
          <span className="register__container-headToLog-lineOne">
            Already have an account?
          </span>
          <span className="register__container-headToLog-lineTwo">
            Go to <Link to="/login">login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
