import { Routes, Route } from "react-router-dom";

import AccueilCustomer from "../components/Home/customerHome/accueilCustomer/AccueilCustomer";
import FormProfilCustomer from "../components/Home/customerHome/formProfilCustomer/FormProfilCustomer";
import ShowCustomerCv from "../components/Home/customerHome/profilCustomer/components/showCvCustomer";
import ProfilCustomer from "../components/Home/customerHome/profilCustomer/ProfilCustomer";
import FormUpdateProfilCustomer from "../components/Home/customerHome/updateCustomerProfil/FormUpdateProfilCustomer";

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
      </Route>
    </Routes>
  );
};

export default UserRoutes;
