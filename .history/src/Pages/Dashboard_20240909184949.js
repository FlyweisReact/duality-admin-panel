/** @format */

import React from "react";
import HOC from "../Layouts/HOC";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="flexbox-container">
        <div className="dashboard-card">
          <div className="counts">
            <p className="sub-heading">Total Users</p>
            <p className="heading"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HOC(Dashboard);
