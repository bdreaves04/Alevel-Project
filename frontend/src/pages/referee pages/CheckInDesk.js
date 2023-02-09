import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import AthleteDetails from "../../components/AthleteDetails";
import { useAuthContext } from "../../hooks/useAuthContext";

const CheckInDesk = () => {
    const [ringOne, setRingOne] = React.useState(null);
    const [ringTwo, setRingTwo] = React.useState(null);
    const [ringThree, setRingThree] = React.useState(null);
    const [error, setError] = React.useState(null);
    const { user } = useAuthContext();


    //sends a request to backend to change status of athlete in match to be checked in
    const checkIn = async (matchNo, athleteNo) => {
        await fetch(`/api/matches/checkAthleteIn`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorisation: "bearer " + user.token,
            },
            body: JSON.stringify({ matchNo: matchNo, athleteNo: athleteNo }),
        })
            .then((res) => res.json())
            .then(() => {
                fetchMatchesOne();
                fetchMatchesTwo();
                fetchMatchesThree();
            })
            .catch((err) => setError(err.message));
    };


    //fetches match lists per ring
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


    //refreshes lists of matches every 5000 ms (5s)
    React.useEffect(() => {
        fetchMatchesOne();
        fetchMatchesThree();
        fetchMatchesTwo();

        const interval = setInterval(() => {
            fetchMatchesOne();
            fetchMatchesThree();
            fetchMatchesTwo();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card style={{ padding: "2rem" }}>
            <Card.Title>Check In Desk</Card.Title>
            <span>{error}</span>
            <Row>
                <Col>
                    <Card
                        style={{
                            maxHeight: "80vh",
                            minHeight: "80vh",
                            padding: "1rem",
                        }}
                        className="overflow-auto"
                    >
                        <Card.Title>Ring 1</Card.Title>
                        {/* maps each match per ring in the list and shows the athlete details and a button to check each athlete in */}
                        <div>
                            {ringOne &&
                                ringOne.map((match) => (
                                    <div key={match.matchNo}>
                                        <h5>{match.matchNo}</h5>
                                        <h6>Blue: </h6>
                                        <AthleteDetails
                                            athleteId={match.athleteBlueId}
                                        />
                                        {!match.blueChecked && (
                                            <Button
                                                onClick={() =>
                                                    checkIn(
                                                        match.matchNo,
                                                        match.athleteBlueNo
                                                    )
                                                }
                                            >
                                                Check In
                                            </Button>
                                        )}
                                        <h6>Red:</h6>
                                        <AthleteDetails
                                            athleteId={match.athleteRedId}
                                        />
                                        {!match.redChecked && (
                                            <Button
                                                onClick={() =>
                                                    checkIn(
                                                        match.matchNo,
                                                        match.athleteRedNo
                                                    )
                                                }
                                            >
                                                Check In
                                            </Button>
                                        )}
                                        <span></span>
                                        <br />
                                    </div>
                                ))}
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            maxHeight: "80vh",
                            minHeight: "80vh",
                            padding: "1rem",
                        }}
                        className="overflow-auto"
                    >
                        <Card.Title>Ring 2</Card.Title>
                        <div>
                            {ringTwo &&
                                ringTwo.map((match) => (
                                    <div key={match.matchNo}>
                                        <h5>{match.matchNo}</h5>
                                        <h6>Blue: </h6>
                                        <AthleteDetails
                                            athleteId={match.athleteBlueId}
                                        />
                                        {!match.blueChecked && (
                                            <Button
                                                onClick={() =>
                                                    checkIn(
                                                        match.matchNo,
                                                        match.AthleteBlueNo
                                                    )
                                                }
                                            >
                                                Check In
                                            </Button>
                                        )}
                                        <h6>Red:</h6>
                                        <AthleteDetails
                                            athleteId={match.athleteRedId}
                                        />
                                        {!match.blueChecked && (
                                            <Button
                                                onClick={() =>
                                                    checkIn(
                                                        match.matchNo,
                                                        match.AthleteRedNo
                                                    )
                                                }
                                            >
                                                Check In
                                            </Button>
                                        )}
                                        <span></span>
                                        <br />
                                    </div>
                                ))}
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card
                        style={{
                            maxHeight: "80vh",
                            minHeight: "80vh",
                            padding: "1rem",
                        }}
                        className="overflow-auto"
                    >
                        <Card.Title>Ring 3</Card.Title>
                        <div>
                            {ringThree &&
                                ringThree.map((match) => (
                                    <div key={match.matchNo}>
                                        <h5>{match.matchNo}</h5>
                                        <h6>Blue: </h6>
                                        <AthleteDetails
                                            athleteId={match.athleteBlueId}
                                        />

                                        {!match.blueChecked && (
                                            <Button
                                                onClick={() =>
                                                    checkIn(
                                                        match.matchNo,
                                                        match.AthleteBlueNo
                                                    )
                                                }
                                            >
                                                Check In
                                            </Button>
                                        )}
                                        <h6>Red:</h6>
                                        <AthleteDetails
                                            athleteId={match.athleteRedId}
                                        />
                                        {!match.redChecked && (
                                            <Button
                                                onClick={() =>
                                                    checkIn(
                                                        match.matchNo,
                                                        match.AthleteRedNo
                                                    )
                                                }
                                            >
                                                Check In
                                            </Button>
                                        )}
                                        <span></span>
                                        <br />
                                    </div>
                                ))}
                        </div>
                    </Card>
                </Col>
            </Row>
        </Card>
    );
};

export default CheckInDesk;
