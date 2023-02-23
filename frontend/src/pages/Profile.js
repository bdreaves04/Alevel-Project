import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ChangePassword from "../components/userPage/ChangePassword";
import ChangeUsername from "../components/userPage/ChangeUsername";
import { useAuthContext } from "../hooks/useAuthContext";

export const Profile = () => {
    const { user } = useAuthContext();

    return (
        <Card style={{ padding: "0.5rem", height: "90vh" }}>
            <h1>Hello, {user.username}</h1>
            <Row>
                <Col>
                    <ChangeUsername />
                </Col>
                <Col>
                    <ChangePassword />
                </Col>
            </Row>
        </Card>
    );
};
