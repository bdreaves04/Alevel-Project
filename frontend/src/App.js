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

function App() {
    const { user } = useAuthContext();

    return (
        <div className="App">
            <BrowserRouter>
                <PageNavbar />
                <div className="pages">
                    <Routes>
                        <Route
                            path="/"
                            element={user ? <Home /> : <Navigate to="/login" />}
                        />
                        <Route
                            path="/login"
                            element={!user ? <Login /> : <Navigate to="/" />}
                        />
                        <Route
                            path="/signup"
                            element={!user ? <Signup /> : <Navigate to="/" />}
                        />
                        <Route path="/nextMatches" element={<NextMatches />} />
                        <Route path="/admin" element = {user ? <Admin /> : <Navigate to="/" />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
