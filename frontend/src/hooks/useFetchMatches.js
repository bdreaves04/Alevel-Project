import React from "react";

export const useFetchMatches = () => {
    const [matches, setMatches] = React.useState(null);
    const [ringOne, setRingOne] = React.useState(null);
    const [ringTwo, setRingTwo] = React.useState(null);
    const [ringThree, setRingThree] = React.useState(null);

    const fetchMatches = async (ringNo) => {
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

    const fetchMatchesOne = async () => {
        await fetch(`/api/matches/getComplete`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ringNo: 1 }),
        })
            .then((res) => res.json())
            .then((data) => setRingOne(data));
    };

    const fetchMatchesTwo = async () => {
        await fetch(`/api/matches/getComplete`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ringNo: 2 }),
        })
            .then((res) => res.json())
            .then((data) => setRingTwo(data));
    };

    const fetchMatchesThree = async () => {
        await fetch(`/api/matches/getComplete`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ringNo: 3 }),
        })
            .then((res) => res.json())
            .then((data) => setRingThree(data));
    };

    return {
        matches,
        ringOne,
        ringThree,
        ringTwo,
        fetchMatchesOne,
        fetchMatchesThree,
        fetchMatchesTwo,
        fetchMatches,
    };
};
