import { Routes, Route } from "react-router-dom";

import ProfilPro from "../components/Home/proHome/profilPro/ProfilPro";
import FormProfilPro from "../components/Home/proHome/formProfilPro/FormProfilPro";
import AccueilPro from "../components/Home/proHome/accueilPro/AccueilPro";
import FormUpdateProfilPro from "../components/Home/proHome/updateProProfil/FormUpdateProfilPro";
import ParameterPro from "../components/Home/proHome/parameterPro/ParameterPro";
import PageProfilPro from "../components/Home/proHome/pageProfilPro/PageProfilPro";

const ProRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/AccueilPro/:id" element={<AccueilPro />} />
        <Route path="/checkProfilValide/:id" element={<checkProfilValide />} />
        <Route path="/FormProfilPro/:id" element={<FormProfilPro />} />
        <Route path="/ProfilPro/:id" element={<ProfilPro />} />
        <Route path="/UpdateProProfil/:id" element={<FormUpdateProfilPro />} />
        <Route path="/ParameterPro/:id" element={<ParameterPro />} />
        <Route path="/PageProfilPro/:id" element={<PageProfilPro />} />
      </Route>
    </Routes>
  );
};

export default ProRoutes;
