/** @format */

import React from "react";
import { SectionHeading } from "../../Components/HelpingComponent";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/ticket-detail">View Details</Link>,
    key: "0",
  },
  {
    label: <span>Delete</span>,
    key: "2",
  },
];

const AllTickets = () => {
  const thead = [
    "Ticket Id",
    "Send by",
    "Email",
    "Reason",
    "Created date",
    "Status",
    "Actions",
  ];

  const tbody = [
    [
      6493,
      "Mehek Nanwani",
      "macster@sky.lnk",
      "Lorem lipsum ipsum",
      "2/1/2024",
      <span className="unread-status">Open</span>,
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <i className="fa-solid fa-ellipsis" style={{ cursor: "pointer" }}></i>
      </Dropdown>,
    ],
  ];

  return (
    <section>
      <SectionHeading title={"Tickets"} />
      <div className="table-layout mt-5 mb-5">
        <div className="filter-section">
          <p className="table-heading">All Tickets</p>
          <div className="content">
            <select>
                <option>Status</option>
            </select>
          </div>
        </div>

        <TableLayout thead={thead} tbody={tbody} className="mt-4 mb-3" />
      </div>
    </section>
  );
};
export default HOC(AllTickets);
