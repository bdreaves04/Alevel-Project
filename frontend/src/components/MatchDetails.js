import React, { useEffect, useState } from "react";
import AthleteDetails from "./AthleteDetails";

const MatchDetails = () => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch("/api/matches")
      const json = await response.json()

      if (response.ok) {
        setMatches(json)
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      {matches && matches.map((matches) => (
          <>
            <div key={matches.matchNo}><h3>{matches.matchNo}</h3></div>
            <h5>Blue: </h5>
            <AthleteDetails key={matches.athleteBlueId} athleteId={matches.athleteBlueId}/>
            <h5>Red:</h5>
            <AthleteDetails key={matches.athleteRedId} athleteId={matches.athleteRedId}/>
          </>
        ))}
    </div>
  );
};


export default MatchDetails;
