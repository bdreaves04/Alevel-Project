/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import AthleteDetails from "../../components/AthleteDetails";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFetchMatches } from "../../hooks/useFetchMatches";

const CheckInDesk = () => {
  const [error, setError] = React.useState(null);
  const { user } = useAuthContext();

  const {
    ringOne,
    ringTwo,
    ringThree,
    fetchMatchesOne,
    fetchMatchesTwo,
    fetchMatchesThree,
  } = useFetchMatches();

  //sends a request to backend to change status of athlete in match to be checked in
  const checkIn = async (e, matchNo, athleteNo) => {
    e.preventDefault();

    await fetch(`/api/matches/checkAthleteIn`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorisation: "bearer " + user.token,
      },
      body: JSON.stringify({ matchNo: matchNo, athleteNo: athleteNo }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setError(data);
        }
        fetchMatchesOne();
        fetchMatchesTwo();
        fetchMatchesThree();
      });
    fetchMatchesOne();
    fetchMatchesTwo();
    fetchMatchesThree();
  };

  //refreshes lists of matches every 5000 ms (5s)
  React.useEffect(() => {
    fetchMatchesOne();
    fetchMatchesThree();
    fetchMatchesTwo();

    const interval = setInterval(() => {
      console.log("refresh");
      fetchMatchesOne();
      fetchMatchesThree();
      fetchMatchesTwo();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card style={{ padding: "2rem" }}>
      <Card.Title>Check In Desk</Card.Title>
      <p style={{ color: "red" }}>{error && error.error}</p>
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
                ringOne.map((match, idx) => (
                  <div key={match.matchNo}>
                    <h5>{match.matchNo}</h5>
                    <h6>Blue: </h6>
                    <AthleteDetails athleteId={match.athleteBlueId} />
                    {!match.blueChecked && (
                      <Button
                        onClick={(e) =>
                          checkIn(e, match.matchNo, match.athleteBlueNo)
                        }
                        disabled={idx < 3 ? false : true}
                      >
                        Check In
                      </Button>
                    )}
                    <h6>Red:</h6>
                    <AthleteDetails athleteId={match.athleteRedId} />
                    {!match.redChecked && (
                      <Button
                        onClick={(e) =>
                          checkIn(e, match.matchNo, match.athleteRedNo)
                        }
                        disabled={idx < 3 ? false : true}
                      >
                        Check In
                      </Button>
                    )}
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
                ringTwo.map((match, idx) => (
                  <div key={match.matchNo}>
                    <h5>{match.matchNo}</h5>
                    <h6>Blue: </h6>
                    <AthleteDetails athleteId={match.athleteBlueId} />
                    {!match.blueChecked && (
                      <Button
                        onClick={(e) =>
                          checkIn(e, match.matchNo, match.athleteBlueNo)
                        }
                        disabled={idx < 3 ? false : true}
                      >
                        Check In
                      </Button>
                    )}
                    <h6>Red:</h6>
                    <AthleteDetails athleteId={match.athleteRedId} />
                    {!match.redChecked && (
                      <Button
                        onClick={(e) =>
                          checkIn(e, match.matchNo, match.athleteRedNo)
                        }
                        disabled={idx < 3 ? false : true}
                      >
                        Check In
                      </Button>
                    )}
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
                ringThree.map((match, idx) => (
                  <div key={match.matchNo}>
                    <h5>{match.matchNo}</h5>
                    <h6>Blue: </h6>
                    <AthleteDetails athleteId={match.athleteBlueId} />

                    {!match.blueChecked && (
                      <Button
                        onClick={(e) =>
                          checkIn(e, match.matchNo, match.athleteBlueNo)
                        }
                        disabled={idx < 3 ? false : true}
                      >
                        Check In
                      </Button>
                    )}
                    <h6>Red:</h6>
                    <AthleteDetails athleteId={match.athleteRedId} />
                    {!match.redChecked && (
                      <Button
                        onClick={() =>
                          checkIn(match.matchNo, match.athleteRedNo)
                        }
                        disabled={idx < 3 ? false : true}
                      >
                        Check In
                      </Button>
                    )}
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
