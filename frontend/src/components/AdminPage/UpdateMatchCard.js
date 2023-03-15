import { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { findId } from "../../functions/findAthleteIds";
import { useAuthContext } from "../../hooks/useAuthContext";

const UpdateMatchCard = () => {
  const [isLoading, setisLoading] = useState(null);
  const [error, setError] = useState(null);
  const [matchNo, setmatchNo] = useState("101");
  const [ringNo, setringNo] = useState("");
  const [athleteBlue, setathleteBlue] = useState("");
  const [athleteRed, setathleteRed] = useState("");
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchMatch = async (matchNo) => {
      await fetch("/api/matches/getMatchFromNo", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          authorisation: "bearer " + user.token,
        },
        body: JSON.stringify({
          matchNo: matchNo,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setError(null);
            setmatchNo(data.matchNo);
            setringNo(data.ringNo);
            setathleteBlue(data.athleteBlueNo);
            setathleteRed(data.athleteRedNo);
          }
        });
    };
    fetchMatch(matchNo);
  }, [matchNo, user]);

  const onclickhandle = async (e) => {
    e.preventDefault();

    setisLoading(true);
    setError(null);

    const athleteRedFetched = await findId(athleteRed);
    const athleteBlueFetched = await findId(athleteBlue);

    await fetch("/api/matches/", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        authorisation: "bearer " + user.token,
      },
      body: JSON.stringify({
        athleteBlueId: athleteBlueFetched,
        athleteBlueNo: athleteBlue,
        athleteRedNo: athleteRed,
        athleteRedId: athleteRedFetched,
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
          setError("Match Updated Successfully");
        }
      });
  };
  return (
    <>
      <Card.Title>Update match</Card.Title>
      <Form onSubmit={onclickhandle}>
        <Form.Group>
          <Form.Label>Match No.</Form.Label>
          <Form.Control
            type="number"
            placeholder="101"
            onChange={(e) => setmatchNo(e.target.value)}
            value={matchNo}
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
            value={ringNo}
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
            value={athleteRed}
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
            value={athleteBlue}
          />
        </Form.Group>
        <Form.Group>
          <Button type="submit" style={{ marginTop: "0.5rem" }}>
            {isLoading ? "loading" : "submit"}
          </Button>
          <Form.Label>{error ? error : ""}</Form.Label>
        </Form.Group>
      </Form>
    </>
  );
};

export default UpdateMatchCard;
