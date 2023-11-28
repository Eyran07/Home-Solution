import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ClientInfo from "./components/forms/ClientInfo";
import PasswordPrompt from "./components/Login";

const AppRouter = () => {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasAccess(true);
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
          {/* Vous pouvez ajouter d'autres routes protégées ici */}
        </Routes>
      )}
    </Router>
  );
};

export default AppRouter;
