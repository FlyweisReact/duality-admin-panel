/** @format */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginInput = ({ label, type, placeholder, icon }) => {
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

const OtpInput = ({ length = 6, onChange }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }

    onChange(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    const { keyCode, target } = e;

    // Handle backspace key
    if (keyCode === 8 && !target.value && index !== 0) {
      target.previousSibling.focus();
    }

    // Handle left arrow key
    if (keyCode === 37 && index !== 0) {
      target.previousSibling.focus();
    }

    // Handle right arrow key
    if (keyCode === 39 && index !== length - 1) {
      target.nextSibling.focus();
    }
  };

  return (
    <div className="otp-input">
      {otp.map((data, index) => (
        <input
          type="text"
          name="otp"
          maxLength="1"
          key={index}
          value={data}
          required
          onChange={(e) => handleChange(e.target, index)}
          onFocus={(e) => e.target.select()}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <button className="back-arrow-btn" onClick={() => navigate(-1)}>
      <i className="fa-solid fa-arrow-left"></i>
    </button>
  );
};

const SectionHeading = ({ title, className }) => {
  return <p className={`section-heading ${className}`}>{title}</p>;
};

const CustomPagination = () => {
  return (
    <div className="pagination">
      <button>
        {" "}
        <i className="fa-solid fa-caret-left"></i>{" "}
      </button>
      <button className="active">1</button>
      <button>2</button>
      <button>3</button>
      <button>...</button>
      <button>10</button>
      <button>
        {" "}
        <i className="fa-solid fa-caret-right"></i>{" "}
      </button>
    </div>
  );
};

export { LoginInput, OtpInput, BackBtn, SectionHeading, CustomPagination };
