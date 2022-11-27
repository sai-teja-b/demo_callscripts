import React from "react";
import BaseQuestion from "./baseQuestion";
import "./childQuestion.css";
import "./ordersScriptCB/ordersdata";

export default function jokesOnMe(props) {
  let quesArray = props.questions;
  //console.log(props);
  return (
    <div>
      <div className="section-header">{props.sectionName}</div>
      {quesArray?.map((q) => (
        <BaseQuestion question={q} />
      ))}
    </div>
  );
}
