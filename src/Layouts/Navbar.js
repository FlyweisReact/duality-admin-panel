/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MobileBar } from "../Components/Modals";
import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({});

  useEffect(() => {
    getApi(endPoints.notifications.getAll, {
      setResponse: setNotification,
    });
  }, []);

  const filteredNotification = notification?.data?.filter(
    (i) => i?.status?.toLowerCase() === "unread"
  );

  const notificationCount = filteredNotification?.length;

  return (
    <>
      <MobileBar show={show} handleClose={() => setShow(false)} />
      <header className="header">
        <i
          className="fa-solid fa-bars-staggered"
          onClick={() => setShow(true)}
        ></i>
        {/* <div className="search-container">
          <input type="search" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div> */}
        {notificationCount > 0 && (
          <div
            className="notification"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/notification")}
          >
            <i className="fa-regular fa-bell"></i>
            <span className="count"> {notificationCount} </span>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
