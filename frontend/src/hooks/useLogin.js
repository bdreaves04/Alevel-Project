import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  // function import to change state of context when user logs in
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setIsLoading(false);
          setError(data.error);
        } else {
          //stores user token in browser for automatic logins if the page is closed
          localStorage.setItem("user", JSON.stringify(data));

          // changes context state according to the fact the user has just logged in
          dispatch({ type: "LOGIN", payload: data });
          setIsLoading(false);
        }
      });
  };

  return { login, isLoading, error };
};
