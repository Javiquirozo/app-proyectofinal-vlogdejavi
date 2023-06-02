import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import CursosDeCocina from "./pages/CursosDeCocina";

const App = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <Routes>
        <Route 
          path="" 
          element={<Home />}
        />
        <Route 
          path="/home" 
          element={<Home />}
        />
        <Route 
          path="/cursosdecocina" 
          element={<CursosDeCocina />} 
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route 
        path="/cart" 
          element={<Cart />} 
        />
      </Routes>
    </>
  );
};

export default App;

