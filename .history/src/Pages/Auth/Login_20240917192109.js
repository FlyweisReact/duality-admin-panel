/** @format */

import React, { useState } from "react";
import { horizontalLogo } from "../../assest";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { postApi, saveHeader } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPassword ,setIsPassword ] = useState(true)

  const payload = {
    email,
    password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.auth.login, payload, {
      setLoading,
      additionalFunctions: [
        (res) => saveHeader(res?.accessToken),
        () => navigate("/dashboard"),
      ],
      successMsg: "Welcome Back !",
    });
  };
  return (
    <section className="Login-page">
      <div className="login-page-container">
        <img src={horizontalLogo} alt="" className="logo" />
        <p className="heading">Login into your account</p>
        <form className="custome-form" onSubmit={submitHandler}>
          <div className="input-div">
            <p>Email Id :</p>
            <div className="field-div">
              <input
                type={"email"}
                placeholder={"Enter your email"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required={true}
              />
              <div className="icon">
                <i className="fa-regular fa-envelope"></i>
              </div>
            </div>
          </div>

          <div className="input-div">
            <p>Password :</p>
            <div className="field-div">
              <input
                type={isPassword ? "password" : "text"}
                placeholder={"Enter your password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required={true}
              />
              <div className="icon">
              {
                
              }
                <i className="fa-solid fa-eye-slash"></i>
              </div>
            </div>
          </div>

          <Link to="/forget-password" className="forget-password">
            Forgot password?
          </Link>
          <button className="log-in-btn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Log in"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
