/** @format */

import React, { useState } from "react";
import { horizontalLogo } from "../assest";
import { LoginInput } from "../Components/HelpingComponent";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(2);

  const nextStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    
  }

  return (
    <section className="Login-page">
      {step === 1 && (
        <div className="login-page-container">
          <button className="back-button" onClick={() => navigate(-1)}>
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

            <button className="log-in-btn" onClick={() => nextStep()}>
              Continue
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="login-page-container">
          <button className="back-button" onClick={() => }>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <img src={horizontalLogo} alt="" className="logo" />
          <p className="heading">Login into your account</p>
          <form className="custome-form">
            <LoginInput
              label={
                "Enter your resisted email address and we will share you the link "
              }
              placeholder={"Enter your registerd email"}
              type={"email"}
              icon={<i className="fa-regular fa-envelope"></i>}
            />

            <button className="log-in-btn" onClick={() => nextStep()}>
              Continue
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default ForgetPassword;
