/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeading } from "../../Components/HelpingComponent";
import { EditNotification } from "../../Components/Modals";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";

const Notification = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const thead = ["Title", "Content", "Status", "Actions"];

  const tbody = [
    [
      "Lorem lipsum ipsum",
      "Sed ut perspiciatis unde omnis",
      <span className="read-status">Read</span>,
      <div className="table-actions">
        <i className="fa-solid fa-pen" onClick={() => setOpen(true)}></i>
        <i className="fa-regular fa-trash-can"></i>
        <i className="fa-solid fa-share"></i>
      </div>,
    ],
    [
      "Lorem lipsum ipsum",
      "Sed ut perspiciatis unde omnis",
      <span className="unread-status">Unread</span>,
      <div className="table-actions">
        <i className="fa-solid fa-pen" onClick={() => setOpen(true)}></i>
        <i className="fa-regular fa-trash-can"></i>
        <i className="fa-solid fa-share"></i>
      </div>,
    ],
  ];

  return (
    <section className="notification-page">
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
