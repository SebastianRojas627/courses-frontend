import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export const GuardedRoute = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
};
