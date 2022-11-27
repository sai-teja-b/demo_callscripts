import React from "react";
import Question from "../question";
import data from "./ordersdata";

export default function ordersScriptPS() {
  return (
    <div>
      <Question
        question={data.Insulin.question}
        sname={data.Insulin.section_heading}
        childQuestions={data.Insulin.childQuestions}
      ></Question>
      <Question
        question={data.Thyroid.question}
        sname={data.Thyroid.section_heading}
        childQuestions={data.Thyroid.childQuestions}
      ></Question>

      <Question
        question={data.General.question}
        sname={data.General.section_heading}
        childQuestions={data.General.childQuestions}
      ></Question>

      <Question
        question={data.Message.question}
        sname={data.Message.section_heading}
      ></Question>
    </div>
  );
}
