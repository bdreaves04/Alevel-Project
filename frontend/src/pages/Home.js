import React from "react";
import Card from "react-bootstrap/Card";

import MatchDetails from "../components/MatchDetails";

const Home = () => {
  return (
    <div className="Home">
      <Card>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
            <span className="matches">
              <MatchDetails />
            </span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
