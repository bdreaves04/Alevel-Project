import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import LoadingBtn from "../components/LoadingBtn";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    document.title = "Login";
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };

    return (
        <div className="login">
            <Card>
                <Card.Body>
                    <Card.Title>Login Page</Card.Title>
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
                            {isLoading ? <LoadingBtn /> : "Submit"}
                        </Button>
                        {error && <div className="error">{error}</div>}
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Login;
