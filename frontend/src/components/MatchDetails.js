import React, { useEffect, useState } from "react";
import AthleteDetails from "./AthleteDetails";

const MatchDetails = (props) => {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    fetch(`/api/matches/ring/`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ringNo: props.ringNo }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMatches(data);
        console.log(data);
      }); 
  }, [props]);

  return (
    <div>
      {matches &&
        matches.map((matches) => (
          <div key={matches.matchNo}>
            <h5>{matches.matchNo}</h5>
            <h6>Blue: </h6>
            <AthleteDetails athleteId={matches.athleteBlueId} />
            <h6>Red:</h6>
            <AthleteDetails athleteId={matches.athleteRedId} />
          </div>
        ))}
    </div>
  );
};

export default MatchDetails;
