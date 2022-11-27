import React from "react";
import { useState } from "react";

export default function baseQuestion(props) {
  let [uncheckedYes, setUncheckedYes] = useState(false);
  let [uncheckedNo, setUncheckedNo] = useState(false);

  const handleChange = (event) => {
    //setStatement(event.target.value);
    if (event.target.value === "No") {
      setUncheckedYes(false);
      setUncheckedNo(true);
    } else if (event.target.value === "Yes") {
      setUncheckedNo(false);
      setUncheckedYes(true);
    }
  };
  return (
    <div>
      <div className="section-header">{props.sname}</div>
      <span>{props.question != null ? props.question : "Trail question"}</span>
      <br></br>
      <label>
        <input
          type={"radio"}
          value="Yes"
          onChange={handleChange}
          checked={uncheckedYes}
        ></input>
        Yes
      </label>
      <br></br>
      <label>
        <input
          type={"radio"}
          value="No"
          onChange={handleChange}
          checked={uncheckedNo}
        ></input>
        No
      </label>
    </div>
  );
}
