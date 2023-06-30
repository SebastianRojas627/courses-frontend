"use client";

import { CoursesRouter } from "./routes/CoursesRouter";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <BrowserRouter>
      <CoursesRouter />
    </BrowserRouter>
    //<Dashboard />
  );
}
