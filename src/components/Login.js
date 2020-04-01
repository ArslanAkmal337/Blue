import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/imgs/blue-logo.png";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <form>
            <div className="col-12">
              <div className="login1">
                <Link to="register" className="account1">
                  Don’t have an account?
                </Link>
                <Link to="register" className="log-in">
                  SIGN UP
                </Link>
              </div>
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className=" headline">
                <h1>Welcome back, To Blue!</h1>
              </div>
              <div className="headline">
                <p className="p1">
                  Enter your email address and password to access your account.
                </p>
              </div>
              <input type="email" name="email" placeholder="Email" required />
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
              <button className="btn w-100prc" type="submit" id="submitBtn">
                Log In
              </button>
              <Link to="reset_password" className="forgot">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
