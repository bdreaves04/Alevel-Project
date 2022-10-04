import React, { useEffect, useState } from "react";
import AthleteDetails from "./AthleteDetails";

const MatchDetails = () => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    fetch("/api/matches")
      .then((response) => response.json())
      .then((data) => {
        setMatches(data);
        console.log(data)
      });
  },[]);

  return (
    <div>
      {matches &&
        matches.map((matches) => (
          <div key={matches.matchNo}>
            <h3>{matches.matchNo}</h3>
            <h6>Blue: </h6>
            <AthleteDetails athleteId={matches.athleteBlueId}/>
            <h6>Red:</h6>
            <AthleteDetails athleteId={matches.athleteRedId}/>
          </div>
        ))}
    </div>
  );
};

export default MatchDetails;
