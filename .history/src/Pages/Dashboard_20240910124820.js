/** @format */

import React from "react";
import { DashboardCard } from "../Components/HelpingComponent";
import TableLayout from "../Components/TableLayout";
import HOC from "../Layouts/HOC";

const Dashboard = () => {
  const blockedUserHead = ["Sr.No", "User Name", "Blocked", "Reported content"];

  return (
    <section className="dashboard">
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

      <div className="flexbox-container mt-3">
        <div className="space-bg highly-blocked-user-table">
          <TableLayout thead={blockedUserHead} className={"blocked-user-table"} />
        </div>
      </div>
    </section>
  );
};

export default HOC(Dashboard);
