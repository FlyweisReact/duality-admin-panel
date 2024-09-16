/** @format */

import React, { useCallback, useEffect, useState } from "react";
import {
  CustomLoader,
  CustomPagination,
  SectionHeading,
} from "../../Components/HelpingComponent";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";
import { Form } from "react-bootstrap";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { DashboardCard } from "../../Components/Cards/AllCards";
import { getApi, putApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { debouncedSetQuery } from "../../utils/utils";

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
  const [data, setData] = useState({});
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState({});
  const [status, setStatus] = useState(null);
  const [isVerified, setIsVerified] = useState(null);
  const [loading, setLoading] = useState(false);
  const [bg, setBg] = useState("#e5ecf6");

  const updateUserStatus = (data) => {
    const payload = {
      isVerified: !data?.isVerified,
    };

    putApi(endPoints.users.updateStatus(data?._id), payload, {
      additionalFunctions: [fetchCounts, fetchHandler],
      successMsg: "Success !",
      setLoading,
    });
  };

  const fetchHandler = useCallback(() => {
    getApi(
      endPoints.users.allUser({ page, search: query, status, isVerified }),
      {
        setResponse: setData,
        setLoading,
      }
    );
  }, [page, query, status, isVerified]);

  const fetchCounts = () => {
    getApi(endPoints.dashboard.userCount, {
      setResponse: setCount,
    });
  };

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  useEffect(() => {
    fetchCounts();
  }, []);

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

  const tbody = data?.data?.docs?.map((i, index) => [
    `#${index + 1}`,
    i?.fullName,
    i?.mobileNumber,
    i?.email,
    i?.createdAt?.slice(0, 10),
    i?.status ? (
      <span className="active-status">
        <span className="active-bg"></span>
        Active
      </span>
    ) : (
      <span className="active-status">
        <span className="not-active-bg"></span>
        Inactive
      </span>
    ),
    <Form.Check
      type="switch"
      id="custom-switch"
      checked={!i?.isVerified}
      onChange={(e) => updateUserStatus(i)}
    />,
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
    >
      <i className="fa-solid fa-ellipsis" style={{ cursor: "pointer" }}></i>
    </Dropdown>,
  ]);

  return (
    <section className="user-page">
      {loading && <CustomLoader />}
      <SectionHeading title={"Users"} className="mb-3" />
      <div className="flexbox-container">
        <DashboardCard
          title={"Total Users"}
          count={count?.data?.users}
          isUp={true}
          onClickEvent={() => {
            setStatus(null);
            setIsVerified(null);
            setBg("#e5ecf6");
          }}
        />
        <DashboardCard
          title={"Active Users"}
          count={count?.data?.activeUser}
          isUp={true}
          bg={"#D0FFE0"}
          onClickEvent={() => {
            setStatus(true);
            setBg("#D0FFE0");
          }}
        />
        <DashboardCard
          title={"Inactive Users"}
          count={count?.data?.inactiveUser}
          isUp={false}
          bg={"#E6E6E6"}
          onClickEvent={() => {
            setStatus(false);
            setBg("#E6E6E6");
          }}
        />
        <DashboardCard
          title={"Blocked/Reported Users"}
          count={count?.data?.blockedUser}
          bg={"#FFD0D1"}
          onClickEvent={() => {
            setIsVerified(false);
            setBg("#FFD0D1");
          }}
        />
      </div>

      <div
        className="table-layout mt-3"
        style={{ backgroundColor: bg, border: `1px solid ${bg}` }}
      >
        <div className="filter-section">
          <p className="table-heading">List of users</p>
          <div className="content">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search User"
                onChange={(e) => debouncedSetQuery(e.target.value, setQuery)}
              />
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

      <CustomPagination
        currentPage={page}
        setCurrentPage={setPage}
        hasNextPage={data?.data?.hasNextPage}
        hasPrevPage={data?.data?.hasPrevPage}
      />
    </section>
  );
};

export default HOC(Users);
