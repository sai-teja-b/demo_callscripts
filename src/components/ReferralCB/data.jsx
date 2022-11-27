const data = {
  onload: {
    UrgentAppointment: {
      section_heading: "Book Urgent Appointment",
      question:
        "(Are you pregnant and calling to schedule an endocrinology appointment?) ",
    },
    decider1: {
      question:
        "(Is the patient calling to book an appointment for Diabetes?) ➜ Regulator-1",
      section_heading: "Book Routine Appointment",
      forYes: {
        section_heading: "Book Diabetes Appointment",
        childQuestions: [
          "(Book an appointment for Diabetes Type 1?)",
          "(Book an appointment for Diabetes Type 2?)",
          "(Book an appointment for Diabetes mellitus and unsure if they have Type 1 or Type 2?)",
          "(Book an appointment for Diabetes Insipidus?)",
          "(Book an appointment for insulin resistance pre-diabetes,elevated HgbA1C?)",
        ],
      },
    },
    decider2: {
      question:
        "(Is the patient calling to schedule an appointment for a thyroid issue?) ➜ Regulator-2",
      section_heading: "Book Routine Appointment-A",
      forYes: {
        childQuestions: [
          "(Is the patient calling to book an appointment for hypothyroidism? (underactive thyroid, Hashimoto’s Disease, enlarged thyroid)?)",
          "(Is the patient calling to book an appointment for hyperthyroidism (overactive thyroid or Graves disease)?)",
          "(Is the patient calling to book an appointment for thyroid cancer or calling because cancer surgery may be required or had cancer surgery in the past?)",
          "(Is the patient calling to book an appointment for thyroid nodules or calling because nodule surgery may be required or had nodule surgery in the past?)",
        ],
        section_heading: "Book Thyroid Issue Appointment",
      },
    },
    decider3: {
      question:
        "(Is the patient calling to book an appointment for a hair issue?) ➜ Regulator-3",
      section_heading: "Book Routine Appointment-B",
      forYes: {
        childQuestions: [
          "(Is the patient calling to book an appointment for excessive hair growth (hirsutism)?)",
          "(Is the patient calling to book an appointment for hair loss (alopecia)?)",
        ],
        section_heading: "Book Hair Issue Appointment",
      },
      forNo: {
        childQuestions: [
          "(Is the patient calling to book an appointment for Cushing's Syndrome (high cortisol levels)?)",
          "(Is the patient calling to book an appointment for Polycystic Ovarian Syndrome (PCOS)?)",
          "(Is the patient calling to book an appointment for amenorrhea?) ",
          "(Is the patient calling to book an appointment for oligomenorrhea?)",
          "(Is the patient calling to book an appointment for hypogonadism (low testosterone, testicular failure)?)",
          "(Is the patient calling to book an appointment for Klinefelter's Syndrome (rare genetic condition)?)",
          "(Is the patient calling to book an appointment for menopause (hot flashes, mood disorder, brain fog)?)",
          "(Is the patient calling to book an appointment for Prolactinoma (high prolactin level)?)",
          "(Is the patient calling to book an appointment for hyponatremia (low sodium)?)",
          "(Is the patient calling to book an appointment for hypopituitarism (hypo pit) ?)",
          "(Is the patient calling to book an appointment for a (high) growth hormone related issue (acromegaly)?)",
          "(Is the patient calling to book an appointment for gynecomastia (breast growth)?)",
          "(Is the patient calling to book an appointment for galactorrhea (breast tenderness, breast discharge)?)",
          "(Is the patient calling to book an appointment for high DHEA(dehydroepiandrosterone) abnormal hormone levels?)",
          "(Is the patient calling to book an appointment for an adrenal disorder or congenital adrenal hyperplasia?)",
          "(Is the patient calling to book an appointment for metabolic bone disease/osteoporosis, osteopenia, low bone density, fractures, low/high alkaline phosphatase (hypophosphatasia)?)",
          "(Is the patient calling to book an appointment for Paget's disease?)",
          "(Is the patient calling to book an appointment for calcium disorders?)",
          "(Is the patient calling to book an appointment for parathyroid disorder?)",
          "(Is the patient calling to book an appointment for Vitamin D deficiency?)",
          "(Is the patient calling to book an appointment for weight control (obesity, metabolism, overweight, weight gain, BMI of 27 or higher)?)",
          "(Is the patient calling to book an appointment for bariatric surgery (weight loss surgery)?)",
          "(Is the patient calling to book an appointment for a new patient nutrition visit?)",
          "(Is the patient calling to book an appointment for bioidentical hormone?)",
          "(Is the patient calling to book an appointment for OB/reproductive endocrinology (IVF)?)",
          "(Is the patient calling to book an appointment for fatty liver disease (NAFLD)?)",
          "(Is the patient calling to book an appointment for Neuroendocrine problem (TBI - traumatic brain injury (endocrine / hormone tumor or problem)?)",
          "(Is the patient calling to book an appointment for a pituitary adenoma?)",
          "(Is the patient calling to book an appointment for a lipid problem (cholesterol, triglyceride)?)",
        ],
        section_heading: "Book Routine Appointment-C",
      },
      Message: {
        question:
          "(Does the patient have any questions for the practice which need to be addressed prior to their appointment?)",
        section_heading: "Message to practice",
      },
    },
  },
};

export default data;
