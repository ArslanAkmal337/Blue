import React from "react";
import "../assets/css/style.css";
import logo from "../assets/imgs/blue-logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="login1">
              <Link to="login" className="account1">
                Have an account?
              </Link>
              <Link to="login" className="log-in">
                LOG IN
              </Link>
            </div>
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="type-js headline">
              <h1 className="text-js">
                Hello, lets get started on your profile.
              </h1>
            </div>
            <br />
            <div id="show1">
              <form>
                <p className="p1">
                  Enter your email address to create your account.
                </p>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  id="fullname"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email1"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Create a Password"
                  id="pass"
                />
                <button className="btn w-100prc" id="submitBtn">
                  Create Account
                </button>
                <p className="bl">
                  By signing up, you agree to our{" "}
                  <Link to="terms_and_conditions" className="forgot">
                    Terms
                  </Link>{" "}
                  and{" "}
                  <Link to="privacy_policy.html" class="forgot">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
