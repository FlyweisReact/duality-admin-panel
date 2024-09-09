/** @format */

import React from "react";
import { horizontalLogo } from "../assest";

const Login = () => {
  return (
    <section className="Login-page">
      <div className="login-page-container">
        <img src={horizontalLogo} alt="" className="logo" />
        <p className="heading">Login into your account</p>
        <form className="custome-form">
          <div className="input-group">
            <p>Email Id :</p>
            <div className="input-group-field">
              <input type='email' />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
