import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

import Navbar from "react-bootstrap/Navbar";

const NavbarA = () => {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    return (
        <Navbar bg="dark" expand="md" variant="dark" className="d-flex">
            <Navbar.Brand>
                
                <img
                    src="./logo.svg"
                    alt="logo"
                    width="57vh"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav-md" />
            <Navbar.Collapse>
                <Navbar.Brand>
                    <Link
                        to="/"
                        style={{
                            color: "#f5f5f5",
                            textDecoration: "none",
                        }}
                    >
                        <h2>Home</h2>
                    </Link>
                </Navbar.Brand>
                <Navbar.Brand>
                    <Link
                        to="/nextMatches"
                        style={{
                            color: "#f5f5f5",
                            textDecoration: "none",
                        }}
                    >
                        <h2>Next Matches</h2>
                    </Link>
                </Navbar.Brand>
                {!user && (
                    <>
                        <Navbar.Brand className="justify-content-end">
                            <Link
                                to="/login"
                                style={{
                                    color: "#f5f5f5",
                                    textDecoration: "none",
                                }}
                            >
                                <h2>Login</h2>
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Brand className="justify-content-end">
                            <Link
                                to="/signup"
                                style={{
                                    color: "#f5f5f5",
                                    textDecoration: "none",
                                }}
                            >
                                <h2>Signup</h2>
                            </Link>
                        </Navbar.Brand>
                    </>
                )}
                {user && (
                    <Navbar.Brand className="justify-content-end">
                        <button
                            type="button"
                            class="btn btn-outline-light btn-md"
                            onClick={logout}
                        >
                            Logout
                        </button>
                    </Navbar.Brand>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarA;
