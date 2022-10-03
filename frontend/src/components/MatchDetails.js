import React, { useEffect, useState } from "react";
import AthleteDetails from "./AthleteDetails";

const MatchDetails = () => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    fetch("/api/matches")
      .then((response) => response.json())
      .then((data) => {
        setMatches(data);
      });
  });

  return (
    <div>
      {matches &&
        matches.map((matches) => (
          <div key={matches.matchNo}>
            <h3>{matches.matchNo}</h3>
            <h5>Blue: </h5>
            <AthleteDetails
              key={matches.athleteBlueId}
              athleteId={matches.athleteBlueId}
            />
            <h5>Red:</h5>
            <AthleteDetails
              key={matches.athleteRedId}
              athleteId={matches.athleteRedId}
            />
          </div>
        ))}
    </div>
  );
};

export default MatchDetails;
