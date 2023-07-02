import { AuthProvider } from "./context/AuthProvider";
import { ContextProvider } from "./context/ContextProvider";
import { CoursesRouter } from "./routes/CoursesRouter";
import { BrowserRouter } from "react-router-dom";

export default function Home() {
  return (
    <>
      <ContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <CoursesRouter />
          </BrowserRouter>
        </AuthProvider>
      </ContextProvider>
    </>
  );
}
