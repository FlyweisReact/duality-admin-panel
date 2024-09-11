/** @format */

import React from "react";
import {
  CustomPagination,
  SectionHeading,
} from "../../Components/HelpingComponent";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";
import { Form } from "react-bootstrap";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { DashboardCard } from "../../Components/Cards/AllCards";

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

const Users = () => {
  const thead = [
    "User No",
    "User ID",
    "Phone",
    "Emails",
    "Joined Date",
    "Active",
    "Block User",
    "Actions",
  ];

  const tbody = [
    [
      20,
      "Miya Das",
      "+91 41472059670",
      "Miya@sky.link",
      "30/7/2024",
      <span className="active-status">
        <span className="active-bg"></span>
        Active
      </span>,
      <Form.Check type="switch" id="custom-switch" />,
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
      20,
      "Miya Das",
      "+91 41472059670",
      "Miya@sky.link",
      "30/7/2024",
      <span className="active-status">
        <span className="active-bg"></span>
        Active
      </span>,
      <Form.Check type="switch" id="custom-switch" />,
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
      20,
      "Miya Das",
      "+91 41472059670",
      "Miya@sky.link",
      "30/7/2024",
      <span className="active-status">
        <span className="active-bg"></span>
        Active
      </span>,
      <Form.Check type="switch" id="custom-switch" />,
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
      20,
      "Miya Das",
      "+91 41472059670",
      "Miya@sky.link",
      "30/7/2024",
      <span className="active-status">
        <span className="active-bg"></span>
        Active
      </span>,
      <Form.Check type="switch" id="custom-switch" />,
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
      20,
      "Miya Das",
      "+91 41472059670",
      "Miya@sky.link",
      "30/7/2024",
      <span className="active-status">
        <span className="active-bg"></span>
        Active
      </span>,
      <Form.Check type="switch" id="custom-switch" />,
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
    <section className="user-page">
      <SectionHeading title={"Users"} className="mb-3" />
      <div className="flexbox-container">
        <DashboardCard
          title={"Total Users"}
          count={"2.80M"}
          percentage={"+6.08%"}
          isUp={true}
        />
        <DashboardCard
          title={"Active Users"}
          count={"2,318"}
          percentage={"+6.08%"}
          isUp={true}
          bg={"#D0FFE0"}
        />
        <DashboardCard
          title={"Inactive Users"}
          count={"2,318"}
          percentage={"-6.08%"}
          isUp={false}
          bg={"#E6E6E6"}
        />
        <DashboardCard
          title={"Blocked/Reported Users"}
          count={"2,318"}
          bg={"#FFD0D1"}
        />
      </div>

      <div
        className="table-layout mt-3"
        style={{ backgroundColor: "#e5ecf6", border: "1px solid #e5ecf6" }}
      >
        <div className="filter-section">
          <p className="table-heading">List of users</p>
          <div className="content">
            <div className="search-container">
              <input type="search" placeholder="Search User" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <select>
              <option>Filter</option>
              <option>Date</option>
              <option>User Name</option>
              <option>Active</option>
              <option>In-active</option>
            </select>
          </div>
        </div>

        <TableLayout
          thead={thead}
          tbody={tbody}
          className="mt-4 mb-5 user-table"
        />
      </div>

      <CustomPagination />
    </section>
  );
};

export default HOC(Users);
