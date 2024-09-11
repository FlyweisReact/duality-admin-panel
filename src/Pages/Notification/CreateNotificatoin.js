/** @format */

import React from "react";
import { BackBtn } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";

const CreateNotificatoin = () => {
  return (
    <section>
      <BackBtn />
      <section className="update-profile-section space-bg">
        <p className="table-heading">Create notification</p>
        <form>
          <div className="input-div">
            <p>Title</p>
            <input type={"text"} placeholder="Enter your title" />
          </div>
          <div className="input-div">
            <p>Sub Title</p>
            <textarea placeholder="Enter your text" />
          </div>
          <button className="submit-btn">Send</button>
        </form>
      </section>
    </section>
  );
};

export default HOC(CreateNotificatoin);
