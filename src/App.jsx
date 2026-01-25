import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import ContractService from "./pages/ContractService";

import { UserContext } from "./context/UserContext";

function App() {
  const { token } = useContext(UserContext);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/contract/:id" element={<ContractService />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
