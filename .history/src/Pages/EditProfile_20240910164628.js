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
            <img src={userAvatar} alt='' />
            <div className="content">
            

            </div>
        </div>
      </section>
    </section>
  );
};

export default HOC(EditProfile);
