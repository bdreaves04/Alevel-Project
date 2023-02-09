import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import AthleteDetails from "../../components/AthleteDetails";
import { useAuthContext } from "../../hooks/useAuthContext";

const RingSide = () => {
    document.title = "Ring Side DashBoard";
    const [ringNo, setRingNo] = React.useState(1);
    const [matches, setMatches] = React.useState(null);
    const [error, setError] = React.useState(" ");
    const { user } = useAuthContext();

    const fetchMatches = async (ringNo) => {
        await fetch(`/api/matches/getComplete`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ringNo: ringNo }),
        })
            .then((res) => res.json())
            .then((data) => setMatches(data));
    };
    
    React.useEffect(() => {
        fetchMatches(ringNo);
    }, [ringNo]);

    const sendCompleted = async (matchNo) => {
        await fetch(`api/matches/complete`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                authorisation: "bearer " + user.token,
            },
            body: JSON.stringify({ matchNo: matchNo }),
        })
            .then((res) => res.json())
            .catch((err) => {
                setError(err);
            });

            fetchMatches(ringNo);

    };

    return (
        <Card
            className="overflow-auto"
            style={{ padding: "2rem", maxHeight: "90vh" }}
        >
            <Card.Title>Ring No</Card.Title>
            <Form.Select
                value={ringNo}
                onChange={(e) => {
                    setRingNo(e.target.value);
                }}
            >
                <option value={1}>ring 1</option>
                <option value={2}>ring 2</option>
                <option value={3}>ring 3</option>
            </Form.Select>
            <br />
            <br />
            <div>
                {matches &&
                    matches.map((match) => (
                        <div key={match.matchNo}>
                            <h5>{match.matchNo}</h5>
                            <h6>Blue: </h6>
                            <AthleteDetails athleteId={match.athleteBlueId} />
                            <h6>Red:</h6>
                            <AthleteDetails athleteId={match.athleteRedId} />
                            <Button
                                onClick={() => sendCompleted(match.matchNo)}
                            >
                                Complete
                            </Button>
                            <span>{error}</span>
                            <br />
                        </div>
                    ))}
            </div>
        </Card>
    );
};

export default RingSide;
