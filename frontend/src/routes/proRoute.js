import { Routes, Route } from "react-router-dom";

import ProfilPro from "../components/Home/proHome/profilPro/ProfilPro";
import FormProfilPro from "../components/Home/proHome/formProfilPro/FormProfilPro";

const ProRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/FormProfilPro" element={<FormProfilPro />} />
        <Route path="/ProfilPro" element={<ProfilPro />} />
      </Route>
    </Routes>
  );
};

export default ProRoutes;
