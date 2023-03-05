import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useChangePassword } from "../../hooks/useChangePassword";

const ChangePassword = () => {
  const { changePassword, isLoading, error } = useChangePassword();
  const [username, setUsername] = React.useState("");
  const [passwordOld, setOldPassword] = React.useState("");
  const [passwordNew, setNewPassword] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await changePassword(username, passwordOld, passwordNew);
  };

  return (
    <Card className="changeCard overflow-auto">
      <Card.Body>
        <Card.Title>Change Password</Card.Title>
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
            <Form.Label>Old Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Enter Passsword"
              value={passwordOld}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter Passsword"
              value={passwordNew}
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
  );
};

export default ChangePassword;
