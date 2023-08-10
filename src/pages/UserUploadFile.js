import React, { useState } from "react";
import {storage } from "src/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { useUserAuth } from "src/context";

function FileUpload({ userInfo, firebaseApp }) {
  const { db } = useUserAuth();
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleFilenameChange = (event) => {
    const enteredFilename = event.target.value;
    setFilename(enteredFilename);
  };

  const handleFileUpload = async () => {
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
      organization: userInfo.organization,
      reservedOrg: userInfo.reservedOrg,
      createdBy: userInfo.email,
    };

    // Save the file details to Firestore
    try {
      await addDoc(collection(db, "files"), fileDetails);
      console.log("File details saved to Firestore");
    } catch (error) {
      console.error("Error saving file details:", error);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={handleFileChange}
      />
      <br />
      <input
        type="text"
        placeholder="Enter filename"
        value={filename}
        onChange={handleFilenameChange}
      />
      <br />
      <button onClick={handleFileUpload}>Upload File</button>
    </div>
  );
}

export default FileUpload;
