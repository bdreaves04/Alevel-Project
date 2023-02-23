import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (username, password) => {
        setIsLoading(true);
        setError(null);
        console.log("working");
        await fetch("/api/user/signup", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ username, password }),
        })
            .then((res) =>  res.json())
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

    return { signup, isLoading, error };
};
