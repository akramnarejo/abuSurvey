import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SURVEYS, QUESTIONS } from "src/constants";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import { BarChart } from "@mui/x-charts/BarChart";
const Visualization = () => {
  const [survey, setSurvey] = useState(null);
  const [questions, setQuestions] = useState([]);
  const { surveys } = useStore(
    (state) => ({
      surveys: state?.surveys,
    }),
    shallow
  );

  useEffect(() => {
    if (survey) {
      let surveyQuestions = {};
      QUESTIONS[survey?.label]?.map((item) => {
        const options = {};
        item?.options?.map((val) => {
          options[val] = 0;
        });
        surveyQuestions[item?.question] = { title: item?.title, options };
      });
      const selectedSurveys = surveys?.filter(
        (item) => item?.name === survey?.label
      );

      if (selectedSurveys?.length) {
        selectedSurveys?.map((item) => {
          const data = JSON.parse(item?.data);
          Object.entries(data)?.map((entry) => {
            const key = entry[0];
            const value = Array.isArray(entry[1]) ? entry[1][0] : entry[1];
            if (surveyQuestions[key]) {
              if (Array.isArray(value)) {
                value?.map((val) => {
                  surveyQuestions = {
                    ...surveyQuestions,
                    [`${key}`]: {
                      ...surveyQuestions[key],
                      options: {
                        ...surveyQuestions[key]?.options,
                        [`${val}`]: surveyQuestions[key]?.options[val] + 1,
                      },
                    },
                  };
                });
              } else {
                surveyQuestions = {
                  ...surveyQuestions,
                  [`${key}`]: {
                    ...surveyQuestions[key],
                    options: {
                      ...surveyQuestions[key]?.options,
                      [`${value}`]: surveyQuestions[key]?.options[value] + 1,
                    },
                  },
                };
              }
            }
          });
        });
      }
      setQuestions(surveyQuestions);
    }
  }, [survey]);
  
  return (
    <>
      <h2>Visualization</h2>
      <p>Select survey to visualize</p>
      <Select
        options={SURVEYS?.map((item) => ({ label: item, value: item }))}
        value={survey}
        onChange={(e) => setSurvey(e)}
      />
      <p>Total Surveys: {surveys?.filter(
        (item) => item?.name === survey?.label
      )?.length}</p>
      {Object.keys(questions)?.map((item, index) => {

        return (
          <div key={index}>
            <p style={{margin: 0, marginTop: 8}}>
              {index + 1}. {questions[item]?.title}
            </p>
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: Object.keys(questions[item]?.options),
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: Object.values(questions[item]?.options),
                },
              ]}
              width={500}
              height={300}
            />
          </div>
        );
      })}
    </>
  );
};

export default Visualization;
