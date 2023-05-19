import { Routes, Route } from "react-router-dom";

import ProfilPro from "../components/Home/proHome/profil/profilPro/ProfilPro";
import FormProfilPro from "../components/Home/proHome/profil/formProfilPro/FormProfilPro";
import AccueilPro from "../components/Home/proHome/accueilPro/AccueilPro";
import FormUpdateProfilPro from "../components/Home/proHome/profil/updateProProfil/FormUpdateProfilPro";
import PageProfilPro from "../components/Home/proHome/profil/pageProfilPro/PageProfilPro";
import PageGestionPro from "../components/Home/proHome/gestion/pageGestionPro/pageGestionPro";
import AddNewRestaurant from "../components/Home/proHome/gestion/restaurant/addNewRestaurant/FormNewRestaurant";
import ShowOneRestaurant from "../components/Home/proHome/gestion/restaurant/showOneRestaurant/ShowOneRestaurant";
import UpdateRestaurant from "../components/Home/proHome/gestion/restaurant/updateRestaurant/FormUpdateRestaurant";

const ProRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/AccueilPro/:id" element={<AccueilPro />} />
        <Route path="/checkProfilValide/:id" element={<checkProfilValide />} />
        <Route path="/FormProfilPro/:id" element={<FormProfilPro />} />
        <Route path="/ProfilPro/:id" element={<ProfilPro />} />
        <Route path="/UpdateProProfil/:id" element={<FormUpdateProfilPro />} />
        <Route path="/PageProfilPro/:id" element={<PageProfilPro />} />
        <Route path="/PageGestionPro/:id" element={<PageGestionPro />} />
        <Route path="/AddNewRestaurant/:id" element={<AddNewRestaurant />} />
        <Route
          path="/ShowOneRestaurant/:id/:idResto"
          element={<ShowOneRestaurant />}
        />
      </Route>
      <Route
        path="/UpdateRestaurant/:id/:idResto"
        element={<UpdateRestaurant />}
      ></Route>
    </Routes>
  );
};

export default ProRoutes;
