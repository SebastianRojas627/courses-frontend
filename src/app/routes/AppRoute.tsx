import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { SearchCourses } from "../pages/SearchCourses";
import { GuardedRoute } from "../../guards/GuardedRoutes";

export const AppRoute = () => {
  return (
    <Routes>
      <Route
        path="home"
        element={
          <GuardedRoute>
            {" "}
            <Dashboard />{" "}
          </GuardedRoute>
        }
      />
      <Route
        path="search"
        element={
          <GuardedRoute>
            {" "}
            <SearchCourses />{" "}
          </GuardedRoute>
        }
      />
      <Route path="/*" element={<Navigate to="/home" />}></Route>
    </Routes>
  );
};
