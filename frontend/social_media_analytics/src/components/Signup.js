import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
function Signup() {
  return (
    <div className="form">
      <form>
        <h1>SIGNUP</h1>
        <div className="input-container">
          <label>Username</label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <Link to="/home" className="signup-button">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
