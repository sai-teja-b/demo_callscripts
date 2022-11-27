import React from "react";
import { useState } from "react";
import DummyQuestion from "../childQuestions";
import BaseQuestion from "../baseQuestion";
import data from "./ordersdata";
import "../childQuestion.css";
export default function questionA(props) {
  //let { questions, ...pops } = props;
  //console.log(props);
  //let { questionsYes, questionsNo } = questions;
  //console.log(questionsYes, questionsNo);
  //let { questYes, questNo } = questions;
  let jaca = [99, 89, 100];
  //questYes.map((q) => console.log(q));
  let blankString = "Unchcked yet";
  let [statement, setStatement] = useState("string");
  let [uncheckedYes, setUncheckedYes] = useState(false);
  let [uncheckedNo, setUncheckedNo] = useState(false);
  let [displayQuestion, setDisplayQuestion] = useState();
  //let questions = ["Child Q1", "Child Q2", "Child Q3"];
  const handleChange = (event) => {
    setStatement(event.target.value);
    if (event.target.value === "No") {
      setUncheckedYes(false);
      setUncheckedNo(true);
      setDisplayQuestion(false);
      //console.log("i am fired");
      props.onChange(event);
    } else if (event.target.value === "Yes") {
      setUncheckedNo(false);
      setUncheckedYes(true);
      setDisplayQuestion(true);
      //console.log("i am fired");
      props.onChange(event);
    }
  };
  return (
    <div>
      <div className="section-header">{props.sname}</div>
      <span>{props.question}</span>
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
