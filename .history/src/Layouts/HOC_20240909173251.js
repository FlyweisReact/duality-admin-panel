/** @format */

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const HOC = (Child) => {
  return (
    <section className="HOC">
      <Sidebar />
      <div className="HOC-content">
        <Navbar />
        <Child />
      </div>
    </section>
  );
};

export default HOC;
