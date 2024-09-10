/** @format */

import React from "react";
import { SectionHeading } from "../Components/HelpingComponent";
import HOC from "../Layouts/HOC";

const Notification = () => {
  return (
    <section className="notification-page">
      <SectionHeading title={"Notification"} />
      
    </section>
  );
};

export default HOC(Notification);
