/** @format */

import React from "react";
import { BackBtn, SectionHeading } from "../../Components/HelpingComponent";
import HOC from "../../Layouts/HOC";

const TicketDetails = () => {
  return (
    <section>
      <div
        className="flexbox-container"
        style={{ gap: "10px", alignItems: "center" }}
      >
        <BackBtn />
        <SectionHeading title={"Ticket Detail"} />
      </div>

      <div className="ticket-detail mt-3">
        <div className="value-container">
          <p className="label">Ticket Id</p>
          <p className="value">#6943</p>
        </div>
        <div className="value-container">
          <p className="label">Ticket Status </p>
          <p className="value unread-status">open</p>
        </div>
        <div className="value-container">
          <p className="label">Group</p>
          <p className="value">Advertisement</p>
        </div>
        <div className="value-container">
          <p className="label">Assign to</p>
          <p className="value">Nicole Grandee</p>
        </div>
        <div className="value-container">
          <p className="label">Set Priority</p>
          <p className="value">Medium</p>
        </div>
        <div className="value-container">
          <p className="label">Response if any</p>
          <p className="value">First response 10:30am, 25 aug 2024</p>
        </div>
        <div className="value-container">
          <p className="label">Subject</p>
          <p className="value">Sed ut perspiciatis unde omnis iste natus</p>
        </div>
        <div className="value-container">
          <p className="label">Description</p>
          <p className="value">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed
          </p>
        </div>
        <div className="value-container">
          <p className="label">Complained By </p>
          <p className="value">Kwak Seong-Min</p>
        </div>
        <div className="value-container">
          <p className="label">Date of complaint</p>
          <p className="value">10/1/2024</p>
        </div>
      </div>
    </section>
  );
};

export default HOC(TicketDetails);
