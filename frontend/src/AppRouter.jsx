import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ClientInfo from "./components/forms/ClientInfo";
import PasswordPrompt from "./components/Login";
import Admin from './pages/Admin';

const AppRouter = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [adminAccess, setAdminAccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasAccess(true);
    }
    // Supposons que 'admin' est stocké sous forme de chaîne "true" ou "false"
    const admin = localStorage.getItem("admin") === 'true';  // Convertit la chaîne en booléen
    if (admin) {
      setAdminAccess(true);
    }
  }, []);

  return (
    <Router>
      {!hasAccess ? (
        <PasswordPrompt />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client-info" element={<ClientInfo />} />
          {adminAccess && <Route path="/admin" element={<Admin />} />}  {/* Route Admin accessible seulement si adminAccess est true */}
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirection vers Home pour les chemins non trouvés */}
        </Routes>
      )}
    </Router>
  );
};

export default AppRouter;

