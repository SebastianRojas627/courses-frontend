import { AppRoute } from "../app/routes/AppRoute";
import { AuthRoute } from "../auth/routes/AuthRoute";
import { Route, Routes } from "react-router-dom";

export const CoursesRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoute />} />
      <Route path="/*" element={<AppRoute />} />
    </Routes>
  );
};
