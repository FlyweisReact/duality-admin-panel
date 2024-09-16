/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CustomLoader,
  SectionHeading,
} from "../../Components/HelpingComponent";
import { EditNotification } from "../../Components/Modals";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";
import { deleteApi, getApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";

const Notification = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const removeNotifications = (id) => {
    deleteApi(endPoints.notifications.remove(id), {
      setLoading,
      additionalFunctions: [fetchHandler],
    });
  };

  const fetchHandler = () => {
    getApi(endPoints.notifications.getAll, {
      setResponse: setData,
      setLoading,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const thead = ["Sno", "Title", "Content", "Status", "Actions"];

  const tbody = data?.data?.map((i, index) => [
    `#${index + 1}`,
    i?.title,
    i?.content,
    i?.status === "unread" ? (
      <span className="unread-status">Unread</span>
    ) : (
      <span className="read-status">Read</span>
    ),
    <div className="table-actions">
      <i className="fa-solid fa-pen" onClick={() => setOpen(true)}></i>
      <i
        className="fa-regular fa-trash-can"
        onClick={() => removeNotifications(i?._id)}
      ></i>
      <i className="fa-solid fa-share"></i>
    </div>,
  ]);

  return (
    <section className="notification-page">
      {loading && <CustomLoader />}
      <EditNotification show={open} handleClose={() => setOpen(false)} />
      <SectionHeading title={"Notification"} />

      <div className="table-layout mt-3">
        <div className="filter-section">
          <p className="table-heading"></p>{" "}
          <div className="content">
            <button
              className="create-btn"
              onClick={() => navigate("/create-notification")}
            >
              Add Notification
            </button>
            <select>
              <option>Filter</option>
            </select>
          </div>
        </div>
        <TableLayout thead={thead} tbody={tbody} className="mt-5 mb-5" />
      </div>
    </section>
  );
};

export default HOC(Notification);
