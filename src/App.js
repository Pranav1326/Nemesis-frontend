import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./Auth";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const { auth } = useContext(AuthContext);
  useEffect(() => {
    if (auth) setloggedIn(auth);
  }, [auth]);
  
  return (
    <div className="main">
      <NavbarComponent />
      <Routes>
        <Route
          path="*"
          element={loggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/home"
          element={loggedIn ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/register"
          element={loggedIn ? <Register /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
}

export default App;
