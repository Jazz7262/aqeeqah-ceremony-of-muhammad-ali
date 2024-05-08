import React from "react";
import "../styles/InviteNote.css";

function InviteNote() {
  return (
    <section id="invite-note">
      <div className="invite-note-wrapper">
        <h5>An Invitation from:</h5>
        <h2>Mr. & Mrs. T. Haji Ismail,</h2>

        <h5 className="address mb-3">
          Proprietor: Mohammed Ali Jewellers,
          <br /> Shroff Bazaar, Adoni.
        </h5>
        <h5 className="address mb-3">
          Residence: #1/541/120,
          <br /> NGO's Colony, Adoni,
          <br /> Kurnool Dist.,
          <br /> AP - 518 301.
        </h5>
        <p className="address">
          Contact:
          <br /> +91 97044 49724,
          <br /> +91 99635 41902.
        </p>
      </div>
    </section>
  );
}

export default InviteNote;
