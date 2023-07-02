import { VideoPage } from "./app/pages/VideoPage";
import { AuthProvider } from "./context/AuthProvider";
import { ContextProvider } from "./context/ContextProvider";
import { CoursesRouter } from "./routes/CoursesRouter";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export default function Home() {
  
  const queryClient = new QueryClient();

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <AuthProvider>
          <BrowserRouter>
            <CoursesRouter />
          </BrowserRouter>
        </AuthProvider>
      </ContextProvider>
    </QueryClientProvider>
    </>
  );
}
