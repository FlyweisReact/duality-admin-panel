/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileBar } from "../Components/Modals";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <MobileBar show={show} handleClose={() => setShow(false)} />
      <header className="header">
        <i
          className="fa-solid fa-bars-staggered"
          onClick={() => setShow(true)}
        ></i>
        <div className="search-container">
          <input type="search" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div
          className="notification"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/notification")}
        >
          <i className="fa-regular fa-bell"></i>
          <span className="count">3</span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
