import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { SearchCourses } from "../pages/SearchCourses";
import { useStore } from "../../context/ContextProvider";
import { useState } from "react";

export const AppRoute = () => {
  const [userCourses, setUserCourses] = useState([]);

  return (
    <Routes>
      <Route path="home" element={<Dashboard userCourses={userCourses} />} />
      <Route
        path="search"
        element={
          <SearchCourses
            userCourses={userCourses}
            setUserCourses={setUserCourses}
          />
        }
      />
      <Route path="/*" element={<Navigate to="/home" />}></Route>
    </Routes>
  );
};
