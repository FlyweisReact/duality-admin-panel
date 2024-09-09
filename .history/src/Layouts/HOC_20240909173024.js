/** @format */

import React from "react";
import Sidebar from "./Sidebar";

const HOC = (Child) => {
  return <section className="HOC">
    <Sidebar />
    <div className="HO"></div>
  </section>;
};

export default HOC;
