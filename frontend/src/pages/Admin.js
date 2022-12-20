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
                        <Card className="adminCards">
                            <CreateMatchCard />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="adminCards">
                            <CreateAthleteCard />
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Card className="adminCards">
                            <UpdateMatchCard />
                        </Card>
                    </Col>
                    <Col>
                        <Card className="adminCards">
                            <UpdateAthleteCard />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Admin;
