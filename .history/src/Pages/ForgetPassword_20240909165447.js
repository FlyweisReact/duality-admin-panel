/** @format */

import React from "react";
import { horizontalLogo } from "../assest";
import { LoginInput } from "../Components/HelpingComponent";

const ForgetPassword = () => {
  return (
    <section className="Login-page">
      <div className="login-page-container">
      <div className="bac"></div>
        <img src={horizontalLogo} alt="" className="logo" />
        <form className="custome-form">
          <LoginInput
            label={
              "Enter your resisted email address and we will share you the link "
            }
            placeholder={"Enter your registerd email"}
            type={"email"}
            icon={<i className="fa-regular fa-envelope"></i>}
          />

          <button className="log-in-btn">Continue</button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
