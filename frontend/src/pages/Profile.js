import React from "react";
import { Card } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";

export const Profile = () => {
    const { user } = useAuthContext();

    return (
        <Card style={{padding: "0.5rem", height: "90vh"}}>
            <h1>Hello, {user.username}</h1>
        </Card>
    );
};
