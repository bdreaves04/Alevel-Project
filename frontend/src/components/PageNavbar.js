import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

import { Navbar, Nav } from "react-bootstrap";

const styles = {
  color: "#f5f5f5",
  textDecoration: "none",
};

export const PageNavbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      expand="lg"
      variant="dark"
      className="d-flex"
    >
      <Navbar.Brand>
        <Nav.Link eventKey={2} as={Link} to="/">
          <img
            src="./logo.svg"
            alt="logo"
            width="57vh"
            className="d-inline-block align-top"
          />
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav-md"
        style={{ marginRight: "0.5rem" }}
      />
      <Navbar.Collapse id="navCollapse">
        {" "}
        <Navbar.Brand style={{ marginRight: "2rem" }}>
          <Nav.Link eventKey={2} as={Link} to="/" style={styles}>
            <h2>Home</h2>
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Brand style={{ marginRight: "2rem" }}>
          <Nav.Link as={Link} eventKey={2} to="/nextMatches" style={styles}>
            <h2>Next Matches</h2>
          </Nav.Link>
        </Navbar.Brand>
        {!user && (
          <>
            <Navbar.Brand className="ms-auto" style={{ marginRight: "2rem" }}>
              <Nav.Link as={Link} eventKey={2} to="/login" style={styles}>
                <h2>Login</h2>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <Nav.Link as={Link} eventKey={2} to="/signup" style={styles}>
                <h2>Signup</h2>
              </Nav.Link>
            </Navbar.Brand>
          </>
        )}
        {user && user.isAdmin && (
          <>
            <Navbar.Brand style={{ marginRight: "2rem" }}>
              <Nav.Link as={Link} eventKey={2} to="/admin" style={styles}>
                <h2>Admin</h2>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand style={{ marginRight: "2rem" }}>
              <Nav.Link
                as={Link}
                eventKey={2}
                to="/refereeContents"
                style={styles}
              >
                <h2>Referee Pages</h2>
              </Nav.Link>
            </Navbar.Brand>
          </>
        )}
        {user && (
          <>
            <Navbar.Brand className="ms-auto">
              <Nav.Link as={Link} eventKey={2} to="/profile" style={styles}>
                <h2>Profile</h2>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Brand>
              <button
                type="button"
                className="btn btn-outline-light btn-md"
                onClick={logout}
              >
                Logout
              </button>
            </Navbar.Brand>
          </>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
