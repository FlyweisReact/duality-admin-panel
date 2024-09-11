/** @format */

import React from "react";
import { SectionHeading } from "../../Components/HelpingComponent";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";
import { Form } from "react-bootstrap";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: <Link to="/users/MiyaDas">View User</Link>,
    key: "0",
  },
  {
    label: <Link to="/edit-user/Miya">Edit User</Link>,
    key: "1",
  },
  {
    label: <span>Delete User</span>,
    key: "2",
  },
];

const Report = () => {
  const thead = [
    "User No",
    "User ID",
    "Phone",
    "Emails",
    "Reported by",
    "Reason",
    "Block User",
    "Actions",
  ];

  const tbody = [
    [
      20,
      "Miya Das",
      "+91 41472059670",
      "Miya@sky.link",
      "Aman Gopi",
      "Spamp account Id",
      <Form.Check type="switch" defaultChecked id="custom-switch" />,
      <Dropdown
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <i className="fa-solid fa-ellipsis" style={{ cursor: "pointer" }}></i>
      </Dropdown>,
    ],
    [
      41,
      "Shreya Pandal",
      "+1 98272759670",
      "Shreya@dian.com",
      "Sndra Day",
      "Abusive Content",
      <Form.Check type="switch" defaultChecked id="custom-switch" />,
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
      <SectionHeading title={"Report"} />
      <div
        className="table-layout mt-3"
        style={{ backgroundColor: "#FFD0D1", border: "1px solid #FFD0D1" }}
      >
        <div className="filter-section">
          <p className="table-heading">Reported users</p>
          <div className="content">
            <div
              className="search-container"
              style={{
                backgroundColor: "#E9E9EA",
                border: "1px solid #E9E9EA",
              }}
            >
              <input type="search" placeholder="Search User" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <select>
              <option>Filter</option>
            </select>
          </div>
        </div>

        <TableLayout thead={thead} tbody={tbody} className="mt-4 mb-4" />
      </div>
    </section>
  );
};

export default HOC(Report);
