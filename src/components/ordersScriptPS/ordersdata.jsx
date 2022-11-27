const data = {
  Insulin: {
    question:
      "(Is patient looking to schedule an Injection or Infusion Appointment?)",
    section_heading: "Book Routine Appointment-Insulin",
    childQuestions: [
      "(Schedule an outstanding order for Prolia?)",
      "(Schedule an outstanding order for Reclast?)",
      "(Schedule an outstanding order for an injection?)",
      "(Schedule an outstanding order for an infusion?)",
    ],
  },
  Thyroid: {
    question:
      "(Is the patient looking to schedule a Thyroid or Parathyroid Appointment?)",

    section_heading: "Book Routine Appointment-Thyroid",
    childQuestions: [
      "(Schedule an outstanding order for Thyroid ultrasound?)",
      "(Schedule an outstanding order for Thyroid uptake scan?)",
      "(Schedule an outstanding order for Thyroid biopsy?)",
      "(Schedule an outstanding order for Parathyroid scan?)",
    ],
  },
  General: {
    question:
      "(Is the patient looking to schedule Appointment for an issue not specified above?",
    section_heading: "Book Routine Appointment",
    childQuestions: [
      "(Is the patient looking to schedule a continuous glucose monitor (CGM) insertion/removal?)",
      "(Is the patient looking to schedule a bone density scan?)",
      "(Is the patient looking to schedule an FNA (fine needle aspiration)?)",
      "(Is the patient looking to schedule an MRI?)",
      "(Is the patient looking to schedule bloodwork (nurse visit)?)",
      "(Is the patient looking to schedule a DEXA Scale test?)",
      "(Is the patient looking to schedule a SECA Scale test?)",
      "(Is the patient looking to schedule a procedure?)",
      "(Do you have a question for the practice prior to scheduling a surgery/procedure/test?)",
    ],
  },
  Message: {
    question:
      "(Do you have a question for the practice prior to scheduling a surgery/procedure/test?)",
    section_heading: "Message to Practice",
  },
};

export default data;
