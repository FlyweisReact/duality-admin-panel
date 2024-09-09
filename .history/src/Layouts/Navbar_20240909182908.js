/** @format */

import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <div className="search-container">
        <input type="search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="notification">
        <i className="fa-regular fa-bell"></i>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
