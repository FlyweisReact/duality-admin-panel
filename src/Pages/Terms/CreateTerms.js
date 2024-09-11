/** @format */

import React from "react";
import { BackBtn, SectionHeading } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";

const CreateTerms = () => {
  return (
    <div>
      <div
        className="flexbox-container"
        style={{ gap: "10px", alignItems: "center" }}
      >
        <BackBtn />
        <SectionHeading title={"Terms & Condition"} />
      </div>

      <section className="update-profile-section space-bg">
        <p className="table-heading mb-5">Create new terms and condition</p>
        <form>
          <div className="input-div">
            <p>Title</p>
            <input type={"text"} placeholder="Enter Title" />
          </div>
          <div className="input-div">
            <p>Discription</p>
            <textarea placeholder="Write description Here." />
          </div>
          <button className="submit-btn">Create</button>
        </form>
      </section>
    </div>
  );
};

export default HOC(CreateTerms);
