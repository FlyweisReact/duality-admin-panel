/** @format */

import React, { useState } from "react";
import { BackBtn, SectionHeading } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";
import { postApi } from "../../Repository/Api";
import endPoints from "../../Repository/apiConfig";
import { ClipLoader } from "react-spinners";

const CreatePolicy = () => {
  const [header, setHeader] = useState("");
  const [loading, setLoading] = useState(false);

  const payload = {
    header,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.policy.create, payload, {
      successMsg: "Success !",
      setLoading,
    });
  };

  return (
    <div>
      <div
        className="flexbox-container"
        style={{ gap: "10px", alignItems: "center" }}
      >
        <BackBtn />
        <SectionHeading title={"Privacy Policy"} />
      </div>

      <section className="update-profile-section space-bg">
        <p className="table-heading mb-2">Create new privacy policy</p>
        <form onSubmit={submitHandler}>
          <div className="input-div">
            <textarea
              placeholder="Write here..."
              onChange={(e) => setHeader(e.target.value)}
              value={header}
            />
          </div>
          <button className="submit-btn" type="submit">
            {loading ? <ClipLoader color="#fff" /> : "Create"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default HOC(CreatePolicy);
