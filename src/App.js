import { Routes, Route } from "react-router-dom";

import LandingpageLayout from "./layouts/LandingpageLayout";
import UsersLayout from "./layouts/UsersLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<LandingpageLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="/users/*" element={<UsersLayout />} />
    </Routes>
  );
}
export default App;
