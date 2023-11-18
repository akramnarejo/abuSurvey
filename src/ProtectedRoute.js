import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useUserAuth } from "./context";
import { useStore } from "./store";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  const userInfo = useStore(state => state.userInfo ?? {})
  console.log('*************************************************: ', userInfo)
  if (!userInfo?.email) {
    console.log("not authenticated.");
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
