import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import ChangePassword from "../components/userPage/ChangePassword";
import ChangeUsername from "../components/userPage/ChangeUsername";
import { useAuthContext } from "../hooks/useAuthContext";
import { useViewport } from "../hooks/useViewport";

export const Profile = () => {
  document.title = "profile page";
  const { width } = useViewport();

  return width <= 1000 ? <SmallDevice /> : <LargeDevice />;
};

// changes layout depending on the dimentions of the device
const SmallDevice = () => {
  const { user } = useAuthContext();
  return (
    <Card style={{ padding: "0.5rem", height: "90vh" }}>
      <h2>Hello, {user.username}</h2>

      <div className="mx-auto" style={{ width: "85vw" }}>
        <Row>
          <ChangeUsername className="h-75" />
        </Row>
        <div style={{ height: "1.5vh" }} />
        <Row>
          <ChangePassword />
        </Row>
      </div>
    </Card>
  );
};

const LargeDevice = () => {
  const { user } = useAuthContext();
  return (
    <Card style={{ padding: "0.5rem", height: "90vh" }}>
      <h1>Hello, {user.username}</h1>

      <Row>
        <Col>
          <ChangeUsername className="h-50" />
        </Col>
        <Col>
          <ChangePassword className="h-50" />
        </Col>
      </Row>
    </Card>
  );
};
