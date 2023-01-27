import React from "react";
import Card from "react-bootstrap/Card";

const Home = () => {
  document.title='Home'
  return (
    <div className="Home">
      <Card>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
          <Card.Text>
            {/* edit here to add any information to home Page */}
          
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;