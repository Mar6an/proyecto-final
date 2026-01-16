
import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
/*
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import CreateService from "./pages/CreateService";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";*/

import { UserContext } from "./context/UserContext";

function App() {
  
  const { token } = useContext(UserContext);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
{/* 
        <Route
          path="/login"
          element={token ? <Navigate to="/profile" /> : <Login />}
        />

        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <Register />}
        />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/service/:id" element={<Service />} />

        <Route
          path="/create-service"
          element={token ? <CreateService /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate to="/login" />}
        />

        <Route path="*" element={<NotFound />} />
  */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
