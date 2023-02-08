import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const style = {
    color: "#050505",
    textDecoration: "none",
};

const RefereePagesContents = () => {
    document.title = "Referee Contents";
    return (
        <div className="Home">
            <Card>
                <Card.Body>
                    <Card.Title>Referee Pages</Card.Title>
                    <Row>
                        <Col>
                            <Card>
                                <Link to={"/ringSide"} style={style}>
                                    Ring Side
                                </Link>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Link to={"/matchNo"} style={style}>
                                    MatchNoScreen
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Link to={"/checkIn"} style={style}>
                                    CheckIn Desk
                                </Link>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RefereePagesContents;
