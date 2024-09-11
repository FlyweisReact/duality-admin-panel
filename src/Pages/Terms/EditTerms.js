/** @format */

import React from "react";
import { BackBtn, SectionHeading } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";

const EditTerms = () => {
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
        <p className="table-heading mb-5">Edit terms and condition</p>
        <form>
          <div className="input-div">
            <p>Title</p>
            <input
              type={"text"}
              placeholder="Enter Title"
              value={"Sed ut perspiciatis"}
            />
          </div>
          <div className="input-div">
            <p>Discription</p>
            <textarea
              placeholder="Write description Here."
              value={
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui "
              }
            />
          </div>
          <button className="submit-btn">Update</button>
        </form>
      </section>
    </div>
  );
};

export default HOC(EditTerms);
