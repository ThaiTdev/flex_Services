import { Routes, Route } from "react-router-dom";

import ProfilCustomer from "../components/Home/customerHome/profilCustomer/ProfilCustomer";

const UserRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/ProfilCustomer" element={<ProfilCustomer />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
