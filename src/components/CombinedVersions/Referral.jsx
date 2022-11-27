import React from "react";
import { useState } from "react";
import ReferralCB from "../ReferralCB/SelfReferralCB";
import ReferralPS from "../ReferralPS/ReferralPS";

export default function Referral() {
  let [wb, setWb] = useState(true);
  //let [ps, setPs] = useState();
  function handleClick(e) {
    let name = e.target.textContent;
    if (name == "Cookbook Design") {
      setWb(true);
    } else {
      setWb(false);
    }
  }
  return (
    <div>
      <div className="button-collection">
        <button onClick={handleClick} className="button">
          Cookbook Design
        </button>
        <button onClick={handleClick} className="button">
          Suggested Design
        </button>
      </div>
      {wb == true ? <ReferralCB /> : <ReferralPS />}
    </div>
  );
}
