/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeading } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";

const Terms = () => {
  const navigate = useNavigate();
  return (
    <section>
      <SectionHeading title={"Terms & Condition"} />
      <div className="terms-condition-container table-layout mt-3">
        <div className="filter-section">
          <p className="table-heading"></p>
          <div className="content">
            <button
              className="create-btn"
              onClick={() => navigate("/create-terms")}
            >
              Create new terms
            </button>
            <div className="table-actions">
              <i
                className="fa-solid fa-pen"
                onClick={() => navigate("/edit-terms")}
              ></i>
              <i className="fa-regular fa-trash-can"></i>
            </div>
          </div>
        </div>

        <div className="value-container">
          <p className="label">Sed ut perspiciatis</p>
          <p className="value">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur
          </p>
        </div>
      </div>
    </section>
  );
};

export default HOC(Terms);
