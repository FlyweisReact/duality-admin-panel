/** @format */

import React from "react";
import { horizontalLogo } from "../assest";

const InputComponent = ({ label, type, placeholder, icon }) => {
  return (
    <div className="input-div">
      <p>{label}:</p>
      <div className="field-div">
        <input type={type} placeholder={placeholder} />
        <div className="icon">{icon}</div>
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <section className="Login-page">
      <div className="login-page-container">
        <img src={horizontalLogo} alt="" className="logo" />
        <p className="heading">Login into your account</p>
        <form className="custome-form">
        <InputComponent label={"Email Id"} placeholder={"Enter your email"} type />
          <div className="input-div">
            <p>Email Id :</p>
            <div className="field-div">
              <input type="email" placeholder="Enter your email" />
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
