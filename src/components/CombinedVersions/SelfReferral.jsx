import React from "react";
import { useState } from "react";
import SelfReferralCB from "../SelfRefferalCB/SelfReferralCB";
import SelfReferralPS from "../SelfReferralPS/SelfReferralPS";

export default function SelfReferral() {
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
      {wb == true ? <SelfReferralCB /> : <SelfReferralPS />}
    </div>
  );
}
