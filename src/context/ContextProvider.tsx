import { createContext, useState } from "react";

const UserContext = createContext(undefined);
const UserDispatchContext = createContext(undefined);

const ContextProvider = ({ children }) => {
  const [userCourses, setUserCourses] = useState([]);

  return (
    <UserContext.Provider value={userCourses}>
      <UserDispatchContext.Provider value={setUserCourses}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export { ContextProvider, UserContext, UserDispatchContext };
