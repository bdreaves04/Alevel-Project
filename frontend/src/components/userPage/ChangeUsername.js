import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useChangeUsername } from "../../hooks/useChangeUsername";

const ChangeUsername = () => {
  // stores function and state in  a hook
  const { changeUsername, isLoading, error } = useChangeUsername();
  const [usernameOld, setUsernameOld] = React.useState("");
  const [usernameNew, setUsernameNew] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await changeUsername(usernameOld, usernameNew);
  };

  return (
    <>
      {/*allows information to have a scroll bar if too big for card */}
      <Card className="overflow-auto changeCard">
        <Card.Body>
          <Card.Title>Change Username</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Old Username</Form.Label>
              <Form.Control
                type="username"
                onChange={(e) => setUsernameOld(e.target.value)}
                placeholder="Enter Username"
                value={usernameOld}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>New Username</Form.Label>
              <Form.Control
                type="username"
                onChange={(e) => setUsernameNew(e.target.value)}
                placeholder="Enter Passsword"
                value={usernameNew}
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              {isLoading ? "loading" : "Submit"}
            </Button>
            {error && <div className="error">{error}</div>}
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default ChangeUsername;
