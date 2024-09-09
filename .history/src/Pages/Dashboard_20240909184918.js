/** @format */

import React from "react";
import HOC from "../Layouts/HOC";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="flexbox-container">
        <div className="dashboard-card"></div>
      </div>
    </section>
  );
};

export default HOC(Dashboard);
