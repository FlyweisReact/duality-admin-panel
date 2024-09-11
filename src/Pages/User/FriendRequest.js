/** @format */

import React, { useState } from "react";
import { userAvatar } from "../../assest";
import { BackBtn, CustomPagination } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";

const FriendRequest = () => {
  const [type, setType] = useState("request");
  const options = [
    {
      value: "friends",
      label: "Friends",
    },
    {
      value: "request",
      label: "Friends Request",
    },
  ];
  const emptyArray = new Array(15).fill(null);

  return (
    <section className="friend-requests-page">
      <BackBtn />

      <ul className="friend-request-tabs mt-4">
        {options.map((i, index) => (
          <li
            onClick={() => setType(i.value)}
            className={`${i.value === type ? "active" : ""}`}
          >
            {" "}
            {i.label}{" "}
          </li>
        ))}
      </ul>

      {type === "request" ? (
        <div className="friend-request-data-container">
          <div className="head">
            <p className="heading">View Friend request</p>
            <div className="search-container">
              <input type="search" placeholder="Search User" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="flexbox-container mt-4 mb-4">
            {emptyArray.map((_, index) => (
              <div className="request-box" key={`request${index}`}>
                <img src={userAvatar} className="thumb-img" alt="" />
                <div className="content">
                  <p className="title">Nisa Sance</p>
                  <p className="date">Today 14.3PM</p>
                </div>
                <div className="action-btn">
                  <button>
                    <i className="fa-solid fa-check"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <CustomPagination />
        </div>
      ) : (
        <div className="friend-request-data-container">
          <div className="head">
            <p className="heading">View Friends</p>
            <div className="search-container">
              <input type="search" placeholder="Search User" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>

          <div className="flexbox-container mt-4 mb-4">
            {emptyArray.map((_, index) => (
              <div className="request-box" key={`request${index}`}>
                <img src={userAvatar} className="thumb-img" alt="" />
                <div className="content">
                  <p className="title">Mehek Nanwani</p>
                  <p className="date">Today 14.3PM</p>
                </div>
                <div className="action-btn">
                  <button className="view">View</button>
                  <button className="remove">
                    <i className="fa-regular fa-trash-can"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <CustomPagination />
        </div>
      )}
    </section>
  );
};

export default HOC(FriendRequest);
