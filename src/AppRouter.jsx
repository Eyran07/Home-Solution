import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientInfo from "./components/forms/ClientInfo";
import PasswordPrompt from "./components/PasswordPrompt";

const AppRouter = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthenticated");
    if (isAuth) {
      setHasAccess(true);
    }
  }, []);

  const handlePasswordSubmit = (password) => {
    const correctPassword = "340";
    if (password === correctPassword) {
      localStorage.setItem("isAuthenticated", "true");
      setHasAccess(true);
    } else {
      alert("Mot de passe incorrect!");
      localStorage.removeItem("isAuthenticated")
    }
  };

  return (
    <Router>
      {!hasAccess ? (
        <PasswordPrompt onPasswordSubmit={handlePasswordSubmit} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client-info" element={<ClientInfo />} />
          {/* Vous pouvez ajouter d'autres routes protégées ici */}
        </Routes>
      )}
    </Router>
  );
};

export default AppRouter;
