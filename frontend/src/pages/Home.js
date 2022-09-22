import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Card>
                    <Card.Body>
                        <Card.Title>Home Page</Card.Title>
                        <Card.Text>here will go the card body</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Home;
