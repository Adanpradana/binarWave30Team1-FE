import { Routes, Route, Navigate } from "react-router-dom";

import LandingpageLayout from "./layouts/LandingpageLayout";
import UsersLayout from "./layouts/UsersLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layouts/AuthLayout";
import { useState } from "react";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);
  return (
    <Routes>
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <Navigate to={"/users/dashboard"} />
          ) : (
            <LandingpageLayout />
          )
        }
      />
      <Route
        path="/auth/*"
        element={
          isAuthenticated ? (
            <Navigate to={"/users/dashboard"} />
          ) : (
            <AuthLayout setAuthenticated />
          )
        }
      />
      <Route
        path="/users/*"
        element={
          isAuthenticated ? <UsersLayout /> : <Navigate to={"/auth/login"} />
        }
      />
    </Routes>
  );
}
export default App;
