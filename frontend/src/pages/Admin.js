import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import CreateMatchCard from "../components/AdminPage/CreateMatchCard";
import UpdateMatchCard from "../components/AdminPage/UpdateMatchCard";
import CreateAthleteCard from "../components/AdminPage/CreateAthleteCard";
import UpdateAthleteCard from "../components/AdminPage/UpdateAthleteCard";

const Admin = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Card className="adminCards overflow-auto">
              <CreateMatchCard />
            </Card>
          </Col>
          <Col>
            <Card className="adminCards overflow-auto">
              <CreateAthleteCard />
            </Card>
          </Col>
        </Row>
        <br id="adminCardBreak" />
        <Row>
          <Col>
            <Card className="adminCards overflow-auto">
              <UpdateMatchCard />
            </Card>
          </Col>
          <Col>
            <Card className="adminCards overflow-auto">
              <UpdateAthleteCard />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
