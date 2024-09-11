/** @format */

import React, { useState } from "react";
import { SectionHeading } from "../../Components/HelpingComponent";
import { EditSupport } from "../../Components/Modals";
import TableLayout from "../../Components/TableLayout";
import HOC from "../../Layouts/HOC";


const HelpSupport = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const thead = ["Mobile No", "Email", "Address", "Actions"];
  const tbody = [
    [
      "+1 82522059670",
      "macster@prettysky.link",
      "Lorem lipsum ipsum",
      <div className="table-actions">
        <i
          className="fa-solid fa-pen"
          onClick={() => {
            setIsEdit(true);
            setOpen(true);
          }}
        ></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>,
    ],
    [
      "+1 82522059670",
      "example@mail.in",
      "Lorem lipsum ipsum",
      <div className="table-actions">
        <i
          className="fa-solid fa-pen"
          onClick={() => {
            setIsEdit(true);
            setOpen(true);
          }}
        ></i>
        <i className="fa-regular fa-trash-can"></i>
      </div>,
    ],
  ];
  return (
    <section>
      <EditSupport
        show={open}
        handleClose={() => setOpen(false)}
        isEdit={isEdit}
      />
      <SectionHeading title={"Help & Support"} />
      <div className="table-layout mt-3">
        <div className="filter-section">
          <p className="table-heading">Contact and other details</p>
          <div className="content">
            <button
              className="create-btn"
              onClick={() => {
                setIsEdit(false);
                setOpen(true);
              }}
            >
              Add new
            </button>
            <div
              className="search-container"
              style={{
                backgroundColor: "#E9E9EA",
                border: "1px solid #E9E9EA",
              }}
            >
              <input type="search" placeholder="Search number , email" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>

        <TableLayout thead={thead} tbody={tbody} className="mt-4 mb-4" />
      </div>
    </section>
  );
};

export default HOC(HelpSupport);
