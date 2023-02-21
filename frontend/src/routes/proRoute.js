import { Routes, Route } from "react-router-dom";

import ProfilPro from "../components/Home/proHome/profilPro/ProfilPro";
import FormProfilPro from "../components/Home/proHome/formProfilPro/FormProfilPro";
import AccueilPro from "../components/Home/proHome/accueilPro/AccueilPro";

const ProRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/AccueilPro/:id" element={<AccueilPro />} />
        <Route path="/checkProfilValide/:id" element={<checkProfilValide />} />
        <Route path="/FormProfilPro/:id" element={<FormProfilPro />} />
        <Route path="/ProfilPro/:id" element={<ProfilPro />} />
      </Route>
    </Routes>
  );
};

export default ProRoutes;
