/** @format */

import React from "react";
import { userAvatar } from "../../assest";
import { BackBtn } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";

const EditUserProfile = () => {
  return (
    <section className="edit-user-page">
      <BackBtn />

      <section className="update-profile-section space-bg">
        <div className="update-img">
          <img src={userAvatar} alt="" />
          <div className="content">
            <h4>Mehek Nanwani</h4>
            <p className="tag">30 Friends</p>
            <button className="update">
              <i className="fa-solid fa-pen"></i>
              Update Image
            </button>
          </div>
        </div>
        <form>
          <div className="input-div">
            <p>Name</p>
            <input
              type={"text"}
              placeholder="Enter User Name"
              value={"Mehek Nanwani"}
            />
          </div>

          <div className="multiple-inputs">
            <div className="input-div">
              <p>Email</p>
              <input type={"text"} value={"macster@prettysky.link"} />
            </div>
            <div className="input-div">
              <p>Phone No</p>
              <input type={"text"} value={"+91 93072059670"} />
            </div>
          </div>

          <div className="input-div">
            <p>About</p>
            <textarea placeholder="Write about you." />
          </div>
          <button className="submit-btn">Update information</button>
        </form>
      </section>
    </section>
  );
};

export default HOC(EditUserProfile);
