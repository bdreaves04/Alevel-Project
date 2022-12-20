import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

//pages and components
import Home from "./pages/Home";
import Login from "./pages/Login";
import { PageNavbar } from "./components/PageNavbar";
import NextMatches from "./pages/NextMatches";
import Signup from "./pages/Signup";
import Admin from "./pages/Admin";

const App = () => {
    const { user } = useAuthContext();
    let loggedIn = false;
    let adminCheck = false;
    if (user) {
        console.log(user.isAdmin);
    }

    if (user) {
        loggedIn = true;
    }
    if (user && user.isAdmin) {
        adminCheck = true;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <PageNavbar />
                <div className="pages">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                loggedIn ? <Home /> : <Navigate to="/login" />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                !loggedIn ? <Login /> : <Navigate to="/" />
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                !loggedIn ? <Signup /> : <Navigate to="/" />
                            }
                        />
                        <Route path="/nextMatches" element={<NextMatches />} />
                        <Route
                            path="/admin"
                            element={
                                adminCheck ? <Admin /> : <Navigate to="/" />
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
