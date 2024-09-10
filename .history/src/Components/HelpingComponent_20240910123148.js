/** @format */

import { useState } from "react";
import { graphUp, graphDown } from "../assest";

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

const DashboardCard = ({ title, count, percentage, isUp, bg }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(count.replace(/,/g, ''), 10); // Remove commas and parse as number
    if (start === end) return; // If start is the same as end, there's no need to count.

    let duration = 2000; // Duration of the animation in milliseconds
    let incrementTime = (duration / end) * 1000; // Time between each increment

    const incrementCounter = () => {
      start += 1;
      setCurrentCount(start);
      if (start < end) {
        requestAnimationFrame(incrementCounter);
      }
    };

    requestAnimationFrame(incrementCounter);
  }, [count]);

  return (
    <div className="dashboard-card" style={{ backgroundColor: bg }}>
      <div className="counts">
        <p className="sub-heading">{title}</p>
        <p className="heading">{count}</p>
        <p className="heading">{currentCount.toLocaleString()}</p
      </div>
      {percentage ? (
        <div className={`up-skill ${isUp ? "up" : "down"}`}>
          <p className="count">{percentage}</p>
          {isUp ? <img src={graphUp} alt="" /> : <img src={graphDown} alt="" />}
        </div>
      ) : (
        <div className="up-skill" />
      )}
    </div>
  );
};

export { LoginInput, OtpInput, DashboardCard };
