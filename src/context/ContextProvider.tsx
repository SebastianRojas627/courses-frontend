import { createContext, useReducer, useContext } from "react";
import reducer, { initialValues } from "./reducer";

const StoreContext = createContext();

const ContextProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={useReducer(reducer, initialValues)}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  return useContext(StoreContext)[0];
};
const useDispatch = () => useContext(StoreContext)[1];

export { StoreContext, useStore, useDispatch };
export default ContextProvider;
