import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Button } from "react-bootstrap";

const Navbar = () => {
    const {user} = useAuthContext();
    const { logout } = useLogout()

    return (
        <header>
            <div className="containerNav">
                <div className="logoNavItem">
                    <img src="./logo.svg" alt="logo" />
                </div>
                <Link to="/">
                    <div className="navitem">
                        <h2>Home</h2>
                    </div>
                </Link>
                <Link to="/nextMatches">
                    <div className="navitem">
                        <h2>Next Matches</h2>
                    </div>
                </Link>
                {!user && (
                    <>
                        <Link to="/login">
                            <div className="navitem">
                                <h2>Login</h2>
                            </div>
                        </Link>
                        <Link to="/signup">
                            <div className="navitem">
                                <h2>Signup</h2>
                            </div>
                        </Link>
                    </>
                )}
                {user && (
                    <>
                        <Button onClick={logout}>
                            Logout
                        </Button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
