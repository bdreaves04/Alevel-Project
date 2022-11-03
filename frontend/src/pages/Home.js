import React from "react";
import Card from "react-bootstrap/Card";

const Home = () => {
  document.title='Home'
  return (
    <div className="Home">
      <Card>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
