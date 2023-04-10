import React from "react";
import { Button, Form, Card } from "react-bootstrap";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  document.title = "Home";
  const { user } = useAuthContext();
  // stores message to be sent in request to the backend
  const [message, setMessage] = React.useState("");

  //array of messages that has been fetched from database
  const [messagesFetched, setMessagesFetched] = React.useState([]);
  const [error, setError] = React.useState("");

  // function which fetches messages when the page first loads
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
        setMessage("");
      });
  };

  //function which refreshes the message list
  const refreshMessages = async () => {
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
      });
  };

  //sends a request the the backend server with a json body containing the message 
  //entered by the user and the authorisation token to identify that the user is an admin

  const addMessage = async (e, msg) => {
    e.preventDefault();
    await fetch("/api/info", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorisation: "bearer " + user.token,
      },
      body: JSON.stringify({ message: msg }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!data.ok) setError(data.error);
      });
    await fetchMessages();
  };

  //sends a delete request to the backend server to delete the message with the id inputted into the function
  const deleteMessage = async (e, id) => {
    e.preventDefault();
    await fetch("/api/info/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorisation: "bearer " + user.token,
      },
    }).then((data) => {
      if (!data.ok) setError(data.error);
    });
    await fetchMessages();
  };

  // fetches array of messages every 10 seconds incase there has been a change
  //
  //counld change database to only send data if there has been an update but would requre more logic but would also 
  //network usage and would increase performance of system
  React.useEffect(() => {
    const interval = setInterval(() => {
      refreshMessages();
    }, 10000);
    return () => clearInterval(interval);
  }, [messagesFetched]);

  //fecthes array of messages when the page loads
  React.useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="Home">
      <Card>
        <Card.Body>
          <Card.Title>Home Page</Card.Title>
          <Card.Text style={{ color: "red" }}>{error}</Card.Text>
          {user.isAdmin && (  //only diplays if the user is an admin
            <Form>
              <Form.Group>
                <Form.Label>Enter Message to display on homepage</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="message"
                  value={message}
                />
                <Button type="submit" onClick={(e) => addMessage(e, message)}>
                  Add Message
                </Button>
              </Form.Group>
            </Form>
          )}
          <br />
          <div>
            {/* maps over each message in fetched array displaying the messsage field and a delete icon if the user is an admin */}
            {messagesFetched &&
              messagesFetched.map((message) => (
                <div className="messageItem" key={message._id}>
                  <p>
                    {message.message}
                    {user.isAdmin && (
                      <span
                        className="material-symbols-outlined"
                        onClick={(e) => deleteMessage(e, message._id)}
                      >
                        delete
                      </span>
                    )}
                  </p>
                </div>
              ))}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
