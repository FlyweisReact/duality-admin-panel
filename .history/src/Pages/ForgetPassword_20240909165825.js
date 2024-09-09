/** @format */

import React, { useState } from "react";
import { horizontalLogo } from "../assest";
import { LoginInput } from "../Components/HelpingComponent";
import { useNavigate } from 'react-router-dom'

const ForgetPassword = () => {
    const navigate = useNavigate()
    const [ step , setStep ] = useState(1)
  return (
    <section className="Login-page">
      <div className="login-page-container">
        <button className="back-button">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
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
