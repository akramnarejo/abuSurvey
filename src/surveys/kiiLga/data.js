import { element } from "prop-types";

export const surveyData = {
  pages: [
    {
      name: "KII for LGA",
      title: "KII LGA",
      description: "Survey for KII LGA",
      elements: [

        {
            name: "facilityname",
            type: "text",
            title: "Name of Facility (in Capital Letters)",
            placeholder: "Enter Name of Facility",
        },

        {
          name: "intro1",
          type: "text",
          title: "Name of Interviewee",
          placeholder: "Enter name of Interviewee",
        },

        {
          name: "intro2",
          type: "text",
          title: "Designation",
          placeholder: "Enter Designation",
        },

        {
          name: "intro3",
          type: "text",
          title: "Telephone No",
          placeholder: "Enter Phone No",
        },

        {
          name: "intro4",
          type: "text",
          title: "Email",
          placeholder: "Enter your Email",
        },

        {
          name: "intro5",
          type: "text",
          title: "Date",
          placeholder: "Select Date",
        },
      ],
    },
    {
      name: "intro6",
      title: "Budgetary Approriation",
      description: "Budgetary Approriation",
      elements: [
        {
          name: "q1",
          type: "text",
          title: "Does the LGA have annual budgetary allocation",
          placeholder: "Enter here",
        },
        {
          name: "q2",
          type: "text",
          title:
            "What is the trend of LGA’s budgetary allocation in the last 3 years for ATM?",
        },
        {
          name: "q3",
          type: "text",
          title:
            "What proportion of the LGA’s budgetary allocation is apportioned for Health in the past 3 years?",
        },
        {
          name: "q4",
          type: "text",
          title:
            "What share of the health allocation is apportioned to ATM interventions in the last 3 years?",
          elements: [
            {
              name: "q1i",
              type: "text",
              title:
                "What share of resources is allocated to ATM case management?",
            },
            {
              name: "q1ii",
              type: "text",
              title:
                "What share of resources is allocated to IPT, LLIN, Condom, TPT",
            },
            {
              name: "q1iii",
              type: "text",
              title: "COVID-19 Vaccine promotion?",
            },
            {
              name: "q1iv",
              type: "text",
              title:
                "What share of resources is allotted to ATM in pregnancy?",
            },
          ],
        },
        {
          name: "q5",
          type: "text",
          title:
            "What proportion of the health allocation is released for COVID-19, HIV/AIDS, TB and Malaria interventions in the last 3 years?",
          elements: [
            {
              name: "q5i",
              type: "text",
              title:
                "What proportion of resources is released for ATM case management?",
            },
            {
              name: "q5ii",
              type: "text",
              title:
                "What proportion of resources is released for IPT, LLIN, Condom, TPT promotion?",
            },
            {
              name: "q5iii",
              type: "text",
              title:
                "What proportion of resources is released for HIV/AIDS, TB and Malaria in pregnancy ?",
            },
            {
              name: "q5iv",
              type: "text",
              title:
                "What proportion of resources is released for COVID-19 Vaccine?",
            },
            {
              name: "q5v",
              type: "text",
              title:
                "What is the level of community structure involvement during budget development?",
            },
            {
              name: "q5vi",
              type: "text",
              title:
                "What are the alternative sources of funding for health?",
            },
            {
              name: "q5vi",
              type: "text",
              title:
                "What are the alternative sources of funding for health?",
            },
          ],
        },
      ],
    },

    {
      name: "intro7",
      title: "Resilient Health System Strengthening (RHSS)",
      description: "",
      elements: [
        {
          name: "intro7i",
          type: "text",
          title:
            "Does the LGA have an updated map of health care facilities by ownership, location, and level of care? What is the year of mapping and publication?",
        },
        {
          name: "intro7ii",
          type: "text",
          title:
            "Does this map include the location of communities and Catchment population?",
        },
        {
          name: "intro7iii",
          type: "text",
          title:
            "Does the LGA have an updated inventory of health human resources by categories and facilities? What is the year of the last review?",
        },
      ],
    },

    {
      name: "intro8",
      title: "COVID - 19",
      elements: [
        {
          name: "q1",
          type: "text",
          title:
            "What is the level of your response to the NCDC directives on the containment of COVID-19 in the LGA?",
        },
      ],
    },

    {
      name: "intro9",
      title: "Human Resources",
      elements: [
        {
          name: "q1",
          type: "text",
          title:
            "What are the staffing norms at the LGA? Who sets them, what numbers are enough to manage the different types of facilities in the LGA?",
        },
        {
          name: "q2",
          type: "text",
          title:
            "What functional mechanisms exist for monitoring and evaluation of health resources (human resources, security, supply chain-consumables and non-consumables) availability and use?",
        },
      ],
    },

    {
      name: "intro10",
      title: "Monitoring and Evaluation",
      elements: [
        {
          name: "q1",
          type: "",
          title:
            "Does the LGA have a recent costed budget and plan for monitoring, supportive supervision and quality assurance of health interventions?",
        },
        {
          name: "q2",
          type: "",
          title:
            "What is the level of community structure involvement in implementing health interventions at the LGA?",
        },
        {
          name: "q3",
          type: "",
          title:
            "What systems are in place for tracking malaria supports/interventions for appropriate streamlining, synergy and avoidance of duplication of efforts by the government and donors/partners?",
        },
      ],
    },
  ],
  showProgressBar: "top",
  showQuestionNumbers: "on",
};
