import React from "react";
import Question from "../question";
import data from "./data";

export default function ReferralPS() {
  return (
    <div>
      <Question
        question={data.onload.UrgentAppointment.question}
        sname={data.onload.UrgentAppointment.section_heading}
      ></Question>
      <Question
        question={data.onload.diabetes.question}
        sname={data.onload.diabetes.section_heading}
        childQuestions={data.onload.diabetes.children_questions}
      ></Question>
      <Question
        question={data.onload.thyroid.question}
        sname={data.onload.thyroid.section_heading}
        childQuestions={data.onload.thyroid.children_questions}
      ></Question>
      <Question
        question={data.onload.hair.question}
        sname={data.onload.hair.section_heading}
        childQuestions={data.onload.hair.children_questions}
      ></Question>
      <Question
        question={data.onload.general.question}
        sname={data.onload.general.section_heading}
        childQuestions={data.onload.general.children_questions}
      ></Question>
      <Question
        question={data.onload.message.question}
        sname={data.onload.message.section_heading}
      ></Question>
    </div>
  );
}
