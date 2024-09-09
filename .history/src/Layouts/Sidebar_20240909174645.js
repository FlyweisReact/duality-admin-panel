/** @format */

import React from "react";
import { homeLayout, verticalLogo } from "../assest";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <img src={verticalLogo} alt="" />
      </div>
      <div className="links">
        <div className="item">
          <img src={homeLayout} alt="" />
          <p>Dashboard</p>
        </div>
        <div className="item active">
          <img src={homeLayout} alt="" />
          <p>Dashboard</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
