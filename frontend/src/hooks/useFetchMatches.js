import React from "react";

export const useFetchMatches = () => {
    const [matches, setMatches] = React.useState([]);

    const fetchData = async (ringNo) => {
        await fetch(`/api/matches/getComplete/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ringNo: ringNo }),
        })
            .then((response) => response.json())
            .then((data) => {
                setMatches(data);
            });
    };

    return { matches, fetchData };
};
