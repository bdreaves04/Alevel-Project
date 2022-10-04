import React, { Component } from "react";
import MatchDetails from "../components/MatchDetails";
import Card from 'react-bootstrap/Card'

class NextMatches extends Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>Next Matches</Card.Title>
            <span className="matches">
              <MatchDetails />
            </span>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NextMatches;
