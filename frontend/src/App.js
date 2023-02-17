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
import RefereePagesContents from "./pages/RefereePagesContents";
import CheckInDesk from "./pages/referee pages/CheckInDesk";
import RingSide from "./pages/referee pages/RingSide";
import MatchNoScreen from "./pages/referee pages/MatchNoScreen";
import { WeighIn } from "./pages/referee pages/WeighIn";
import { Profile } from "./pages/Profile";

const App = () => {
    const { user } = useAuthContext();
    let loggedIn = false;
    let adminCheck = false;

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
                            path="/profile"
                            element={
                                loggedIn ? <Profile /> : <Navigate to="/login" />
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
                        <Route
                            path="/refereeContents"
                            element={
                                adminCheck ? (
                                    <RefereePagesContents />
                                ) : (
                                    <Navigate to="/" />
                                )
                            }
                        />
                        <Route
                            path="/checkIn"
                            element={
                                adminCheck ? (
                                    <CheckInDesk />
                                ) : (
                                    <Navigate to="/" />
                                )
                            }
                        />
                        <Route
                            path="/ringSide"
                            element={
                                adminCheck ? <RingSide /> : <Navigate to="/" />
                            }
                        />
                        <Route
                            path="/MatchNo"
                            element={
                                adminCheck ? (
                                    <MatchNoScreen />
                                ) : (
                                    <Navigate to="/" />
                                )
                            }
                        />
                        <Route
                            path="/weighIn"
                            element={
                                adminCheck ? (
                                    <WeighIn />
                                ) : (
                                    <Navigate to="/" />
                                )
                            }
                        />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
