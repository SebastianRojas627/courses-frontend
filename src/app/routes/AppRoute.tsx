import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { SearchCourses } from "../pages/SearchCourses";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="home" element={<Dashboard />}></Route>
      <Route path="search" element={<SearchCourses />}></Route>
      <Route path="/*" element={<Navigate to="/home" />}></Route>
    </Routes>
  );
};
