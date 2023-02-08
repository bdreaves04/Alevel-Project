import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const styleText = {
    color: "#050505",
    marginTop: "12.5vh",
};

const styleCard = {
    minHeight: "35vh",
    maxHeight: "35vh",
    textAlign: "center",
    borderRadius: "25px",
};

const RefereePagesContents = () => {
    document.title = "Referee Contents";
    return (
        <div className="Home">
            <Card
                style={{
                    maxHeight: "90vh",
                    paddingTop: "5.5vh",
                    paddingLeft: "2vw",
                    paddingRight: "2vw",
                }}
            >
                <Card.Body>
                    <Row>
                        <Col>
                            <Link
                                to={"/ringSide"}
                                style={{ textDecoration: "none" }}
                            >
                                <Card
                                    style={styleCard}
                                    className="align-center"
                                >
                                    <h1 style={styleText}>Ring Side</h1>
                                </Card>
                            </Link>
                        </Col>
                        <Col>
                            <Link
                                to={"/matchNo"}
                                style={{ textDecoration: "none" }}
                            >
                                <Card style={styleCard}>
                                    <h1 style={styleText}>Match No. Screen</h1>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <Link
                                to={"/checkIn"}
                                style={{ textDecoration: "none" }}
                            >
                                <Card style={styleCard}>
                                    <h1 style={styleText}>Check In Desk</h1>
                                </Card>
                            </Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RefereePagesContents;
