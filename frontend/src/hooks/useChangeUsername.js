import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useChangeUsername = () => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(null);
  const { user, dispatch } = useAuthContext();

  const changeUsername = async (usernameOld, usernameNew) => {
    setIsLoading(true);
    setError(null);

    await fetch("/api/user/changeUsername", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorisation: "bearer " + user.token,
      },
      body: JSON.stringify({
        oldUser: usernameOld,
        newUser: usernameNew,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setIsLoading(false);
          setError(data.error);
        } else {
          localStorage.setItem("user", JSON.stringify(data));

          dispatch({ type: "LOGIN", payload: data });
          setIsLoading(false);
        }
      });
  };
  return { changeUsername, error, isLoading };
};
