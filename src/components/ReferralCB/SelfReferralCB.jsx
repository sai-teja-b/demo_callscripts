import React from "react";
import BaseQuestion from "../baseQuestion";
import data from "./data";
import { useState } from "react";
import GroupQuestions from "../childQuestions";
import QuestionA from "../ordersScriptCB/questionA";

export default function ReferralCB() {
  let [dc1, setDc1] = useState();
  let [dc2, setDc2] = useState();
  let [dc3, setDc3] = useState();
  const handleChangeA = (event) => {
    if (event.target.value === "No") {
      setDc1(false);
      console.log("i am fired");
      console.log(setDc1);
      setDc3();
      setDc2();
    } else if (event.target.value === "Yes") {
      console.log("event logged");
      console.log(setDc1);
      setDc1(true);
      setDc3();
      setDc2();
    }
  };
  const handleChangeB = (event) => {
    if (event.target.value === "No") {
      setDc2(false);
      // console.log("i am fired");
      // console.log(setDc2);
      setDc3();
    } else if (event.target.value === "Yes") {
      // console.log("event logged");
      // console.log(setDc2);
      setDc2(true);
      setDc3();
    }
  };
  const handleChangeC = (event) => {
    if (event.target.value === "No") {
      setDc3(false);
      // console.log("i am fired");
      // console.log(setDc3);
    } else if (event.target.value === "Yes") {
      // console.log("event logged");
      // console.log(setDc3);
      setDc3(true);
    }
  };
  console.log("Component mounted");
  return (
    <div>
      <BaseQuestion
        question={data.onload.UrgentAppointment.question}
        sname={data.onload.UrgentAppointment.section_heading}
      ></BaseQuestion>
      <QuestionA
        question={data.onload.decider1.question}
        sname={data.onload.decider1.section_heading}
        onChange={handleChangeA}
      ></QuestionA>
      {dc1 == true ? (
        <GroupQuestions
          questions={data.onload.decider1.forYes.childQuestions}
          sectionName={data.onload.decider1.forYes.section_heading}
        />
      ) : dc1 == false ? (
        <QuestionA
          question={data.onload.decider2.question}
          sname={data.onload.decider2.section_heading}
          onChange={handleChangeB}
        />
      ) : (
        " "
      )}
      {dc2 == true ? (
        <GroupQuestions
          questions={data.onload.decider2.forYes.childQuestions}
          sectionName={data.onload.decider2.forYes.section_heading}
        />
      ) : dc2 == false ? (
        <QuestionA
          question={data.onload.decider3.question}
          sname={data.onload.decider3.section_heading}
          onChange={handleChangeC}
        />
      ) : (
        " "
      )}
      {dc3 == true ? (
        <GroupQuestions
          questions={data.onload.decider3.forYes.childQuestions}
          sectionName={data.onload.decider3.forYes.section_heading}
        />
      ) : dc3 == false ? (
        <div>
          <GroupQuestions
            questions={data.onload.decider3.forNo.childQuestions}
            sectionName={data.onload.decider3.forNo.section_heading}
          />
          <QuestionA
            question={data.onload.decider3.Message.question}
            sname={data.onload.decider3.Message.section_heading}
            onChange={handleChangeC}
          />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
