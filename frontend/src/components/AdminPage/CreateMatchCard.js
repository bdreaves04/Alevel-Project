import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { findId } from "../../functions/findAthleteIds";

const CreateMatchCard = () => {
    const [isLoading, setisLoading] = useState(null);
    const [error, setError] = useState(null);
    const [matchNo, setmatchNo] = useState('');
    const [ringNo, setringNo] = useState('');
    const [athleteBlue, setathleteBlue] = useState('');
    const [athleteRed, setathleteRed] = useState('');

    const onclickhandle = async (e) => {
        e.preventDefault();

        setisLoading(true);
        setError(null);

        const athleteRedFetched = await findId(athleteRed)
            .then((res) => res.json())
            .then((data) => {
                data.error ? setError(data.error) : setError(null);
            });
        const athleteBlueFetched = await findId(athleteBlue)
            .then((res) => res.json())
            .then((data) => {
                data.error ? setError(data.error) : setError(null);
            });

        await fetch("/api/matches/", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                athleteBlueId: athleteBlueFetched._id,
                athleteRedId: athleteRedFetched._id,
                athleteBlueNo: athleteBlue,
                athleteRedNo: athleteRed,
                matchNo: matchNo,
                ringNo: ringNo,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    setisLoading(false);
                } else {
                    setisLoading(false);
                    setError("Match Created Successfully");
                }
            });
    };
    return (
        <>
            <Card.Title>Create a new match</Card.Title>
            <Form onSubmit={onclickhandle}>
                <Form.Group>
                    <Form.Label>Match No.</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="101"
                        onChange={(e) => setmatchNo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Ring No.</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="1"
                        max={3}
                        min={1}
                        onChange={(e) => setringNo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Red Athlete No.</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="001"
                        onChange={(e) => {
                            setathleteRed(e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Blue Athlete No.</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="001"
                        onChange={(e) => {
                            setathleteBlue(e.target.value);
                        }}
                    />
                </Form.Group>
                <Form.Group>
                    <Button type="submit" style={{ marginTop: "0.5rem" }}>
                        {isLoading ? "loading" : "submit"}
                    </Button>
                    {error ? error : ""}
                </Form.Group>
            </Form>
        </>
    );
};

export default CreateMatchCard;
