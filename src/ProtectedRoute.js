import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "./store";
const ProtectedRoute = ({ children }) => {
  const userInfo = useStore(state => state.userInfo)
  console.log("======== is authenticated =========: ", userInfo?.isAuthenticated)
  if (userInfo?.isAuthenticated) {
    return children;
  }
  return <Navigate to={"/login"} replace />;
};

export default ProtectedRoute;
