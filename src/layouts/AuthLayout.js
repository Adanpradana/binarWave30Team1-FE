import { useEffect } from "react";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";
import { getRoutes } from "../config/getRoutes";
import { routes } from "../routes";
import Login from "../pages/auth/Login";
export default function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);

  return (
    <div className="w-100 h-100">
      <Routes>
        {getRoutes(routes, "/auth")}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Navigate to={"/auth/login"} />} />{" "}
      </Routes>
    </div>
  );
}
