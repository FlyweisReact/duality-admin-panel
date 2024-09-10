/** @format */

import React from "react";
import { SectionHeading } from "../Components/HelpingComponent";
import HOC from "../Layouts/HOC";

const Users = () => {
  return (
    <section className="user-page">
      <SectionHeading title={"Users"} />
      <div className="flexbox-container"></div>
    </section>
  );
};

export default HOC(Users);
