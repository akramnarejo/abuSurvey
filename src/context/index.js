import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { auth, db, getDownloadURL, ref, storage } from "../firebase";
import { useStore } from "src/store";
import { shallow } from "zustand/shallow";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

  const { setLoading, setUserInfo } = useStore(
    (state) => ({
      setLoading: state?.setLoading,
      setUserInfo: state?.setUserInfo,
    }),
    shallow
  );

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  async function createUser(data) {
    await addDoc(collection(db, "users"), data);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUserInfo({isAuthenticated: currentuser?.accessToken ? true : false})
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  // indexDB
  const handleDownloadFile = (url) => {
    getDownloadURL(ref(storage, url))
      .then((url) => {
        // `url` is the download URL for 'images/stars.jpg'

        // This can be downloaded directly:
        const xhr = new XMLHttpRequest();
        xhr.responseType = "blob";
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open("GET", url);
        xhr.send();

        // Or inserted into an <img> element
        // const img = document.getElementById("myimg");
        // img.setAttribute("src", url);
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  return (
    <userAuthContext.Provider
      value={{ logIn, signUp, logOut, googleSignIn, createUser, db, handleDownloadFile }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
