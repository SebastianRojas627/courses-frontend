const types = {
  login: "auth - login",
  logout: "auth - logout",
  addCourse: "course - add",
};

const initialValues = {
  auth: false,
  courses: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        auth: true,
      };
    case types.logout:
      return {
        ...state,
        auth: false,
      };
    case types.logout:
      return {
        ...state,
        courses: [...state.courses],
      };
    default:
      return state;
  }
};

export { initialValues, types };
export default reducer;
