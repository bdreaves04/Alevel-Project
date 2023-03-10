import React from "react";
import { Button, Card } from "react-bootstrap";
import AthleteDetails from "../../components/AthleteDetails";
import { useAuthContext } from "../../hooks/useAuthContext";

export const WeighIn = () => {
  const [athletes, setAthletes] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { user } = useAuthContext();

  //fetches list athletes
  const fetchAthletes = async () => {
    await fetch(`/api/athletes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorisation: "bearer " + user.token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAthletes(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  //sends a put request to update madeWeight field to true in db
  const handleCLick = async (id) => {
    await fetch(`/api/athletes/madeWeight/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorisation: "bearer " + user.token,
      },
    }).catch((err) => {
      console.log(err);
      setError(err);
    });
    fetchAthletes();
  };

  // refreshes list every 5 seconds
  React.useEffect(() => {
    fetchAthletes();
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      fetchAthletes();
    }, 5000);

    return () => clearTimeout(timeout);
  });

  return (
    <Card
      style={{ padding: "2rem", maxHeight: "90vh" }}
      className="overflow-auto"
    >
      <Card.Title>Weigh In Athletes</Card.Title>
      <span>{error}</span>
      {athletes &&
        athletes.map(
          (athlete) =>
            !athlete.madeWeight && (
              <div key={athlete._id}>
                <AthleteDetails athleteId={athlete._id} />
                <Button
                  onClick={() => {
                    handleCLick(athlete._id);
                  }}
                >
                  Weigh In
                </Button>
                <br />
              </div>
            )
        )}
    </Card>
  );
};
