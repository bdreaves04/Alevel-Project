/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useFetchMatches } from "../hooks/useFetchMatches";
import AthleteDetails from "./AthleteDetails";

const MatchDetails = (props) => {
  const { matches, fetchMatches } = useFetchMatches();

  //refreshing matches list on load
  React.useEffect(() => {
    fetchMatches(props.ringNo);
  }, []);
  // refreshes list when props change
  React.useEffect(() => {
    fetchMatches(props.ringNo);
  }, [props]);

  //refreshes list every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(async () => {
      await fetchMatches(props.ringNo);
    }, 10000);

    return () => clearInterval(interval);
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
