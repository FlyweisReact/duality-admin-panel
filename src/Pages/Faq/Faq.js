/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeading } from "../../Components/HelpingComponent";
import { EditFaq } from "../../Components/Modals";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";

const Faq = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const tbody = [
    [
      <span style={{ textAlign: "left", width: "100%", display: "block" }}>
        Mauris id nibh eu fermentum mattis purus?
      </span>,
      <div className="table-actions">
        <i className="fa-solid fa-pen" onClick={() => setOpen(true)}></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>,
    ],
    [
      <span style={{ textAlign: "left", width: "100%", display: "block" }}>
        Mauris id nibh eu fermentum mattis purus?
      </span>,
      <div className="table-actions">
        <i className="fa-solid fa-pen" onClick={() => setOpen(true)}></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>,
    ],
  ];
  return (
    <section>
      <EditFaq show={open} handleClose={() => setOpen(false)} />
      <SectionHeading title={"FAQ"} />
      <div className="table-layout mt-3 mb-3">
        <div className="filter-section">
          <p className="table-heading"></p>
          <div className="content">
            <button
              className="create-btn"
              onClick={() => navigate("/create-faq")}
            >
              Create new FAQ
            </button>
          </div>
        </div>

        <TableLayout tbody={tbody} className="faq-table mt-3 mb-3" />
      </div>
    </section>
  );
};

export default HOC(Faq);
