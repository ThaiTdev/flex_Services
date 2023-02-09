import { Routes, Route } from "react-router-dom";

import CustomerHome from "../components/Home/customerHome/CustomerHome";

const UserRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/CustomerHome" element={<CustomerHome />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;
