import React from "react";
import Card from "react-bootstrap/Card";

import MatchDetails from "../components/MatchDetails";

const Home = () => {
  return (
    <div className="Home">
      <Card>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
          <Card.Text>
            <div className="matches">
              <MatchDetails />
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
