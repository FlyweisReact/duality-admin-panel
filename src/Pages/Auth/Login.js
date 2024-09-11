/** @format */

import React from "react";
import { horizontalLogo } from "../../assest";
import { Link } from "react-router-dom";
import { LoginInput } from "../../Components/HelpingComponent";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";

const Login = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    Store.addNotification({
      message: "Welcome Back !",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
      },
    });
    navigate("/dashboard");
  };

  return (
    <section className="Login-page">
      <div className="login-page-container">
        <img src={horizontalLogo} alt="" className="logo" />
        <p className="heading">Login into your account</p>
        <form className="custome-form" onSubmit={submitHandler}>
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
          <Link to="/forget-password" className="forget-password">
            Forgot password?
          </Link>
          <button className="log-in-btn" type="submit">
            Log in
          </button>
          <p className="new-account">
            Don’t have an account?{" "}
            <span>
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
