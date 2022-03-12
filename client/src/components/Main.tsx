import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/main.css";

function Main() {
  return (
    <div className="main">
      <div className="main__welcome">Welcome to ~app name~</div>
      <div className="main__proceed">
        <div className="main__proceed-option main__proceed-login">
          <span className="main__proceed-option-text">
            Do you already have an account? Then you can log-in!
          </span>
          <div className="main__proceed-option-button">
            <Link to="/login">Log-In</Link>
          </div>
        </div>
        <div className="main__proceed-option main__proceed-register">
          <span className="main__proceed-option-text">
            Do you not have an account? Then you can register!
          </span>
          <div className="main__proceed-option-button">
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
