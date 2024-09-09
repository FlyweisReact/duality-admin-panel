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
            <p className="heading">2.80M</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HOC(Dashboard);
