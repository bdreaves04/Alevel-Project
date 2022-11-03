import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class Login extends Component {
    render() {
        document.title='Login'
        return (
            <div className="login">
                <Card>
                    <Card.Body>
                        <Card.Title>Login Page</Card.Title>
                        <Card.Text>here will go the card body</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Login;
