import { Routes, Route } from "react-router-dom";

import ProHome from "../components/Home/proHome/ProHome";

const ProRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/ProHome" element={<ProHome />} />
      </Route>
    </Routes>
  );
};

export default ProRoutes;
