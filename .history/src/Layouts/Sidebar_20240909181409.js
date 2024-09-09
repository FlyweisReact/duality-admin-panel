/** @format */

import React from "react";
import {
  homeLayout,
  userAvatar,
  verticalLogo,
  userIcon,
  bellIcon,
  reportIcon,
  serviceIcon,
  queryIcon,
  termIcon,
  privacyIcon,
  faqIcon,
} from "../assest";
import { useLocation, useNavigate } from "react-router-dom";

const links = [
  {
    link: "/dashboard",
    title: "Dashboard",
    img: homeLayout,
  },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
        {links.map((i, index) => (
          <div
            className={`item ${pathn}`}
            onClick={() => navigate(i.link)}
            key={index}
          >
            <img src={i.img} alt="" />
            <p> {i.title} </p>
          </div>
        ))}
      </div>

      <div className="admin-detail">
        <div className="profile">
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
