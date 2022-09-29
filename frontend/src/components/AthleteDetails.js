import React, { useState, useEffect } from "react";

const AthleteDetails = ({ athleteId }) => {
  const [athlete, setAthlete] = useState(null);

  useEffect(() => {
    const fetchAthlete = async () => {
      const response = await fetch(`/api/athletes/getbyid/${athleteId}`);
      const json = await response.json();

      if (response.ok) {
        setAthlete(json);
      }
    };
    fetchAthlete();
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
