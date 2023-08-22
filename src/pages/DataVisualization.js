import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@mui/material/styles";
import SelectSurvey from "src/components/modals/selectSurvey";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import { ORGANIZATIONS } from "src/constants";
// ----------------------------------------------------------------------


export default function DataVisualization() {
    const { surveys, userInfo, users } = useStore(
        (state) => ({
          surveys: state?.surveys,
          userInfo: state?.userInfo,
          users: state?.users,
        }),
        shallow
      );

      // Filter surveys based on the name "ATM Client Exit Interview"
      const atmSurveys = surveys.filter(survey => survey.name === "ATM Client Exit Interview");

       // Calculate the total count of genders (both male and female) in the filtered surveys
       const totalMale = atmSurveys.reduce((total, survey) => {
       // Assuming the gender information is stored in the 'gender' property of the 'data' object
       if (survey.data.gender === 'male') {
        return total + 1;
       }

        return total;
      }, 0);

      const totalFemale = atmSurveys.reduce((total, survey) => {
        // Assuming the gender information is stored in the 'gender' property of the 'data' object
        if (survey.data.gender === 'female') {
          return total + 1;
        }
        return total;
      }, 0);

      
        // Total count of both male and female in the filtered surveys
        const totalGender = totalMale + totalFemale;


    return(
        <>
            <div>
                console.log(totalGender);
            </div>
        </>
    )
}
    
