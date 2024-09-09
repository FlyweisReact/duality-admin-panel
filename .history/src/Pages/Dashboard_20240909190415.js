/** @format */

import React from "react";
import { DashboardCard } from "../Components/HelpingComponent";
import HOC from "../Layouts/HOC";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <div className="flexbox-container">
        <DashboardCard
          title={"Total Users"}
          count={"2.80M"}
          percentage={"+6.08%"}
          isUp
        />
      </div>
    </section>
  );
};

export default HOC(Dashboard);
