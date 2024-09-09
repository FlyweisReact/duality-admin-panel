/** @format */

import React from "react";
import Sidebar from "./Sidebar";

const HOC = (Child) => {
  return <section className="HOC">
    <Sidebar />
    <div className=""></div>
  </section>;
};

export default HOC;
