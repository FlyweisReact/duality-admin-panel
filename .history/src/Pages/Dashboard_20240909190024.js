/** @format */

import React from "react";
import { graphUp } from "../assest";
import HOC from "../Layouts/HOC";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="flexbox-container">
       <DashboardCard />
      </div>
    </section>
  );
};

export default HOC(Dashboard);
