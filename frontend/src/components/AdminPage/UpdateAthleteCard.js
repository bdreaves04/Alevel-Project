import { useState, useEffect } from "react";
import mongoose from "mongoose";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { findId } from "../../functions/findAthleteIds";
import { useAuthContext } from "../../hooks/useAuthContext";

const UpdateAthleteCard = () => {
    //State variable setup - allows to change variables in react
    const [isLoading, setisLoading] = useState(null);
    const [error, setError] = useState(null);
    const [athleteNo, setathleteNo] = useState(1);
    const [forename, setforename] = useState("");
    const [surname, setsurname] = useState("");
    const [beltClass, setbeltClass] = useState("");
    const [weightClass, setweightClass] = useState("");
    const { user } = useAuthContext();

    //refresh athlete on search to get athete data filled in on forms
    useEffect(() => {
        const fetchAthlete = async (athleteNo) => {
            await fetch("/api/athletes/getByAthleteNo", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    authorisation: "bearer " + user.token,
                },
                body: JSON.stringify({
                    athleteNo: athleteNo,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                        setforename("");
                        setsurname("");
                        setbeltClass("");
                        setweightClass("");
                    } else {
                        setError(null);
                        setforename(data.forename);
                        setsurname(data.surname);
                        setbeltClass(data.beltClass);
                        setweightClass(data.weightClass);
                        setisLoading(false);
                    }
                });
        };
        fetchAthlete(athleteNo);
    }, [athleteNo,user]);

    //interacts with server to update athlete data
    const onclickhandle = async (e) => {
        e.preventDefault();

        setisLoading(true);
        setError(null);
        const athleteID = await findId(athleteNo);
        if (!mongoose.Types.ObjectId.isValid(athleteID)) {
            setError("not a valid AthleteNo");
            setisLoading(false);
            return;
        }
        await fetch(`/api/athletes/${athleteID}`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                athleteNo: athleteNo,
                forename: forename,
                surname: surname,
                beltClass: beltClass,
                weightClass: weightClass,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setError(data.error);
                    setisLoading(false);
                } else {
                    setisLoading(false);
                    setError("Athlete Updated Successfully");
                }
            });
    };
    return (
        <>
            <Card.Title>Update an Athlete</Card.Title>
            {/* form which handles user input for athlete details */}
            <Form onSubmit={onclickhandle}>
                <Form.Group>
                    <Form.Label>Athlete No.</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="001"
                        onChange={(e) => setathleteNo(e.target.value)}
                        value={athleteNo}
                    />
                </Form.Group>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Forename</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="John"
                                onChange={(e) => setforename(e.target.value)}
                                value={forename}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Surname</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Doe"
                                onChange={(e) => {
                                    setsurname(e.target.value);
                                }}
                                value={surname}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label>Belt Class</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="novice"
                        onChange={(e) => {
                            setbeltClass(e.target.value);
                        }}
                        value={beltClass}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Weight Class</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="-45kg"
                        onChange={(e) => {
                            setweightClass(e.target.value);
                        }}
                        value={weightClass}
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

export default UpdateAthleteCard;
