/** @format */

import React from "react";
import { post1 } from "../../assest";
import { BackBtn } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";
import Select from "react-select";

const UpdateUserPost = () => {
  const options = [
    {
      value: "Nice",
      label: "Nice",
    },
    {
      value: "Gorgeous",
      label: "Gorgeous",
    },
    {
      value: "New",
      label: "New",
    },
  ];
  return (
    <section className="update-user-post">
      <BackBtn />
      <section className="update-profile-section space-bg">
        <div className="update-img">
          <img src={post1} alt="" />
          <div className="content">
            <button className="update">
              <i className="fa-solid fa-pen"></i>
              Update Photo
            </button>
          </div>
        </div>
        <form>
          <div className="input-div">
            <p>Title</p>
            <input type={"text"} placeholder="Enter Title" />
          </div>

          <div className="input-div">
            <p>Subtitle</p>
            <textarea placeholder="Write about you." />
          </div>

          <div className="input-div">
            <select>
              <option>Los Angeles</option>
              <option>Morroco</option>
              <option>Jamica</option>
            </select>
          </div>

          <div className="input-div">
            <p>Tags</p>
            <Select isMulti options={options} />
          </div>
          <button className="submit-btn">Update information</button>
        </form>
      </section>
    </section>
  );
};

export default HOC(UpdateUserPost);
