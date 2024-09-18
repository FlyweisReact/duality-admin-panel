/** @format */

import React, { useEffect, useState } from "react";
import { verticalLogo } from "../assest";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../constant/constant";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";
import { LogoutHandler } from "../utils/utils";

const Sidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getApi(endPoints.auth.myProfile, {
      setResponse: setProfile,
    });
  }, []);

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
          <img src={profile?.data?.user?.image} alt="" />
          <div>
            <p className="name"> {profile?.data?.user?.fullName} </p>
            <p className="admin-badge">Admin</p>
          </div>
        </div>

        <div
          className="log-out"
          style={{ cursor: "pointer" }}
          onClick={() => LogoutHandler(navigate)}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <p>Log out</p>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
