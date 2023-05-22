import { Routes, Route, Navigate } from "react-router-dom";

import LandingpageLayout from "./layouts/LandingpageLayout";
import UsersLayout from "./layouts/UsersLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import AuthLayout from "./layouts/AuthLayout";
import { useEffect, useState } from "react";
import TokenService from "./utils/services/token";
import api from "./utils/services/api";

function App() {
  const token = TokenService.getToken("access_token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);
  api.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        // Clear token and redirect to login page
        TokenService.clearToken();
        setIsAuthenticated(false);
        window.location.href = "/auth/login";
      }
      return Promise.reject(error);
    }
  );
  return (
    <Routes>
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <Navigate to={"/users/dashboard/"} />
          ) : (
            <LandingpageLayout />
          )
        }
      />
      <Route
        path="/auth/*"
        element={
          isAuthenticated ? (
            <Navigate to={"/users/dashboard/"} />
          ) : (
            <AuthLayout />
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
