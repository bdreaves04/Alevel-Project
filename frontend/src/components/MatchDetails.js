import React, {useEffect,useState} from 'react';

const MatchDetails = ({ matches }) => {
    const [athleteBlue, setAthletes] = useState(null)

    useEffect((matches) => {
        const fetchAthleteBlue = async () => {
            const response = await fetch(`/api/athletes/getbyid/${matches.athleteBlueId}`)
            const json = await response.json()

            if (response.ok) {
                setAthletes(json)
            }
        };
        fetchAthleteBlue()
    }, []);

    return (
        <div className='matchDetails'>
            <h4>{matches.matchNo}</h4>
            {/* <p>Blue: {athleteBlue.forename} {athleteBlue.surname} </p> */}
            <p>details</p>
        </div>
    );
}

export default MatchDetails;
