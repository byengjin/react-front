import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CustomerList from "./pages/CustomerList";
import CustomerRead from "./pages/CustomerRead";
import CustomerAddPage from "./pages/CustomerAddPage";
import LoginPage from "./pages/login/LoginPage";
import "./styles/variables.css";
import "./styles/global.css";

function App() {
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    window.location.reload();
  };

  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main">
          <Navbar onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/customers/add" element={<CustomerAddPage />} />
            <Route path="/customers/:id" element={<CustomerRead />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
