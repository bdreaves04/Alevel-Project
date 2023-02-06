import { useState } from "react";
import { Button, Card, Form, Row, Col } from "react-bootstrap";
import { useAuthContext } from "../../hooks/useAuthContext";

const CreateAthleteCard = () => {
    const [isLoading, setisLoading] = useState(null);
    const [error, setError] = useState(null);
    const [athleteNo, setathleteNo] = useState("");
    const [forename, setforename] = useState("");
    const [surname, setsurname] = useState("");
    const [beltClass, setbeltClass] = useState("");
    const [weightClass, setweightClass] = useState("");
    const { user } = useAuthContext();

    const onclickhandle = async (e) => {
        e.preventDefault();

        setisLoading(true);
        setError(null);

        await fetch("/api/athletes/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorisation: "bearer " + user.token,
            },
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
                    setError("Athlete Created Successfully");
                }
            });
    };
    return (
        <>
            <Card.Title>Create a new Athlete</Card.Title>
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

export default CreateAthleteCard;
