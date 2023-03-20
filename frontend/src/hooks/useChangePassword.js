import React from "react";
import { useAuthContext } from "./useAuthContext";

export const useChangePassword = () => {
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(null);
  const { user, dispatch } = useAuthContext();

  const changePassword = async (username, passwordOld, passwordNew) => {
    setIsLoading(true);
    setError(null);

    await fetch("/api/user/changePassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorisation: "bearer " + user.token,
      },
      body: JSON.stringify({
        username: username,
        passwordOld: passwordOld,
        passwordNew: passwordNew,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setIsLoading(false);
          setError(data.error);
        } else {
          localStorage.setItem("user", JSON.stringify(data));

          dispatch({ type: "LOGIN", payload: data });
          setIsLoading(false);
          setError("changed password successfully");
        }
      });
  };
  return { changePassword, error, isLoading };
};
