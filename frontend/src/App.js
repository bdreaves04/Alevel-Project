import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//pages and components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import NextMatches from "./pages/NextMatches";
import Signup from "./pages/Signup";

function App() {
  return (  
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route 
                path='/'
                element = {<Home />}
              />
              <Route 
                path='/login'
                element = {<Login />}
              />
              <Route 
                path='/signup'
                element = {<Signup />}
              />
              <Route
                path='/nextMatches'
                element ={<NextMatches />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;