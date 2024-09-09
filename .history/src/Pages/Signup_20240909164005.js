/** @format */

import React from "react";
import { horizontalLogo } from "../assest";
import { Link } from "react-router-dom";
import { LoginInput } from "../Components/HelpingComponent";

const Signup = () => {
  return (
    <section className="Login-page">
      <div className="login-page-container">
        <img src={horizontalLogo} alt="" className="logo" />
        <p className="heading">Create New Account</p>
        <form className="custome-form">
          <LoginInput
            label={"Email Id"}
            placeholder={"Enter your email"}
            type={"email"}
            icon={<i className="fa-regular fa-envelope"></i>}
          />
          <LoginInput
            label={"Password"}
            placeholder={"Enter your Password"}
            type={"password"}
            icon={<i className="fa-solid fa-eye-slash"></i>}
          />
          <LoginInput
            label={"Confirm Password"}
            placeholder={"Enter your Password"}
            type={"password"}
            icon={<i className="fa-solid fa-eye-slash"></i>}
          />
          <a href="#forget-password" className="forget-password">
            Forgot password?
          </a>
          <button className="log-in-btn">Log in</button>
          <p className="new-account">
            Already have an account?
            <span>
              <Link to="/signup"></Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
