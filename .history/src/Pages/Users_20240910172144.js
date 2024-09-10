/** @format */

import React from "react";
import { DashboardCard, SectionHeading } from "../Components/HelpingComponent";
import HOC from "../Layouts/HOC";

const Users = () => {
    const thead = [
        "User No" ,
        "User ID" ,
        'Phone',
        "Emails",
        ""
    ]
  return (
    <section className="user-page">
      <SectionHeading title={"Users"} className="mb-3" />
      <div className="flexbox-container">
        <DashboardCard
          title={"Total Users"}
          count={"2000"}
          percentage={"+6.08%"}
          isUp={true}
        />
        <DashboardCard
          title={"Active Users"}
          count={"1,500"}
          percentage={"+6.08%"}
          isUp={true}
          bg={"#D0FFE0"}
        />
        <DashboardCard
          title={"Inactive Users"}
          count={"300"}
          percentage={"-6.08%"}
          isUp={false}
          bg={"#E6E6E6"}
        />
        <DashboardCard
          title={"Blocked/Reported Users"}
          count={"200"}
          bg={"#FFD0D1"}
        />
      </div>

      <div className="table-layout mt-3">
        <div className="filter-section">
          <p className="table-heading">List of users</p>
          <div className="content">
            <div className="search-container">
              <input type="search" placeholder="Search User" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <select>
              <option>Filter</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOC(Users);
