import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const RefereePagesContents = () => {
    document.title = "Referee Contents";
    return (
        <div className="Home">
            <Card>
                <Card.Body>
                    <Card.Title>Referee Pages</Card.Title>
                    <Row>
                        <Col>
                            <Link to={"/ringSide"}>Ring Side</Link>
                        </Col>
                        <Col>
                            <Link to={"/matchNo"}>MatchNoScreen</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link to={"/checkIn"}>CheckIn Desk</Link>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RefereePagesContents;
