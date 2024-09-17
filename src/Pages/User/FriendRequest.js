/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { userAvatar } from "../../assest";
import {
  BackBtn,
  CustomLoader,
} from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

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

const FriendRequest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState("friends");
  const [requests, setRequests] = useState({});
  const [loading, setLoading] = useState(false);
  const [friends, setFriends] = useState({});

  const fetchRequests = useCallback(() => {
    getApi(endPoints.freindRequest.getbyUserId(id), {
      setResponse: setRequests,
      setLoading,
    });
  }, [id]);

  const allFriends = useCallback(() => {
    getApi(endPoints.friends.getByUserId(id), {
      setResponse: setFriends,
      setLoading,
    });
  }, [id]);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  useEffect(() => {
    allFriends();
  }, [allFriends]);

  return (
    <section className="friend-requests-page">
      {loading && <CustomLoader />}
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
            {requests?.data?.map((i, index) => (
              <div
                className="request-box"
                key={`request${index}`}
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/users/${i?.requester?._id}`)}
              >
                <img src={userAvatar} className="thumb-img" alt="" />
                <div className="content">
                  <p className="title"> {i?.requester?.fullName} </p>
                  <p className="date"> {i?.sentAt?.slice(0, 10)} </p>
                </div>
                <div className="action-btn"></div>
              </div>
            ))}
          </div>
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
            {friends?.data?.[0]?.users?.map((i, index) => (
              <div className="request-box" key={`friends${index}`}>
                <img src={i?.user?.image} className="thumb-img" alt="" />
                <div className="content">
                  <p className="title"> {i?.user?.fullName} </p>
                  <p className="date"> {i?.dateJoined?.slice(0, 10)} </p>
                </div>
                <div className="action-btn">
                  <button
                    className="view"
                    onClick={() => navigate(`/users/${i?.user?._id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HOC(FriendRequest);
