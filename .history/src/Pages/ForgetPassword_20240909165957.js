/** @format */

import React, { useState } from "react";
import { horizontalLogo } from "../assest";
import { LoginInput } from "../Components/HelpingComponent";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  return (
    <section className="Login-page">
    {
        step === 1 && 
    }
     
    </section>
  );
};

export default ForgetPassword;
