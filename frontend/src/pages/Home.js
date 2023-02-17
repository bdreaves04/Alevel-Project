import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
    document.title = "Home";
    const { user } = useAuthContext();
    const [message, setMessage] = React.useState("");
    const [messagesFetched, setMessagesFetched] = React.useState([]);
    const [error, setError] = React.useState("");

    const fetchMessages = async () => {
        console.log("fetched messages");
        await fetch("/api/info", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setMessagesFetched(data);
            })
            .catch((err) => {
                setError(err);
            });
    };

    const addMessage = async (e, msg) => {
        e.preventDefault();
        await fetch("/api/info", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorisation: "bearer " + user.token,
            },
            body: JSON.stringify({ message: msg }),
        }).catch((err) => {
            setError(err);
        });
        await fetchMessages();
    };

    const deleteMessage = async (e, id) => {
        e.preventDefault();
        await fetch("/api/info/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorisation: "bearer " + user.token,
            },
        }).catch((err) => setError(err));
        await fetchMessages();
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            fetchMessages();
        }, 10000);
        return () => clearInterval(interval);
    }, [messagesFetched]);

    React.useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className="Home">
            <Card>
                <Card.Body>
                    <Card.Title>Home Page</Card.Title>
                    {user.isAdmin && (
                        <Form>
                            <Form.Group>
                                <Form.Label>
                                    Enter Message to display on homepage
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="message"
                                    value={message}
                                />
                                <Button
                                    type="submit"
                                    onClick={(e) => addMessage(e, message)}
                                >
                                    Add Message
                                </Button>
                            </Form.Group>
                        </Form>
                    )}
                    <br />
                    <div>
                        {messagesFetched &&
                            messagesFetched.map((message) => (
                                <div className="messageItem">
                                    <p key={message._id}>
                                        {message.message}
                                        {user.isAdmin && (
                                            <span
                                                className="material-symbols-outlined"
                                                onClick={(e) =>
                                                    deleteMessage(
                                                        e,
                                                        message._id
                                                    )
                                                }
                                            >
                                                delete
                                            </span>
                                        )}
                                    </p>
                                </div>
                            ))}
                    </div>
                    <Card.Text>{error}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Home;
