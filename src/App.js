import { Routes, Route, Navigate } from "react-router-dom";

import LandingpageLayout from "./layouts/LandingpageLayout";
import UsersLayout from "./layouts/UsersLayout";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<LandingpageLayout />} />
      <Route path="/users/" element={<UsersLayout />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
export default App;
