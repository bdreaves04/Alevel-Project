import React, { useState, useEffect } from "react";

const AthleteDetails = ({ athleteId }) => {
  const [athlete, setAthlete] = useState(null);

  useEffect(() => {
    fetch(`/api/athletes/getbyid/${athleteId}`)
      .then((response) => response.json())
      .then((Athlete) => {
        setAthlete(Athlete);
      });
  }, [athleteId]);

  return (
    <div>
      <p>
        {athlete.forename} {athlete.surname}
      </p>
    </div>
  );
};

export default AthleteDetails;
