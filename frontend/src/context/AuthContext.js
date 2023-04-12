import { createContext, useReducer, useEffect } from "react";

//creates a React.context which allows for others to access context information
export const AuthContext = createContext();

export const authReducer = (state, action) => {
  // sets context depending on message if nothing does nothing
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    // sets default state of user to be null
    user: null,
  });
  console.log("AuthContext State:", state);

  // auto logs user in if user held in local storage
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  // surrounds any components inside the tags in the context provider meaning it can be accessed from any of its children
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
