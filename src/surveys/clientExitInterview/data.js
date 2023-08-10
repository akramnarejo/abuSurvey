export const surveyData = {
  pages: [
    {
      name: "introduction",
      title: "Introduction",
      description:
        "Enter the required information below to register, You can change it anytime you want.",
      elements: [
        {
          name: "facilityname",
          type: "text",
          title: "Name of Facility (in Capital Letters)",
          placeholder: "Enter Name of Facility",
        },

        {
          type: "text",
          name: "uniqueId",
          title: "Unique ID",
          placeholder: "Ex. ID Card/Driving License",
          isRequired: false,
        },
        {
          type: "text",
          name: "nameOfRepondent",
          startWithNewLine: false,
          title: "Name of Respondent",
          placeholder: "What is your name?",
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "gender",
          title: "Gender",
          isRequired: false,
          colCount: 2,
          choices: [
            {
              value: "male",
              text: "Male",
            },
            {
              value: "female",
              text: "Female",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "ageRange",
          title: "Age Range",
          isRequired: false,
          startWithNewLine: false,
          colCount: 3,
          choices: [
            {
              value: 20,
              text: "00-20th",
            },
            {
              value: 30,
              text: "21-30th",
            },
            {
              value: 40,
              text: "31-40th",
            },
            {
              value: 50,
              text: "> 40th",
            },
          ],
        },
        {
          type: "text",
          name: "respondentAddress",
          title: "Respondent's Detailed Address",
          placeholder: "Add your address",
          isRequired: false,
        },
        {
          type: "text",
          name: "contactNumber",
          title: "Contact Number",
          placeholder: "Add your active phone number",
          startWithNewLine: false,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q1",
          title: "Educational Background",
          isRequired: false,
          colCount: 4,
          choices: [
            {
              value: "No Formal Education",
              text: "No Formal Education",
            },
            {
              value: "Primary Education",
              text: "Primary Education",
            },
            {
              value: "Secondary Education",
              text: "Secondary Education",
            },
            {
              value: "Vocational School",
              text: "Vocational School",
            },
            {
              value: "University/Polytechnic",
              text: "University/Polytechnic",
            },
            {
              value: "Post Graduate",
              text: "Post Graduate",
            },
            {
              value: "Others",
              text: "Others",
            },
          ],
        },
        {
          name: "Please tell me why you came to the health facility today and what service(s) you received?",
          type: "matrixdropdown",
          alternateRows: false,
          isAllRowRequired: true,
          isRequired: false,
          title:
            "Please tell me why you came to the health facility today and what service(s) you received?",
          description:
            "Probe for the reasons for coming to the health facility. Please, do not read. Listen and tick all that apply. Use others for health care services not listed as options, but obtainable at the facility",
          columns: [
            {
              name: "col1",
              cellType: "checkbox",
              showInMultipleColumns: true,
              // isRequired: false,
              choices: ["Which one you came for", "which one you recieved"],
            },
          ],
          rows: [
            "COVID-19",
            "HIV/AIDS Services",
            "Malaria Services",
            "Tubercolusis(TB) Services",
            "Don't know",
          ],
        },
        {
          type: "radiogroup",
          name: "q3",
          title:
            "How many times have you visited the health facility in the last 3 months for health care services?",
          description:
            "Probe to know how often the patient has been to the facility in the last 3 months. You can request to see the patient’s hospital card to confirm",
          colCount: 5,
          isRequired: false,
          choices: [
            {
              value: "0 Times",
              text: "0 Times",
            },
            {
              value: "1-3 Times",
              text: "1-3 Times",
            },
            {
              value: "4-6 Times",
              text: "4-6 Times",
            },
            {
              value: "7-9 Times",
              text: "7-9 Times",
            },
            {
              value: "Above 10 Times",
              text: "Above 10 Times",
            },
          ],
        },
      ],
    },
    {
      name: "prevention",
      title: "Prevention",
      description:
        "Enter the required information below to register, You can change it anytime you want.",
      elements: [
        {
          name: "q4",
          type: "checkbox",
          title: "How do you prevent the following diseases COVID-19?",
          isRequired: false,
          choices: [
            "Wear face mask in public",
            "Keep a safe distance",
            "Clean your hands often",
            "Cover mouth & nose with bent elbow when you caught/sneeze",
            "Vaccination",
          ],
        },
        {
          name: "q5",
          type: "checkbox",
          title: "How do you prevent the following diseases HIV/AIDS?",
          isRequired: false,
          choices: [
            "Abstinence",
            "Rgiht use of condom",
            "Never sharing sharp objects",
            "Pre-Exposure Prophylaxis",
            "Post-Exposure Prophylaxis",
            "Get tested",
          ],
        },
        {
          name: "q6",
          type: "checkbox",
          title: "How do you prevent the following diseases COVID-19?",
          isRequired: false,
          choices: [
            "Wear face mask in public",
            "Keep a safe distance",
            "Clean your hands often",
            "Cover mouth & nose with bent elbow when you caught/sneeze",
            "Vaccination",
          ],
        },
        {
          name: "q7",
          type: "checkbox",
          title: "How do you prevent the following diseases Malaria?",
          isRequired: false,
          choices: [
            "LLIN",
            "Use of antimalaria drugs",
            "Use of mosquito repellent",
          ],
        },
        {
          name: "q8",
          type: "checkbox",
          title: "How do you prevent the following diseases Tuberculosis (TB)?",
          choices: ["TPT", "Wear face mask", "Others"],
          isRequired: false,
        },
        {
          name: "q9",
          type: "radiogroup",
          title: "Have you received any information on prevention of COVID-19?",
          isRequired: false,
          colCount: 2,
          choices: ["YES", "NO"],
        },
        {
          name: "q10",
          type: "radiogroup",
          title: "Have you received any information on prevention of HIV/AIDS?",
          isRequired: false,
          colCount: 2,
          choices: ["YES", "NO"],
        },
        {
          name: "q11",
          type: "radiogroup",
          title: "Have you received any information on prevention of Malaria?",
          isRequired: false,
          colCount: 2,
          choices: ["YES", "NO"],
        },
        {
          name: "q12",
          type: "radiogroup",
          title:
            "Have you received any information on prevention of Tuberculosis (TB)?",
          isRequired: false,
          colCount: 2,
          choices: ["YES", "NO"],
        },
        {
          type: "radiogroup",
          name: "q13",
          title: "If yes, what is the source?",
          colCount: 4,
          isRequired: false,
          showOtherItem: true,
          choices: ["Health Facility", "Community", "Mass Media"],
        },
        {
          name: "q14",
          type: "radiogroup",
          title: "Were you given any medication/refill?",
          colCount: 2,
          choices: ["YES", "NO(If No, Skip to Gender & Human Rights)"],
          isRequired: false,
        },
        {
          name: "q15",
          type: "radiogroup",
          title:
            "If yes, have you experienced any side effect or drug reaction?",
          isRequired: false,
          colCount: 2,
          choices: ["YES", "NO"],
        },
        {
          name: "q16",
          type: "text",
          title: "If yes, Please explain you experience",
          isRequired: false,
          placeholder: "Please specify",
        },
      ],
    },
    {
      name: "humanRights",
      title: "Gender & Human Rights",
      description:
        "Enter the required information below to register, You can change it anytime you want.",
      elements: [
        {
          name: "q17",
          type: "radiogroup",
          title:
            "Are services being provided based on respect for human rights?",
          description:
            "Probe to know if clients/patients were informed of the nature of their ill-health, accessed available services/treatment without discrimination, and felt good about the health providers attitudes",
          choices: ["YES", "NO"],
          isRequired: false,
          colCount: 2,
        },
        {
          name: "q18",
          type: "radiogroup",
          title: "Have you experienced any form of stigma or discrimination?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          name: "q19",
          type: "checkbox",
          title:
            "Please indicate where stigma and discrimination were experienced?",
          isRequired: false,
          choices: [
            "Home",
            "Community",
            "Health Facilities",
            "Work Place",
            "Religious Place",
            "Other",
          ],
        },
        {
          name: "q20",
          type: "rediogroup",
          title:
            "Has anyone including your parents or partner(s) ever prevented you from accessing health care services?",
          colCount: 2,
          choices: ["YES", "NO"],
          isRequired: false,
        },
        {
          name: "q21",
          type: "text",
          title:
            "If Yes, Please state the reasons why you were prevented from accessing the health care services?",
          placeholder: "Please specify",
          isRequired: false,
        },
      ],
    },
    {
      name: "availibility",
      title: "Access & Availibility",
      description:
        "Enter the reqired information below to register, You can change it anytime you want",
      elements: [
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          name: "q22",
          title: "Can you easily get to the health facility?",
          isRequired: false,
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q23",
          title: "Were you attended to by a health worker?",
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q24",
          title:
            "Does the facility offer MNCH services including ANC, family planning etc.?",
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q25",
          title:
            "Are you aware of any free services at the health facility of COVID-19?",
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q26",
          title:
            "Are you aware of any free services at the health facility of HIV/AIDS?",
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q27",
          title:
            "Are you aware of any free services at the health facility of Malaria?",
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q28",
          title:
            "Are you aware of any free services at the health facility of Tuberculosis (TB)?",
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q29",
          title: "If Yes, Have you ever been denied access to these services?",
        },
        {
          type: "text",
          isRequired: false,
          name: "q30",
          title: "If Yes, Please explain?",
          placeholder: "Please specify",
        },
        {
          type: "radiogroup",
          choices: ["Yes", "No"],
          colCount: 2,
          isRequired: false,
          name: "q31",
          title: "Are COVID-19 services offered in this health facility?",
        },
        {
          type: "radiogroup",
          colCount: 3,
          isRequired: false,
          name: "q32",
          title:
            "If No, How close is the nearest health facility that offers COVID-19 Services?",
          description:
            "Probe for the distance between the health facility offering COVID-19 services and their residence",
          choices: ["Less Than 30 Minutes", "Above 30 Minutes", "Don't Know"],
        },
      ],
    },
    {
      name: "qualityOfService",
      title: "Quality of Service",
      description:
        "Enter the reqired information below to register, You can change it anytime you want",
      elements: [
        {
          type: "radiogroup",
          name: "q33",
          title:
            "What is the average waiting time for service provision at the facility? (Probe to know how long it took the client/patient before seeing the doctor after their arrival to the health facility)",
          choices: [
            "Less than 30 Mins",
            "1-2 hours",
            "3-4 hours",
            "More than 5 hours",
          ],
          colCount: 4,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q34",
          title:
            "How would you describe the attitude of the health workers? (Probe to know the health worker’s attitudes towards the client/patient especially the way health worker(s) behaved, spoke, and reacted towards the patients)",
          choices: ["Satisfactory", "Unsatisfactory", "Don't know"],
          colCount: 3,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q35",
          title:
            "Does the facility offer MNCH Services including ANC, family planning etc.?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q36",
          title:
            "Did you pay to receive any of these services at the health facility COVID-19?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q37",
          title:
            "Did you pay to receive any of these services at the health facility HIV/AIDS?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q38",
          title:
            "Did you pay to receive any of these services at the health facility Malaria?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q39",
          title:
            "Did you pay to receive any of these services at the health facility Tuberculosis (TB)?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q40",
          title:
            "Did you experience any form of discomfort being attended to by a Male or Female health worker? (Probe to know if the client/patient felt uneasy being attended to by the opposite sex and why)?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q41",
          title:
            "Do you experience any form of discrimination while accessing services (Probe to know if the client/patient was treated differently because of his/her health condition, age, sex, profession, religious belief etc. by the health worker)?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q42",
          title:
            "How do you assess the quality of the service (s) received today in this health facility? (Explore to know if the client/patient’s health needs were met as expected by the health worker(s) at the health facility)?",
          choices: ["Dissatisfied", "Satisfied", "No Option"],
          colCount: 3,
          isRequired: false,
        },
        {
          type: "text",
          name: "q43",
          title:
            "If dissatisfied, Why? Please state the reason for the dissatisfaction",
          placeholder: "Please specify",
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q44",
          title:
            "Do you think the facility has enough health workers to deliver timely and quality service to clients?",
          choices: ["YES", "NO"],
          colCount: 2,
          isRequired: false,
        },
        {
          type: "radiogroup",
          name: "q45",
          title: "What do you think about the time you spent in the facility?",
          choices: ["Too Long", "Indifferent", "Just right"],
          colCount: 3,
          isRequired: false,
        },
      ],
    },
    {
      name: "images",
      title: "Images",
      elements: [
        {
          type: "file",
          name: "q46",
          title: "Please upload images up to 5.",
          storeDataAsText: false,
          allowMultiple: true,
          maxSize: 1024000,
          fileTypes: 'image/*',
          imageWidth: 200,
          imageHeight: 200,
        }
      ]
    },
  ],
  showProgressBar: "top",
  showQuestionNumbers: "off",
  // title: "Patient Past Medical, Social & Family History",
};
