import React, { useState, useEffect } from "react";

const AthleteDetails = (props) => {
  const [athlete, setAthlete] = useState(null);

  useEffect(() => {
    fetch(`/api/athletes/getbyid/${props.athleteId}`).then((res) => {
      const contentType = res.headers.get("content-type");

      //checking if response type is valid
      if (contentType && contentType.indexOf("application/json") !== -1) {

        return res.json().then((data) => {
          // console.log("found Athlete ", data);
          setAthlete(data);
        });

      } else {
        return res.text().then((text) => {
          console.log(text);
        });
      }

    });
  }, [props]);

  return (
    <div>
      <p>{athlete ? athlete.forename : "loading"} {athlete ? athlete.surname : "loading"}</p>
    </div>
  );
};

export default AthleteDetails;