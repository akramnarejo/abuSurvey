import React, { useEffect, useState } from 'react'
import Select from "react-select";
import {SURVEYS, QUESTIONS} from 'src/constants'
import { useStore} from "src/store";
import { shallow } from "zustand/shallow";
const Visualization = () => {
  const [survey, setSurvey] = useState(null)
  const { surveys } = useStore(
    (state) => ({
      surveys: state?.surveys,
    }),
    shallow
  );


  useEffect(() => {
    const selectedSurveys = surveys?.filter(item => item?.name === survey?.label)
    // console.log('---------selected survyes: ', selectedSurveys?.length, selectedSurveys)
    createQuestions(selectedSurveys)
  }, [survey])

  const createQuestions = items => {
    if(items?.length){
      console.log('===================================================================================================')
      items?.map(item => {
        const data = JSON.parse(item?.data)
        console.log(data)
      })
    }
  }

  return (
    <>
        <h2>Visualization</h2>
        <p>Select survey to visualize</p>
        <Select
            options={SURVEYS?.map(item => ({label: item, value: item}))}
            value={survey}
            onChange={e => setSurvey(e)}
        />
    </>
  )
}

export default Visualization