import { Routes, Route } from "react-router-dom";

import AccueilCustomer from "../components/Home/customerHome/accueilCustomer/AccueilCustomer";
import FormProfilCustomer from "../components/Home/customerHome/profil/formProfilCustomer/FormProfilCustomer";
import ShowCustomerCv from "../components/Home/customerHome/profil/profilCustomer/components/showCvCustomer";
import ProfilCustomer from "../components/Home/customerHome/profil/profilCustomer/ProfilCustomer";
import FormUpdateProfilCustomer from "../components/Home/customerHome/profil/updateCustomerProfil/FormUpdateProfilCustomer";
import PageProfilCustomer from "../components/Home/customerHome/profil/pageProfilCustomer/PageProfilCustomer";

const UserRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/AccueilCustomer/:id" element={<AccueilCustomer />} />
        <Route
          path="/checkProfilCustomerValide/:id"
          element={<checkProfilValide />}
        />
        <Route
          path="/FormProfilCustomer/:id"
          element={<FormProfilCustomer />}
        />
        <Route path="/showCustomerCv/:id" element={<ShowCustomerCv />} />
        <Route path="/ProfilCustomer/:id" element={<ProfilCustomer />} />
        <Route
          path="/UpdateCustomerProfil/:id"
          element={<FormUpdateProfilCustomer />}
        />
        <Route
          path="/PageProfilCustomer/:id"
          element={<PageProfilCustomer />}
        />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
