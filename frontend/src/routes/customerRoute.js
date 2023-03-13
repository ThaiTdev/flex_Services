import { Routes, Route } from "react-router-dom";

import AccueilCustomer from "../components/Home/customerHome/accueilCustomer/AccueilCustomer";
import FormProfilCustomer from "../components/Home/customerHome/formProfilCustomer/FormProfilCustomer";
import ProfilCustomer from "../components/Home/customerHome/profilCustomer/ProfilCustomer";

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
        <Route path="/ProfilCustomer/:id" element={<ProfilCustomer />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
