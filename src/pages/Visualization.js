import React, { useEffect, useState } from "react";
import Select from "react-select";
import { SURVEYS, QUESTIONS, ORGANIZATIONS } from "src/constants";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import { BarChart } from "@mui/x-charts/BarChart";
import SelectStyling from "src/utils/selectStyling";
import { Box } from "@mui/material";
import moment from "moment";
const today = new Date()
const initialDateTo = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
const Visualization = () => {
  const [survey, setSurvey] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [networkFilter, setNetworkFilter] = useState(null);
  const [surveysCount, setSurveysCount] = useState(null);
  const [userFilter, setUserFilter] = useState(null);
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState(initialDateTo);
  const { surveys, users } = useStore(
    (state) => ({
      surveys: state?.surveys,
      users: state?.users,
    }),
    shallow
  );

  console.log('initia date to: ', initialDateTo)
  useEffect(() => {
    if (survey) {
      let surveyQuestions = {};
      QUESTIONS[survey?.label]?.map((item) => {
        const options = {};
        item?.options?.map((val) => {
          options[val] = 0;
          return 1;
        });
        surveyQuestions[item?.question] = { title: item?.title, options };
        return 1;
      });

      let selectedSurveys = surveys?.filter(
        (item) => item?.name === survey?.label
      );
      if (networkFilter) {
        selectedSurveys = selectedSurveys.filter(
          (item) => item?.organization === networkFilter?.value
        );
      }
      if (userFilter) {
        selectedSurveys = selectedSurveys.filter(
          (item) => item?.createdBy === userFilter?.value
        );
      }
      if(dateFrom){
        selectedSurveys = selectedSurveys.filter(item => new Date(item?.startedAt.split('T')?.[0]) >= new Date(dateFrom))
      }
      if(dateTo){
        selectedSurveys = selectedSurveys.filter(item => new Date(item?.submittedAt.split('T')?.[0]) <= new Date(dateTo))
      }

      // surveys count
      setSurveysCount(selectedSurveys?.length);
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
                  return 1;
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
            return 1;
          });
          return 1;
        });
      }
      console.log("survey questions", surveyQuestions);
      setQuestions(surveyQuestions);
    }
    // eslint-disable-next-line
  }, [survey, networkFilter, userFilter, dateFrom, dateTo]);

  console.log(dateFrom)
  return (
    <>
      <h2>Visualization</h2>
      <p>Select survey to visualize</p>
      <Box sx={{ width: "100%", height: "40px" }}>
        <Select
          placeholder="Select survey"
          options={SURVEYS?.map((item) => ({ label: item, value: item }))}
          value={survey}
          onChange={(e) => {
            setNetworkFilter(null)
            setUserFilter(null)
            setDateFrom(null)
            setDateTo(null)
            setSurvey(e)
          }}
        />
      </Box>
      <Box sx={{ width: "100%", height: "40px" }}>
        <Select
          name="atmNetwork"
          placeholder="Select ATM Network"
          isClearable
          options={ORGANIZATIONS}
          styles={SelectStyling}
          value={networkFilter}
          onChange={setNetworkFilter}
        />
      </Box>
      <Box sx={{ width: "100%", height: "40px" }}>
        <Select
          name="user"
          placeholder="Select User"
          isClearable
          options={users?.map((item) => ({
            label: item?.firstName + " " + item?.lastName,
            value: item?.email,
          }))}
          styles={SelectStyling}
          // components={{
          //   IndicatorSeparator: () => null,
          // }}
          value={userFilter}
          // onBlur={handleBlur}
          onChange={setUserFilter}
        />
      </Box>
      <Box sx={{ width: "100%", height: "40px", display: 'flex', gap: 5, marginBottom: 5 }}>
        <Box>
          <p style={{ margin: 0, color: "gray" }}>Date From</p>
          <input
            type="date"
            value={dateFrom}
            style={{
              borderRadius: 5,
              border: "1px solid #cccccc",
              padding: "10px",
            }}
            onChange={(e) => setDateFrom(e.target.value)}
          />
        </Box>

        <Box>
          <p style={{ margin: 0, color: "gray" }}>Date To</p>
          <input
            type="date"
            value={dateTo}
            style={{
              borderRadius: 5,
              border: "1px solid #cccccc",
              padding: "10px",
            }}
            min={dateFrom}
            onChange={(e) => setDateTo(e.target.value)}
          />
        </Box>
      </Box>
      {survey && <p><b>Surveys: {surveysCount}</b></p>}
      {surveysCount
        ? Object.keys(questions)?.map((item, index) => {
            return (
              <div key={index}>
                <p style={{ margin: 0, marginTop: 8 }}>
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
          })
        : null}
    </>
  );
};

export default Visualization;
