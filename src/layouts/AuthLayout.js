import { useEffect } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import { getRoutes } from "../config/getRoutes";
import { routes } from "../routes";
import { ToastContainer } from "react-toastify";

export default function AuthLayout({ setAuthenticated }) {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <>
      <ToastContainer />
      <div className="w-100 h-100 my-login-page">
        <Routes>
          {getRoutes(routes, "/auth")}
          <Route path="*" element={<Navigate to={"/auth/login"} />} />{" "}
        </Routes>
      </div>
    </>
  );
}
