export const findId = async (athleteNo) => {
    const athleteID = await fetch("/api/athletes/getByAthleteNo", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ athleteNo: athleteNo }),
    })
        .then((res) => res.json())
        .then((data) => {
            if(data.error){
                return data.error
            }
            return data._id;
        });
    return athleteID;
};
