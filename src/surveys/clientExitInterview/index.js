import React, { useCallback } from "react";
import "survey-core/defaultV2.min.css";
import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { surveyData } from "./data";
import { useUserAuth } from "src/context";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
StylesManager.applyTheme("modern");

function ATMClientSurvey(props) {
  const { name, startedAt, surveyId, isEditing = false } = props;
  // check if there's internet
  const isOnline = navigator.onLine;
  const { db } = useUserAuth();
  const survey = new Model(surveyData);
  survey.focusFirstQuestionAutomatic = false;

  const { userInfo, setLoadSurveys, surveys, users, setOfflineSurveys} = useStore(
    (state) => ({
      userInfo: state?.userInfo,
      setLoadSurveys: state?.setLoadSurveys,
      surveys: state?.surveys,
      users: state?.users,
      setOfflineSurveys: state?.setOfflineSurveys,
    }),
    shallow
  );

  if(userInfo?.role !== 'user') survey.mode = 'display'

  let surveyDetails = {};
  if (isEditing) {
    surveyDetails = surveys?.find((item) => item?.id === surveyId);
    survey.data = JSON.parse(surveyDetails?.data);
  }

  const createSurvey = async (data) => {
    const { survey } = data;
    const user = users?.find(user => user?.email === userInfo?.email)
    console.log('--------survey creating: ', survey)
    try {
      if (isOnline) {
        if (isEditing) {
          const docRef = doc(db, 'surveys', surveyId);
          await updateDoc(docRef, {
            name,
            startedAt: surveyDetails?.startedAt,
            submittedAt: new Date().toISOString(),
            status: "Preview",
            organization: user?.organization,
            reservedOrg: user?.reservedOrg ?? null,
            createdBy: user?.email,
            data: survey,
          });
        } else {
          await addDoc(collection(db, 'surveys'), {
            name,
            startedAt,
            submittedAt: new Date().toISOString(),
            status: "Preview",
            organization: user?.organization,
            reservedOrg: user?.reservedOrg ?? null,
            createdBy: user?.email,
            data: survey,
          });
        }
      } else {
        // save into local storage
        setOfflineSurveys({
          name,
          startedAt,
          submittedAt: new Date().toISOString(),
          status: "Preview",
          organization: userInfo?.organization,
          createdBy: userInfo?.email,
          data: survey,
        })
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const alertResults = useCallback((sender) => {
    const survey = JSON.stringify(sender.data);
    createSurvey({ survey }).then(() => {
      setLoadSurveys();
    });
  }, []);

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

export default ATMClientSurvey;
