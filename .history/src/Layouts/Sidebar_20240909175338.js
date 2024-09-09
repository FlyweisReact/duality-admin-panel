/** @format */

import React from "react";
import { homeLayout, userAvatar, verticalLogo } from "../assest";

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
      <div className="admin-detail">
        <div className="profile">
          <img src={userAvatar} alt="" />
          <div>
            <p className="name">Gustavo Xavier</p>
            <div className="badge">Admin</div>
          </div>
        </div>

        <div className="log-out">
          <i className="fa-solid fa-right-from-bracket"></i>
          <p>Log out</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
