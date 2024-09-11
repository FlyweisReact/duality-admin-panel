/** @format */

import React from "react";
import HOC from "../../Layouts/HOC";
import { BackBtn, SectionHeading } from "../../Components/HelpingComponent";

const CreateFaq = () => {
  return (
    <div>
      <div
        className="flexbox-container"
        style={{ gap: "10px", alignItems: "center" }}
      >
        <BackBtn />
        <SectionHeading title={"FAQ"} />
      </div>

      <section className="update-profile-section space-bg">
        <p className="table-heading mb-5">Create new</p>
        <form>
          <div className="input-div">
            <p>Question</p>
            <input type={"text"} />
          </div>
          <div className="input-div">
            <p>Answer</p>
            <textarea  />
          </div>
          <button className="submit-btn">Create</button>
        </form>
      </section>
    </div>
  );
};

export default HOC(CreateFaq);
