/** @format */

import React from "react";
import { userAvatar, verticalLogo } from "../assest";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../constant/constant";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <section className="sidebar hide-layout">
      <div className="logo-container">
        <img src={verticalLogo} alt="" />
      </div>

      <div className="links">
        {sidebarLinks.map((i, index) => (
          <div
            className={`item ${pathname === i.link ? "active" : ""}`}
            onClick={() => navigate(i.link)}
            key={index}
          >
            <img src={i.img} alt="" />
            <p> {i.title} </p>
          </div>
        ))}
      </div>

      <div className="admin-detail">
        <div className="profile" onClick={() => navigate("/update-profile")}>
          <img src={userAvatar} alt="" />
          <div>
            <p className="name">Gustavo Xavier</p>
            <p className="admin-badge">Admin</p>
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
