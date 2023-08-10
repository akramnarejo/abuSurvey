//import React, { useCallback } from "react";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyData } from "./data";
import { useUserAuth } from "src/context";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import { useEffect, useState } from "react";

StylesManager.applyTheme("modern");

function KiiLga(props) {
  const { name, startedAt, surveyId, isEditing = false } = props;
  // check if there's internet
  //const isOnline = navigator.onLine;
  const { db } = useUserAuth();
  const survey = new Model(surveyData);
  survey.focusFirstQuestionAutomatic = false;

  //offline feature
  //Define a state variable to keep track of the survey data locally:
  const [localSurveyData, setLocalSurveyData] = useState(null);


  //create a function to check if there's locally stored survey data:
  const checkLocalStorage = () => {
    const offlineData = localStorage.getItem("offlineSurveyData");
    if (offlineData) {
      setLocalSurveyData(JSON.parse(offlineData));
      
    }
  };
  
  //Call checkLocalStorage inside the component's useEffect to check for locally stored data when the component mounts:
  useEffect(() => {
    checkLocalStorage();

     // Listen for changes in localStorage and update localSurveyData state accordingly
  const handleLocalStorageChange = (e) => {
    if (e.key === "offlineSurveyData") {
     setLocalSurveyData(JSON.parse(e.newValue));
      }
    };

  window.addEventListener("storage", handleLocalStorageChange);

  // Cleanup the event listener when the component is unmounted
    return () => {
    window.removeEventListener("storage", handleLocalStorageChange);
    };

  }, []);




  const { userInfo, setLoadSurveys, surveys, users } = useStore(
    (state) => ({
      userInfo: state?.userInfo,
      setLoadSurveys: state?.setLoadSurveys,
      surveys: state?.surveys,
      users: state?.users,
    }),
    shallow
  );

  if(userInfo?.role !== 'user') survey.mode = 'display'


  let surveyDetails = {};
  if (isEditing) {
    surveyDetails = surveys?.find((item) => item?.id === surveyId);
    survey.data = JSON.parse(surveyDetails?.data);
  } else {
    // Check if there's locally stored survey data in localStorage
    const offlineData = localStorage.getItem("offlineSurveyData");
    if (offlineData) {
      survey.data = JSON.parse(offlineData).data;
      survey.data = localSurveyData.data
    }
  }

  const createSurvey = async (data) => {
    const { survey } = data;
    const user = users?.find((user) => user?.email === userInfo?.email);
    console.log("--------survey creating: ", survey);
    try {
      if (navigator.onLine) {
        if (isEditing) {
          const docRef = doc(db, "surveys", surveyId);
          await updateDoc(docRef, {
            name,
            startedAt: surveyDetails?.startedAt,
            submittedAt: new Date().toISOString(),
            status: "Preview",
            organization: user?.organization,
            reservedOrg: user?.reservedOrg,
            createdBy: user?.email,
            data: survey,
          });
        } else {
          await addDoc(collection(db, "surveys"), {
            name,
            startedAt,
            submittedAt: new Date().toISOString(),
            status: "Preview",
            organization: user?.organization,
            reservedOrg: user?.reservedOrg,
            createdBy: user?.email,
            data: survey,
          });
        }
      } else {
        // Save into localStorage
        localStorage.setItem(
          "offlineSurveyData",
          JSON.stringify({
            name,
            startedAt,
            submittedAt: new Date().toISOString(),
            status: "Preview",
            organization: user?.organization,
            reservedOrg: user?.reservedOrg,
            createdBy: user?.email,
            data: survey,
          })
        );
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

 

  const alertResults = async (sender) => {
    const survey = JSON.stringify(sender.data);
    await createSurvey({ survey });
    setLoadSurveys();
    // Clear locally stored data when the survey is successfully synchronized with the server
    localStorage.removeItem("offlineSurveyData");
  };

 
  survey.onComplete.add(alertResults);
  
  survey.onUploadFiles.add((survey, options) => {
    var formData = new FormData();
    options.files.forEach(file => { formData.append(file.name, file); });
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.surveyjs.io/private/Surveys/uploadTempFiles");
    xhr.onload = function () {
        var data = JSON.parse(xhr.responseText);
        options.callback("success", options.files.map(function (file) {
            return { file: file, content: "https://api.surveyjs.io/private/Surveys/getTempFile?name=" + data[file.name] };
        }));
    };
    xhr.send(formData);
});

  

  return <Survey model={survey} />;
}

export default KiiLga;
