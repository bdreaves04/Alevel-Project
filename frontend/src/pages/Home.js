import React from 'react';
import Card from 'react-bootstrap/Card';

import { useEffect, useState } from "react";
import MatchDetails from "../components/MatchDetails"

const Home = () => {
        const [matches, setMatches] = useState(null);
        
        useEffect(() => {
            const fetchMatches = async () => {
                const response = await fetch('/api/matches');
                const json = await response.json()

                if(response.ok){
                    setMatches(json)
                }
            }

            fetchMatches()
        }, [])

        return (
            <div className="Home">
                <Card>
                    <Card.Body>
                        <Card.Title>Home Page</Card.Title>
                        <Card.Text>
                            <div className="matches">
                                {matches && matches.map((matches)=> (
                                    <MatchDetails key={matches.matchNo} matches = {matches}/>
                                ))}
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    
}

export default Home;
