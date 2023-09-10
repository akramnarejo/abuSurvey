import React, { useState } from 'react'
import Select from "react-select";
import {SURVEYS} from 'src/constants'
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

  if(survey){
    const found = surveys?.find(item => item?.name === survey?.label)
    console.log("---+++++++----------++++++++++: ", JSON.parse(found?.data))
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