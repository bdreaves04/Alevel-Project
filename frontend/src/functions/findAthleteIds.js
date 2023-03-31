// sends a request based on the athlete number and returns the athlete id
export const findId = async (athleteNo) => {
  return await fetch("/api/athletes/getByAthleteNo", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ athleteNo: athleteNo }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.error) {
        console.log(athleteNo);
        return data.error;
      }
      return data._id;
    });
};
