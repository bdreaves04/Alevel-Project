import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

import Navbar from "react-bootstrap/Navbar";

const styles = {
    color: "#f5f5f5",
    textDecoration: "none",
};

export const PageNavbar = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    return (
        <Navbar bg="dark" expand="lg" variant="dark" className="d-flex">
            <Navbar.Brand>
                <Link to="/">
                    <img
                        src="./logo.svg"
                        alt="logo"
                        width="57vh"
                        className="d-inline-block align-top"
                    />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-md" />
            <Navbar.Collapse>
                <Navbar.Brand style={{ marginRight: "2rem" }}>
                    <Link to="/" style={styles}>
                        <h2>Home</h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand style={{ marginRight: "2rem" }}>
                    <Link to="/nextMatches" style={styles}>
                        <h2>Next Matches</h2>
                    </Link>
                </Navbar.Brand>
                {!user && (
                    <>
                        <Navbar.Brand
                            className="ms-auto"
                            style={{ marginRight: "2rem" }}
                        >
                            <Link to="/login" style={styles}>
                                <h2>Login</h2>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <Link to="/signup" style={styles}>
                                <h2>Signup</h2>
                            </Link>
                        </Navbar.Brand>
                    </>
                )}
                {user && user.isAdmin && (
                    <>
                        <Navbar.Brand style={{ marginRight: "2rem" }}>
                            <Link to="/admin" style={styles}>
                                <h2>Admin</h2>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Brand style={{ marginRight: "2rem" }}>
                            <Link to="/refereeContents" style={styles}>
                                <h2>Referee Pages</h2>
                            </Link>
                        </Navbar.Brand>
                    </>
                )}
                {user && (
                    <>
                        <Navbar.Brand className="ms-auto">
                        <Link to="/profile" style={styles}>
                        <h2>Profile</h2>
                    </Link>
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
