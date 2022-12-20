export const findId = async (athleteNo) => {
    await fetch("/api/athletes/getByAthleteNo", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ athleteNo: athleteNo }),
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
};
