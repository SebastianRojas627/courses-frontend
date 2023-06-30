import { Navigate } from "react-router-dom";

export const GuardedRoute = ({ auth, children }) => {
  if (auth) {
    return children;
  } else {
    return <Navigate to="/auth/login" />;
  }
};
