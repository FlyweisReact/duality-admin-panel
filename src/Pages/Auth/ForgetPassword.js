/** @format */

import React, { useState } from "react";
import { horizontalLogo } from "../../assest";
import { LoginInput, OtpInput } from "../../Components/HelpingComponent";
import { useNavigate } from "react-router-dom";
import { postApi, showMsg } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(3);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passType, setPassType] = useState(true);
  const [cpassType, setCPassType] = useState(true);

  const handleOtpChange = (otpValue) => {
    setOtp(otpValue);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const backStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const showOtp = (value) => {
    showMsg("", value, "success");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      email,
    };
    postApi(endPoints.auth.forgetPassword, payload, {
      setLoading,
      additionalFunctions: [(res) => showOtp(res?.data?.otp), nextStep],
    });
  };

  const saveUserId = (id) => {
    setUserId(id);
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    const payload = {
      otp,
      email,
    };
    postApi(endPoints.auth.verifyOtp, payload, {
      setLoading,
      successMsg: "Verified !",
      additionalFunctions: [(res) => saveUserId(res?.data?.userId), nextStep],
    });
  };

  const updatePassword = (e) => {
    e.preventDefault();
    const payload = {
      otp,
      newPassword,
      confirmPassword,
    };
    postApi(endPoints.auth.updatePassword(userId), payload, {
      setLoading,
      successMsg: "Success !",
      additionalFunctions: [() => navigate("/")],
    });
  };

  return (
    <section className="Login-page">
      {step === 1 && (
        <div className="login-page-container">
          <button className="back-button" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <img src={horizontalLogo} alt="" className="logo" />
          <form className="custome-form" onSubmit={submitHandler}>
            <LoginInput
              label={
                "Enter your resisted email address and we will share you the link "
              }
              placeholder={"Enter your registerd email"}
              type={"email"}
              value={email}
              onChangeEvent={(e) => setEmail(e.target.value)}
              icon={<i className="fa-regular fa-envelope"></i>}
            />

            <button className="log-in-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Continue"}
            </button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="login-page-container">
          <button className="back-button" onClick={() => backStep()}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <img src={horizontalLogo} alt="" className="logo" />
          <p className="heading">Verify your number</p>
          <form className="custome-form" onSubmit={verifyOtp}>
            <div className="input-div">
              <p>Please enter the digit code send to your email address</p>
            </div>
            <OtpInput length={4} onChange={handleOtpChange} />
            <button className="log-in-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Continue"}
            </button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div className="login-page-container">
          <button className="back-button" onClick={() => backStep()}>
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <img src={horizontalLogo} alt="" className="logo" />
          <p className="heading">New Password</p>
          <form className="custome-form" onSubmit={updatePassword}>
            <LoginInput
              label={"New password"}
              placeholder={"Enter your password"}
              type={passType ? "text" : "password"}
              value={newPassword}
              onChangeEvent={(e) => setNewPassword(e.target.value)}
              icon={
                !passType ? (
                  <i
                    className="fa-solid fa-eye-slash"
                    style={{ cursor: "pointer" }}
                    onClick={() => setPassType(!passType)}
                  />
                ) : (
                  <i
                    className="fa-solid fa-eye"
                    style={{ cursor: "pointer" }}
                    onClick={() => setPassType(!passType)}
                  />
                )
              }
            />
            <LoginInput
              label={"Confirm password"}
              placeholder={"Enter your password"}
              type={cpassType ? "text" : "password"}
              value={confirmPassword}
              onChangeEvent={(e) => setConfirmPassword(e.target.value)}
              icon={
                !cpassType ? (
                  <i
                    className="fa-solid fa-eye-slash"
                    style={{ cursor: "pointer" }}
                    onClick={() => setCPassType(!cpassType)}
                  />
                ) : (
                  <i
                    className="fa-solid fa-eye"
                    style={{ cursor: "pointer" }}
                    onClick={() => setCPassType(!cpassType)}
                  />
                )
              }
            />

            <button className="log-in-btn" type="submit">
              {loading ? <ClipLoader color="#fff" /> : "Submit"}
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default ForgetPassword;
