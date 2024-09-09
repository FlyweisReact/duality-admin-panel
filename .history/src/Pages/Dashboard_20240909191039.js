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
    </section>
  );
};

export default HOC(Dashboard);
