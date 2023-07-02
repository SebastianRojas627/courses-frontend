import { createContext, useState } from "react";

const AuthContext = createContext(undefined);
const AuthDispatchContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={auth}>
      <AuthDispatchContext.Provider value={setAuth}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext, AuthDispatchContext };
