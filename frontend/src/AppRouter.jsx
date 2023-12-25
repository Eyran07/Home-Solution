import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {HomeContext} from "./context/HomeContext";
import Home from "./pages/Home";
import PasswordPrompt from "./components/Login";
import Admin from "./pages/Admin";
import PartOne from "./pages/PartOne";
import PartTwo from "./pages/PartTwo";
import PartThree from "./pages/PartThree"

const AppRouter = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [adminAccess, setAdminAccess] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasAccess(true);
    }
    // Supposons que 'admin' est stocké sous forme de chaîne "true" ou "false"
    const admin = localStorage.getItem("admin") === "true"; // Convertit la chaîne en booléen
    if (admin) {
      setAdminAccess(true);
    }
  }, []);

  //Context]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
  const [formData, setFormData] = useState({
    sexe: '',
    nom: '',
    prenom: '',
    adresse: '',
    ville: '',
    departement: '',
    region: '',
    email: '',
    tel1: '',
    tel2: '',
    occupationType: '',
    numberOfOccupants: 1,
    constructionYear: 0,
    surfaceAuSol: 0,
    surfaceHabitable: 0,
    numberOfRooms: 1,
    housePosition:'',
    houseShape: '',
    numberOfLevels: '',
    installationType: '',
    protectionType: '',
    ampouleType: '',
    energieType:'',
    sanitaireType: '',
    stockageType: '',
    useType: '',
    sourceType:'',
    chauffageType:'',
    chauffagesType:'',
  });

  //Context]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


  return (
      <HomeContext.Provider value={[formData, setFormData]}>
        <Router>
          {!hasAccess ? (
            <PasswordPrompt />
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/client-info" element={<PartOne />} />
              <Route path="/client-audit" element={<PartTwo />} />
              <Route path="/client-energetique" element={<PartThree />} />
              {adminAccess && <Route path="/admin" element={<Admin />} />}{" "}
              {/* Route Admin accessible seulement si adminAccess est true */}
              <Route path="*" element={<Navigate to="/" />} />{" "}
              {/* Redirection vers Home pour les chemins non trouvés */}
            </Routes>
          )}
        </Router>
      </HomeContext.Provider>
  );
};

export default AppRouter;