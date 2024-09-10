/** @format */

import React from "react";
import { userAvatar } from "../assest";
import { BackBtn } from "../Components/HelpingComponent";
import HOC from "../Layouts/HOC";

const EditProfile = () => {
  return (
    <section>
      <BackBtn />

      <section className="update-profile-section space-bg">
        <div className="update-img">
          <img src={userAvatar} alt="" />
          <div className="content">
            <h4>Admin Name</h4>
            <p className="tag">Admin</p>
            <button className="update">
              <i className="fa-solid fa-pen"></i>
              Update Image
            </button>
          </div>
        </div>
        <form>
          <div className="input-div">
            <p>Name</p>
            <input type={"text"} placeholder="Enter User Name" />
          </div>
          <div className="input-div">
            <p>About</p>
            
          </div>
        </form>
      </section>
    </section>
  );
};

export default HOC(EditProfile);
