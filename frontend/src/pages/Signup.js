import {useState} from "react";
import { useSignup } from "../hooks/useSignup";
import { Card, Form, Button } from "react-bootstrap";

const Signup = () => {
    document.title="sign-up";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {signup, error, isLoading} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await signup(username, password)
    };
    return (
        <div className="Login">
            <Card>
                <Card.Body>
                    <Card.Title>Sign-up Page</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="username"
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter Username"
                                value={username}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter Passsword"
                                value={password}
                            />
                        </Form.Group>
                        <br />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        {error && <div className="error">{error}</div>}
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Signup;
