import React, { useContext } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../context/context";

function Login() {
  const navigate = useNavigate();
  const { name, setName, email, setEmail } = useContext(Context);

  return (
    <div className="form">
      <form>
        <h1>REGISTER</h1>
        <div className="input-container">
          <label>Username</label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="uname"
            required
          />
        </div>
        <div className="input-container">
          <label>email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            email="email"
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <Link to="/signup" className="signup-button">
            REGISTER
          </Link>
        </div>
      </form>
      <div className="right-corner-buttons">
        <Link to="/signup" className="signup-button">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
