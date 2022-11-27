import React from "react";
import { useState } from "react";
import DummyQuestion from "../childQuestions";
import BaseQuestion from "../baseQuestion";
import data from "./ordersdata";
import "../childQuestion.css";
import QuestionA from "./questionA";

export default function ordersScriptCB(props) {
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
  let [displayQuestionA, setDisplayQuestionA] = useState();
  //let questions = ["Child Q1", "Child Q2", "Child Q3"];
  const handleChange = (event) => {
    setStatement(event.target.value);
    if (event.target.value === "No") {
      setUncheckedYes(false);
      setUncheckedNo(true);
      setDisplayQuestion(false);
      setDisplayQuestionA();
    } else if (event.target.value === "Yes") {
      setUncheckedNo(false);
      setUncheckedYes(true);
      setDisplayQuestion(true);
      setDisplayQuestionA();
    }
  };
  const handleChangeA = (event) => {
    if (event.target.value === "No") {
      setDisplayQuestionA(false);
      // console.log("i am fired");
      // console.log(displayQuestionA);
    } else if (event.target.value === "Yes") {
      // console.log("event logged");
      // console.log(displayQuestionA);
      setDisplayQuestionA(true);
    }
  };
  return (
    <div>
      <div className="section-header">
        {data.routine_appointment.section_heading}
      </div>
      <span>{data.routine_appointment.question}</span>
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
      {displayQuestion == true ? (
        <div>
          <DummyQuestion
            questions={data.routine_appointment.forYes.childquestions}
            sectionName={data.routine_appointment.forYes.section_heading}
          />
        </div>
      ) : displayQuestion == false ? (
        <div>
          <DummyQuestion
            questions={data.routine_appointment.forNo.childquestions}
            sectionName={data.routine_appointment.forNo.section_heading}
          />
          <QuestionA
            question={data.routine_appointment.forNo.Decider1.question}
            onChange={handleChangeA}
          />
        </div>
      ) : (
        ""
      )}
      {displayQuestionA == true ? (
        <DummyQuestion
          sectionName={
            data.routine_appointment.forNo.Decider1.forYes.section_heading
          }
          questions={
            data.routine_appointment.forNo.Decider1.forYes.childquestions
          }
        />
      ) : displayQuestionA == false ? (
        <DummyQuestion
          sectionName={
            data.routine_appointment.forNo.Decider1.forNo.section_heading
          }
          questions={
            data.routine_appointment.forNo.Decider1.forNo.childquestions
          }
        />
      ) : (
        ""
      )}
    </div>
  );
}
