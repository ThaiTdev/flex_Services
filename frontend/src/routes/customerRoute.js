import { Routes, Route } from "react-router-dom";

import ProfilCustomer from "../components/Home/customerHome/profilCustomer/ProfilCustomer";
import AccueilCustomer from "../components/Home/customerHome/accueilCustomer/AccueilCustomer";

const UserRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/AccueilCustomer/:id" element={<AccueilCustomer />} />
        <Route path="/ProfilCustomer" element={<ProfilCustomer />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
