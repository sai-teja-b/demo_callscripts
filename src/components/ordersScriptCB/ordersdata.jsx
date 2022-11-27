const data = {
  routine_appointment: {
    section_heading: "Book Routine Appointment",
    question:
      "(Is patient looking to schedule an Injection or Infusion Appointment?) ➜ Regulator 1",
    forYes: {
      section_heading: "Book Routine Appointment-Infusion ",
      childquestions: [
        "(Schedule an outstanding order for Prolia?)",
        "(Schedule an outstanding order for Reclast?)",
        "(Schedule an outstanding order for an injection?)",
        "(Schedule an outstanding order for an infusion?)",
      ],
    },
    forNo: {
      section_heading: "Booking Routine Appointment-A",
      childquestions: [
        "(Is the patient looking to schedule a continuous glucose monitor (CGM) insertion/removal?)",
        "(Is the patient looking to schedule a bone density scan?)",
      ],
      Decider1: {
        question:
          "(Is the patient looking to schedule a Thyroid or Parathyroid Appointment?) ➜ Regulator 2",
        forYes: {
          section_heading: "Book Routine Appointment-Thyroid ",
          childquestions: [
            "(Schedule an outstanding order for Thyroid ultrasound?)",
            "(Schedule an outstanding order for Thyroid uptake scan?)",
            "(Schedule an outstanding order for Thyroid biopsy?)",
            "(Schedule an outstanding order for Parathyroid scan?)",
          ],
        },
        forNo: {
          section_heading: "Booking Routine Appointment-B",
          childquestions: [
            "(Is the patient looking to schedule an FNA (fine needle aspiration)?)",
            "(Is the patient looking to schedule an MRI?)",
            "(Is the patient looking to schedule bloodwork (nurse visit)?)",
            "(Is the patient looking to schedule a DEXA Scale test?)",
            "(Is the patient looking to schedule a SECA Scale test?)",
            "(Is the patient looking to schedule a procedure?)",
            "(Do you have a question for the practice prior to scheduling a surgery/procedure/test?) ➜ For navigating to General Message screen",
          ],
        },
      },
    },
  },
};
export default data;
