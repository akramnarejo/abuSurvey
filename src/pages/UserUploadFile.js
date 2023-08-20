import React, { useRef, useState } from "react";
import {storage } from "src/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useUserAuth } from "src/context";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";
import { Input } from '@mui/material';
import { LoadingButton } from "@mui/lab";

function FileUpload() {
  const { userInfo, setNotify } = useStore(
    (state) => ({
      userInfo: state?.userInfo,
      setNotify: state?.setNotify,
    }),
    shallow
  );
  const fileRef = useRef(null)
  const { db } = useUserAuth();
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");
  const [loading, setLoading] = useState(false)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFilenameChange = (event) => {
    const enteredFilename = event.target.value;
    setFilename(enteredFilename);
  };

  const handleFileUpload = async () => {
    setLoading(true)
    if (!file || filename.trim() === "") {
      console.error("Please select a file and enter a filename.");
      return;
    }

    const storageRef = ref(storage, `userFiles/${filename}`);

    // Upload file to Firebase Storage
    await uploadBytes(storageRef, file);

    // Get the download URL of the uploaded file
    const downloadURL = await getDownloadURL(storageRef);

    // Create an object to store file details
    const fileDetails = {
      name: filename,
      url: downloadURL,
      organization: userInfo?.organization ?? null,
      reservedOrg: userInfo?.reservedOrg ?? null,
      createdBy: userInfo?.email ?? null,
    };

    // Save the file details to Firestore
    try {
      console.log("-------------details: ", fileDetails, userInfo)
      await addDoc(collection(db, "files"), fileDetails);
      setNotify({ open: true, message: 'File uploaded successfully!', type: 'success' })
      fileRef.current.value = null
      setFile(null)
      setFilename("")
      setLoading(false)
      console.log("File details saved to Firestore");
    } catch (error) {
      setLoading(false)
      setNotify({ open: true, message: "Failed to upload!", type: 'error' })
      console.error("Error saving file details:", error);
    }
  };

  return (
    <>
    <h2>Upload File</h2>
    <div style={{display: 'flex', flexDirection: 'column', gap: 4, width: '20rem'}}>
      <Input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
        ref={fileRef}
      />
      <br />
      <Input
        type="text"
        placeholder="Enter filename"
        value={filename}
        onChange={handleFilenameChange}
      />
      <br />
      <LoadingButton onClick={handleFileUpload} variant="contained" loading={loading}>Upload File</LoadingButton>
    </div>
    </>
  );
}

export default FileUpload;
