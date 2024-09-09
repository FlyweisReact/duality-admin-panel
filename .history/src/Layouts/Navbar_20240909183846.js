/** @format */

import React from "react";
import { MobileBar } from "../Components/Modals";

const Navbar = () => {
  const [ show , setShow] = useSta
  return (
    <header className="header">
      <i className="fa-solid fa-bars-staggered"></i>
      <div className="search-container">
        <input type="search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="notification">
        <i className="fa-regular fa-bell"></i>
        <span className="count">3</span>
      </div>
    </header>
  );
};

export default Navbar;
