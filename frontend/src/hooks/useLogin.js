import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
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
                    console.log("right");
                    localStorage.setItem("user", JSON.stringify(data));

                    dispatch({ type: "LOGIN", payload: data });
                    setIsLoading(false);
                }
            });
    };

    return { login, isLoading, error };
};
