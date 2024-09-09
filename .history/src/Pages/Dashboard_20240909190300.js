/** @format */

import React from "react";
import { DashboardCard } from "../Components/HelpingComponent";
import HOC from "../Layouts/HOC";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="flexbox-container">
        <DashboardCard title={""} />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </section>
  );
};

export default HOC(Dashboard);
