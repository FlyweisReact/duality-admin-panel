/** @format */

import React from "react";
import { BackBtn } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";
import { editUserImg, userPhoto1, userPhoto2 } from "../../assest";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <section className="user-profile-page">
      <BackBtn />
      <div className="user-profile-section">
        <div className="edit-section">
          <div className="edit-icon">
            <Link to={"/edit-user/Miya"}>
              <i className="fa-solid fa-pen"></i>
            </Link>
          </div>
          <div className="img-container">
            <img src={editUserImg} alt="" />
          </div>
          <p className="heading mt-2 mb-2">Mehek Nanwani</p>
          <ul>
            <li>30 Friends</li>
            <li>3 Posts</li>
          </ul>

          <p className="sub-heading mt-2 mb-1">macster@prettysky.link</p>
          <p className="sub-heading mb-2">+91 93072059670</p>

          <button
            className="request-btn"
            onClick={() => navigate("/users/friend-requests")}
          >
            View Friends & Requests
          </button>
          <div className="btn-container">
            <button className="photo">Photo</button>
            <button className="video">Video</button>
          </div>
        </div>
        <div className="remaining">
          <div className="filter-section">
            <div className="search-container">
              <input type="search" placeholder="Search User" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <select>
              <option>Filter</option>
              <option>Most recent</option>
              <option>Most likes</option>
              <option>Most saved</option>
              <option>Most shared</option>
            </select>
          </div>

          <div className="flexbox-container mt-4">
            <div className="photos-collection">
              <img src={userPhoto2} alt="" />{" "}
              <div className="actions">
                <div className="icon">
                  <i
                    className="fa-solid fa-pen"
                    onClick={() => navigate("/users/update-post/1")}
                  ></i>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </div>
            </div>
            <div className="photos-collection">
              <img src={userPhoto1} alt="" />{" "}
              <div className="actions">
                <div className="icon">
                  <i
                    className="fa-solid fa-pen"
                    onClick={() => navigate("/users/update-post/1")}
                  ></i>
                  <i className="fa-solid fa-trash-can"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOC(UserProfile);
